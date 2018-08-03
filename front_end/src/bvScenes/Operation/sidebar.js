const options = [
    {
      key: 'arrivalList',
      label: 'Arrival List',
      leftIcon: 'ion-document'
      
    },
    {
      key:'booking',
      label:'Booking',
      leftIcon:'ion-document',
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