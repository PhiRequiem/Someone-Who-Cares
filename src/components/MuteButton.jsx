import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { playClick } from '../audio/playClick';

export default function MuteButton({ muted, onToggle }) {
  const handleClick = () => {
    playClick();
    onToggle();
  };

  return (
    <button
      onClick={handleClick}
      title={muted ? 'Activar sonido' : 'Silenciar'}
      style={{
        position: 'absolute',
        bottom: '30px',
        right: '30px',
        zIndex: 20,
        width: '38px',
        height: '38px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(10, 10, 14, 0.65)',
        border: `1px solid ${muted ? 'rgba(255,255,255,0.12)' : 'rgba(0,242,255,0.25)'}`,
        borderRadius: '50%',
        cursor: 'pointer',
        backdropFilter: 'blur(10px)',
        transition: 'border-color 0.3s ease, opacity 0.3s ease',
        opacity: muted ? 0.5 : 0.85,
      }}
    >
      {muted
        ? <VolumeX size={15} color="rgba(255,255,255,0.45)" />
        : <Volume2 size={15} color="var(--primary)" />
      }
    </button>
  );
}
