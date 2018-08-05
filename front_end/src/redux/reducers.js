import Auth from './auth/reducer';
import App from './app/reducer';
import ArrivalTable from '../bvScenes/Operation/scenes/ArrivalList/components/ArrivalTable/redux/reducers';
import BookingCurrent from '../bvScenes/Operation/scenes/Booking/scenes/Current/redux/reducers';
import EditCell from '../bvScenes/Operation/scenes/ArrivalList/components/EditCell/redux/reducers';
import DateRange from '../bvComponents/DateRange/redux/reducers';


export default {
  Auth,
  App,
  ...ArrivalTable,
  ...BookingCurrent,
  ...EditCell,
  ...DateRange
};
