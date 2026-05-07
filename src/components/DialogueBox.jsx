import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function DialogueBox({ text, choices, onChoice, disabled, isCinematic }) {
  const containerStyle = isCinematic ? {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', 
    width: '80%', textAlign: 'center', pointerEvents: 'auto'
  } : {
    position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', 
    width: '90%', maxWidth: '800px', minHeight: '160px', padding: '24px', pointerEvents: 'auto'
  };

  return (
    <div style={{
      ...containerStyle, display: 'flex', flexDirection: 'column', justifyContent: 'center',
      opacity: disabled ? 0.6 : 1, transition: 'all 0.6s ease'
    }} className={isCinematic ? "" : "glass"}>
      <div style={{ marginBottom: isCinematic ? '40px' : '20px' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={text.join('')}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            {text.map((line, i) => (
              <p key={i} style={{
                margin: '0 0 15px 0', lineHeight: '1.8', 
                fontSize: isCinematic ? '1.5rem' : '1.1rem',
                fontWeight: isCinematic ? '600' : '400',
                textShadow: isCinematic ? '0 2px 10px rgba(0,0,0,0.8)' : 'none'
              }}>
                {line}
              </p>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: isCinematic ? 'center' : 'flex-start' }}>
        {choices.map((choice, index) => (
          <motion.button
            key={index}
            disabled={disabled}
            whileHover={!disabled ? { scale: 1.05, backgroundColor: 'rgba(0, 242, 255, 0.2)' } : {}}
            onClick={() => onChoice(choice)}
            style={{
              padding: '12px 24px', background: isCinematic ? 'rgba(0,0,0,0.4)' : 'rgba(255, 255, 255, 0.05)', 
              border: `1px solid var(--primary)`, color: 'var(--primary)', 
              borderRadius: '6px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold',
              backdropFilter: 'blur(5px)'
            }}
          >
            {choice.text}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
