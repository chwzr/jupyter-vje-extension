import { Widget } from '@phosphor/widgets';
import { JSONEditor, IEditorFactoryService } from "@jupyterlab/codeeditor";
import { INotebookTracker } from '@jupyterlab/notebook';
import { Message } from '@phosphor/messaging';
declare class MetadataEditorWidget extends Widget {
    readonly containerDiv: HTMLDivElement;
    readonly editorDiv: HTMLDivElement;
    readonly notebookTracker: INotebookTracker;
    readonly editor: JSONEditor;
    constructor(notebookTracker: INotebookTracker, editorFactoryService: IEditorFactoryService);
    onUpdateRequest(msg: Message): boolean;
}
export default MetadataEditorWidget;
