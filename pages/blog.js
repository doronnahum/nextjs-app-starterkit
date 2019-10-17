/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Screen from 'src/screens/blog';
import { withTranslation } from 'src/i18n';
import WithAuth from 'src/components/WithAuth';
import Head from 'next/head';

function BlogPage(props) {
  return (
    <React.Fragment>
      <Head>
        <title>Blog</title>
      </Head>
      <Screen {...props} />
    </React.Fragment>
  );
}

BlogPage.getInitialProps = async () => ({
  namespacesRequired: ['blog', 'common'],
});
const Extended = WithAuth({ isPrivate: true })(withTranslation('blog')(BlogPage));
export default Extended;
