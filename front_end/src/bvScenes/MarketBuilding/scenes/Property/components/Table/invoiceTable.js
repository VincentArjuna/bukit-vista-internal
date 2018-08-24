import React from 'react';
import Input from '../../../../../../bvComponents/Uielements/input';
import Button from '../../../../../../bvComponents/Uielements/button';
import { stringToPosetiveInt } from '../../../../../../helpers/utility';
import Table from './tableStyle';
import aUnit from '../../../Unit/redux/unit/actions';

const {renderDataUnit}=aUnit;
const onPageChange=(pagination,filters,sorter)=>{
};
const ViewTable = ({columns,dataList,total,page}) => (
  <Table columns={columns} dataSource={dataList} 
    pagination={{total:total,currentPage:page,page:page}}/>
);

export { ViewTable };
