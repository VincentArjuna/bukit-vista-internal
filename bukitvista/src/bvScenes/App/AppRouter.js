import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../../helpers/AsyncFunc';
//import customRoutes from '../../customApp/router';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../ArrivalList')),
  },
  {
    path: 'arrivalList',
    component: asyncComponent(() => import('../ArrivalList')),
  },
  {
    path: 'booking/archive',
    component: asyncComponent(() => import('../Booking/Archive')),
  },
  {
    path: 'booking/current',
    component: asyncComponent(() => import('../Booking/Current')),
  },
  {
    path: 'marketbuilding/property',
    component: asyncComponent(() => import('../MarketBuilding/Property')),
  },
  {
    path: 'marketbuilding/unit',
    component: asyncComponent(() => import('../MarketBuilding/Unit')),
  },
  {
    path: 'marketbuilding/listing',
    component: asyncComponent(() => import('../MarketBuilding/Listing')),
  },
  {
    path: 'administration/employee',
    component: asyncComponent(() => import('../Administration/Employee')),
  },
  {
    path: 'administration/profile',
    component: asyncComponent(() => import('../Administration/Profile')),
  },
  {
    path: 'administration/user',
    component: asyncComponent(() => import('../Admnistration User')),
  },
  {
    path: 'administration/user/permission',
    component: asyncComponent(() => import('../Admnistration/User/Permission')),
  },
  {
    path: 'administration/user/role',
    component: asyncComponent(() => import('../Admnistration/User/Role')),
  },
  {
    path: 'accounting',
    component: asyncComponent(() => import('../Accounting')),
  },
];

class AppRouter extends Component {
  render() {
    const { url, style } = this.props;
    return (
      <div style={style}>
        {routes.map(singleRoute => {
          const { path, exact, ...otherProps } = singleRoute;
          return (
            <Route
              exact={exact === false ? false : true}
              key={singleRoute.path}
              path={`${url}/${singleRoute.path}`}
              {...otherProps}
            />
          );
        })}
      </div>
    );
  }
}

export default AppRouter;
