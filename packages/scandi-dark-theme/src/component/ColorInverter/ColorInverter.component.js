/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
/* eslint-disable indent */
/* eslint-disable react/no-unused-prop-types */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { ChildrenType } from 'Type/Common';

import './ColorInverter.style';

/** @namespace ScandiDarkTheme/Src/Component/ColorInverter/Component/ColorInverter */
export class ColorInverter extends PureComponent {
  static propTypes = {
    isDarkModeEnabled: PropTypes.bool.isRequired,
    children: ChildrenType.isRequired
  };

  render() {
    const { isDarkModeEnabled, children } = this.props;

    console.log('isDarkModeEnabled', isDarkModeEnabled);

    return (
      <div block="ColorInverter" mods={{ isInverted: isDarkModeEnabled }}>
        {children}
      </div>
    );
  }
}

export default ColorInverter;
