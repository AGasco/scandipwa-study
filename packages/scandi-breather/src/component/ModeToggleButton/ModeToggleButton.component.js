/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable indent */
/* eslint-disable react/jsx-no-bind */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import './ModeToggleButton.style';

/** @namespace ScandiBreather/Src/Component/ModeToggleButton/Component/ModeToggleButtonComponent */
export class ModeToggleButtonComponent extends PureComponent {
  static propTypes = {
    isBreathingEnabled: PropTypes.bool.isRequired,
    enableBreathing: PropTypes.func.isRequired
  };

  render() {
    const { isBreathingEnabled, enableBreathing } = this.props;

    return (
      <button
        block="ModeToggleButton"
        aria-label={__('Toggle Breathing')}
        onClick={() => enableBreathing(!isBreathingEnabled)}
      >
        {__('Toggle Breathing')}
      </button>
    );
  }
}

export default ModeToggleButtonComponent;
