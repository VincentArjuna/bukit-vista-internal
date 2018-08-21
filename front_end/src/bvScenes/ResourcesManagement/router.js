import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: 'employee',
    component: asyncComponent(() => import('./scenes/Employee'))
  },
  {
    path: 'profile',
    component: asyncComponent(() => import('./scenes/Profile'))
  },
  {
    path: 'user',
    component: asyncComponent(() => import('./scenes/User'))
  }
];
const resourcesManagementRoutes=routes;
export default resourcesManagementRoutes;