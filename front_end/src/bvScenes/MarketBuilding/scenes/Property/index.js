import React,{Component} from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import LayoutContent from "../../../../bvComponents/Utility/layoutContent";
import {columns,title,filterTypes,mode} from './config.js';
import MyTable from '../../../../bvComponents/Table/MyTable';
import Header from '../../../../bvComponents/Header/index.js';
import actions from './redux/property/actions';

const {renderDataProperty,onPageChange}=actions;

class Property extends Component {
    componentDidMount(){
      this.props.Searchbar.filterType=2;
      this.props.renderDataProperty(this.props.Searchbar.filterType,this.props.Searchbar.filterer,10);
    }
    componentWillMount(){
      this.props.Searchbar.filterType=2;
      this.props.Searchbar.filterer=null;
      this.props.renderDataProperty(this.props.Searchbar.filterType,this.props.Searchbar.filterer,10);
    }
    render() {
      return (    
          <div>
            <Header title={title} mode={mode} columns={columns} filters={filterTypes}/>
              <LayoutContentWrapper>
                <LayoutContent>
                <MyTable 
                  columns={columns}
                  dataList={this.props.Property.results}
                  total={this.props.Property.total}
                  mode={mode}
                  onPageChange={this.props.onPageChange}
                  page={this.props.Property.page}
                />
                  </LayoutContent>
              </LayoutContentWrapper>
          </div>
      );
    }
  }
  
  
  function mapStateToProps(state){
    return {
      Property:state.property,
      Searchbar:state.searchbar
    };
  }
  export default connect(
    mapStateToProps,
    {renderDataProperty,onPageChange}
  )(Property);