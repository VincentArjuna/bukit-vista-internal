import React, { Component } from 'react';
import TableWrapper, { CustomizedTableWrapper } from './antTable.style';
import clone from 'clone';
import { connect } from 'tls';
import { runInThisContext } from 'vm';
import EditCell from '../../bvScenes/Operation/scenes/ArrivalList/components/editCell';
import NotesCell from '../../bvScenes/Operation/scenes/ArrivalList/components/notesCell';
const scroll = { y: 240 };
export default class MyTable extends Component {
  constructor(props) {
    super(props);
    //this.onChange = this.onChange.bind(this);
    this.state = {
      size: 'default',
      columns: clone(this.props.columns)
    };
  }
  componentDidMount(){
    (this.props.mode === 'arrivalList' ? this.state.columns=this.createColumns(this.state.columns):null);
  }

  createColumns=(columns)=> {
    const editColumn={
      title:'Edit',
      dataIndex:'edit',
      render: (text, record, index) => (
        <EditCell index={index} onDeleteCell={this.onDeleteCell} dataList={this.props.dataList}/>
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
    console.log(this.props);
    return (
        <TableWrapper
          {...this.state}
          pagination={true}
          className={classes}
          dataSource={this.props.dataList}
        />
    );
  }
}
