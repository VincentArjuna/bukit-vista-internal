import Auth from './auth/reducer';
import App from './app/reducer';
import Mails from './mail/reducer';
import Calendar from './calendar/reducer';
import Box from './box/reducer';
import Notes from './notes/reducer';
import Todos from './todos/reducer';
import Contacts from './contacts/reducer';
import Cards from './card/reducer';
import Chat from './chat/reducers';
import DynamicChartComponent from './dynamicEchart/reducer';
import Ecommerce from './ecommerce/reducer';
import ThemeSwitcher from './themeSwitcher/reducer';
import Invoices from './invoice/reducer';
import LanguageSwitcher from './languageSwitcher/reducer';
import YoutubeSearch from './youtubeSearch/reducers';
import DevReducers from '../customApp/redux/reducers';
import Articles from './articles/reducers';
import Investors from './investors/reducers';
import Table1 from '../bvScenes/Operation/scenes/ArrivalList/components/Table1/redux/reducers';
import Table2 from '../bvScenes/Operation/scenes/ArrivalList/components/Table2/redux/reducers';
import Table3 from '../bvScenes/Operation/scenes/ArrivalList/components/Table3/redux/reducers';
import Table4 from '../bvScenes/Operation/scenes/ArrivalList/components/Table4/redux/reducers';
import Table5 from '../bvScenes/Operation/scenes/ArrivalList/components/Table5/redux/reducers';
//import ArrivalList from '../bvScenes/Operation/scenes/ArrivalList/redux/reducers';

export default {
  Auth,
  App,
  ThemeSwitcher,
  LanguageSwitcher,
  Mails,
  Calendar,
  Box,
  Notes,
  Todos,
  Contacts,
  Cards,
  Chat,
  DynamicChartComponent,
  Ecommerce,
  Invoices,
  YoutubeSearch,
  Articles,
  Investors,
  ...DevReducers,
  ...Table1,
  ...Table2,
  ...Table3,
  ...Table4,
  ...Table5
 // ...ArrivalList,
};
