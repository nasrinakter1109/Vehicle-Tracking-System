import { ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { SortablejsBindingTarget } from './sortablejs-binding-target';
import { SortablejsOptions } from './sortablejs-options';
import { SortablejsService } from './sortablejs.service';
export declare class SortablejsDirective implements OnInit, OnChanges, OnDestroy {
    private globalConfig;
    private service;
    private element;
    private zone;
    private renderer;
    sortablejs: SortablejsBindingTarget;
    inputOptions: SortablejsOptions;
    inputCloneFunction: <T>(item: T) => T;
    private _sortable;
    runInsideAngular: boolean;
    constructor(globalConfig: SortablejsOptions, service: SortablejsService, element: ElementRef, zone: NgZone, renderer: Renderer2);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    private getBindings();
    private readonly options;
    private readonly optionsWithoutEvents;
    private proxyEvent(eventName, ...params);
    private readonly isCloning;
    private clone<T>(item);
    private readonly overridenOptions;
}
