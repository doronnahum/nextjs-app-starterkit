import React from 'react';
import Page from 'src/components/Page';
import Head from 'next/head';
import Screen from '../screens/exampleScreen';

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
    <h1>Example Private Page</h1>
    <Screen />
  </React.Fragment>
));
