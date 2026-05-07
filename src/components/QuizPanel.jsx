import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { playClick } from '../audio/playClick';

export default function QuizPanel({ quiz, onConfirm, onClose }) {
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState(false);

  const select = (i) => {
    if (answered) return;
    playClick();
    setSelected(i);
  };

  const confirm = () => {
    if (selected === null || answered) return;
    playClick();
    setAnswered(true);
    const opt = quiz.options[selected];
    onConfirm(opt.correct, opt.visibilityDelta);
  };

  const playerCorrect = answered && quiz.options[selected]?.correct;

  const getOptionStyle = (i) => {
    const opt = quiz.options[i];
    if (!answered) return {
      border: selected === i
        ? '2px solid #f59e0b'
        : '1px solid rgba(245,158,11,0.2)',
      background: selected === i
        ? 'rgba(245,158,11,0.08)'
        : 'rgba(255,255,255,0.02)',
    };
    if (i === selected && opt.correct)  return { border: '2px solid var(--success)', background: 'rgba(0,255,170,0.07)' };
    if (i === selected && !opt.correct) return { border: '2px solid var(--danger)',  background: 'rgba(255,0,85,0.07)' };
    if (opt.correct && !playerCorrect)  return { border: '1px dashed rgba(0,255,170,0.35)', background: 'transparent', opacity: 0.65 };
    return { border: '1px solid rgba(255,255,255,0.07)', background: 'transparent', opacity: 0.3 };
  };

  const selectedOpt = selected !== null ? quiz.options[selected] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '620px',
        zIndex: 100,
        padding: '26px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        boxShadow: '0 28px 65px rgba(0,0,0,0.75)',
        fontFamily: 'Inter, sans-serif',
      }}
      className="glass"
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
        <AlertTriangle size={15} color="#f59e0b" />
        <span style={{
          fontSize: '0.62rem', fontWeight: '800',
          color: '#f59e0b', letterSpacing: '0.18em',
        }}>
          EVALUACIÓN DE CAMPO · ETI SAFETY FIRST
        </span>
      </div>

      {/* Pregunta */}
      <p style={{
        fontSize: '1rem', fontWeight: '600',
        color: 'white', lineHeight: 1.5, margin: 0,
      }}>
        {quiz.question}
      </p>

      {/* Opciones */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {quiz.options.map((opt, i) => (
          <motion.button
            key={i}
            onClick={() => select(i)}
            whileHover={!answered ? { x: 3 } : {}}
            style={{
              ...getOptionStyle(i),
              borderRadius: '8px',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '13px',
              cursor: answered ? 'default' : 'pointer',
              textAlign: 'left',
              transition: 'all 0.25s ease',
              fontFamily: 'inherit',
              width: '100%',
            }}
          >
            {/* Letra */}
            <span style={{
              width: '23px', height: '23px', borderRadius: '50%', flexShrink: 0,
              background:
                answered && i === selected && opt.correct  ? 'var(--success)' :
                answered && i === selected && !opt.correct ? 'var(--danger)'  :
                answered ? 'rgba(255,255,255,0.15)' : '#f59e0b',
              color: answered && i !== selected ? 'rgba(255,255,255,0.5)' : '#0a0a0c',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: '0.68rem', fontWeight: '900',
            }}>
              {opt.label}
            </span>

            <span style={{ fontSize: '0.87rem', color: 'var(--text)', lineHeight: 1.55, flex: 1 }}>
              {opt.text}
            </span>

            {answered && i === selected && opt.correct && (
              <CheckCircle size={17} color="var(--success)" style={{ flexShrink: 0, marginTop: 2 }} />
            )}
            {answered && i === selected && !opt.correct && (
              <XCircle size={17} color="var(--danger)" style={{ flexShrink: 0, marginTop: 2 }} />
            )}
          </motion.button>
        ))}
      </div>

      {/* Feedback */}
      <AnimatePresence>
        {answered && selectedOpt && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.35 }}
            style={{
              padding: '12px 16px',
              borderRadius: '7px',
              background: selectedOpt.correct
                ? 'rgba(0,255,170,0.07)'
                : 'rgba(255,0,85,0.07)',
              border: `1px solid ${selectedOpt.correct
                ? 'rgba(0,255,170,0.3)'
                : 'rgba(255,0,85,0.3)'}`,
              fontSize: '0.82rem',
              color: selectedOpt.correct ? 'var(--success)' : '#ff7095',
              lineHeight: 1.65,
            }}
          >
            <strong>{selectedOpt.correct ? '✓ Correcto.' : '✗ Incorrecto.'}</strong>{' '}
            {selectedOpt.feedback}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botones */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        {!answered ? (
          <motion.button
            onClick={confirm}
            disabled={selected === null}
            whileHover={selected !== null ? { scale: 1.04 } : {}}
            style={{
              padding: '10px 30px',
              background: 'transparent',
              border: `1px solid ${selected !== null ? '#f59e0b' : 'rgba(255,255,255,0.1)'}`,
              color: selected !== null ? '#f59e0b' : 'rgba(255,255,255,0.2)',
              borderRadius: '6px',
              cursor: selected !== null ? 'pointer' : 'default',
              fontSize: '0.82rem', fontWeight: 'bold',
              letterSpacing: '0.12em', fontFamily: 'inherit',
              transition: 'all 0.2s ease',
            }}
          >
            CONFIRMAR
          </motion.button>
        ) : (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={() => { playClick(); onClose(); }}
            whileHover={{ scale: 1.04 }}
            style={{
              padding: '10px 30px',
              background: 'transparent',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.82rem', fontWeight: 'bold',
              letterSpacing: '0.12em', fontFamily: 'inherit',
            }}
          >
            CONTINUAR →
          </motion.button>
        )}
      </div>
    </motion.div>
  );
}
