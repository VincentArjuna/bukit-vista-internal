const options = [
    {
      key: 'arrivalList',
      label: 'Arrival List',
      leftIcon: 'ion-android-people'
      
    },
    {
      key:'booking',
      label:'Booking',
      leftIcon:'ion-android-folder',
      children :[
        {
          key: 'current',
          label: 'Current',
          leftIcon: 'ion-document'
        }
      ]
    }
  ];

  const operationSidebar = options;
  export default operationSidebar;