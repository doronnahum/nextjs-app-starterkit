
import React from 'react';
import Screen from 'src/screens/blog';
import { withTranslation } from 'src/i18n';
import WithAuth from 'src/components/WithAuth';
import Head from 'next/head';
import Local from 'src/components/Local';

function BlogPage() {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <React.Fragment>
      <Head>
        <title>Blog</title>
      </Head>
      <Screen />
      <Local />
    </React.Fragment>
  );
}

const ExtendedWithAuth = WithAuth({ isPrivate: true })(BlogPage);
ExtendedWithAuth.getInitialProps = async () => ({
  namespacesRequired: ['blog', 'common'],
});

export default withTranslation(['blog', 'common'])(ExtendedWithAuth);
