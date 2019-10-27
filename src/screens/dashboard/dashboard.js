import React from 'react';
import { DashboardApp } from 'src/localnode/feathers-mongoose-casl-dashboard';
import 'feathers-mongoose-casl-dashboard/lib/style.css';
import 'redux-admin/lib/style.css';
import Router from 'next/router';

const getUrl = function getUrl() {
  const query = Router.router.query && Router.router.query.screen;
  return query;
};
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      screenName: getUrl(),
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
      <DashboardApp
        url={screenName}
      />
    );
  }
}

export default Dashboard;
