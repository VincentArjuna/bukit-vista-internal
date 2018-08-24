import React, { Component } from "react";
import { connect } from 'react-redux';
import moment from 'moment';
import LayoutContentWrapper from "../../../../../../bvComponents/Utility/layoutWrapper.js";
import LayoutContent from "../../../../../../bvComponents/Utility/layoutContent";
import {columns,title,filterTypes,mode} from './config.js';
import MyTable from '../../../../../../bvComponents/Table/MyTable';
import Header from '../../../../../../bvComponents/Header/index.js';
import actions from './redux/bookingCurrent/actions';

const {renderDataBc,onPageChange}=actions;
class Current extends Component {
  componentDidMount(){
    this.props.Searchbar.filterType=0;
    this.props.Searchbar.filterer=null;
    this.props.renderDataBc(
      this.props.DateRange.date,
      this.props.Searchbar.filterer,
      this.props.DateRange.dateType,
      this.props.Searchbar.filterType
    );
  }

  componentWillMount(){
    this.props.Searchbar.filterType=0;
    this.props.Searchbar.filterer=null;
    this.props.DateRange.dateType=0;
    this.props.DateRange.date= moment().format('YYYY-MM-DD').toString();
  }

  render() {
    return (    
        <div>
          <Header title={title} mode={mode} columns={columns} filters={filterTypes}/>
            <LayoutContentWrapper>
              <LayoutContent>
              <MyTable 
                columns={columns}
                dataList={this.props.Current.results}
                total={this.props.Current.total}
                mode={mode}
                onPageChange={this.props.onPageChange}
                page={this.props.Current.page}
              />
                </LayoutContent>
            </LayoutContentWrapper>
        </div>
    );
  }
}


function mapStateToProps(state){
  return {
    Current :state.bookingCurrent,
    DateRange: state.daterange,
    Searchbar:state.searchbar,
  };
}
export default connect(
  mapStateToProps,
  {renderDataBc,onPageChange}
)(Current);

