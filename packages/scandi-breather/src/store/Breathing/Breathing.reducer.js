/* eslint-disable indent */
import { BREATHING_ENABLE } from './Breathing.action';

/** @namespace ScandiBreather/Src/Store/Breathing/Reducer/getInitialState */
export const getInitialState = () => ({
  enabled: false
});

/** @namespace ScandiBreather/Src/Store/Breathing/Reducer/BreathingReducer */
export const BreathingReducer = (state = getInitialState(), action) => {
  switch (action.type) {
    case BREATHING_ENABLE:
      const { enabled } = action;

      return {
        enabled
      };

    default:
      return state;
  }
};

export default BreathingReducer;
