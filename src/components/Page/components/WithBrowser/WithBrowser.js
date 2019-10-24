/* eslint-disable react/jsx-props-no-spreading */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setNetworkOnline, setWindowSize } from 'src/redux/global/global.actions';
import throttle from 'lodash/throttle';

class ReactBrowser extends PureComponent {
  handleWindowSize = throttle(() => {
    const { actions } = this.props;
    actions.setWindowSize(window.innerWidth, window.innerHeight);
  }, 100);

  componentDidMount() {
    const { actions } = this.props;
    if (typeof window !== 'undefined' && typeof navigator !== 'undefined' && navigator) {
      actions.setNetworkOnline(navigator.onLine);
      this.handleWindowSize();
    }

    window.addEventListener('online', this.handleOnline);
    window.addEventListener('offline', this.handleOffline);
    window.addEventListener('resize', this.handleWindowSize);
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleOnline);
    window.removeEventListener('offline', this.handleOffline);
    window.removeEventListener('resize', this.handleWindowSize);
  }

  handleOnline = () => {
    const { actions } = this.props;
    actions.setNetworkOnline(true);
  };

  handleOffline = () => {
    const { actions } = this.props;
    actions.setNetworkOnline(false);
  };

  render() {
    return null;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ setNetworkOnline, setWindowSize }, dispatch),
  };
}

ReactBrowser.propTypes = {
  actions: PropTypes.objectOf({
    setNetworkOnline: PropTypes.func.isRequired,
    setWindowSize: PropTypes.func.isRequired,
  }).isRequired,
};

const Extend = connect(
  null,
  mapDispatchToProps,
)(ReactBrowser);

export default (WrappedComponent) => {
  const WithBrowser = (props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <React.Fragment>
      <WrappedComponent {...props} />
      <Extend />
    </React.Fragment>
  );
  return WithBrowser;
};
