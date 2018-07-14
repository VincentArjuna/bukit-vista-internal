import React, { Component } from "react";
import LayoutContentWrapper from "../../../components/utility/layoutWrapper.js";
import LayoutContent from "../../../components/utility/layoutContent";

export default class extends Component {
  render() {
    return (
      <LayoutContentWrapper style={{ height: "100vh" }}>
        <LayoutContent>
          <h1>Market Building / Area - <small>Manage areas</small></h1>
        </LayoutContent>
      </LayoutContentWrapper>
    );
  }
}
