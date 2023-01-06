import { Observable } from 'rxjs/Observable';
import { NgBlockUI } from '../models/block-ui.model';
import { BlockUISettings } from '../models/block-ui-settings.model';
export declare class BlockUIInstanceService {
    blockUISettings: BlockUISettings | any;
    blockUIInstances: NgBlockUI[];
    private blockUISubject;
    private blockUIObservable;
    constructor();
    getSettings(): BlockUISettings | any;
    updateSettings(settings?: BlockUISettings | any): void;
    decorate(name?: string): NgBlockUI;
    observe(): Observable<any>;
    private blockUIMiddleware({action, name});
    private dispatch(subject, action, name?);
}
