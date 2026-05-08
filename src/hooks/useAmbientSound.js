import { useEffect, useRef } from 'react';
import { getAudioCtx, getMasterGain } from '../audio/audioContext';

const BG_TO_SOUND = {
  // indoor / room
  'bg_room.png':                                    'rain',
  'andrea-sleeps-closed-eyes-01a.png':              'rain',
  'andrea-sleeps-open-eyes-01a.png':                'rain',
  'bg_sala-studio-andrea-vistazo-general-01a.png':  'rain',
  'bg_sala-studio-andrea-vistazo-general-01b.png':  'rain',
  'bg_sala-studio-andrea-vistazo-general-01c.png':  'rain',
  'bg_sala-studio-andrea-vistazo-general-01d.png':  'rain',
  'bg_oficina-andrea-carmen-fuente.png':            'rain',
  // outdoor / city
  'bg_barrio_dawn.png':                             'barrio',
  'bg_barrio.png':                                  'barrio',
  'plaza-de-bolivar-geral-01-a.png':                'barrio',
  'plaza-de-bolivar-geral-01-b.png':                'barrio',
  'plaza-de-bolivar-geral-01-c.png':                'barrio',
  'plaza-de-bolivar-al-piso-01-a.png':              'barrio',
  'plaza-de-bolivar-al-piso-01-b.png':              'barrio',
  'plaza-de-bolivar-al-piso-01-c.png':              'barrio',
  'plaza-de-bolivar-al-piso-01-d.png':              'barrio',
  'plaza-de-bolivar-protesta-01-a.png':             'barrio',
  'plaza-de-bolivar-protesta-01-b.png':             'barrio',
  'bg_se-monta-en-taxi-01a.png':                    'barrio',
  'bg_sale-del-edificio-01.png':                    'barrio',
  'bg_carrera-calle-66.png':                        'barrio',
};

const PATH_CONFIGS = {
  rain:   { filterType: 'lowpass',  frequency: 500, Q: 0.8, gain: 0.055 },
  barrio: { filterType: 'highpass', frequency: 300, Q: 0.6, gain: 0.038 },
};

export function useAmbientSound(currentBg, enabled) {
  const r = useRef({});

  useEffect(() => {
    if (!enabled) {
      if (r.current.ready) {
        const now = r.current.ctx.currentTime;
        for (const path of Object.values(r.current.paths)) {
          path.gain.gain.setTargetAtTime(0, now, 0.4);
        }
        r.current.currentSound = null;
      }
      return;
    }

    if (!r.current.ready) {
      const ctx = getAudioCtx();
      r.current.ctx = ctx;

      const sampleRate = ctx.sampleRate;
      const bufferSize = sampleRate * 4;
      const buffer = ctx.createBuffer(1, bufferSize, sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

      const source = ctx.createBufferSource();
      source.buffer = buffer;
      source.loop = true;
      r.current.source = source;

      r.current.paths = {};
      for (const [name, cfg] of Object.entries(PATH_CONFIGS)) {
        const filter = ctx.createBiquadFilter();
        filter.type = cfg.filterType;
        filter.frequency.value = cfg.frequency;
        filter.Q.value = cfg.Q;

        const gain = ctx.createGain();
        gain.gain.value = 0;

        source.connect(filter);
        filter.connect(gain);
        gain.connect(getMasterGain());

        r.current.paths[name] = { gain, targetGain: cfg.gain };
      }

      source.start();
      r.current.currentSound = null;
      r.current.ready = true;
    }

    const ctx = r.current.ctx;
    const filename = currentBg.split('/').pop();
    const soundType = BG_TO_SOUND[filename];

    if (soundType === r.current.currentSound) return;
    r.current.currentSound = soundType;

    const now = ctx.currentTime;
    for (const path of Object.values(r.current.paths)) {
      path.gain.gain.setTargetAtTime(0, now, 0.7);
    }
    if (soundType && r.current.paths[soundType]) {
      r.current.paths[soundType].gain.gain.setTargetAtTime(
        r.current.paths[soundType].targetGain,
        now + 0.4,
        1.8
      );
    }
  }, [currentBg, enabled]);

  useEffect(() => {
    return () => {
      try { r.current.source?.stop(); } catch (_) {}
    };
  }, []);
}
