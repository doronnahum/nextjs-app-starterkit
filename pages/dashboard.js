import React from 'react';
import Dashboard from 'src/screens/dashboard';

import { LayoutProvider } from 'src/components/Dashboard/LayoutContext';
import { UserProvider } from 'src/components/Dashboard/UserContext';
import Page from 'src/components/Page';
import Head from 'next/head';

export default Page({
  isPrivate: false,
  i18n: ['common'],
  showLocalButton: true,
  displayName: 'DashboardPage',
})(() => (
  <React.Fragment>
    <Head>
      <title>Dashboard</title>
    </Head>
    <LayoutProvider>
      <UserProvider>
        <Dashboard />
      </UserProvider>
    </LayoutProvider>
  </React.Fragment>
));
