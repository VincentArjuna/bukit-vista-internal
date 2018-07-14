//import getDevSidebar from '../../customApp/sidebar';
const options = [
  {
    key: 'arrivalList',
    label: 'Arrival List',
    leftIcon: 'ion-android-mail',
  },
  {
    key: 'booking',
    label: 'Booking',
    leftIcon: 'ion-android-mail',
    children:
    [
      {
        key:'booking/current',
        label: 'Current',
        leftIcon: 'ion-android-mail',
      },
      {
        key:'booking/archive',
        label: 'Archive',
        leftIcon: 'ion-android-mail',
      },
    ]
  },
  {
    key: 'marketBuilding',
    label: 'Market Building',
    leftIcon: 'ion-android-mail',
    children:
    [
      {
        key:'marketBuilding/property',
        label: 'Property',
        leftIcon: 'ion-android-mail',
      },
      {
        key:'marketBuilding/unit',
        label: 'Unit',
        leftIcon: 'ion-android-mail',
      },
      {
        key:'marketBuilding/listing',
        label: 'Listing',
        leftIcon: 'ion-android-mail',
      },
      {
        key:'marketBuilding/area',
        label: 'Area',
        leftIcon: 'ion-android-mail',
      },      
    ]
  },
  {
    key:'administration',
    label: 'Administration',
    leftIcon: 'ion-android-mail',
    children:
    [
      {
        key:'administration/user',
        label: 'User',
        leftIcon: 'ion-android-mail',
      },
      {
        key:'administration/profile',
        label: 'Profile',
        leftIcon: 'ion-android-mail',
      },
      {
        key:'administration/employee',
        label: 'Employee',
        leftIcon: 'ion-android-mail',
      },
    ]
  }
];
export default options;
