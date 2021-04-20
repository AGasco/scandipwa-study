/* eslint-disable linebreak-style */
/* eslint-disable simple-import-sort/sort */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable indent */
/* eslint-disable no-unused-vars */

import ModeToggleButton from '../component/ModeToggleButton';

import DarkModeProvider from '../component/DarkModeProvider';

import './Header.style.plugin';

export const renderTopMenu = (args, callback, instance) => (
  <>
    {callback(...args)}
    <div block="Header" elem="DarkModeToggle">
      <ModeToggleButton />
    </div>
  </>
);

export const renderRouter = (args, callback, instance) => (
  <DarkModeProvider>{callback(...args)}</DarkModeProvider>
);

export default {
  'Component/Header/Component': {
    'member-function': {
      renderTopMenu
    }
  },
  'Component/App/Component': {
    'member-function': {
      renderRouter
    }
  }
};
