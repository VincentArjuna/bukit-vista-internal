import React from 'react';
import Table from './tableStyle';
import aUnit from '../../../Unit/redux/unit/actions';

const {renderDataUnit}=aUnit;

const ViewTable = ({columns,dataList,total,page}) => (
  <Table columns={columns} dataSource={dataList} 
    pagination={page} />
);

export { ViewTable };
