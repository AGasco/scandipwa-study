/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable quotes */

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
