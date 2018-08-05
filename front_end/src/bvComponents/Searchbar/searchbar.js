import React,{Component} from 'react';
import {connect} from 'react-redux';
import {InputSearch} from './components/input';
import { Col, Row } from 'antd';
import { Select,Input,Icon,Button} from 'antd';
import basicStyle from '../../settings/basicStyle';

const Option= Select.Option;
const Group = Input.Group;
class Searchbar extends Component{

    constructor(props) {
        super(props);
        this.state = {
          searchFilter: "",
          searched:false,
        };
      }
    
      onChangeUserName = e => {
        this.setState({
          searchFilter: e.target.value,
          searched:true
        });
      };
      handleBlur = e => {
        console.log("triggered");
        if (e.target.value === "" && this.state.searched) {
            alert("not commencing search");
            this.setState({
                searched:false
            })
        }
      };
    
      render() {
        const { searchFilter } = this.state;
        const selectAfter = (
          <Select defaultValue=".com" style={{ width: 80 }}>
            <Option value=".com">.com</Option>
            <Option value=".jp">.jp</Option>
            <Option value=".cn">.cn</Option>
            <Option value=".org">.org</Option>
          </Select>
        );
        return (
          <div>
            <Input
              placeholder="Search..."
              suffix={<Icon type="search" style={{ color: "rgba(0,0,0,.25)" }} />}
              value={searchFilter}
              onChange={this.onChangeUserName}
              onBlurCapture={this.handleBlur}
              addonAfter={selectAfter}
            />
          </div>
        );
      }
}

export default Searchbar;
