import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase } from 'lucide-react';

export default function EvidenceJournal({ items }) {
  if (items.length === 0) return null;

  return (
    <div style={{
      position: 'absolute',
      top: '30px',
      right: '30px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
      gap: '10px',
      zIndex: 20
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '10px' }}>
        <Briefcase size={20} />
        <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>DIARIO DE EVIDENCIA</span>
      </div>
      
      <AnimatePresence>
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass"
            style={{
              padding: '10px 15px',
              width: '200px',
              fontSize: '0.8rem',
              borderLeft: '4px solid var(--primary)'
            }}
          >
            <div style={{ fontWeight: 'bold', color: 'var(--primary)', marginBottom: '4px' }}>{item.type}</div>
            <div>{item.name}</div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
