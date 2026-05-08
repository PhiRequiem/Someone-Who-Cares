import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStory } from './hooks/useStory';
import { useAmbientSound } from './hooks/useAmbientSound';
import { setAudioMuted } from './audio/audioContext';
import TitleScreen from './components/TitleScreen';
import DialogueBox from './components/DialogueBox';
import VisibilityMeter from './components/VisibilityMeter';
import OSINTTerminal from './components/OSINTTerminal';
import EvidenceJournal from './components/EvidenceJournal';
import SignalNotif from './components/SignalNotif';
import LocationBadge from './components/LocationBadge';
import MuteButton from './components/MuteButton';
import BrowserWindow from './components/BrowserWindow';
import QuizPanel from './components/QuizPanel';
import DemoSummary from './components/DemoSummary';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  const { text, choices, action, terminalContext, signalNotif, quiz, evidenceDrop, bg, type, autoAdvance, visibilityDelta, makeChoice, resetStory } = useStory();
  const [showTerminal, setShowTerminal] = useState(false);
  const [activeTerminalContext, setActiveTerminalContext] = useState(null);
  const [showBrowser, setShowBrowser] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);
  const [activeQuiz, setActiveQuiz] = useState(null);
  const [visibility, setVisibility] = useState(15);
  const [evidence, setEvidence] = useState([]);
  const [currentBg, setCurrentBg] = useState('assets/black.png');
  const [activeNotif, setActiveNotif] = useState(null);
  const [showSummary, setShowSummary] = useState(false);
  const [quizResults, setQuizResults] = useState({});

  useAmbientSound(currentBg, gameStarted);

  useEffect(() => { setAudioMuted(muted); }, [muted]);

  const isCinematic = type === 'cinematic';

  useEffect(() => {
    if (bg) setCurrentBg(`assets/${bg}`);
  }, [bg]);

  useEffect(() => {
    if (!autoAdvance) return;
    const timer = setTimeout(() => makeChoice(autoAdvance.next), autoAdvance.delay ?? 2000);
    return () => clearTimeout(timer);
  }, [autoAdvance, makeChoice]);

  useEffect(() => {
    if (action === 'open_terminal') {
      setActiveTerminalContext(terminalContext ?? null);
      setTimeout(() => setShowTerminal(true), 1500);
    }
    if (action === 'open_browser') {
      setTimeout(() => setShowBrowser(true), 600);
    }
    if (action === 'open_quiz') {
      setActiveQuiz(quiz);
      setTimeout(() => setShowQuiz(true), 700);
    }
    if (typeof visibilityDelta === 'number') {
      setVisibility(v => Math.min(Math.max(v + visibilityDelta, 0), 100));
    }
  }, [action, terminalContext, visibilityDelta]);

  useEffect(() => {
    if (signalNotif) setActiveNotif(signalNotif);
  }, [signalNotif]);

  useEffect(() => {
    if (evidenceDrop) {
      setEvidence(prev =>
        prev.some(e => e.id === evidenceDrop.id) ? prev : [...prev, evidenceDrop]
      );
    }
  }, [evidenceDrop]);

  const handleChoice = (choice) => {
    if (showTerminal || showBrowser || showQuiz) return;
    if (choice.showSummary) {
      setShowSummary(true);
      return;
    }
    if (choice.toTitle) {
      resetStory();
      setGameStarted(false);
      setVisibility(15);
      setEvidence([]);
      setShowTerminal(false);
      setShowBrowser(false);
      setShowQuiz(false);
      setActiveQuiz(null);
      setShowSummary(false);
      setActiveTerminalContext(null);
      setActiveNotif(null);
      setCurrentBg('assets/black.png');
      return;
    }
    makeChoice(choice.next);
  };

  if (!gameStarted) {
    return <TitleScreen onStart={() => setGameStarted(true)} />;
  }

  const bgFilter = (showTerminal || showBrowser || showQuiz) ? 'blur(4px) brightness(0.5)' : 'none';

  return (
    <div className="game-container scanline-effect" style={{ backgroundColor: '#0a0a0c' }}>
      <AnimatePresence mode="sync">
        <motion.div
          key={currentBg}
          className="bg-layer"
          style={{
            backgroundImage: `url(${currentBg})`,
            filter: bgFilter,
            transition: 'filter 0.5s ease',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {!isCinematic && (
        <div className="sprite-layer" style={{ filter: showTerminal ? 'brightness(0.5)' : 'none' }}>
          <img src="assets/andrea_neutral.png" alt="Andrea" />
        </div>
      )}

      <div className="ui-layer">
        {!isCinematic && <VisibilityMeter value={visibility} />}

        <LocationBadge bg={currentBg} hidden={isCinematic} />

        <SignalNotif
          notif={activeNotif}
          onDismiss={() => setActiveNotif(null)}
        />

        <DialogueBox
          text={text}
          choices={choices}
          onChoice={handleChoice}
          disabled={showTerminal || showBrowser || showQuiz}
          isCinematic={isCinematic}
          speaker={isCinematic ? null : 'ANDREA'}
        />

        {showQuiz && activeQuiz && (
          <>
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              background: 'rgba(0,0,0,0.65)', zIndex: 90,
            }} />
            <QuizPanel
              quiz={activeQuiz}
              onConfirm={(correct, delta) => {
                setVisibility(v => Math.min(Math.max(v + delta, 0), 100));
                if (activeQuiz?.id) {
                  setQuizResults(prev => ({ ...prev, [activeQuiz.id]: correct }));
                }
              }}
              onClose={() => setShowQuiz(false)}
            />
          </>
        )}

        {showBrowser && (
          <>
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              background: 'rgba(0,0,0,0.6)', zIndex: 90,
            }} onClick={(e) => e.stopPropagation()} />
            <BrowserWindow
              onClose={() => setShowBrowser(false)}
              onSuccess={(data) => setEvidence(prev => [...prev, data])}
            />
          </>
        )}

        {showTerminal && (
          <>
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              background: 'rgba(0,0,0,0.6)', zIndex: 90,
            }} onClick={(e) => e.stopPropagation()} />

            <OSINTTerminal
              context={activeTerminalContext}
              onClose={() => setShowTerminal(false)}
              onSuccess={(data) => {
                setEvidence(prev => [...prev, data]);
                setVisibility(v => Math.max(v - 5, 0));
              }}
            />
          </>
        )}

        {!isCinematic && <EvidenceJournal items={evidence} />}

        <MuteButton muted={muted} onToggle={() => setMuted(m => !m)} />
      </div>

      {showSummary && (
        <DemoSummary
          evidence={evidence}
          visibility={visibility}
          quizResults={quizResults}
          onRestart={() => {
            resetStory();
            setGameStarted(false);
            setVisibility(15);
            setEvidence([]);
            setShowTerminal(false);
            setShowBrowser(false);
            setShowQuiz(false);
            setActiveQuiz(null);
            setShowSummary(false);
            setQuizResults({});
            setActiveNotif(null);
            setCurrentBg('assets/black.png');
          }}
        />
      )}
    </div>
  );
}

export default App;
