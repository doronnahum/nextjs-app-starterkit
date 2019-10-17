import React from 'react';
import Posts from 'src/screens/posts';
import { withTranslation } from 'src/i18n';
import WithAuth from 'src/components/WithAuth';

function Home(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Posts {...props} />
  );
}

Home.getInitialProps = async () => ({
  namespacesRequired: ['Home'],
});
const Extended = WithAuth((withTranslation('home')(Home)), { private: true });

export default Extended;
