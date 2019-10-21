/* eslint-disable no-console */
import React from 'react';
import { withTranslation } from 'src/i18n';
import WithAuth from 'src/components/WithAuth';
import Dashboard from 'src/components/Dashboard';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';

import { LayoutProvider } from 'src/components/Dashboard/LayoutContext';
import { UserProvider } from 'src/components/Dashboard/UserContext';
import Themes from 'src/themes';

function Admin() {
  return (
    <LayoutProvider>
      <UserProvider>
        <ThemeProvider theme={Themes.default}>
          <CssBaseline />
          <Dashboard />
        </ThemeProvider>
      </UserProvider>
    </LayoutProvider>
  );
}

const ExtendedWithAuth = WithAuth({ isPrivate: true })(Admin);
ExtendedWithAuth.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(ExtendedWithAuth);
