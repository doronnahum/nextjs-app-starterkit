---
to: src/screens/<%= h.changeCase.lower(name) %>/<%= h.changeCase.lower(name) %>.js
---
<% const Screen = h.changeCase.title(name) -%>
<% const compClassName = h.changeCase.lower(name) -%>
import React from 'react';
<% if(!locals.withStyle) { -%>//<%}-%>import PropTypes from 'prop-types';
<% if(locals.withStyle) { -%>
import { makeStyles, createStyles } from '@material-ui/core';
<%}-%>
<% if(locals.scss) { -%>
import './<%= h.changeCase.lower(name) %>.scss';
<%}-%>
<% if(locals.redux) { -%>
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
<%}-%>
import { withTranslation } from 'src/i18n';

<% if(locals.scss) { -%>
const useStyles = makeStyles(() => createStyles({
  root: {
    backgroundColor: 'red',
  },
}));

<%}-%>
function <%=Screen %>Screen({ t }) {
<% if(locals.scss) { -%>
  const classes = useStyles();
<%}-%>
  return (
    <div <% if(locals.withStyle) { -%>className={`${classes.root} <%=compClassName %>_screen`}<%}-%><% if(!locals.withStyle) { -%>className="<%=compClassName %>_screen"<%}-%>>
      <h2>I am a <%=Screen %> screen</h2>
      <h2>name from i18n {t('screenName')}</h2>
    </div>
  );
}

const Extended = withTranslation('<%= h.changeCase.lower(name) %>')(<%=Screen %>Screen);

<% if(locals.redux) { -%>
function mapStateToProps(store) {
  return {
    store,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ }, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Extended);
<%}-%>
<% if(!locals.redux) { -%>
<% if(locals.withStyle) { -%>
export default (Extended);
<%}-%>
<% if(!locals.withStyle) { -%>
export default Extended;
<%}-%>
<%}-%>
<%=Screen %>Screen.propTypes = {
<% if(locals.withStyle) { -%>
  // eslint-disable-next-line
  classes: PropTypes.object,
<%}
-%>
};
