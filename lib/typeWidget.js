"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
// import { Widget } from '@phosphor/widgets';
const apputils_1 = require("@jupyterlab/apputils");
// import Dropdown from 'react-dropdown'
// import 'react-dropdown/style.css'
function VjeMetaEditor(props) {
    let [data, setData] = React.useState({ active: false, type: 'image' });
    let [cellId, setCellId] = React.useState(false);
    // update on cellId Change
    if (props.cellId !== cellId) {
        setCellId(props.cellId);
        let p = props.dataPoint.get('VJE');
        if (p !== data) {
            if (p === undefined) {
                p = { active: false, type: 'image' };
            }
            setData(p);
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
    const changeActive = (e) => {
        let active = e.target.checked;
        props.dataPoint.set('VJE', Object.assign({}, data, { active }));
        let p = props.dataPoint.get('VJE');
        setData(p);
    };
    const typeChange = (e) => {
        console.log(e);
        let type = e.target.value;
        props.dataPoint.set('VJE', Object.assign({}, data, { type }));
        let p = props.dataPoint.get('VJE');
        setData(p);
    };
    // const types = [ 'image', 'json'  ]
    return (React.createElement("div", { className: "vje-MetadataEditorWidget" },
        React.createElement("div", { className: "vje-container" },
            React.createElement("h1", null, "VJE Metadata"),
            React.createElement("form", null,
                React.createElement("label", { htmlFor: "vje-active" },
                    React.createElement("span", null, "Activate VJE Output   \u00A0\u00A0"),
                    React.createElement("input", { type: "checkbox", id: "vje-active", name: "vje-active", checked: data.active, onChange: changeActive })),
                React.createElement("br", null),
                React.createElement("br", null),
                React.createElement("label", { htmlFor: "vje-type" },
                    React.createElement("span", null, "Cell Output Type \u00A0\u00A0"),
                    React.createElement("select", { name: "type", id: "vje-type", onChange: typeChange },
                        React.createElement("option", { id: "image" }, "image"),
                        React.createElement("option", { id: "json" }, "json")))))));
}
class TypeWidget extends apputils_1.ReactWidget {
    constructor(notebookTracker) {
        super();
        this.notebookTracker = notebookTracker;
        this.id = 'vje-react-notebook-metadata-editor';
        this.title.iconClass = 'jp-vje-logo';
        this.notebookTracker.activeCellChanged.connect(() => {
            // console.log("1 - GOT SIGNAL CELL CHANGE")
            this.render();
        });
    }
    render() {
        // console.log(this.notebookTracker.activeCell)
        return (React.createElement(apputils_1.UseSignal, { signal: this.notebookTracker.activeCellChanged }, (_, isActive) => React.createElement(VjeMetaEditor, { className: "vje-MetadataEditorWidget", cellId: this.notebookTracker.activeCell.model.id, dataPoint: this.notebookTracker.activeCell.model.metadata, data: this.notebookTracker.activeCell.model.metadata.toJSON() })));
    }
}
exports.TypeWidget = TypeWidget;
// export const VJEWidget(): Widget = new TypeWidget(notebookTracker);
