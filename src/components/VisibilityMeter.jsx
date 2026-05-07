import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';

export default function VisibilityMeter({ value }) {
  const prevValue = useRef(value);
  const [delta, setDelta] = useState(null);

  useEffect(() => {
    const diff = value - prevValue.current;
    if (diff === 0) return;
    prevValue.current = value;
    setDelta(diff);
    const t = setTimeout(() => setDelta(null), 1000);
    return () => clearTimeout(t);
  }, [value]);

  const getColor = () => {
    if (value > 70) return 'var(--danger)';
    if (value > 40) return '#ffaa00';
    return 'var(--success)';
  };

  const isFlashing = delta !== null;
  const color = getColor();

  return (
    <div style={{
      position: 'absolute',
      top: '30px',
      left: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 15px',
      zIndex: 20,
    }} className="glass">

      {/* Ícono — pulse when value changes */}
      <motion.div
        animate={isFlashing ? { scale: [1, 1.4, 1], opacity: [1, 0.5, 1, 0.7, 1] } : {}}
        transition={{ duration: 0.45 }}
      >
        <Eye size={20} color={color} />
      </motion.div>

      {/* Barra */}
      <div style={{ position: 'relative' }}>
        <div style={{
          width: '150px',
          height: '6px',
          background: 'rgba(255,255,255,0.1)',
          borderRadius: '3px',
          overflow: 'hidden',
        }}>
          <motion.div
            animate={isFlashing
              ? { opacity: [1, 0.2, 1, 0.5, 1], scaleX: [1, 1.02, 1] }
              : {}}
            transition={{ duration: 0.4 }}
            style={{
              width: `${value}%`,
              height: '100%',
              background: color,
              transition: 'width 0.5s ease-in-out, background 0.5s ease',
              transformOrigin: 'left',
            }}
          />
        </div>

        {/* Delta flotante (+25 / -5) */}
        <AnimatePresence>
          {isFlashing && (
            <motion.span
              key={delta}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -18 }}
              exit={{ opacity: 0, y: -28 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                left: `${Math.min(value, 90)}%`,
                top: 0,
                fontSize: '0.65rem',
                fontWeight: '800',
                color: delta > 0 ? 'var(--danger)' : 'var(--success)',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
                textShadow: `0 0 8px ${delta > 0 ? 'var(--danger)' : 'var(--success)'}`,
              }}
            >
              {delta > 0 ? `+${delta}` : delta}
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Texto — flicker en el label */}
      <motion.span
        animate={isFlashing ? { opacity: [1, 0.1, 1, 0.4, 1] } : {}}
        transition={{ duration: 0.4 }}
        style={{ fontSize: '0.7rem', fontWeight: 'bold', color }}
      >
        VISIBILIDAD: {value}%
      </motion.span>
    </div>
  );
}
