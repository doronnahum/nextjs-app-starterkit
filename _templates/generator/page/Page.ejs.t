---
to: pages/<%= h.changeCase.lower(name) %>.js
---
<% const pageLower = h.changeCase.lower(name) -%>
<% const pageUpper = h.changeCase.title(name) -%>
import React from 'react';
import Screen from 'src/screens/<%=pageLower %>';
import { withTranslation } from 'src/i18n';
import WithAuth from 'src/components/WithAuth';
import Head from 'next/head';

function <%=pageUpper %>Page(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <React.Fragment>
      <Head>
        <title><%=pageUpper %></title>
      </Head>
      <Screen {...props} />
    </React.Fragment>
  );
}

<%=pageUpper %>Page.getInitialProps = async () => ({
  namespacesRequired: ['<%=pageLower %>', 'common'],
});
const Extended = WithAuth({ isPrivate: <%=isPrivate %> })(withTranslation('<%=pageLower %>')(<%=pageUpper %>Page));
export default Extended;
