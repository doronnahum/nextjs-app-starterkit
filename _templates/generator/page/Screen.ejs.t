---
to: src/screens/<%= h.changeCase.lcFirst(name) %>/<%= h.changeCase.lcFirst(name) %>.js
---
<% const Screen = h.changeCase.pascal(name) -%>
<% const compClassName = h.changeCase.lcFirst(name) -%>
import React from 'react';
import PropTypes from 'prop-types';
<% if(locals.withStyle) { -%>
import { makeStyles, createStyles } from '@material-ui/core';
<%}-%>
<% if(locals.scss) { -%>
import './<%= h.changeCase.lcFirst(name) %>.scss';
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

const Extended = withTranslation('<%= h.changeCase.lcFirst(name) %>')(<%=Screen %>Screen);

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
    t: PropTypes.func.isRequired,
};
