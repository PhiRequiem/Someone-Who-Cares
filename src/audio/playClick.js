import { getAudioCtx, getMasterGain } from './audioContext';

// UI button click — triangle wave 660→440 Hz, 70ms
export function playClick() {
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(660, now);
    osc.frequency.exponentialRampToValueAtTime(440, now + 0.05);
    gain.gain.setValueAtTime(0.18, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.065);

    osc.connect(gain);
    gain.connect(getMasterGain());
    osc.start(now);
    osc.stop(now + 0.07);
  } catch (_) {}
}

// Signal notification — dos notas ascendentes estilo ping de mensajería
export function playNotif() {
  try {
    const ctx = getAudioCtx();
    const master = getMasterGain();
    const now = ctx.currentTime;

    [880, 1100].forEach((freq, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const t = now + i * 0.09;

      osc.type = 'sine';
      osc.frequency.value = freq;

      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.2, t + 0.012);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.22);

      osc.connect(gain);
      gain.connect(master);
      osc.start(t);
      osc.stop(t + 0.24);
    });
  } catch (_) {}
}

// Tecla de terminal — ruido filtrado muy corto, como teclado mecánico
export function playKeyClick() {
  try {
    const ctx = getAudioCtx();
    const now = ctx.currentTime;

    const bufferSize = Math.floor(ctx.sampleRate * 0.013);
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;

    const source = ctx.createBufferSource();
    source.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 2400;
    filter.Q.value = 1.8;

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.09, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.016);

    source.connect(filter);
    filter.connect(gain);
    gain.connect(getMasterGain());
    source.start(now);
    source.stop(now + 0.02);
  } catch (_) {}
}
