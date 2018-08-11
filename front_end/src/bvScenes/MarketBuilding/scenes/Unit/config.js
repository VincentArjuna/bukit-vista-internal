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
          key:'unit_id',
          render: object => renderCell(object, 'TextCell', 'unit_id')
      },
      {
        title:'Name',
        key:'unit_name',
        render: object => renderCell(object, 'TextCell', 'unit_name')
      },
      {
        title:'Base Price',
        key:'unit_base_price',
        render: object => renderCell(object, 'TextCell', 'unit_base_price')
      },
      {
        title:'Currency',
        key:'unit_currency',
        render: object => renderCell(object, 'TextCell', 'unit_currency')
      },
      {
        title:'Capacity',
        key:'unit_capacity',
        render: object => renderCell(object, 'TextCell', 'unit_capacity')
      },
      {
        title:'Number of Room',
        key:'unit_number_room',
        render: object => renderCell(object, 'TextCell', 'unit_number_room')
      },
      {
        title:'Swimming Pool',
        key:'unit_swimming_pool',
        render: object => renderCell(object, 'TextCell', 'unit_swimming_pool')
      },
      {
        title:'% Owner',
        key:'unit_percentage_owner',
        render: object => renderCell(object, 'TextCell', 'unit_percentage_owner')
      },
      {
        title:'% BukitVista',
        key:'unit_percentage_bv',
        render: object => renderCell(object, 'TextCell', 'unit_percentage_bv')
      },
      {
        title:'Property ID',
        key:'property_id',
        render: object => renderCell(object, 'TextCell', 'property_id')
      },
  ];
  
  const filterTypes=[
      {
        key:'0',
        name:'Default'
      },
      {
        key:'1',
        name:'Unit ID'
      },
      {
        key:'2',
        name:'Unit Name'
      },
      {
          key:'3',
          name:'Property ID'
      },
      {
        key:'4',
        name:'Property Name'
    },
      {
          key:'5',
          name:'Onboard Date'
      },
    ];
  const title= "Unit";
  const mode="unit";
  export {columns,title,filterTypes,mode};