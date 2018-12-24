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
          key:'user_id',
          width:'25%',
          render: object => renderCell(object, 'TextCell', 'user_id',null)
      },
      {
          title:'Email',
          key:'user_email',
          width:'25%',
          render: object => renderCell(object, 'TextCell', 'user_email',null)
      },
      {
          title:'Employee ID',
          key:'employee_id',
          width:'25%',
          render: object => renderCell(object, 'TextCell', 'employee_id',null)
      }
  ];
  const title= "User";
  const mode="user";
  export {columns,title,mode};
  