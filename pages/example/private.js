import React from 'react';
import Screen from 'src/screens/example/privateScreen';
import Page from 'src/components/Page';
import Head from 'next/head';

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
