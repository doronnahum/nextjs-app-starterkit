import React from 'react';
// import PropTypes from 'prop-types';

const withAuth = (config) => (WrappedComponent) => {
  // eslint-disable-next-line no-unused-vars
  const { isPrivate } = config;

  const WithAuth = (props) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <WrappedComponent {...props} />
  );
  return WithAuth;
};


export default withAuth;
