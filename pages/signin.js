import React from 'react';
import Screen from 'src/screens/signin';
import { withTranslation } from 'src/i18n';
import WithAuth from 'src/components/WithAuth';
import Head from 'next/head';
import Local from 'src/components/Local';

function SigninPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Signin</title>
      </Head>
      <Screen />
      <Local />
    </React.Fragment>
  );
}

const ExtendedWithAuth = WithAuth({ isPrivate: false })(SigninPage);
ExtendedWithAuth.getInitialProps = async () => ({
  namespacesRequired: ['signin', 'common'],
});

export default withTranslation(['blog', 'common'])(ExtendedWithAuth);
