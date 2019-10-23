
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createStyles } from '@material-ui/core';
import './home.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withTranslation } from 'src/i18n';

const useStyles = makeStyles(() => createStyles({
  root: {
    backgroundColor: 'red',
  },
}));

function homeScreen({ t }) {
  const classes = useStyles();
  return (
    <div className={`${classes.root} home_screen`}>
      <h2>I am a home screen</h2>
      <h2>name from i18n {t('screenName')}</h2>
    </div>
  );
}

const Extended = withTranslation('home')(homeScreen);

function mapStateToProps(store) {
  return {
    store,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Extended);
homeScreen.propTypes = {
  t: PropTypes.func.isRequired,
};
