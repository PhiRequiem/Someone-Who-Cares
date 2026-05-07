import React from 'react';
import { Eye } from 'lucide-react';

export default function VisibilityMeter({ value }) {
  const getColor = () => {
    if (value > 70) return 'var(--danger)';
    if (value > 40) return '#ffaa00';
    return 'var(--success)';
  };

  return (
    <div style={{
      position: 'absolute',
      top: '30px',
      left: '30px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      padding: '10px 15px',
      zIndex: 20
    }} className="glass">
      <Eye size={20} color={getColor()} />
      <div style={{
        width: '150px',
        height: '6px',
        background: 'rgba(255,255,255,0.1)',
        borderRadius: '3px',
        overflow: 'hidden'
      }}>
        <div style={{
          width: `${value}%`,
          height: '100%',
          background: getColor(),
          transition: 'width 0.5s ease-in-out, background 0.5s ease'
        }} />
      </div>
      <span style={{ fontSize: '0.7rem', fontWeight: 'bold', color: getColor() }}>
        VISIBILIDAD: {value}%
      </span>
    </div>
  );
}
