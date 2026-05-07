// Shared AudioContext singleton — all audio routes through masterGain
// so a single setAudioMuted() call silences everything at once.

let _ctx = null;
let _masterGain = null;

export function getAudioCtx() {
  if (!_ctx) {
    _ctx = new (window.AudioContext || window.webkitAudioContext)();
    _masterGain = _ctx.createGain();
    _masterGain.gain.value = 1;
    _masterGain.connect(_ctx.destination);
  }
  _ctx.resume().catch(() => {});
  return _ctx;
}

export function getMasterGain() {
  getAudioCtx();
  return _masterGain;
}

export function setAudioMuted(muted) {
  if (!_ctx) return;
  _masterGain.gain.setTargetAtTime(muted ? 0 : 1, _ctx.currentTime, 0.2);
}
