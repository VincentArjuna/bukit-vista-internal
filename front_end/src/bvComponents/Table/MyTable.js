import React, { Component } from 'react';
import {connect} from 'react-redux';
import TableWrapper from './antTable.style';
import clone from 'clone';
import EditCell from '../../bvScenes/Operation/scenes/ArrivalList/components/EditCell/editCell';
import NotesCell from '../../bvScenes/Operation/scenes/ArrivalList/components/NotesCell/notesCell';
import moment from 'moment';

class MyTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'default',
      columns: clone(this.props.columns),
      page: 1,
    };
  }
  componentDidMount(){
    (this.props.mode === 'arrivalList' ? this.setState({ columns:this.createColumns(clone(this.props.columns)),}):null);
  }

  createColumns=(columns)=> {
    const that=this;
    const editColumn={
      title:'Details',
      dataIndex:'details',
      render: (text, record, index) => (
        <EditCell key={this.props.key} index={index} onDeleteCell={this.onDeleteCell} dataList={this.props.dataList} 
          onPageChange={this.props.onPageChange}
          Searchbar={this.props.Searchbar}
          DateRange={this.props.DateRange}
          page={this.state.page}
          indexTable={that.props.index}
          area={this.props.area}
          />
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
    console.log(this.props.mode);
    const classes = `isoCustomizedTableWrapper`;
    const that=this;
    const paging={
      total:this.props.total,
      currentPage:this.props.page,
      page:this.props.page,
      onChange(page){
        let pg = page;
        if(that.props.mode==='arrivalList'){
          that.props.onPageChange(
            that.props.index,
            that.props.area,
            that.props.DateRange.date,
            that.props.Searchbar.filterType,
            that.props.Searchbar.filterer,
            that.props.DateRange.dateType,
            pg);
        }else if(that.props.mode==='bookingCurrent'){
          that.props.onPageChange(
            that.props.DateRange.date,
            that.props.Searchbar.filterer,
            that.props.DateRange.dateType,
            that.props.Searchbar.filterType,
            pg);
        }else if(that.props.mode==='listing' || that.props.mode==='unit' ||that.props.mode==='property' ){
          that.props.onPageChange(that.props.Searchbar.filterType,that.props.Searchbar.filterer,10,pg);
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
      </div>
    );
  }
}
function mapStateToProps(state){
  return{
    DateRange:state.daterange,
    Searchbar:state.searchbar,
  };
}
export default connect(mapStateToProps,null)(MyTable);
