import React, { Component } from 'react';
import Input from '../../Uielements/input';
import Button from '../../Uielements/button';

export default class extends Component {
  state = {};
  render() {
    const { searchText, onInputChange, onSearch } = this.props;
    return (
      <div className="isoTableSearchBox">
        <Input
          id="tableFilterInput"
          placeholder="Search name"
          value={searchText}
          onChange={onInputChange}
          onPressEnter={onSearch}
        />
        <Button type="primary" onClick={onSearch}>
          Search
        </Button>
      </div>
    );
  }
}