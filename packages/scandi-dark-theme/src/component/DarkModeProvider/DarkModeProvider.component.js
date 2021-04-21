/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable @scandipwa/scandipwa-guidelines/derived-class-names */
/* eslint-disable indent */

import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import { ChildrenType } from 'Type/Common';

import './DarkModeProvider.style';

/** @namespace ScandiDarkTheme/Src/Component/DarkModeProvider/Component/DarkModeProviderComponent */
export class DarkModeProviderComponent extends PureComponent {
  static propTypes = {
    isDarkModeEnabled: PropTypes.bool.isRequired,
    children: ChildrenType.isRequired
  };

  render() {
    const { children, isDarkModeEnabled } = this.props;

    return (
      <div block="DarkModeProvider" mods={{ isEnabled: isDarkModeEnabled }}>
        {children}
      </div>
    );
  }
}

export default DarkModeProviderComponent;
