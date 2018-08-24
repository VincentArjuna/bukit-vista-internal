import {
    LinkCell,
    TextCell
  } from '../../../../bvComponents/Table/helper/helperCells';
  
  const renderCell = (object, type, key,choice) => {
      let value = object[key];
      if(choice !== null){
        value=choice[value];
      }
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
          render: object => renderCell(object, 'TextCell', 'unit_id',null)
      },
      {
        title:'Name',
        key:'unit_name',
        render: object => renderCell(object, 'TextCell', 'unit_name',null)
      },
      {
        title:'Base Price',
        key:'unit_base_price',
        render: object => renderCell(object, 'TextCell', 'unit_base_price',null)
      },
      {
        title:'Currency',
        key:'unit_currency',
        render: object => renderCell(object, 'TextCell', 'unit_currency',choices[0])
      },
      {
        title:'Capacity',
        key:'unit_capacity',
        render: object => renderCell(object, 'TextCell', 'unit_capacity',null)
      },
      {
        title:'Number of Room',
        key:'unit_number_room',
        render: object => renderCell(object, 'TextCell', 'unit_number_room',null)
      },
      {
        title:'Swimming Pool',
        key:'unit_swimming_pool',
        render: object => renderCell(object, 'TextCell', 'unit_swimming_pool',choices[1])
      },
      {
        title:'% Owner',
        key:'unit_percentage_owner',
        render: object => renderCell(object, 'TextCell', 'unit_percentage_owner',null)
      },
      {
        title:'% BukitVista',
        key:'unit_percentage_bv',
        render: object => renderCell(object, 'TextCell', 'unit_percentage_bv',null)
      },
      {
        title:'Property ID',
        key:'property_id',
        render: object => renderCell(object, 'TextCell', 'property_id',null)
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
  const columnsPropertyUnit=[
      {
        title:'ID',
        key:'unit_id',
        width:'18%',
        render: object => renderCell(object, 'TextCell', 'unit_id',null)
      },
      {
      title:'Name',
      key:'unit_name',
      width:'18%',
      render: object => renderCell(object, 'TextCell', 'unit_name',null)
      },
      {
        title:'Base Price',
        key:'unit_base_price',
        width:'18%',
        render: object => renderCell(object, 'TextCell', 'unit_base_price',null)
      },
      {
      title:'Currency',
      key:'unit_currency',
      width:'18%',
      render: object => renderCell(object, 'TextCell', 'unit_currency',choices[0])
      },
      {
        title:'Capacity',
        key:'unit_capacity',
        width:'18%',
        render: object => renderCell(object, 'TextCell', 'unit_capacity',null)
      },
      {
        title:'Number of Room',
        key:'unit_number_room',
        render: object => renderCell(object, 'TextCell', 'unit_number_room',null)
      },
      
  ];
  const choices=[
    {
      '1':'IDR',
      '2':'USD',
      '3':'EUR'
    },
    {
      '1':'Private Pool',
      '2':'Shared Pool',
      '3':'No Pool'
    }
  ];
  const title= "Unit";
  const mode="unit";
  export {columns,title,filterTypes,mode,columnsPropertyUnit};