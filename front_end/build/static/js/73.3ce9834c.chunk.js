webpackJsonp([73],{1924:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var m=n(0),c=n.n(m),i=n(34),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),E=i.v.SubMenu,p=i.v.ItemGroup,s=function(e){function t(){var e,n,r,m;a(this,t);for(var c=arguments.length,i=Array(c),o=0;o<c;o++)i[o]=arguments[o];return n=r=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.state={current:"1",openKeys:[],theme:"dark",mode:"inline"},r.handleClick=function(e){r.setState({current:e.key})},r.changeMode=function(e){r.setState({mode:e?"vertical":"inline"})},r.onOpenChange=function(e){var t=r.state,n=e.find(function(e){return!(t.openKeys.indexOf(e)>-1)}),a=t.openKeys.find(function(t){return!(e.indexOf(t)>-1)}),l=[];n&&(l=r.getAncestorKeys(n).concat(n)),a&&(l=r.getAncestorKeys(a)),r.setState({openKeys:l})},r.getAncestorKeys=function(e){return{sub3:["sub2"]}[e]||[]},r.changeTheme=function(e){r.setState({theme:e?"dark":"light"})},m=n,l(r,m)}return r(t,e),o(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"isoContent"},c.a.createElement("h2",null,"Top Navigation"),c.a.createElement(i.v,{onClick:this.handleClick,selectedKeys:[this.state.current],mode:"horizontal"},c.a.createElement(i.v.Item,{key:"mail"},c.a.createElement(i.p,{type:"mail"}),"Navigation One"),c.a.createElement(i.v.Item,{key:"app",disabled:!0},c.a.createElement(i.p,{type:"appstore"}),"Navigation Two"),c.a.createElement(E,{title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"setting"}),"Navigation Three - Submenu")},c.a.createElement(p,{title:"Item 1"},c.a.createElement(i.v.Item,{key:"setting:1"},"Option 1"),c.a.createElement(i.v.Item,{key:"setting:2"},"Option 2")),c.a.createElement(p,{title:"Item 2"},c.a.createElement(i.v.Item,{key:"setting:3"},"Option 3"),c.a.createElement(i.v.Item,{key:"setting:4"},"Option 4"))),c.a.createElement(i.v.Item,{key:"alipay"},c.a.createElement("a",{href:"https://ant.design",target:"_blank",rel:"noopener noreferrer"},"Navigation Four - Link")))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"isoContent"},c.a.createElement("h2",null,"Vertical menu with inline children"),c.a.createElement(i.v,{onClick:this.handleClick,style:{width:240},defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],mode:"inline"},c.a.createElement(E,{key:"sub1",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"mail"}),c.a.createElement("span",null,"Navigation One"))},c.a.createElement(p,{key:"g1",title:"Item 1"},c.a.createElement(i.v.Item,{key:"1"},"Option 1"),c.a.createElement(i.v.Item,{key:"2"},"Option 2")),c.a.createElement(p,{key:"g2",title:"Item 2"},c.a.createElement(i.v.Item,{key:"3"},"Option 3"),c.a.createElement(i.v.Item,{key:"4"},"Option 4"))),c.a.createElement(E,{key:"sub2",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"appstore"}),c.a.createElement("span",null,"Navigation Two"))},c.a.createElement(i.v.Item,{key:"5"},"Option 5"),c.a.createElement(i.v.Item,{key:"6"},"Option 6"),c.a.createElement(E,{key:"sub3",title:"Submenu"},c.a.createElement(i.v.Item,{key:"7"},"Option 7"),c.a.createElement(i.v.Item,{key:"8"},"Option 8"))),c.a.createElement(E,{key:"sub4",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"setting"}),c.a.createElement("span",null,"Navigation Three"))},c.a.createElement(i.v.Item,{key:"9"},"Option 9"),c.a.createElement(i.v.Item,{key:"10"},"Option 10"),c.a.createElement(i.v.Item,{key:"11"},"Option 11"),c.a.createElement(i.v.Item,{key:"12"},"Option 12")))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"isoContent"},c.a.createElement("h2",null,"Open current submenu only"),c.a.createElement(i.v,{mode:"inline",openKeys:this.state.openKeys,selectedKeys:[this.state.current],style:{width:240},onOpenChange:this.onOpenChange,onClick:this.handleClick},c.a.createElement(E,{key:"sub1",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"mail"}),c.a.createElement("span",null,"Navigation One"))},c.a.createElement(i.v.Item,{key:"1"},"Option 1"),c.a.createElement(i.v.Item,{key:"2"},"Option 2"),c.a.createElement(i.v.Item,{key:"3"},"Option 3"),c.a.createElement(i.v.Item,{key:"4"},"Option 4")),c.a.createElement(E,{key:"sub2",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"appstore"}),c.a.createElement("span",null,"Navigation Two"))},c.a.createElement(i.v.Item,{key:"5"},"Option 5"),c.a.createElement(i.v.Item,{key:"6"},"Option 6"),c.a.createElement(E,{key:"sub3",title:"Submenu"},c.a.createElement(i.v.Item,{key:"7"},"Option 7"),c.a.createElement(i.v.Item,{key:"8"},"Option 8"))),c.a.createElement(E,{key:"sub4",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"setting"}),c.a.createElement("span",null,"Navigation Three"))},c.a.createElement(i.v.Item,{key:"9"},"Option 9"),c.a.createElement(i.v.Item,{key:"10"},"Option 10"),c.a.createElement(i.v.Item,{key:"11"},"Option 11"),c.a.createElement(i.v.Item,{key:"12"},"Option 12")))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"isoContent"},c.a.createElement("h2",null,"Vertical menu"),c.a.createElement(i.v,{onClick:this.handleClick,style:{width:240},mode:"vertical"},c.a.createElement(E,{key:"sub1",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"mail"}),c.a.createElement("span",null,"Navigation One"))},c.a.createElement(p,{title:"Item 1"},c.a.createElement(i.v.Item,{key:"1"},"Option 1"),c.a.createElement(i.v.Item,{key:"2"},"Option 2")),c.a.createElement(p,{title:"Iteom 2"},c.a.createElement(i.v.Item,{key:"3"},"Option 3"),c.a.createElement(i.v.Item,{key:"4"},"Option 4"))),c.a.createElement(E,{key:"sub2",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"appstore"}),c.a.createElement("span",null,"Navigation Two"))},c.a.createElement(i.v.Item,{key:"5"},"Option 5"),c.a.createElement(i.v.Item,{key:"6"},"Option 6"),c.a.createElement(E,{key:"sub3",title:"Submenu"},c.a.createElement(i.v.Item,{key:"7"},"Option 7"),c.a.createElement(i.v.Item,{key:"8"},"Option 8"))),c.a.createElement(E,{key:"sub4",title:c.a.createElement("span",null,c.a.createElement("icon",{type:"setting"}),c.a.createElement("span",null,"Navigation Three"))},c.a.createElement(i.v.Item,{key:"9"},"Option 9"),c.a.createElement(i.v.Item,{key:"10"},"Option 10"),c.a.createElement(i.v.Item,{key:"11"},"Option 11"),c.a.createElement(i.v.Item,{key:"12"},"Option 12")))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"isoContent"},c.a.createElement("h2",null,"Menu Themes"),c.a.createElement("div",null,c.a.createElement(i.I,{checked:"dark"===this.state.theme,onChange:this.changeTheme,checkedChildren:"Dark",unCheckedChildren:"Light"}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(i.v,{theme:this.state.theme,onClick:this.handleClick,style:{width:240},defaultOpenKeys:["sub1"],selectedKeys:[this.state.current],mode:"inline"},c.a.createElement(E,{key:"sub1",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"mail"}),c.a.createElement("span",null,"Navigation One"))},c.a.createElement(i.v.Item,{key:"1"},"Option 1"),c.a.createElement(i.v.Item,{key:"2"},"Option 2"),c.a.createElement(i.v.Item,{key:"3"},"Option 3"),c.a.createElement(i.v.Item,{key:"4"},"Option 4")),c.a.createElement(E,{key:"sub2",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"appstore"}),c.a.createElement("span",null,"Navigtion Two"))},c.a.createElement(i.v.Item,{key:"5"},"Option 5"),c.a.createElement(i.v.Item,{key:"6"},"Option 6"),c.a.createElement(E,{key:"sub3",title:"Submenu"},c.a.createElement(i.v.Item,{key:"7"},"Option 7"),c.a.createElement(i.v.Item,{key:"8"},"Option 8"))),c.a.createElement(E,{key:"sub4",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"setting"}),c.a.createElement("span",null,"Navigation Three"))},c.a.createElement(i.v.Item,{key:"9"},"Option 9"),c.a.createElement(i.v.Item,{key:"10"},"Option 10"),c.a.createElement(i.v.Item,{key:"11"},"Option 11"),c.a.createElement(i.v.Item,{key:"12"},"Option 12"))))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("div",{className:"isoContent"},c.a.createElement(i.I,{onChange:this.changeMode}),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement(i.v,{style:{width:240},defaultOpenKeys:["sub1"],mode:this.state.mode},c.a.createElement(E,{key:"sub1",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"mail"}),c.a.createElement("span",null,"Navigation One"))},c.a.createElement(p,{title:"Item 1"},c.a.createElement(i.v.Item,{key:"1"},"Option 1"),c.a.createElement(i.v.Item,{key:"2"},"Option 2")),c.a.createElement(p,{title:"Item 2"},c.a.createElement(i.v.Item,{key:"3"},"Option 3"),c.a.createElement(i.v.Item,{key:"4"},"Option 4"))),c.a.createElement(E,{key:"sub2",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"appstore"}),c.a.createElement("span",null,"Navigation Two"))},c.a.createElement(i.v.Item,{key:"5"},"Option 5"),c.a.createElement(i.v.Item,{key:"6"},"Option 6"),c.a.createElement(E,{key:"sub3",title:"Submenu"},c.a.createElement(i.v.Item,{key:"7"},"Option 7"),c.a.createElement(i.v.Item,{key:"8"},"Option 8"))),c.a.createElement(E,{key:"sub4",title:c.a.createElement("span",null,c.a.createElement(i.p,{type:"setting"}),c.a.createElement("span",null,"Navigation Three"))},c.a.createElement(i.v.Item,{key:"9"},"Option 9"),c.a.createElement(i.v.Item,{key:"10"},"Option 10"),c.a.createElement(i.v.Item,{key:"11"},"Option 11"),c.a.createElement(i.v.Item,{key:"12"},"Option 12")))),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null),c.a.createElement("br",null))}}]),t}(m.Component);t.default=s}});