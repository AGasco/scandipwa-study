/* eslint-disable indent */
export const DARKMODE_ENABLE = 'DARKMODE_ENABLE';

/** @namespace ScandiDarkTheme/Src/Store/DarkMode/Action/enableDarkMode */
export const enableDarkMode = (enabled) => ({
  type: DARKMODE_ENABLE,
  enabled
});
