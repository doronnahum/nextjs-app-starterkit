import React from 'react';
import Page from 'src/components/Page';
import Head from 'next/head';
import Screen from '../screens/exampleScreen';

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
    <h1>Example Public Page</h1>
    <Screen />
  </React.Fragment>
));
