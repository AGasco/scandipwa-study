/* eslint-disable linebreak-style */
/* eslint-disable indent */
import { connect } from 'react-redux';

import ColorInverterComponent from './ColorInverter.component';

/** @namespace ScandiDarkTheme/Src/Component/ColorInverter/Container/mapStateToProps */
export const mapStateToProps = (_state) => ({
  isDarkModeEnabled: _state.DarkModeReducer.enabled
});

/** @namespace ScandiDarkTheme/Src/Component/ColorInverter/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ColorInverterComponent);
