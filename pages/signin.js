import React from 'react';
import Screen from 'src/screens/signin';
import Page from 'src/components/Page';
import Head from 'next/head';

export default Page({
  isPrivate: false,
  i18n: ['signin', 'common'],
  showLocalButton: true,
  displayName: 'SigninPage',
})(() => (
  <React.Fragment>
    <Head>
      <title>Sign in</title>
    </Head>
    <Screen />
  </React.Fragment>
));
