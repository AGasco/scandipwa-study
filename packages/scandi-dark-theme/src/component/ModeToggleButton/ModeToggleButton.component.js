/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable quotes */
/* eslint-disable linebreak-style */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ModeToggleButton.style';

/** @namespace ScandiDarkTheme/Src/Component/ModeToggleButton/Component/ModeToggleButtonComponent */
export class ModeToggleButtonComponent extends PureComponent {
  static propTypes = {
    isDarkModeEnabled: PropTypes.bool.isRequired,
    enableDarkMode: PropTypes.func.isRequired
  };

  render() {
    const { isDarkModeEnabled, enableDarkMode } = this.props;

    return (
      <button
        block="ModeToggleButton"
        aria-label={__('Toggle Dark Mode')}
        onClick={() => enableDarkMode(!isDarkModeEnabled)}
      >
        {__('Toggle Dark Mode')}
      </button>
    );
  }
}

export default ModeToggleButtonComponent;
