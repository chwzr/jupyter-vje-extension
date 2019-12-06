"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const widgets_1 = require("@phosphor/widgets");
const codeeditor_1 = require("@jupyterlab/codeeditor");
const metaEditor_1 = require("./metaEditor");
// import {myWidget} from './metaEditor';
class MetadataEditorWidget extends widgets_1.Widget {
    constructor(notebookTracker, editorFactoryService) {
        super();
        this.notebookTracker = notebookTracker;
        this.id = 'notebook-metadata-editor';
        // this.title.label = 'VJE Metadata';
        this.title.closable = true;
        this.title.iconClass = 'jp-vje-logo';
        this.addClass('vje-MetadataEditorWidget');
        this.containerDiv = document.createElement('div');
        this.node.appendChild(this.containerDiv);
        // this.node.appendChild(myWidget);
        this.editorDiv = document.createElement('div');
        this.containerDiv.appendChild(this.editorDiv);
        this.editor = new codeeditor_1.JSONEditor({
            editorFactory: editorFactoryService.newDocumentEditor
        });
        // FIXME: JSON serialization seems to use 4space indent, so this doesn't actually work
        this.editor.editor.setOption('tabSize', 2);
        this.editor.editor.setOption('lineWrap', 'off');
        let layout = new widgets_1.PanelLayout();
        layout.insertWidget(0, this.editor);
        layout.insertWidget(1, metaEditor_1.myWidget);
        this.layout = layout;
        this.notebookTracker.currentChanged.connect(() => { this.update(); });
        this.notebookTracker.activeCellChanged.connect(() => { this.update(); });
    }
    onUpdateRequest(msg) {
        let curNotebookWidget = this.notebookTracker.currentWidget;
        let curCell = this.notebookTracker.activeCell;
        if (curCell != null && curNotebookWidget.isAttached) {
            let metadata = curCell.model.metadata;
            console.log("meta:", this.notebookTracker.activeCell.model.metadata);
            // let cellMeta = curNotebookWidget.content.model;
            this.editor.source = metadata;
            // this.editor.editorTitle = 'VJE Cell Metadata';
        }
        return true;
    }
}
exports.default = MetadataEditorWidget;
