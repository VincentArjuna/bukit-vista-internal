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
        key:'listing_id',
        render: object => renderCell(object, 'TextCell', 'listing_id')
    },
    {
        title:'Name',
        key:'listing_name',
        render: object => renderCell(object, 'TextCell', 'listing_name')
    },
    {
        title:'Status',
        key:'listing_status',
        render: object => renderCell(object, 'TextCell', 'listing_status')
    },
    {
        title:'Instant Book',
        key:'listing_instant_book',
        render: object => renderCell(object, 'TextCell', 'listing_instant_book')
    },
    {
        title:'Account Owner',
        key:'listing_account_owner',
        render: object => renderCell(object, 'TextCell', 'listing_account_owner')
    },
    {
        title:'Account BV',
        key:'listing_account_bv',
        render: object => renderCell(object, 'TextCell', 'listing_account_bv')
    },
    {
        title:'Remark',
        key:'listing_remark',
        render: object => renderCell(object, 'TextCell', 'listing_remark')
    },
    {
        title:'Unit ID',
        key:'unit_id',
        render: object => renderCell(object, 'TextCell', 'unit_id')
    },
    {
        title:'Profile ID',
        key:'profile_id',
        render: object => renderCell(object, 'TextCell', 'profile_id')
    },
    {
        title:'Employee ID',
        key:'employee_id',
        render: object => renderCell(object, 'TextCell', 'employee_id')
    },
];

const filterTypes=[
    {
      key:0,
      name:'Default'
    },
    {
      key:1,
      name:'Listing ID'
    },
    {
      key:2,
      name:'Listing Name'
    },
    {
        key:3,
        name:'Unit ID'
    },
    {
        key:4,
        name:'Unit Name'
    },
    {
        key:5,
        name:'Profile Name'
    },
    {
        key:6,
        name:'Employee Name'
    },
    {
        key:7,
        name:'Onboard Date'
    },
  ];
const title= "Listing";
const mode="listing";
export {columns,title,filterTypes,mode};