/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */

import ModeToggleButton from '../component/ModeToggleButton';

import './Header.style.plugin';

export const renderTopMenu = (args, callback, instance) => (
  <>
    {callback(...args)}
    <div block="Header" elem="DarkModeToggle">
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
