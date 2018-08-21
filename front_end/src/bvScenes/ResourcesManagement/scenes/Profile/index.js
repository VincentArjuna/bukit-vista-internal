import React, { Component } from "react";
import { connect } from 'react-redux';
import LayoutContentWrapper from "../../../../bvComponents/Utility/layoutWrapper.js";
import LayoutContent from "../../../../bvComponents/Utility/layoutContent";
import Header from '../../../../bvComponents/Header/index.js';
import {columns,title,mode} from './config.js';
import MyTable from '../../../../bvComponents/Table/MyTable';
import actions from './redux/profile/actions';

const {renderDataProfile}=actions;
class Profile extends Component {
  componentDidMount(){
      this.props.renderDataProfile();
  }
  render() {
    return (
        <div>
            <Header title={title} mode={mode} columns={columns}/>
            <LayoutContentWrapper>
                <LayoutContent>
                    <MyTable 
                    columns={columns}
                    dataList={this.props.Profile.results}
                    mode={mode}
                    />
                </LayoutContent>
            </LayoutContentWrapper>
        </div>
    );
  }
}


function mapStateToProps(state){
  return {
    Profile:state.profile
  };
}
export default connect(
  mapStateToProps,
  {renderDataProfile}
)(Profile);
