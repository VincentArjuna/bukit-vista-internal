import React, { Component } from 'react';
import {connect} from 'react-redux';
import TableWrapper from './antTable.style';
import clone from 'clone';
import EditCell from '../../bvScenes/Operation/scenes/ArrivalList/components/EditCell/editCell';
import NotesCell from '../../bvScenes/Operation/scenes/ArrivalList/components/NotesCell/notesCell';

class MyTable extends Component {
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

  onChange=(pagination,filters,sorter)=>{
    console.log(pagination.current)
    console.log(sorter.columnKey);
    console.log(sorter.order);
    let sort=0;
    if(sorter.order === 'ascend'){
      if(sorter.columnKey==='booking_guest_eta'){
        sort=1;
      }else if(sorter.columnKey==='booking_guest_name'){
        sort=3;
      }else if(sorter.columnKey==='unit_name'){
        sort=5;
      }
    }else if(sorter.order === 'descend'){
      if(sorter.columnKey==='booking_guest_eta'){
        sort=2;
      }else if(sorter.columnKey==='booking_guest_name'){
        sort=4;
      }else if(sorter.columnKey==='unit_name'){
        sort=6;
      }
    }

    console.log("sorting-"+"page :"+this.props.page+"-sort :"+this.props.sort);
    if(this.props.mode==='arrivalList'){
      this.props.onPageChange(
        this.props.index,
        this.props.area,
        this.props.DateRange.date,
        this.props.Searchbar.filterType,
        this.props.Searchbar.filterer,
        this.props.DateRange.dateType,
        pagination.current,
        sort
      );
    }else if(this.props.mode==='bookingCurrent'){
      this.props.onPageChange(
        this.props.DateRange.date,
        this.props.Searchbar.filterer,
        this.props.DateRange.dateType,
        this.props.Searchbar.filterType,
        pagination.current
      );
    }else if(this.props.mode==='listing' || this.props.mode==='unit' ||this.props.mode==='property' ){
      this.props.onPageChange(this.props.Searchbar.filterType,this.props.Searchbar.filterer,10,pagination.current);
    }
  }

  render() {
    const classes = `isoCustomizedTableWrapper`;
    const paging={
      total:this.props.total,
      currentPage:this.props.page,
      page:this.props.page,
    }
    return (
      <div>
        <TableWrapper
          {...this.state}
          className={classes}
          pagination={paging}
          dataSource={this.props.dataList}
          onChange={this.onChange}
          onRow={(record,index)=>{
            switch(this.props.mode){
              case "bookingCurrent":
                return{
                  onClick: () => {
                    console.log(this.props.dataList[index].booking_id);
                  }
                }
              case "listing":
                return{
                  onClick: () => {
                    console.log(record["listing_id"]);
                  }
                }
              case "unit":
                return{
                  onClick: () => {
                    console.log(record["unit_id"]);
                  }
                }
              case "property":
                return{
                  onClick: () => {
                    console.log(record["property_id"]);
                  }
                }
              default:

            }
          }}
          loading={this.props.loading}
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
