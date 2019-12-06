import * as React from "react";


import { Widget } from '@phosphor/widgets';
import { ReactWidget } from '@jupyterlab/apputils';





function Toggle(props : any) {
  let image: Boolean = false;
  let json: Boolean = false;

  if(props.type === "image"){
    image = true;
    json = false;
  } else if(props.type === "json"){
    json = true;
    image = false;
  }



  return (
    <>
    <h1>VJE Meta</h1>
    <h4>Cell Output</h4>
    <div className="simple-button-group">
      <div className={image === true ? "button-left active" : "button-left"}>Image</div>
      <div className={json === true ? "button-right active" : "button-right"}>JSON</div>
    </div>
    <style>{`

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
    `}</style>
    </>
  )
}


export const myWidget: Widget = ReactWidget.create(<Toggle />);