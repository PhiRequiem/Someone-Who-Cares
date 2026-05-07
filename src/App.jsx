import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStory } from './hooks/useStory';
import DialogueBox from './components/DialogueBox';
import VisibilityMeter from './components/VisibilityMeter';
import OSINTTerminal from './components/OSINTTerminal';
import EvidenceJournal from './components/EvidenceJournal';

function App() {
  const { text, choices, action, terminalContext, bg, type, makeChoice } = useStory();
  const [showTerminal, setShowTerminal] = useState(false);
  const [activeTerminalContext, setActiveTerminalContext] = useState(null);
  const [visibility, setVisibility] = useState(15);
  const [evidence, setEvidence] = useState([]);
  const [currentBg, setCurrentBg] = useState('assets/bg_barrio_dawn.png');

  const isCinematic = type === 'cinematic';

  useEffect(() => {
    if (bg) {
      setCurrentBg(`assets/${bg}`);
    }
  }, [bg]);

  useEffect(() => {
    if (action === 'open_terminal') {
      setActiveTerminalContext(terminalContext ?? null);
      setTimeout(() => setShowTerminal(true), 1500);
    }
    if (action === 'increase_visibility') {
      setVisibility(v => Math.min(v + 25, 100));
    }
  }, [action]);

  const handleChoice = (choice) => {
    if (showTerminal) return;
    makeChoice(choice.next);
  };

  const bgFilter = showTerminal ? 'blur(4px) brightness(0.5)' : 'none';

  return (
    <div className="game-container scanline-effect" style={{ backgroundColor: '#0a0a0c' }}>
      <AnimatePresence mode="sync">
        <motion.div
          key={currentBg}
          className="bg-layer"
          style={{
            backgroundImage: `url(${currentBg})`,
            filter: bgFilter,
            transition: 'filter 0.5s ease'
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
        
        <DialogueBox 
          text={text} 
          choices={choices} 
          onChoice={handleChoice} 
          disabled={showTerminal}
          isCinematic={isCinematic}
        />

        {showTerminal && (
          <>
            <div style={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              background: 'rgba(0,0,0,0.6)', zIndex: 90
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
      </div>
    </div>
  );
}

export default App;
