import React from 'react';
import Page from 'src/components/Page';
import Head from 'next/head';
import Screen from '../screens/privateScreen';

export default Page({
  isPrivate: true,
  i18n: ['common'],
  showLocalButton: true,
  displayName: 'ExamplePrivatePage',
})(() => (
  <React.Fragment>
    <Head>
      <title>Example Private Page</title>
    </Head>
    <Screen />
  </React.Fragment>
));
