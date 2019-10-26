/* eslint-disable camelcase */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  isLoading,
  getTokenValidateState,
  getLastAction,
} from 'src/redux/auth/auth.selectors';
import { reAuthenticate, actionsType } from 'src/redux/auth/auth.actions';
import { isOnline } from 'src/redux/global/global.selectors';
import { getToken as getTokenFromStorage } from 'src/services/userToken';
import {
  DisplayLoader,
  onRedirect,
  DisplayRedirect,
  DisplayOffLine,
} from './WithAuth.utils';


export default (config, WrappedComponent) => {
  const { isPrivate } = config;

  const WithAuth = ({
    auth_isLoading,
    auth_tokenValidateState,
    auth_lastAction,
    global_isOnline,
    ...resProps
  }) => {
    const [onRedirectStart, setOnRedirect] = useState(false);
    // Make the redirect request only one time after we setOnRedirect
    React.useEffect(() => {
      if (onRedirectStart) { onRedirect(); }
    }, [onRedirectStart]);

    React.useEffect(() => {
      if (auth_lastAction === actionsType.ON_CHECK_TOKEN_FAILED_NETWORK_ERROR) {
        const tokenFromStorage = getTokenFromStorage();
        if (tokenFromStorage) {
          reAuthenticate(resProps.dispatch, tokenFromStorage);
        }
      }
    }, [global_isOnline]);

    // Display Redirect
    if (onRedirectStart) return <DisplayRedirect />;

    if (isPrivate && !auth_tokenValidateState) {
      if (auth_lastAction === actionsType.ON_CHECK_TOKEN_FAILED_NETWORK_ERROR) {
        const tokenFromStorage = getTokenFromStorage();
        if (tokenFromStorage) {
          return <DisplayOffLine dispatch={resProps.dispatch} tokenFromStorage={tokenFromStorage}/>;
        }
      }

      // When to redirect the user to sign-in page
      // -----------------------------------------
      if (
        auth_isLoading === false // The Token test is over
        || auth_lastAction === actionsType.ON_LOGOUT_END // User is just logout
        || !getTokenFromStorage() // token is not in storage
      ) {
        setOnRedirect(true);
      }
      return <DisplayLoader />;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...resProps} />;
  };

  WithAuth.defaultProps = {
    auth_isLoading: null,
    auth_tokenValidateState: null,
    auth_lastAction: null,
    global_isOnline: null,
  };

  WithAuth.propTypes = {
    auth_isLoading: PropTypes.bool,
    auth_tokenValidateState: PropTypes.bool,
    auth_lastAction: PropTypes.bool,
    global_isOnline: PropTypes.bool,
    dispatch: PropTypes.func.isRequired,
  };

  const mapStateToProps = (store) => ({
    auth_isLoading: isLoading(store),
    auth_tokenValidateState: getTokenValidateState(store),
    auth_lastAction: getLastAction(store),
    global_isOnline: isOnline(store),
  });

  return connect(mapStateToProps)(WithAuth);
};
