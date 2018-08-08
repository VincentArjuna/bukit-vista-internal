import Auth from './auth/reducer';
import App from './app/reducer';
import ArrivalTable from '../bvScenes/Operation/scenes/ArrivalList/components/ArrivalTable/redux/reducers';
import BookingCurrent from '../bvScenes/Operation/scenes/Booking/scenes/Current/redux/reducers';
import Employee from '../bvScenes/ResourcesManagement/scenes/Employee/redux/reducers';
import DateRange from '../bvComponents/DateRange/redux/reducers';
import Searchbar from '../bvComponents/Searchbar/redux/reducers';
import Listing from '../bvScenes/MarketBuilding/scenes/Listing/redux/reducers';
import Unit from '../bvScenes/MarketBuilding/scenes/Unit/redux/reducers';
export default {
  Auth,
  App,
  ...ArrivalTable,
  ...BookingCurrent,
  ...Employee,
  ...DateRange,
  ...Searchbar,
  ...Listing,
  ...Employee,
  ...Unit,
};
