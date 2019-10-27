import React from 'react';
import classnames from 'classnames';
import { i18n } from 'src/i18n';
// styles
import useStyles from './styles';

// components
import Header from './Header';
import Sidebar from './Sidebar';

// context
import { useLayoutState } from './LayoutContext';

function Layout(props) {
  const classes = useStyles();

  // global
  const layoutState = useLayoutState();

  return (
    <div className={classes.root} dir={i18n.dir()}>
      <>
        <Header />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          {props.renderMain(props)}
        </div>
      </>
    </div>
  );
}

export default Layout;

Layout.defaultProps = {
  renderMain: 
}