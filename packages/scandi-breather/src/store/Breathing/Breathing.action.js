/* eslint-disable indent */
export const BREATHING_ENABLE = 'BREATHING_ENABLE';

// TODO rename
/** @namespace ScandiBreather/Src/Store/Breathing/Action/enableBreathing */
export const enableBreathing = (enabled) => ({
  type: BREATHING_ENABLE,
  enabled
});
