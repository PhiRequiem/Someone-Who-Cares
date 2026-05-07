import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ARCHIVE_URL = 'web.archive.org/web/20191121143022/noticiaslacanada.co/desalojo-norte';

export default function BrowserWindow({ onClose, onSuccess }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
      onSuccess({ id: 'webarchive-1', name: 'Nota La Cañada Informa (nov 2019)', type: 'WebArchive' });
    }, 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.93, y: 24 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 26 }}
      style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '720px',
        height: '500px',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '10px',
        overflow: 'hidden',
        boxShadow: '0 30px 70px rgba(0,0,0,0.75)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* ── Barra de título del browser ── */}
      <div style={{ background: '#2a2a2a', padding: '10px 14px 0', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px', marginBottom: '9px' }}>
          <button
            onClick={onClose}
            title="Cerrar"
            style={{
              width: 13, height: 13, borderRadius: '50%',
              background: '#ff5f57', border: 'none', cursor: 'pointer',
            }}
          />
          <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: 13, height: 13, borderRadius: '50%', background: '#28c840' }} />
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '2px' }}>
          <div style={{
            background: '#f0f0f0',
            padding: '5px 16px 0',
            borderRadius: '7px 7px 0 0',
            fontSize: '0.7rem', color: '#333',
            display: 'flex', alignItems: 'center', gap: '6px',
            maxWidth: '230px', height: '28px',
          }}>
            <span style={{ fontSize: '0.75rem' }}>🕐</span>
            <span style={{ overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
              La Cañada Informa · Wayback Machine
            </span>
          </div>
        </div>
      </div>

      {/* ── Barra de dirección ── */}
      <div style={{
        background: '#3a3a3a',
        padding: '7px 14px',
        display: 'flex', alignItems: 'center', gap: '10px',
        flexShrink: 0,
      }}>
        <span style={{ color: '#666', fontSize: '1.1rem', userSelect: 'none' }}>←</span>
        <span style={{ color: '#666', fontSize: '1.1rem', userSelect: 'none' }}>→</span>
        <span style={{ color: '#666', fontSize: '1rem', userSelect: 'none' }}>↺</span>
        <div style={{
          flex: 1,
          background: '#505050',
          borderRadius: '5px',
          padding: '4px 12px',
          fontSize: '0.7rem', color: '#ddd',
          overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <span style={{ color: '#4ade80', fontSize: '0.75rem' }}>🔒</span>
          {ARCHIVE_URL}
        </div>
      </div>

      {/* ── Contenido de la página ── */}
      <div style={{ flex: 1, overflowY: 'auto', background: '#f4f4f4' }}>

        {/* Banner Wayback Machine */}
        <div style={{
          background: '#1a1a1a',
          padding: '8px 16px',
          display: 'flex', alignItems: 'center', gap: '14px',
          flexShrink: 0,
        }}>
          <span style={{ color: '#fff', fontSize: '0.7rem', fontWeight: '800', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
            WAYBACK MACHINE
          </span>
          <div style={{
            flex: 1, background: '#2d2d2d',
            borderRadius: '4px', padding: '4px 12px',
            fontSize: '0.65rem', color: '#aaa',
          }}>
            Captura del <strong style={{ color: '#ccc' }}>21 nov 2019 · 14:30:22</strong>
          </div>
          <span style={{ color: '#00d4ff', fontSize: '0.65rem', whiteSpace: 'nowrap', cursor: 'default' }}>
            1 captura disponible ›
          </span>
        </div>

        {/* Fake archived page */}
        {loading ? (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '300px', color: '#999', fontSize: '0.8rem', gap: '10px',
          }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
              style={{ width: 18, height: 18, border: '2px solid #ddd', borderTopColor: '#888', borderRadius: '50%' }}
            />
            Cargando página archivada...
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            style={{ padding: '20px 28px', color: '#1a1a1a' }}
          >
            {/* Site header */}
            <div style={{ borderBottom: '3px solid #b91c1c', paddingBottom: '8px', marginBottom: '16px' }}>
              <div style={{ fontSize: '1.4rem', fontWeight: '900', color: '#b91c1c', fontFamily: 'Georgia, serif' }}>
                La Cañada Informa
              </div>
              <div style={{ fontSize: '0.62rem', color: '#777', letterSpacing: '0.04em', marginTop: '2px' }}>
                PERIODISMO COMUNITARIO · BOGOTÁ D.C.
              </div>
            </div>

            {/* Metadata */}
            <div style={{ fontSize: '0.68rem', color: '#999', marginBottom: '10px' }}>
              21 de noviembre de 2019 · 14:28 · Sección: Barrio La Cañada
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: 'Georgia, serif',
              fontSize: '1.18rem', lineHeight: 1.35,
              marginBottom: '10px', fontWeight: 'bold', color: '#111',
            }}>
              Vecinos del Edificio Cañada Norte denuncian amenazas de desalojo forzado
            </h1>

            {/* Deck */}
            <p style={{
              fontSize: '0.85rem', fontWeight: '600', color: '#444',
              lineHeight: 1.55, marginBottom: '14px',
              borderLeft: '3px solid #b91c1c', paddingLeft: '12px',
            }}>
              La empresa <strong>Inmobiliaria Varela S.A.</strong> habría iniciado presiones
              sistemáticas sobre los residentes. Los vecinos reportan visitas de personas
              desconocidas y ofertas de compra muy por debajo del valor catastral.
            </p>

            {/* Body */}
            <p style={{ fontSize: '0.8rem', lineHeight: 1.75, marginBottom: '12px', color: '#333' }}>
              Desde hace tres semanas, los 14 hogares que habitan el Edificio Cañada Norte
              reportan visitas frecuentes de representantes de Inmobiliaria Varela S.A.,
              quienes habrían ofrecido sumas irrisorias y, según testimonios de residentes,
              proferido amenazas veladas ante la negativa de vender.
            </p>

            <p style={{ fontSize: '0.8rem', lineHeight: 1.75, marginBottom: '12px', color: '#333' }}>
              "Nos dijeron que si no vendíamos nos iban a hacer la vida imposible",
              relató una de las residentes, quien pidió mantener su identidad en reserva
              por temor a represalias. La junta de acción comunal presentó una denuncia
              ante la Defensoría del Pueblo el pasado 15 de noviembre.
            </p>

            <p style={{ fontSize: '0.8rem', lineHeight: 1.75, marginBottom: '16px', color: '#333' }}>
              Fuentes del sector inmobiliario señalan que Varela S.A. ha adquirido en los
              últimos dos años más de ocho predios en el barrio mediante procedimientos
              cuestionados. La empresa no respondió a las solicitudes de comentario de
              este medio antes del cierre de edición.
            </p>

            {/* Alert box */}
            <div style={{
              background: '#fffbeb',
              border: '1px solid #f59e0b',
              borderLeft: '4px solid #f59e0b',
              borderRadius: '4px',
              padding: '10px 14px',
            }}>
              <p style={{ fontSize: '0.72rem', color: '#78350f', margin: 0 }}>
                <strong>Nota del editor (23 nov 2019):</strong> Esta fue la última entrada publicada
                antes de que el sitio fuera dado de baja de forma inesperada. Estamos
                investigando la causa. El contenido se preserva gracias a Wayback Machine.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
