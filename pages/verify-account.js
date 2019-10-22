import React from 'react';
import Screen from 'src/screens/verifyAccount';
import Page from 'src/components/Page';
import Head from 'next/head';

export default Page({
  isPrivate: false,
  i18n: ['verifyAccount', 'common'],
  showLocalButton: true,
  displayName: 'verifyAccountPage',
})(() => (
  <React.Fragment>
    <Head>
      <title>Verify Account</title>
    </Head>
    <Screen />
  </React.Fragment>
));

