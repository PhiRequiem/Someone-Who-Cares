import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin } from 'lucide-react';

const BG_TO_LOCATION = {
  'bg_room.png':        'Depto de Andrea · Bogotá',
  'bg_barrio_dawn.png': 'Barrio La Cañada · 5:30 am',
  'bg_barrio.png':      'Barrio La Cañada',
};

export default function LocationBadge({ bg, hidden }) {
  const filename = bg?.split('/').pop() ?? '';
  const location = BG_TO_LOCATION[filename];

  return (
    <div style={{
      position: 'absolute', top: '30px',
      left: 0, right: 0,
      display: 'flex', justifyContent: 'center',
      zIndex: 20, pointerEvents: 'none',
    }}>
      <AnimatePresence mode="wait">
        {location && !hidden && (
          <motion.div
            key={location}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex', alignItems: 'center', gap: '5px',
              padding: '5px 13px',
              background: 'rgba(10, 10, 14, 0.65)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <MapPin size={11} color="var(--primary)" strokeWidth={2.5} />
            <span style={{
              fontSize: '0.68rem',
              color: 'rgba(255,255,255,0.6)',
              fontWeight: '500',
              letterSpacing: '0.04em',
              whiteSpace: 'nowrap',
            }}>
              {location}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
