/* eslint-disable indent */
import { connect } from 'react-redux';

import { enableBreathing } from '../../store/Breathing/Breathing.action';
import ModeToggleButton from './ModeToggleButton.component';

/** @namespace ScandiBreather/Src/Component/ModeToggleButton/Container/mapStateToProps */
export const mapStateToProps = (_state) => ({
  isBreathingEnabled: _state.BreathingReducer.enabled
});

/** @namespace ScandiBreather/Src/Component/ModeToggleButton/Container/mapDispatchToProps */
export const mapDispatchToProps = (_dispatch) => ({
  enableBreathing: (enabled) => _dispatch(enableBreathing(enabled))
});

export default connect(mapStateToProps, mapDispatchToProps)(ModeToggleButton);
