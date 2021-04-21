/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable indent */
import BreathingProvider from '../component/BreathingProvider';

export const render = (args, callback, instance) => (
  <BreathingProvider>{callback(...args)}</BreathingProvider>
);

export default {
  'Component/Image/Component': {
    'member-function': {
      render
    }
  }
};
