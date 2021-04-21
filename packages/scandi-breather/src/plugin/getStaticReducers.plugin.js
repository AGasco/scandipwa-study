/* eslint-disable linebreak-style */
/* eslint-disable indent */
import BreathingReducer from '../store/Breathing/Breathing.reducer';

export const getStaticReducers = (args, callback) => ({
  ...callback(args),
  BreathingReducer
});

export default {
  'Store/Index/getReducers': {
    function: getStaticReducers
  }
};
