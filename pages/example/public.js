import React from 'react';
import Screen from 'src/screens/example/publicScreen';
import Page from 'src/components/Page';
import Head from 'next/head';

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
