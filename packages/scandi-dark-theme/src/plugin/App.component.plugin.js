/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */

import DarkModeProvider from '../component/DarkModeProvider';

export const renderRouter = (args, callback, instance) => {
  console.log('inside App plugin');
  return <DarkModeProvider>{callback(...args)}</DarkModeProvider>;
};

export default {
  'Component/App/Component': {
    'member-function': {
      renderRouter
    }
  }
};
