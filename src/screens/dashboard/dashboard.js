/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { DashboardApp, DashboardMenu } from 'feathers-mongoose-casl-dashboard/lib';
import Router from 'next/router';
import { LayoutProvider } from 'src/components/DashboardLayout/LayoutContext';
import { UserProvider } from 'src/components/DashboardLayout/UserContext';
import DashboardLayout from 'src/components/DashboardLayout';
import SidebarLink from 'src/components/DashboardLayout/Sidebar/SidebarLink';
import { getDeep } from 'src/utils';
import {
  FormatSize as TypographyIcon,
} from '@material-ui/icons';


import 'feathers-mongoose-casl-dashboard/lib/style.css';
import 'redux-admin/lib/style.css';
import 'antd/lib/style/index.css';

const getUrl = function getUrl() {
  const query = Router.router.query && Router.router.query.screen;
  return query;
};
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: null,
    };
  }

  componentDidMount() {
    const screenName = getUrl();
    this.setState({ screenName });
    Router.router.events.on('beforeHistoryChange', this.handleRouteChange);
  }

  componentWillUnmount() {
    Router.router.events.off('beforeHistoryChange', this.handleRouteChange);
  }

  handleRouteChange = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const screenName = urlParams.get('screen');
    // eslint-disable-next-line react/destructuring-assignment
    if (screenName !== this.state.screenName) {
      this.setState({ screenName });
    }
  }

  render() {
    const { screenName } = this.state;
    return (
      <LayoutProvider>
        <UserProvider>
          <DashboardLayout
            renderMain={() => (
              <DashboardApp
                url={screenName}
              />
            )}
            renderSidebarBody={({ isSidebarOpened }) => (
              <DashboardMenu
                renderItem={(item) => {
                  const icon = getDeep(
                    item,
                    'data.dashboardConfig.sideBarIconName',
                  );
                  const localName = getDeep(item, `data.dashboardConfig.i18n.${'en'}.serviceName`);
                  return (
                    <SidebarLink
                      key={item.result.name}
                      isSidebarOpened={isSidebarOpened}
                      id={item.result.name}
                      label={item.result.name}
                      link={`/dashboard?screen=${item.result.name}`}
                      icon={<TypographyIcon />}
                    />
                  );
                }}
              />
            )}
          />
        </UserProvider>
      </LayoutProvider>
    );
  }
}

export default Dashboard;
