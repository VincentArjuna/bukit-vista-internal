import React, { Component } from "react";
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import LayoutContent from "../../../../bvComponents/Utility/layoutContent";
import Header from '../../../../bvComponents/Header/index.js';
import {columns,title,mode} from './config.js';
import MyTable from '../../../../bvComponents/Table/MyTable';
import actions from './redux/user/actions';

const {renderDataUser,onPageChange}=actions;
class User extends Component {
  componentDidMount(){
      this.props.renderDataUser();
  }
  render() {
    return (
        <div>
            <Header title={title} mode={mode} columns={columns}/>
            <LayoutContentWrapper>
                <LayoutContent>
                    <MyTable 
                    columns={columns}
                    dataList={this.props.User.results}
                    mode={mode}
                    total={this.props.User.total}
                    onPageChange={this.props.onPageChange}
                    page={this.props.User.page}
                    />
                </LayoutContent>
            </LayoutContentWrapper>
        </div>
    );
  }
}


function mapStateToProps(state){
  return {
    User:state.user
  };
}
export default connect(
  mapStateToProps,
  {renderDataUser,onPageChange}
)(User);
