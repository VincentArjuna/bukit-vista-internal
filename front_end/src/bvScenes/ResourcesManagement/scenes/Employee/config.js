import {
    LinkCell,
    TextCell,
    CopyCell
  } from '../../../../bvComponents/Table/helper/helperCells';
  
  const renderCell = (object, type, key,choice) => {
      let value = object[key];
      if(choice !== null){
          value= choice[value];
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
          key:'employee_id',
          width:'10%',
          render: object => renderCell(object, 'TextCell', 'employee_id',null)
      },
      {
          title:'Name',
          key:'employee_name',
          width:'20%',
          render: object => renderCell(object, 'TextCell', 'employee_name',null)
      },
      {
          title:'Address',
          key:'employee_address',
          width:'20%',
          render: object => renderCell(object, 'TextCell', 'employee_address',null)
      },
      {
          title:'Phone',
          key:'employee_phone',
          width:'20%',
          render: object => renderCell(object, 'TextCell', 'employee_phone',null)
      },
      {
          title:'Status',
          key:'employee_status',
          width:'10%',
          render: object => renderCell(object, 'TextCell', 'employee_status',choices[0])
      }
  ];
  const choices=[
      {
          '0':'Inactive',
          '1':'Active'
      },
  ];
  const title= "Employee";
  const mode="employee";
  export {columns,title,mode};
  