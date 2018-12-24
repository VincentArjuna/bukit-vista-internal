import React from 'react';
import ImageCellView from './imageCell';
import DeleteCell from './deleteCell';
import EditableCell from './editableCell';
import FilterDropdown from './filterDropdown';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Button } from 'antd';

const ImageCell = src => <ImageCellView src={src} />;
const LinkCell = (link, href) => <a href={href ? href : '#'}>{link}</a>;
const TextCell = (text,colorOption) => {
  if(colorOption!=="black"){
    return <p style={{color:colorOption}}><b>{text}</b></p>;
  }else{
    return <p>{text}</p>;
  }
};

const CopyCell= (text,desc) => 
  <CopyToClipboard text={text}>
    <Button>{desc}</Button>
  </CopyToClipboard>;

export {
  ImageCell,
  LinkCell,
  TextCell,
  EditableCell,
  DeleteCell,
  FilterDropdown,
  CopyCell,
};
