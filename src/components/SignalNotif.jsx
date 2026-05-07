import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { playNotif } from '../audio/playClick';

const AVATAR_COLORS = {
  C: '#6d28d9',
  D: '#b45309',
};

export default function SignalNotif({ notif, onDismiss }) {
  useEffect(() => {
    if (!notif) return;
    playNotif();
    const t = setTimeout(onDismiss, 4500);
    return () => clearTimeout(t);
  }, [notif, onDismiss]);

  const initial = notif?.from?.[0]?.toUpperCase() ?? '?';
  const avatarColor = AVATAR_COLORS[initial] ?? '#374151';

  return (
    <div style={{
      position: 'absolute', top: '16px',
      left: 0, right: 0,
      display: 'flex', justifyContent: 'center',
      zIndex: 200, pointerEvents: 'none',
    }}>
      <AnimatePresence>
        {notif && (
          <motion.div
            initial={{ opacity: 0, y: -72 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -72 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={onDismiss}
            style={{
              pointerEvents: 'auto',
              cursor: 'pointer',
              minWidth: '270px',
              maxWidth: '340px',
              background: '#182b1d',
              border: '1px solid rgba(0, 210, 106, 0.25)',
              borderRadius: '14px',
              padding: '11px 14px',
              boxShadow: '0 12px 40px rgba(0,0,0,0.7)',
            }}
          >
            <div style={{
              display: 'flex', alignItems: 'center',
              gap: '5px', marginBottom: '9px',
            }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="#00d26a">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14l-4-4 1.41-1.41L11 13.17l6.59-6.59L19 8l-8 8z"/>
              </svg>
              <span style={{
                fontSize: '0.65rem', color: '#00d26a',
                fontWeight: '700', letterSpacing: '0.08em',
              }}>
                SIGNAL
              </span>
              <span style={{
                fontSize: '0.62rem', color: 'rgba(255,255,255,0.35)',
                marginLeft: 'auto',
              }}>
                ahora
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '34px', height: '34px', borderRadius: '50%',
                background: avatarColor,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.8rem', fontWeight: '700', color: 'white', flexShrink: 0,
              }}>
                {initial}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: '0.78rem', fontWeight: '700',
                  color: 'white', marginBottom: '3px',
                }}>
                  {notif.from}{' '}
                  <span style={{ color: '#00d26a', fontSize: '0.68rem' }}>✓✓</span>
                </div>
                <div style={{
                  fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)',
                  whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                }}>
                  {notif.text}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
