import React, { Component } from "react";
import LayoutContentWrapper from "../../../components/utility/layoutWrapper.js";
import LayoutContent from "../../../components/utility/layoutContent";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <h1>Administration / Profile - <small>Manage profiles</small></h1>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
