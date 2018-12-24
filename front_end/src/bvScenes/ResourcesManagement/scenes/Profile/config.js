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
          key:'profile_id',
          width:'25%',
          render: object => renderCell(object, 'TextCell', 'profile_id',null)
      },
      {
          title:'Name',
          key:'profile_name',
          width:'25%',
          render: object => renderCell(object, 'TextCell', 'profile_name',null)
      },
      {
        title:'Email',
        key:'profile_email',
        width:'25%',
        render: object => renderCell(object, 'TextCell', 'profile_email',null)
    },
  ];
  const title= "Profile";
  const mode="profile";
  export {columns,title,mode};
  