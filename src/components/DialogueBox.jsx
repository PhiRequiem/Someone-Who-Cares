import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playClick } from '../audio/playClick';

const SPEAKER_COLORS = {
  andrea: '#00f2ff',
  sebas:  '#ffc947',
  mama:   '#c8a8e9',
};

const TEXT_STYLES = {
  'credit-main': {
    fontSize: '3rem', fontWeight: '800',
    letterSpacing: '0.04em', lineHeight: '1.1',
    margin: '0 0 10px 0',
  },
  'credit-sub': {
    fontSize: '0.85rem', fontWeight: '300',
    letterSpacing: '0.1em', opacity: 0.5,
    margin: '0 0 28px 0',
  },
  'credit-presents': {
    fontSize: '1.6rem', fontWeight: '400',
    letterSpacing: '0.18em',
    margin: '0 0 0 0',
  },
  'quote-main': {
    fontSize: '1.15rem', fontStyle: 'italic', fontWeight: '300',
    lineHeight: '1.9', opacity: 0.9,
    margin: '0 0 20px 0',
  },
  'quote-author': {
    fontSize: '0.78rem', fontWeight: '400',
    letterSpacing: '0.14em', opacity: 0.5,
    margin: '0',
  },
  'title-main': {
    fontSize: '3.8rem', fontWeight: '800',
    letterSpacing: '0.05em', lineHeight: '1.05',
    margin: '0',
  },
};

export default function DialogueBox({ text, choices = [], onChoice, disabled, isCinematic, speaker }) {
  // Stable ref so the keydown effect doesn't re-run on every render
  const onChoiceRef = useRef(onChoice);
  useEffect(() => { onChoiceRef.current = onChoice; });

  // Spacebar / Enter advances single-choice nodes
  useEffect(() => {
    if (disabled || choices.length !== 1) return;

    const handleKey = (e) => {
      if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) {
        e.preventDefault();
        playClick();
        onChoiceRef.current(choices[0]);
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [disabled, choices]);

  const containerStyle = isCinematic ? {
    position: 'absolute', top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%', textAlign: 'center', pointerEvents: 'auto',
  } : {
    position: 'absolute', bottom: '40px', left: '50%',
    transform: 'translateX(-50%)',
    width: '90%', maxWidth: '800px', minHeight: '160px',
    padding: '24px', pointerEvents: 'auto',
  };

  return (
    <div style={{
      ...containerStyle,
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      opacity: disabled ? 0.6 : 1, transition: 'opacity 0.6s ease',
    }} className={isCinematic ? '' : 'glass'}>

      {/* Speaker name tag — positioned just above the glass box */}
      {speaker && !isCinematic && (
        <div style={{
          position: 'absolute',
          top: '-29px',
          left: '-1px',
          padding: '4px 16px',
          background: 'rgba(10,10,14,0.92)',
          border: '1px solid rgba(0,242,255,0.28)',
          borderBottom: 'none',
          borderRadius: '6px 6px 0 0',
          fontSize: '0.67rem',
          fontWeight: '800',
          color: 'var(--primary)',
          letterSpacing: '0.16em',
        }}>
          {speaker}
        </div>
      )}

      <div style={{ marginBottom: isCinematic ? '40px' : '20px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={text.join('')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {text.map((line, i) => {
              const lineText = typeof line === 'string' ? line : line.text;
              const lineColor = typeof line === 'string' ? undefined : SPEAKER_COLORS[line.speaker];
              const customStyle = typeof line === 'string' ? null : TEXT_STYLES[line.style];
              return (
                <p key={i} style={{
                  margin: '0 0 15px 0', lineHeight: '1.8',
                  fontSize: isCinematic ? '1.5rem' : '1.1rem',
                  fontWeight: isCinematic ? '600' : '400',
                  textShadow: isCinematic ? '0 2px 10px rgba(0,0,0,0.8)' : 'none',
                  color: lineColor,
                  ...customStyle,
                }}>
                  {lineText}
                </p>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <div style={{
        display: 'flex', gap: '12px', flexWrap: 'wrap',
        justifyContent: isCinematic ? 'center' : 'flex-start',
      }}>
        {choices.map((choice, index) => (
          <motion.button
            key={index}
            disabled={disabled}
            whileHover={!disabled ? { scale: 1.05, backgroundColor: 'rgba(0,242,255,0.2)' } : {}}
            onClick={() => { playClick(); onChoice(choice); }}
            style={{
              padding: '12px 24px',
              background: isCinematic ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.05)',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
              backdropFilter: 'blur(5px)',
            }}
          >
            {choice.text}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
