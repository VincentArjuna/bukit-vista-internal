import React,{Component} from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import LayoutContent from "../../../../bvComponents/Utility/layoutContent";
import {columns,title,filterTypes,mode} from './config.js';
import MyTable from '../../../../bvComponents/Table/MyTable';
import Header from '../../../../bvComponents/Header/index.js';
import actions from './redux/listing/actions';

const {renderDataListing,onPageChange}=actions;
class Listing extends Component {
    componentDidMount(){
      this.props.renderDataListing(0,0,10);
    }
    render() {
      return (    
          <div>
            <Header title={title} mode={mode} columns={columns} filters={filterTypes}/>
              <LayoutContentWrapper>
                <LayoutContent>
                <MyTable 
                  columns={columns}
                  dataList={this.props.Listing.results}
                  total={this.props.Listing.total}
                  mode="bookingCurrent"
                  onPageChange={this.props.onPageChange}
                  page={this.props.Listing.page}
                />
                  </LayoutContent>
              </LayoutContentWrapper>
          </div>
      );
    }
  }
  
  
  function mapStateToProps(state){
    return {
      Listing :state.listing,
    };
  }
  export default connect(
    mapStateToProps,
    {renderDataListing,onPageChange}
  )(Listing);