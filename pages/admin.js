/* eslint-disable no-console */
import React from 'react';
import { withTranslation } from 'src/i18n';
import WithAuth from 'src/components/WithAuth';
import Dashboard from 'src/components/Dashboard';

import { LayoutProvider } from 'src/components/Dashboard/LayoutContext';
import { UserProvider } from 'src/components/Dashboard/UserContext';


function Admin() {
  return (
    <LayoutProvider>
      <UserProvider>
        <Dashboard />
      </UserProvider>
    </LayoutProvider>
  );
}

const ExtendedWithAuth = WithAuth({ isPrivate: true })(Admin);
ExtendedWithAuth.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(ExtendedWithAuth);
