import React from 'react';
import ImageCellView from './imageCell';
import DeleteCell from './deleteCell';
import EditableCell from './editableCell';
import FilterDropdown from './filterDropdown';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import {Button } from 'antd';

const ImageCell = src => <ImageCellView src={src} />;
const LinkCell = (link, href) => <a href={href ? href : '#'}>{link}</a>;
const TextCell = (text,boldOption) => boldOption? <p><b>{text}</b></p> : <p>{text}</p>;
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
