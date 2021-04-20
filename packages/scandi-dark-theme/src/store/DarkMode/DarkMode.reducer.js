/* eslint-disable indent */
import { DARKMODE_ENABLE } from './DarkMode.action';

/** @namespace ScandiDarkTheme/Src/Store/DarkMode/Reducer/getInitialState */
export const getInitialState = () => ({
  enabled: false
});

/** @namespace ScandiDarkTheme/Src/Store/DarkMode/Reducer/DarkModeReducer */
export const DarkModeReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case DARKMODE_ENABLE:
      const { enabled } = action;

      return {
        enabled
      };

    default:
      return state;
  }
};

export default DarkModeReducer;
