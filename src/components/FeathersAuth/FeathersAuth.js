import React, { useState } from 'react';
// import PropTypes from 'prop-types';

function FeathersAuth() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="feathersAuth_component">
      <h2>I am a FeathersAuth Hook Component</h2>
      <p>You clicked {isLoading} times</p>
      <button type="button" onClick={() => setIsLoading()}>
        Click me
      </button>
    </div>
  );
}

export default FeathersAuth;
FeathersAuth.propTypes = {
};
