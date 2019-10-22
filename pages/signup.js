import React from 'react';
import Screen from 'src/screens/signup';
import { withTranslation } from 'src/i18n';
import WithAuth from 'src/components/WithAuth';
import Head from 'next/head';
import Local from 'src/components/Local';

function SignupPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Signup</title>
      </Head>
      <Screen />
      <Local />
    </React.Fragment>
  );
}

const ExtendedWithAuth = WithAuth({ isPrivate: false })(SignupPage);
ExtendedWithAuth.getInitialProps = async () => ({
  namespacesRequired: ['signup', 'common'],
});

export default withTranslation(['signup', 'common'])(ExtendedWithAuth);
