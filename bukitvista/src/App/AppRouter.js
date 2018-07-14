import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../helpers/AsyncFunc';
//import customRoutes from '../../customApp/router';

const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../bvScenes/ArrivalList/ArrivalList')),
  },
  {
    path: 'arrivalList',
    component: asyncComponent(() => import('../bvScenes/ArrivalList/ArrivalList')),
  },
  {
    path: 'booking/current',
    component: asyncComponent(() => import('../bvScenes/Booking/Current/Current')),
  },
  {
    path: 'booking/archive',
    component: asyncComponent(() => import('../bvScenes/Booking/Archive/Archive')),
  },
  {
    path: 'marketBuilding/area',
    component: asyncComponent(() => import('../bvScenes/MarketBuilding/Area/Area')),
  },
  {
    path: 'marketBuilding/listing',
    component: asyncComponent(() => import('../bvScenes/MarketBuilding/Listing/Listing')),
  },
  {
    path: 'marketBuilding/property',
    component: asyncComponent(() => import('../bvScenes/MarketBuilding/Property/Property')),
  },
  {
    path: 'marketBuilding/unit',
    component: asyncComponent(() => import('../bvScenes/MarketBuilding/Unit/Unit')),
  },
  {
    path: 'administration/employee',
    component: asyncComponent(() => import('../bvScenes/Administration/Employee/Employee')),
  },
  {
    path: 'administration/user',
    component: asyncComponent(() => import('../bvScenes/Administration/User/User')),
  },
  {
    path: 'administration/profile',
    component: asyncComponent(() => import('../bvScenes/Administration/Profile/Profile')),
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
