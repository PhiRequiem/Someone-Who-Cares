import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Terminal, X } from 'lucide-react';

const SCAN_RESPONSES = {
  foto: {
    output: [
      'Analizando metadatos de imagen... [OK]',
      'Archivo: "vigilancia_andrea_oct02.jpg"',
      'GPS: 4.7110° N, 74.0721° W',
      'Ubicación: Edificio Cañada Norte, Piso 7',
      'Fecha captura: 2023-10-02  18:45:33',
      'Dispositivo: Canon EOS R5 | ISO 3200',
    ],
    evidence: { id: 'meta-foto', name: 'Metadatos foto vigilancia', type: 'Metadata EXIF' }
  },
  dron: {
    output: [
      'Escaneando señal de radiofrecuencia... [OK]',
      'Protocolo detectado: DJI OcuSync 3.0',
      'IP de control remoto: 201.184.92.17',
      'Registrado a: Varela Seguridad S.A.',
      'Subsidiaria de: Inmobiliaria Varela S.A.',
      'NIT: 900.123.456-7',
    ],
    evidence: { id: 'meta-dron', name: 'IP dron — Varela Seguridad S.A.', type: 'Rastreo RF' }
  }
};

export default function OSINTTerminal({ context, onClose, onSuccess }) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    'SWC-OSINT v2.15.0 — Terminal de Investigación Digital',
    'Conexión segura establecida. Escriba "help" para ver comandos.',
    ''
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key !== 'Enter') return;
    const cmd = input.toLowerCase().trim();
    let lines = [];

    if (cmd === 'help') {
      lines = ['Comandos disponibles: help, scan, clear, exit'];
    } else if (cmd === 'scan') {
      const ctx = SCAN_RESPONSES[context] ?? SCAN_RESPONSES.foto;
      lines = ctx.output;
      onSuccess(ctx.evidence);
    } else if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    } else if (cmd === 'exit') {
      onClose();
      return;
    } else {
      lines = [`Comando no reconocido: ${cmd}`];
    }

    setHistory(prev => [...prev, `> ${input}`, ...lines, '']);
    setInput('');
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      style={{
        position: 'absolute',
        top: '100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'JetBrains Mono, monospace',
        overflow: 'hidden',
        boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
      }}
      className="glass"
    >
      <div style={{
        padding: '10px 15px',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(0, 242, 255, 0.05)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
          <Terminal size={16} />
          <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>TERMINAL_OSINT_ANDREA</span>
        </div>
        <X size={16} style={{ cursor: 'pointer' }} onClick={onClose} />
      </div>

      <div
        ref={scrollRef}
        style={{
          flex: 1,
          padding: '15px',
          overflowY: 'auto',
          fontSize: '0.9rem',
          color: 'var(--primary)',
          opacity: 0.9
        }}
      >
        {history.map((line, i) => (
          <div key={i} style={{ whiteSpace: 'pre-wrap', marginBottom: '4px' }}>{line}</div>
        ))}
        <div style={{ display: 'flex', gap: '8px' }}>
          <span>{'>'}</span>
          <input
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            style={{
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--primary)',
              fontFamily: 'inherit',
              fontSize: 'inherit',
              flex: 1
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
