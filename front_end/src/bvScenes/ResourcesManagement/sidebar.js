const options = [
    {
      key:'resourcesManagement',
      label:'Resources',
      leftIcon:'ion-android-folder',
      children :[
        {
          key: 'user',
          label: 'User',
          leftIcon: 'ion-document'
        },
        {
          key: 'employee',
          label: 'Employee',
          leftIcon: 'ion-document'
        },
        {
          key: 'profile',
          label: 'Profile',
          leftIcon: 'ion-document'
        }
      ]
    }
  ];

  const resourcesManagementSidebar = options;
  export default resourcesManagementSidebar;