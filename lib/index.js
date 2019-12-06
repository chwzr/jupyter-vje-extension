"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notebook_1 = require("@jupyterlab/notebook");
const application_1 = require("@jupyterlab/application");
const apputils_1 = require("@jupyterlab/apputils");
const codeeditor_1 = require("@jupyterlab/codeeditor");
const typeWidget_1 = require("./typeWidget");
// import MetadataEditorWidget from "./editor";
require("../style/index.css");
function activate(app, palette, restorer, notebookTracker, editorServices) {
    // let widget = new MetadataEditorWidget(notebookTracker, editorServices.factoryService);
    let vjeWidget = new typeWidget_1.TypeWidget(notebookTracker);
    const command = 'vje:editmeta';
    app.commands.addCommand(command, {
        label: "VJE",
        execute: () => {
            // if (!tracker.has(widget)) {
            //   tracker.add(widget);
            // }
            if (!vjeWidget.isAttached) {
                // app.shell.addToLeftArea(widget);
                app.shell.add(vjeWidget, 'left');
                // app.shell.addToRightArea(widget);
            }
            vjeWidget.update();
            app.shell.activateById(vjeWidget.id);
        },
    });
    palette.addItem({ command, category: 'Notebook Operations' });
    // restorer.add(widget, 'vje');
}
const extension = {
    id: 'vje_metadata',
    autoStart: true,
    requires: [apputils_1.ICommandPalette, application_1.ILayoutRestorer, notebook_1.INotebookTracker, codeeditor_1.IEditorServices],
    activate: activate
};
exports.default = extension;
