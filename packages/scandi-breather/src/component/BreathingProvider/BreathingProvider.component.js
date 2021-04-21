/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable indent */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { ChildrenType } from 'Type/Common';

import './BreathingProvider.style';

/** @namespace ScandiBreather/Src/Component/BreathingProvider/Component/BreathingProviderComponent */
export class BreathingProviderComponent extends PureComponent {
  static propTypes = {
    isBreathingEnabled: PropTypes.bool.isRequired,
    children: ChildrenType.isRequired
  };

  render() {
    const { isBreathingEnabled, children } = this.props;

    return (
      <div block="BreathingProvider" mods={{ isEnabled: isBreathingEnabled }}>
        {children}
      </div>
    );
  }
}

export default BreathingProviderComponent;
