/* eslint-disable indent */
import { connect } from 'react-redux';

import DarkModeProviderComponent from './DarkModeProvider.component';

/** @namespace ScandiDarkTheme/Src/Component/DarkModeProvider/Container/mapStateToProps */
export const mapStateToProps = (_state) => ({
  isDarkModeEnabled: _state.DarkModeReducer.enabled
});

/** @namespace ScandiDarkTheme/Src/Component/DarkModeProvider/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DarkModeProviderComponent);
