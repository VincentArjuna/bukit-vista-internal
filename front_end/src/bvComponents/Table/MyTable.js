import React, { Component } from 'react';
import {connect} from 'react-redux';
import TableWrapper, { CustomizedTableWrapper } from './antTable.style';
import clone from 'clone';
import {Button} from 'antd';
import EditCell from '../../bvScenes/Operation/scenes/ArrivalList/components/EditCell/editCell';
import NotesCell from '../../bvScenes/Operation/scenes/ArrivalList/components/NotesCell/notesCell';
import actions from '../../bvScenes/Operation/scenes/Booking/scenes/Current/redux/bookingCurrent/actions';
import moment from 'moment';

export default class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'default',
      columns: clone(this.props.columns),
    };
  }
  componentDidMount(){
    (this.props.mode === 'arrivalList' ? this.setState({ columns:this.createColumns(clone(this.props.columns)),}):null);
  }

  createColumns=(columns)=> {
    const editColumn={
      title:'Details',
      dataIndex:'details',
      render: (text, record, index) => (
        <EditCell key={this.props.key} index={index} onDeleteCell={this.onDeleteCell} dataList={this.props.dataList}/>
      )
    }
    const notesColumn={
      title:'Add Notes',
      dataIndex:'notes',
      render: (text, record, index) => (
        <NotesCell index={index} onDeleteCell={this.onDeleteCell} dataList={this.props.dataList} />
      )
    }
    columns.push(notesColumn);
    columns.push(editColumn);
    return columns;
  };



  render() {
    const classes = `isoCustomizedTableWrapper`;
    const that=this;
    const paging={
      total:this.props.total,
      currentPage:this.props.page,
      page:this.props.page,
      onChange(page){
        if(that.props.mode==='arrivalList'){
          that.props.onPageChange(that.props.index,that.props.area,moment().format('YYYY-MM-DD').toString(),0,null,0,page);
        }else{
          that.props.onPageChange(0,0,0,0,page);
        }
      }
    }
    return (
      <div>
        <TableWrapper
          {...this.state}
          className={classes}
          pagination={paging}
          dataSource={this.props.dataList}
        />
        <Button onClick={this.onClick}>Coba</Button>
      </div>
    );
  }
}
