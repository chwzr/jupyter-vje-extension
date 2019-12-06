import * as React from 'react';

// import { Widget } from '@phosphor/widgets';

import { ReactWidget, UseSignal } from '@jupyterlab/apputils';

import { INotebookTracker } from '@jupyterlab/notebook';

// import Dropdown from 'react-dropdown'

// import 'react-dropdown/style.css'

function VjeMetaEditor(props: any) {

  let [data, setData] = React.useState({active: false, type: 'image'} );
  let [cellId, setCellId] = React.useState(false);

  // update on cellId Change
  if(props.cellId !== cellId){
    setCellId(props.cellId)
    let p = props.dataPoint.get('VJE')
    if(p !== data) {
      if(p === undefined) {
        p = {active: false, type: 'image'}
      }
      setData(p)
    }
  }
  

  // const changeData = () => {
  //   props.dataPoint.set("VJE", {
  //     active: true,
  //     type: "image",
  //     label: {
  //       top: "Meta",
  //       bottom: "MetaMeta"
  //     }
  //   });
  //   let p = props.dataPoint.get('VJE')
  //   setData(p);
  // }


  const changeActive = (e: any) => {
    let active = e.target.checked
    props.dataPoint.set('VJE', {...data, active})
    let p = props.dataPoint.get('VJE')
    setData(p);
  }

  const typeChange = (e: any) => {
    console.log(e)
    let type = e.target.value
    props.dataPoint.set('VJE', {...data, type})
    let p = props.dataPoint.get('VJE')
    setData(p);
  }

  // const types = [ 'image', 'json'  ]

  return (
    <div className="vje-MetadataEditorWidget">  
      <div className="vje-container">

        <h1>VJE Metadata</h1>
        <form>

          <label htmlFor="vje-active">
            <span>Activate VJE Output   &nbsp;&nbsp;</span>
            <input type="checkbox" id="vje-active" name="vje-active"  checked={data.active} onChange={changeActive}></input>
          </label>
          <br/>
          <br/>

          <label htmlFor="vje-type">
            {/* <Dropdown options={types} onChange={typeChange} value={data.type} placeholder="Select an Output Format" /> */}

            <span>Cell Output Type &nbsp;&nbsp;</span>
            <select name="type" id="vje-type" onChange={typeChange}>
              <option id="image">image</option>
              <option id="json">json</option>
            </select>

          </label>

        </form>

      </div>


    </div>
  );
}


export class TypeWidget extends ReactWidget {
  readonly notebookTracker: INotebookTracker;


  constructor(notebookTracker: INotebookTracker) {
    super();
    this.notebookTracker = notebookTracker;
    this.id = 'vje-react-notebook-metadata-editor';
    this.title.iconClass = 'jp-vje-logo';

    this.notebookTracker.activeCellChanged.connect(()=>{
      // console.log("1 - GOT SIGNAL CELL CHANGE")
      this.render()
    })
  }




  render() {
    // console.log(this.notebookTracker.activeCell)
    return (
      <UseSignal signal={this.notebookTracker.activeCellChanged}>
          {(_, isActive) =>  <VjeMetaEditor className="vje-MetadataEditorWidget" cellId={this.notebookTracker.activeCell.model.id} dataPoint={this.notebookTracker.activeCell.model.metadata} data={this.notebookTracker.activeCell.model.metadata.toJSON()} /> }
      </UseSignal>
    );
  }
}


// export const VJEWidget(): Widget = new TypeWidget(notebookTracker);