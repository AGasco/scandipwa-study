/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable indent */
import ModeToggleButton from '../component/ModeToggleButton';

export const renderTopMenu = (args, callback, instance) => (
  <>
    {callback(...args)}
    <div block="Header" elem="BreathingToggle">
      <ModeToggleButton />
    </div>
  </>
);

export default {
  'Component/Header/Component': {
    'member-function': {
      renderTopMenu
    }
  }
};
