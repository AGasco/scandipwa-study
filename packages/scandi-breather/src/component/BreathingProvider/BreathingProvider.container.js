/* eslint-disable indent */
import { connect } from 'react-redux';

import BreathingProvider from './BreathingProvider.component';

/** @namespace ScandiBreather/Src/Component/BreathingProvider/Container/mapStateToProps */
export const mapStateToProps = (_state) => ({
  isBreathingEnabled: _state.BreathingReducer.enabled
});

/** @namespace ScandiBreather/Src/Component/BreathingProvider/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BreathingProvider);
