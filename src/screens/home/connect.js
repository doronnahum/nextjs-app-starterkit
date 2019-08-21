import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getWindowSize } from 'src/store/global/selectors';
import { } from 'src/store/global/actions';
import { } from 'src/store/global/selectors';
const mapStateToProps = state => ({
  // windowSize: getWindowSize(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({

  }, dispatch),
});

export default comp => connect(mapStateToProps, mapDispatchToProps)(comp);
