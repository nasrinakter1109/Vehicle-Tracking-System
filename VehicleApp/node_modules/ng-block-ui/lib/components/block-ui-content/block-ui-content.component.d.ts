import { OnInit, AfterViewInit, AfterViewChecked, OnDestroy, ComponentRef, TemplateRef, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import 'rxjs/add/operator/map';
import { BlockUIInstanceService } from '../../services/block-ui-instance.service';
export declare class BlockUIContentComponent implements OnInit, AfterViewInit, AfterViewChecked, OnDestroy {
    private blockUI;
    private resolver;
    private changeDetectionRef;
    name: string;
    delayStart: number;
    delayStop: number;
    defaultMessage: string;
    templateCmp: any;
    templateOutlet: ViewContainerRef;
    state: {
        startTimeout: any;
        stopTimeout: any;
        blockCount: number;
    };
    className: string;
    active: boolean;
    templateCompRef: ComponentRef<{
        message?: any;
    }> | TemplateRef<{}>;
    message: any;
    private blockUISubscription;
    private settings;
    constructor(blockUI: BlockUIInstanceService, resolver: ComponentFactoryResolver, changeDetectionRef: ChangeDetectorRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterViewChecked(): void;
    private subscribeToBlockUI(blockUI$);
    private onDispatchedEvent(event);
    private onStart({name, message});
    private onStop({name, action});
    private onReset();
    private onUpdate({name, message});
    private showBlock(message);
    private hideBlock();
    private clearState();
    private updateBlockTemplate(msg);
    private onUnsubscribe(name);
    ngOnDestroy(): void;
}
