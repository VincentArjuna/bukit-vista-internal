import asyncComponent from '../../helpers/AsyncFunc';

const routes = [
  {
    path: 'arrivalList',
    component: asyncComponent(() => import('./scenes/ArrivalList'))
  },
  {
    path: 'current',
    component: asyncComponent(() => import('./scenes/Booking/scenes/Current'))
  }
];
const operationRoutes=routes;
export default operationRoutes;