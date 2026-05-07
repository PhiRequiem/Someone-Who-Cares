import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, Eye, FileText, RotateCcw } from 'lucide-react';
import { playClick } from '../audio/playClick';

const SKILLS = [
  { id: 'osint',      label: 'Análisis de metadatos OSINT',          always: true },
  { id: 'webarchive', label: 'Recuperación de info con WebArchive',   type: 'WebArchive' },
  { id: 'safety',     label: 'Seguridad operacional: Safety First!',  quizId: 'safety' },
  { id: 'signal',     label: 'Comunicación segura con Signal',        always: true },
  { id: 'rf',         label: 'Rastreo de señal RF (interceptación)',  type: 'Rastreo RF' },
  { id: 'sources',    label: 'Evaluación de fuentes y evidencia',     always: true },
  { id: 'evidence',   label: 'Protección de evidencia digital',       quizId: 'evidence' },
  { id: 'testimony',  label: 'Manejo de fuentes en campo',            type: 'Testimonio' },
];

function getVisibilityGrade(v) {
  if (v <= 15) return { label: 'Operación limpia',     color: 'var(--success)',  emoji: '●' };
  if (v <= 30) return { label: 'Bien cubierta',         color: '#4ade80',         emoji: '●' };
  if (v <= 50) return { label: 'Exposición moderada',  color: '#ffaa00',         emoji: '●' };
  if (v <= 70) return { label: 'Comprometida',         color: '#ff6600',         emoji: '●' };
  return            { label: 'Alta exposición',        color: 'var(--danger)',   emoji: '●' };
}

const itemVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: (i) => ({ opacity: 1, x: 0, transition: { delay: 0.3 + i * 0.08, duration: 0.4 } }),
};

export default function DemoSummary({ evidence, visibility, quizResults = {}, onRestart }) {
  const grade = getVisibilityGrade(visibility);
  const earnedSkills = SKILLS.filter(s => {
    if (s.always) return true;
    if (s.quizId) return quizResults[s.quizId] === true;
    if (s.type)   return evidence.some(e => e.type === s.type);
    return false;
  });
  const totalSkills = SKILLS.length;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', inset: 0, zIndex: 300,
        background: 'rgba(5,5,8,0.96)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'Inter, sans-serif',
        overflowY: 'auto',
        padding: '24px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '760px' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '40px' }}
        >
          <p style={{
            fontSize: '0.65rem', color: 'var(--primary)',
            letterSpacing: '0.35em', fontWeight: '700', marginBottom: '10px',
          }}>
            CAPÍTULO 1 · DEMO COMPLETADO
          </p>
          <h1 style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            fontWeight: '800', color: 'white',
            margin: '0 0 6px 0', lineHeight: 1.1,
          }}>
            Someone Who Cares
          </h1>
          <div style={{
            height: '2px', margin: '16px auto',
            background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
            width: '200px',
          }} />
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.85rem', margin: 0 }}>
            Andrea reúne la primera evidencia concreta sobre la desaparición de Sebastián.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '24px' }}>

          {/* Evidencia recopilada */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass"
            style={{ padding: '20px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <FileText size={15} color="var(--primary)" />
              <span style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.14em' }}>
                EVIDENCIA RECOPILADA
              </span>
              <span style={{
                marginLeft: 'auto',
                fontSize: '0.7rem', fontWeight: '700',
                color: evidence.length > 2 ? 'var(--success)' : '#ffaa00',
              }}>
                {evidence.length} / 4
              </span>
            </div>

            {evidence.length === 0 ? (
              <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.3)', fontStyle: 'italic' }}>
                Sin evidencia recopilada.
              </p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {evidence.map((item, i) => (
                  <motion.div
                    key={item.id}
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                      display: 'flex', alignItems: 'center', gap: '10px',
                      padding: '8px 12px',
                      background: 'rgba(0,242,255,0.05)',
                      borderLeft: '3px solid var(--primary)',
                      borderRadius: '0 5px 5px 0',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '1px' }}>
                        {item.type}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.6)' }}>
                        {item.name}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Visibilidad */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="glass"
            style={{ padding: '20px' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
              <Eye size={15} color="var(--primary)" />
              <span style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.14em' }}>
                VISIBILIDAD FINAL
              </span>
            </div>

            <div style={{ textAlign: 'center', padding: '16px 0' }}>
              <div style={{
                fontSize: '3.5rem', fontWeight: '900',
                color: grade.color, lineHeight: 1,
                marginBottom: '8px',
              }}>
                {visibility}%
              </div>
              <div style={{
                fontSize: '0.8rem', fontWeight: '700',
                color: grade.color, letterSpacing: '0.05em',
                marginBottom: '16px',
              }}>
                {grade.label}
              </div>

              <div style={{
                width: '100%', height: '8px',
                background: 'rgba(255,255,255,0.08)',
                borderRadius: '4px', overflow: 'hidden',
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${visibility}%` }}
                  transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
                  style={{ height: '100%', background: grade.color, borderRadius: '4px' }}
                />
              </div>
              <p style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.3)', marginTop: '10px' }}>
                Menor porcentaje = mejor cobertura operacional
              </p>
            </div>
          </motion.div>
        </div>

        {/* Habilidades ETI */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="glass"
          style={{ padding: '20px', marginBottom: '28px' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--primary)', letterSpacing: '0.14em' }}>
              HABILIDADES ETI DEMOSTRADAS
            </span>
            <span style={{
              marginLeft: 'auto', fontSize: '0.7rem', fontWeight: '700',
              color: 'var(--success)',
            }}>
              {earnedSkills.length} / {totalSkills}
            </span>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
          }}>
            {SKILLS.map((skill, i) => {
              const earned = earnedSkills.some(s => s.id === skill.id);
              return (
                <motion.div
                  key={skill.id}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '8px',
                    opacity: earned ? 1 : 0.3,
                  }}
                >
                  {earned
                    ? <CheckCircle size={14} color="var(--success)" />
                    : <Circle size={14} color="rgba(255,255,255,0.2)" />
                  }
                  <span style={{ fontSize: '0.76rem', color: earned ? 'var(--text)' : 'rgba(255,255,255,0.3)' }}>
                    {skill.label}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Botón */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => { playClick(); onRestart(); }}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '13px 40px',
              background: 'transparent',
              border: '1px solid var(--primary)',
              color: 'var(--primary)',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '0.85rem', fontWeight: 'bold',
              letterSpacing: '0.15em', fontFamily: 'inherit',
            }}
          >
            <RotateCcw size={14} />
            REINICIAR DEMO
          </motion.button>
        </motion.div>

      </div>
    </motion.div>
  );
}
