import { INotebookTracker } from '@jupyterlab/notebook';

import { JupyterFrontEnd, JupyterFrontEndPlugin, ILayoutRestorer } from '@jupyterlab/application';

import { ICommandPalette} from '@jupyterlab/apputils';
// import { ICommandPalette,  InstanceTracker } from '@jupyterlab/apputils';

// import { JSONExt } from '@phosphor/coreutils';

import { Widget } from '@phosphor/widgets';

import { IEditorServices } from "@jupyterlab/codeeditor";

import {TypeWidget} from './typeWidget'

// import MetadataEditorWidget from "./editor";
import '../style/index.css';

function activate(app: JupyterFrontEnd, palette: ICommandPalette, restorer: ILayoutRestorer, notebookTracker: INotebookTracker, editorServices: IEditorServices) {
    // let widget = new MetadataEditorWidget(notebookTracker, editorServices.factoryService);

    let vjeWidget: Widget =  new TypeWidget(notebookTracker);
    
    const command = 'vje:editmeta';
    app.commands.addCommand(command, {
      
      label: "VJE",
      execute: () => {
        // if (!tracker.has(widget)) {
        //   tracker.add(widget);
        // }
        if (!vjeWidget.isAttached) {
          
          // app.shell.addToLeftArea(widget);
          app.shell.add(vjeWidget, 'left')
          // app.shell.addToRightArea(widget);
        }

        vjeWidget.update();
        app.shell.activateById(vjeWidget.id);
      },
    })

    palette.addItem({command, category: 'Notebook Operations'});

    // restorer.add(widget, 'vje');

  

}

const extension: JupyterFrontEndPlugin<void> = {
  id: 'vje_metadata',
  autoStart: true,
  requires: [ICommandPalette, ILayoutRestorer, INotebookTracker, IEditorServices],
  activate: activate
};

export default extension;