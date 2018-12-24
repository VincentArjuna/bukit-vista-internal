import React, { Component } from "react";
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import LayoutContent from "../../../../bvComponents/Utility/layoutContent";
import Header from '../../../../bvComponents/Header/index.js';
import {columns,title,mode} from './config.js';
import MyTable from '../../../../bvComponents/Table/MyTable';
import actions from './redux/employee/actions';

const {renderDataEmployee,onPageChange}=actions;
class Employee extends Component {
  componentDidMount(){
      this.props.renderDataEmployee();
  }
  render() {
    return (
        <div>
            <Header title={title} mode={mode} columns={columns}/>
            <LayoutContentWrapper>
                <LayoutContent>
                    <MyTable 
                    columns={columns}
                    dataList={this.props.Employee.results}
                    mode={mode}
                    total={this.props.Employee.total}
                    onPageChange={this.props.onPageChange}
                    page={this.props.Employee.page}
                    />
                </LayoutContent>
            </LayoutContentWrapper>
        </div>
    );
  }
}


function mapStateToProps(state){
  return {
    Employee:state.employee
  };
}
export default connect(
  mapStateToProps,
  {renderDataEmployee,onPageChange}
)(Employee);
