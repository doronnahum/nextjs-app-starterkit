import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core';
import './blog.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'src/i18n';
// import {actions} from 'src/redux/global/actions'
const useStyles = makeStyles(() => createStyles({
  root: {
    backgroundColor: 'red',
  },
}));

// eslint-disable-next-line react/prop-types
function BlogScreen({ t }) {
  const classes = useStyles();
  return (
    <div className={`${classes.root} blog_screen`}>
      <h2>I am a Blog screen</h2>
      <h2>name from i18n {t('screenName')}</h2>
    </div>
  );
}

const Extended = withTranslation('blog')(BlogScreen);

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
BlogScreen.propTypes = {
  // eslint-disable-next-line
  classes: PropTypes.object,
};
