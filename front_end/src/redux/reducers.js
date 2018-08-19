import Auth from './auth/reducer';
import App from '../App/redux/app/reducer';
import ArrivalTable from '../bvScenes/Operation/scenes/ArrivalList/components/ArrivalTable/redux/reducers';
import BookingCurrent from '../bvScenes/Operation/scenes/Booking/scenes/Current/redux/reducers';
import Employee from '../bvScenes/ResourcesManagement/scenes/Employee/redux/reducers';
import DateRange from '../bvComponents/DateRange/redux/reducers';
import Searchbar from '../bvComponents/Searchbar/redux/reducers';
import Listing from '../bvScenes/MarketBuilding/scenes/Listing/redux/reducers';
import Unit from '../bvScenes/MarketBuilding/scenes/Unit/redux/reducers';
import Property from '../bvScenes/MarketBuilding/scenes/Property/redux/reducers';
import Notes from '../bvScenes/Operation/scenes/ArrivalList/components/NotesCell/redux/reducers';

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
  ...Property,
  ...Notes,
};
