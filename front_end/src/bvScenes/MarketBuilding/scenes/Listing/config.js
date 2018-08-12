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
        key:'listing_id',
        render: object => renderCell(object, 'TextCell', 'listing_id',null)
    },
    {
        title:'Name',
        key:'listing_name',
        render: object => renderCell(object, 'TextCell', 'listing_name',null)
    },
    {
        title:'Status',
        key:'listing_status',
        render: object => renderCell(object, 'TextCell', 'listing_status',choices[0])
    },
    {
        title:'Instant Book',
        key:'listing_instant_book',
        render: object => renderCell(object, 'TextCell', 'listing_instant_book',choices[1])
    },
    {
        title:'Account Owner',
        key:'listing_account_owner',
        render: object => renderCell(object, 'TextCell', 'listing_account_owner',null)
    },
    {
        title:'Account BV',
        key:'listing_account_bv',
        render: object => renderCell(object, 'TextCell', 'listing_account_bv',null)
    },
    {
        title:'Remark',
        key:'listing_remark',
        render: object => renderCell(object, 'TextCell', 'listing_remark',choices[2])
    },
    {
        title:'Unit ID',
        key:'unit_id',
        render: object => renderCell(object, 'TextCell', 'unit_id',null)
    },
    {
        title:'Profile ID',
        key:'profile_id',
        render: object => renderCell(object, 'TextCell', 'profile_id',null)
    },
    {
        title:'Employee ID',
        key:'employee_id',
        render: object => renderCell(object, 'TextCell', 'employee_id',null)
    },
];

const filterTypes=[
    {
      key:'0',
      name:'Default'
    },
    {
      key:'1',
      name:'Listing ID'
    },
    {
      key:'2',
      name:'Listing Name'
    },
    {
        key:'3',
        name:'Unit ID'
    },
    {
        key:'4',
        name:'Unit Name'
    },
    {
        key:'5',
        name:'Profile Name'
    },
    {
        key:'6',
        name:'Employee Name'
    },
    {
        key:'7',
        name:'Onboard Date'
    },
  ];
const choices=[
    {
        '1':'Partner',
        '0':'Non-Partner'   
    },
    {
        '1':'Yes',
        '0':'No'
    },
    {
        '1':'New',
        '2':'VA',
        '3':'CS',
        '4':'NP',
        '5':'Others'
    }
];
const title= "Listing";
const mode="listing";
export {columns,title,filterTypes,mode};