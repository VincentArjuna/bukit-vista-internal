import Auth from './auth/reducer';
import App from './app/reducer';
import Table1 from '../bvScenes/Operation/scenes/ArrivalList/components/Table1/redux/reducers';
import Table2 from '../bvScenes/Operation/scenes/ArrivalList/components/Table2/redux/reducers';
import Table3 from '../bvScenes/Operation/scenes/ArrivalList/components/Table3/redux/reducers';
import Table4 from '../bvScenes/Operation/scenes/ArrivalList/components/Table4/redux/reducers';
import Table5 from '../bvScenes/Operation/scenes/ArrivalList/components/Table5/redux/reducers';
import Table6 from '../bvScenes/Operation/scenes/ArrivalList/components/Table6/redux/reducers';
import Table7 from '../bvScenes/Operation/scenes/ArrivalList/components/Table7/redux/reducers';
import Table8 from '../bvScenes/Operation/scenes/ArrivalList/components/Table8/redux/reducers';
import Table9 from '../bvScenes/Operation/scenes/ArrivalList/components/Table9/redux/reducers';
import Table10 from '../bvScenes/Operation/scenes/ArrivalList/components/Table10/redux/reducers';
import Table11 from '../bvScenes/Operation/scenes/ArrivalList/components/Table11/redux/reducers';
import Table12 from '../bvScenes/Operation/scenes/ArrivalList/components/Table12/redux/reducers';
import Table13 from '../bvScenes/Operation/scenes/ArrivalList/components/Table13/redux/reducers';
import Table14 from '../bvScenes/Operation/scenes/ArrivalList/components/Table14/redux/reducers';
import Table15 from '../bvScenes/Operation/scenes/ArrivalList/components/Table15/redux/reducers';
import Table16 from '../bvScenes/Operation/scenes/ArrivalList/components/Table16/redux/reducers';
import Table17 from '../bvScenes/Operation/scenes/ArrivalList/components/Table17/redux/reducers';
import Table18 from '../bvScenes/Operation/scenes/ArrivalList/components/Table18/redux/reducers';
import Table19 from '../bvScenes/Operation/scenes/ArrivalList/components/Table19/redux/reducers';
import Table20 from '../bvScenes/Operation/scenes/ArrivalList/components/Table20/redux/reducers';
import Table21 from '../bvScenes/Operation/scenes/ArrivalList/components/Table21/redux/reducers';

import BookingCurrent from '../bvScenes/Operation/scenes/Booking/scenes/Current/redux/reducers';
import Header from '../bvComponents/Header/redux/reducers';
import EditCell from '../bvScenes/Operation/scenes/ArrivalList/components/EditCell/redux/reducers';
import DateRange from '../bvComponents/DateRange/redux/reducers';
//import ArrivalList from '../bvScenes/Operation/scenes/ArrivalList/redux/reducers';

export default {
  Auth,
  App,
  ...Table1,
  ...Table2,
  ...Table3,
  ...Table4,
  ...Table5,
  ...Table6,
  ...Table7,
  ...Table8,
  ...Table9,
  ...Table10,
  ...Table11,
  ...Table12,
  ...Table13,
  ...Table14,
  ...Table15,
  ...Table16,
  ...Table17,
  ...Table18,
  ...Table19,
  ...Table20,
  ...Table21,
  ...BookingCurrent,
  ...Header,
  ...EditCell,
  ...DateRange
 // ...ArrivalList,
};
