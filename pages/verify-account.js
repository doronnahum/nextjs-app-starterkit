import React from 'react';
import Screen from 'src/screens/verifyAccount';
import { withTranslation } from 'src/i18n';
import WithAuth from 'src/components/WithAuth';
import WithNotifier from 'src/components/WithNotifier';
import Head from 'next/head';
import Local from 'src/components/Local';

function SigninPage() {
  return (
    <React.Fragment>
      <Head>
        <title>Verify Account</title>
      </Head>
      <Screen />
      <Local />
    </React.Fragment>
  );
}

const ExtendedWithAuth = WithAuth({ isPrivate: false })(WithNotifier(SigninPage));
ExtendedWithAuth.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation(['common'])(ExtendedWithAuth);
