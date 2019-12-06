"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const apputils_1 = require("@jupyterlab/apputils");
function Toggle(props) {
    let image = false;
    let json = false;
    if (props.type === "image") {
        image = true;
        json = false;
    }
    else if (props.type === "json") {
        json = true;
        image = false;
    }
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "VJE Meta"),
        React.createElement("h4", null, "Cell Output"),
        React.createElement("div", { className: "simple-button-group" },
            React.createElement("div", { className: image === true ? "button-left active" : "button-left" }, "Image"),
            React.createElement("div", { className: json === true ? "button-right active" : "button-right" }, "JSON")),
        React.createElement("style", null, `

      h1{
        margin-top: 1em;
        color: white;
      }

      h4{
        color: white;
      }
      .simple-button-group{
        
        display: flex;
        align-items: center;
        margin: 0 6px;
        user-select: none;
        color: #ccc;
        cursor: pointer;
      }

      .button-left{
        flex-grow: 1.2;
        height: 24px;
        display: flex;
        align-items: center;
        background: #00214D;
        padding: $spacing-l;
        border-bottom-left-radius: 24px;
        border-top-left-radius: 24px;
        border: 1px solid #000;
        justify-content: center;
      }

      .button-right{
        flex-grow: 1.2;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #00214D;
        padding: $spacing-l;
        border-bottom-right-radius: 24px;
        border-top-right-radius: 24px;
        border: 1px solid #000;
      }

      .button-left:hover,  .button-right:hover{
        font-weight: bold;
        color: #fff;
      }

      active{
        color: #fff;
        background: #006DFF;
      }
    `)));
}
exports.myWidget = apputils_1.ReactWidget.create(React.createElement(Toggle, null));
