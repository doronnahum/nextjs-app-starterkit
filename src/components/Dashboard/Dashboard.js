import React from 'react';
import classnames from 'classnames';

// styles
import useStyles from './styles';

// components
import Header from './Header';
import Sidebar from './Sidebar';

// context
import { useLayoutState } from './LayoutContext';

function Layout() {
  const classes = useStyles();

  // global
  const layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
            fakeToolbar
        </div>
      </>
    </div>
  );
}

export default Layout;
