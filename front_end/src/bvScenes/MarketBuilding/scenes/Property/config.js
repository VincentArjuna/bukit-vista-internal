import {
    LinkCell,
    TextCell
  } from '../../../../bvComponents/Table/helper/helperCells';
  
  const renderCell = (object, type, key) => {
      const value = object[key];
      switch (type) {
        case 'LinkCell':
          return LinkCell(value);
        case 'TextCell':
          return TextCell(value);
        default:
          return TextCell(value);
      }
    };
    
    const columns=[
      {
          title:'ID',
          key:'property_id',
          render: object => renderCell(object, 'TextCell', 'property_id')
      },
      {
          title:'Name',
          key:'property_name',
          render: object => renderCell(object, 'TextCell', 'property_name')
      },
      {
          title:'Type',
          key:'property_type',
          render: object => renderCell(object, 'TextCell', 'property_type')
      },
      {
          title:'Status',
          key:'property_status',
          render: object => renderCell(object, 'TextCell','property_status')
      },
      {
          title:'Package',
          key:'property_package',
          render: object => renderCell(object, 'TextCell', 'property_package')
      },
      {
          title:'Design',
          key:'property_design',
          render: object => renderCell(object, 'TextCell', 'property_design')
      },
      {
          title:'Proximity',
          key:'property_proximity',
          render: object => renderCell(object, 'TextCell', 'property_proximity')
      },
      {
          title:'Life Support',
          key:'property_life_support',
          render: object => renderCell(object, 'TextCell', 'property_life_support')
      },
      {
          title:'Service',
          key:'profile_service',
          render: object => renderCell(object, 'TextCell', 'profile_service')
      },
      {
          title:'Owner Group Link',
          key:'property_owner_group_link',
          render: object => renderCell(object, 'TextCell', 'property_owner_group_link')
      },
      {
            title:'Area ID',
            key:'area_id',
            render: object => renderCell(object, 'TextCell', 'area_id')
      },
      {
        title:'Employee ID',
        key:'employee_id',
        render: object => renderCell(object, 'TextCell', 'employee_id')
  }
  ];
  
  const filterTypes=[
      {
        key:'0',
        name:'Default'
      },
      {
        key:'1',
        name:'Property ID'
      },
      {
        key:'2',
        name:'Property Name'
      },
      {
          key:'3',
          name:'Area Name'
      },
      {
          key:'5',
          name:'Employee Name'
      },
    ];
  const title= "Property";
  const mode="property";
  export {columns,title,filterTypes,mode};