/* eslint-disable react/sort-comp */
/* eslint-disable react/jsx-props-no-spreading */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withSnackbar } from 'notistack';
import { removeNotification } from 'src/redux/global/global.actions';

class Notifier extends Component {
  displayed = [];

  componentDidUpdate() {
    const { notifications = [], enqueueSnackbar, actions } = this.props;

    notifications.forEach(({ key, message, options = {} }) => {
      // Do nothing if snackbar is already displayed
      if (this.displayed.includes(key)) return;
      // Display snackbar using notistack
      enqueueSnackbar(message, {
        ...options,
        onClose: (event, reason, keyToClose) => {
          if (options.onClose) {
            options.onClose(event, reason, keyToClose);
          }
          // Dispatch action to remove snackbar from redux store
          actions.removeNotification(key);
        },
      });
      // Keep track of snackbars that we've displayed
      this.storeDisplayed(key);
    });
  }

  storeDisplayed = (id) => {
    this.displayed = [...this.displayed, id];
  };

  shouldComponentUpdate({ notifications: newSnacks = [] }) {
    if (!newSnacks.length) {
      this.displayed = [];
      return false;
    }

    const { notifications: currentSnacks, closeSnackbar, actions } = this.props;
    let notExists = false;
    for (let i = 0; i < newSnacks.length; i += 1) {
      const newSnack = newSnacks[i];
      if (newSnack.dismissed) {
        closeSnackbar(newSnack.key);
        actions.removeNotification(newSnack.key);
      }

      if (!notExists) {
        notExists = !currentSnacks.filter(({ key }) => newSnack.key === key).length;
      }
    }
    return notExists;
  }

  render() {
    return null;
  }
}

const mapStateToProps = (store) => ({
  notifications: store.global.notifications,
});


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ removeNotification }, dispatch),
  };
}

const Extend = withSnackbar(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notifier));

Notifier.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.shape({
    removeNotification: PropTypes.func.isRequired,
  }).isRequired,
  closeSnackbar: PropTypes.func.isRequired,
  enqueueSnackbar: PropTypes.func.isRequired,
};

export default (WrappedComponent) => {
  const WithNotifier = (props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <React.Fragment>
      <WrappedComponent {...props} />
      <Extend />
    </React.Fragment>
  );
  return WithNotifier;
};
