/* eslint-disable no-console */
import React from 'react';
import { withTranslation } from 'src/i18n';
import WithAuth from 'src/components/WithAuth';

function Home() {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div>
      Welcome
      <p>url: {process.env.url}</p>
    </div>
  );
}

const ExtendedWithAuth = WithAuth({ isPrivate: true })(Home);
ExtendedWithAuth.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(ExtendedWithAuth);
