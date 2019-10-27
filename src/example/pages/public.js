import React from 'react';
import Page from 'src/components/Page';
import Head from 'next/head';
import Screen from '../screens/publicScreen';

export default Page({
  isPrivate: false,
  i18n: ['common'],
  showLocalButton: true,
  displayName: 'ExamplePublicPage',
})(() => (
  <React.Fragment>
    <Head>
      <title>Example Public Page</title>
    </Head>
    <Screen />
  </React.Fragment>
));
