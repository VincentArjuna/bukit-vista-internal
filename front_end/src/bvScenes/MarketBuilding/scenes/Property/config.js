import {
    LinkCell,
    TextCell,
    CopyCell
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
        case 'CopyCell':
            let desc="Copy";
            if(value==null){
                desc="No URL";
            }
            return CopyCell(value,desc);
        default:
          return TextCell(value);
      }
    };
    
    const columns=[
      {
          title:'ID',
          key:'property_id',
          render: object => renderCell(object, 'TextCell', 'property_id',null)
      },
      {
          title:'Name',
          key:'property_name',
          render: object => renderCell(object, 'TextCell', 'property_name',null)
      },
      {
          title:'Type',
          key:'property_type',
          render: object => renderCell(object, 'TextCell', 'property_type',choices[0])
      },
      {
          title:'Status',
          key:'property_status',
          render: object => renderCell(object, 'TextCell','property_status',choices[1])
      },
      {
          title:'Package',
          key:'property_package',
          render: object => renderCell(object, 'TextCell', 'property_package',choices[2])
      },
      {
          title:'Design',
          key:'property_design',
          render: object => renderCell(object, 'TextCell', 'property_design',choices[3])
      },
      {
          title:'Proximity',
          key:'property_proximity',
          render: object => renderCell(object, 'TextCell', 'property_proximity',choices[4])
      },
      {
          title:'Life Support',
          key:'property_life_support',
          render: object => renderCell(object, 'TextCell', 'property_life_support',choices[5])
      },
      {
          title:'Service',
          key:'property_service',
          render: object => renderCell(object, 'TextCell', 'property_service',choices[6])
      },
      {
          title:'Owner Group Link',
          key:'property_owner_group_link',
          render: object => renderCell(object, 'CopyCell', 'property_owner_group_link',null)
      },
      {
            title:'Area ID',
            key:'area_id',
            render: object => renderCell(object, 'TextCell', 'area_id',null)
      },
      {
        title:'Employee ID',
        key:'employee_id',
        render: object => renderCell(object, 'TextCell', 'employee_id',null)
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
const choices=[
    {//type : 0
        '1':'House',
        '2':'Villa',
        '3':'Apartment',
        '4':'Guesthouse',
        '5':'Resort'
    },
    {//status :1
        '1':'Partner',
        '0':'Non-Partner',
    },
    {//package :2
        '1':'Partnership',
        '2':'Exclusive',
        '3':'Allocation',
        '4':'Tokeet',
        '5':'Negotiable',
        '6':'Non-Negotiable'
    },
    {//design :3
        '1': 'Basic',
        '2': 'Adventurous',
        '3': 'Unique',
        '4': 'Modern Comfort',
        '5': 'Luxury',
    },
    {//proximity : 4
        '1':'Walking distance to attraction',
        '2':'5-10 minutes drive to attraction',
        '3':'Far from center of attraction',
        '4':'Remote location',
    },
    {//life support: 5
        '1': 'Walk to supermarket/restaurant',
        '2': 'Drive to supermarket/restaurant',
        '3': 'No nearby shops',
    },
    {//service : 6
        '1':'Onsite Staff',
        '2': 'Self Service'
    }
];
const title= "Property";
const mode="property";
export {columns,title,filterTypes,mode,choices};