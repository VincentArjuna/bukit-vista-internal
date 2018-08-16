import React,{Component} from 'react';
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import LayoutContent from "../../../../bvComponents/Utility/layoutContent";
import {columns,title,filterTypes,mode} from './config.js';
import MyTable from '../../../../bvComponents/Table/MyTable';
import Header from '../../../../bvComponents/Header/index.js';
import actions from './redux/unit/actions';

const {renderDataUnit,onPageChange}=actions;

class Unit extends Component {
    componentDidMount(){
      this.props.Searchbar.filterType=0;
      this.props.renderDataUnit(this.props.Searchbar.filterType,this.props.Searchbar.filterer,10);
    }
    componentWillMount(){
      this.props.Searchbar.filterType=0;
      this.props.Searchbar.filterer=null;
    }
    render() {
      return (    
          <div>
            <Header title={title} mode={mode} columns={columns} filters={filterTypes}/>
              <LayoutContentWrapper>
                <LayoutContent>
                <MyTable 
                  columns={columns}
                  dataList={this.props.Unit.results}
                  total={this.props.Unit.total}
                  mode={mode}
                  onPageChange={this.props.onPageChange}
                  page={this.props.Unit.page}
                />
                  </LayoutContent>
              </LayoutContentWrapper>
          </div>
      );
    }
  }
  
  
  function mapStateToProps(state){
    return {
      Unit:state.unit,
      Searchbar:state.searchbar
    };
  }
  export default connect(
    mapStateToProps,
    {renderDataUnit,onPageChange}
  )(Unit);
