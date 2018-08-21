import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import asyncComponent from '../helpers/AsyncFunc';
//import customRoutes from '../../customApp/router';
import operationRoutes from '../bvScenes/Operation/router';
import marketBuildingRoutes from '../bvScenes/MarketBuilding/router';
import resourcesManagementRoutes from '../bvScenes/ResourcesManagement/router';
const routes = [
  {
    path: '',
    component: asyncComponent(() => import('../bvScenes/Operation/scenes/ArrivalList')),
  },
  ...operationRoutes,
  ...marketBuildingRoutes,
  ...resourcesManagementRoutes
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
