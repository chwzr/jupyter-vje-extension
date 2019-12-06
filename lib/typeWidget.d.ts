/// <reference types="react" />
import { ReactWidget } from '@jupyterlab/apputils';
import { INotebookTracker } from '@jupyterlab/notebook';
export declare class TypeWidget extends ReactWidget {
    readonly notebookTracker: INotebookTracker;
    constructor(notebookTracker: INotebookTracker);
    render(): JSX.Element;
}
