import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: 'listing',
    component: asyncComponent(() => import('./scenes/Listing'))
  },
  {
    path: 'unit',
    component: asyncComponent(() => import('./scenes/Unit'))
  },
  {
    path: 'property',
    component: asyncComponent(() => import('./scenes/Property'))
  }
];
const marketBuildingRoutes=routes;
export default marketBuildingRoutes;