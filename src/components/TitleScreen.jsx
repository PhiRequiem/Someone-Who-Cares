import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { playClick } from '../audio/playClick';

export default function TitleScreen({ onStart }) {
  useEffect(() => {
    const handleKey = (e) => {
      if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) {
        e.preventDefault();
        playClick();
        onStart();
      }
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onStart]);
  return (
    <div style={{
      width: '100vw', height: '100vh',
      background: '#0a0a0c',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      position: 'relative', overflow: 'hidden',
      fontFamily: 'Inter, sans-serif',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 60%, rgba(0,242,255,0.05) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(0,242,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,242,255,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        style={{ textAlign: 'center', zIndex: 1, padding: '0 24px' }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.6, duration: 1 }}
          style={{
            color: 'var(--primary)', fontSize: '0.7rem',
            letterSpacing: '0.45em', marginBottom: '20px',
            fontWeight: '600', textTransform: 'uppercase',
          }}
        >
          Capítulo 1 · Demo
        </motion.p>

        <motion.h1
          style={{
            fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
            fontWeight: '800',
            color: 'white',
            margin: '0 0 6px 0',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          Someone Who Cares
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
            margin: '18px auto',
            width: '240px',
          }}
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 0.9, duration: 1 }}
          style={{
            color: 'var(--text)',
            fontSize: '0.95rem',
            margin: '0 0 56px 0',
            letterSpacing: '0.06em',
            fontStyle: 'italic',
          }}
        >
          Una investigación. Una familia. La verdad.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,242,255,0.12)' }}
          whileTap={{ scale: 0.97 }}
          onClick={() => { playClick(); onStart(); }}
          style={{
            padding: '14px 52px',
            background: 'transparent',
            border: '1px solid var(--primary)',
            color: 'var(--primary)',
            borderRadius: '6px',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: 'bold',
            letterSpacing: '0.2em',
            fontFamily: 'inherit',
          }}
        >
          INICIAR
        </motion.button>
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ delay: 2, duration: 1 }}
        href="https://tecnologiahumanista.ong.br/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute', bottom: '28px',
          color: 'rgba(255,255,255,0.5)',
          fontSize: '0.62rem', letterSpacing: '0.15em',
          textDecoration: 'none',
        }}
      >
        tecnologiahumanista.ong.br
      </motion.a>
    </div>
  );
}
