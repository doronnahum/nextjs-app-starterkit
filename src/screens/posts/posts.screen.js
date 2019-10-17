import React from 'react';
import { withTranslation } from 'src/i18n';
import PropTypes from 'prop-types';

function PostsScreen({ t }) {
  return (
    <div className="posts_screen">
      <h2>I am a Posts screen {t('h1')}</h2>
    </div>
  );
}

const Extended = withTranslation('common')(PostsScreen);
export default Extended;

PostsScreen.propTypes = {
  t: PropTypes.func.isRequired,
};
