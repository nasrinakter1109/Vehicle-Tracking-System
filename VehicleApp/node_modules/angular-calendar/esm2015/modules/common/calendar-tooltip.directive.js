/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Directive, Component, HostListener, Input, Injector, ComponentFactoryResolver, ViewContainerRef, ElementRef, Inject, Renderer2, TemplateRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { positionElements } from 'positioning';
export class CalendarTooltipWindowComponent {
}
CalendarTooltipWindowComponent.decorators = [
    { type: Component, args: [{
                selector: 'mwl-calendar-tooltip-window',
                template: `
    <ng-template
      #defaultTemplate
      let-contents="contents"
      let-placement="placement"
      let-event="event"
    >
      <div class="cal-tooltip" [ngClass]="'cal-tooltip-' + placement">
        <div class="cal-tooltip-arrow"></div>
        <div class="cal-tooltip-inner" [innerHtml]="contents"></div>
      </div>
    </ng-template>
    <ng-template
      [ngTemplateOutlet]="customTemplate || defaultTemplate"
      [ngTemplateOutletContext]="{
        contents: contents,
        placement: placement,
        event: event
      }"
    >
    </ng-template>
  `
            }] }
];
CalendarTooltipWindowComponent.propDecorators = {
    contents: [{ type: Input }],
    placement: [{ type: Input }],
    event: [{ type: Input }],
    customTemplate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CalendarTooltipWindowComponent.prototype.contents;
    /** @type {?} */
    CalendarTooltipWindowComponent.prototype.placement;
    /** @type {?} */
    CalendarTooltipWindowComponent.prototype.event;
    /** @type {?} */
    CalendarTooltipWindowComponent.prototype.customTemplate;
}
export class CalendarTooltipDirective {
    /**
     * @param {?} elementRef
     * @param {?} injector
     * @param {?} renderer
     * @param {?} componentFactoryResolver
     * @param {?} viewContainerRef
     * @param {?} document
     */
    constructor(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document //tslint:disable-line
         = document;
        this.placement = 'auto';
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(CalendarTooltipWindowComponent);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.hide();
    }
    /**
     * @return {?}
     */
    onMouseOver() {
        this.show();
    }
    /**
     * @return {?}
     */
    onMouseOut() {
        this.hide();
    }
    /**
     * @return {?}
     */
    show() {
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(() => {
                this.positionTooltip();
            });
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    }
    /**
     * @param {?=} previousPosition
     * @return {?}
     */
    positionTooltip(previousPosition) {
        if (this.tooltipRef) {
            this.tooltipRef.changeDetectorRef.detectChanges();
            this.tooltipRef.instance.placement = positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            // keep re-positioning the tooltip until the arrow position doesn't make a difference
            if (previousPosition !== this.tooltipRef.instance.placement) {
                this.positionTooltip(this.tooltipRef.instance.placement);
            }
        }
    }
}
CalendarTooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mwlCalendarTooltip]'
            },] }
];
/** @nocollapse */
CalendarTooltipDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Injector },
    { type: Renderer2 },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
CalendarTooltipDirective.propDecorators = {
    contents: [{ type: Input, args: ['mwlCalendarTooltip',] }],
    placement: [{ type: Input, args: ['tooltipPlacement',] }],
    customTemplate: [{ type: Input, args: ['tooltipTemplate',] }],
    event: [{ type: Input, args: ['tooltipEvent',] }],
    appendToBody: [{ type: Input, args: ['tooltipAppendToBody',] }],
    onMouseOver: [{ type: HostListener, args: ['mouseenter',] }],
    onMouseOut: [{ type: HostListener, args: ['mouseleave',] }]
};
if (false) {
    /** @type {?} */
    CalendarTooltipDirective.prototype.contents;
    /** @type {?} */
    CalendarTooltipDirective.prototype.placement;
    /** @type {?} */
    CalendarTooltipDirective.prototype.customTemplate;
    /** @type {?} */
    CalendarTooltipDirective.prototype.event;
    /** @type {?} */
    CalendarTooltipDirective.prototype.appendToBody;
    /** @type {?} */
    CalendarTooltipDirective.prototype.tooltipFactory;
    /** @type {?} */
    CalendarTooltipDirective.prototype.tooltipRef;
    /** @type {?} */
    CalendarTooltipDirective.prototype.elementRef;
    /** @type {?} */
    CalendarTooltipDirective.prototype.injector;
    /** @type {?} */
    CalendarTooltipDirective.prototype.renderer;
    /** @type {?} */
    CalendarTooltipDirective.prototype.viewContainerRef;
    /** @type {?} */
    CalendarTooltipDirective.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItdG9vbHRpcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jb21tb24vY2FsZW5kYXItdG9vbHRpcC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFFWixLQUFLLEVBRUwsUUFBUSxFQUNSLHdCQUF3QixFQUN4QixnQkFBZ0IsRUFDaEIsVUFBVSxFQUVWLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQWtCLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBNEIvRCxNQUFNOzs7WUF6QkwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBcUJUO2FBQ0Y7Ozt1QkFFRSxLQUFLO3dCQUVMLEtBQUs7b0JBRUwsS0FBSzs2QkFFTCxLQUFLOzs7Ozs7Ozs7Ozs7QUFNUixNQUFNOzs7Ozs7Ozs7SUFjSixZQUNVLFlBQ0EsVUFDQSxVQUNSLHdCQUFrRCxFQUMxQyxrQkFDa0IsU0FBUyxxQkFBcUI7SUFBdEI7O1FBTDFCLGVBQVUsR0FBVixVQUFVO1FBQ1YsYUFBUSxHQUFSLFFBQVE7UUFDUixhQUFRLEdBQVIsUUFBUTtRQUVSLHFCQUFnQixHQUFoQixnQkFBZ0I7UUFDRSxhQUFRLENBQUMscUJBQXFCO1dBQTlCLFFBQVEsQ0FBQTt5QkFqQm1CLE1BQU07UUFtQjNELElBQUksQ0FBQyxjQUFjLEdBQUcsd0JBQXdCLENBQUMsdUJBQXVCLENBQ3BFLDhCQUE4QixDQUMvQixDQUFDO0tBQ0g7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2I7Ozs7SUFHRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2I7Ozs7SUFHRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0tBQ2I7Ozs7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNyQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQ3JELElBQUksQ0FBQyxjQUFjLEVBQ25CLENBQUMsRUFDRCxJQUFJLENBQUMsUUFBUSxFQUNiLEVBQUUsQ0FDSCxDQUFDO1lBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDOUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDNUMsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDeEU7WUFDRCxxQkFBcUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QixDQUFDLENBQUM7U0FDSjs7Ozs7SUFHSyxJQUFJO1FBQ1YsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FDeEQsQ0FBQztZQUNGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3hCOzs7Ozs7SUFHSyxlQUFlLENBQUMsZ0JBQXlCO1FBQy9DLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxnQkFBZ0IsQ0FDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQ2xELElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQzs7WUFFRixJQUFJLGdCQUFnQixLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRTtnQkFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMxRDtTQUNGOzs7O1lBdEZKLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOzs7O1lBL0NDLFVBQVU7WUFIVixRQUFRO1lBTVIsU0FBUztZQUxULHdCQUF3QjtZQUN4QixnQkFBZ0I7NENBcUViLE1BQU0sU0FBQyxRQUFROzs7dUJBbkJqQixLQUFLLFNBQUMsb0JBQW9CO3dCQUUxQixLQUFLLFNBQUMsa0JBQWtCOzZCQUV4QixLQUFLLFNBQUMsaUJBQWlCO29CQUV2QixLQUFLLFNBQUMsY0FBYzsyQkFFcEIsS0FBSyxTQUFDLHFCQUFxQjswQkFzQjNCLFlBQVksU0FBQyxZQUFZO3lCQUt6QixZQUFZLFNBQUMsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgQ29tcG9uZW50LFxuICBIb3N0TGlzdGVuZXIsXG4gIE9uRGVzdHJveSxcbiAgSW5wdXQsXG4gIENvbXBvbmVudFJlZixcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgVmlld0NvbnRhaW5lclJlZixcbiAgRWxlbWVudFJlZixcbiAgQ29tcG9uZW50RmFjdG9yeSxcbiAgSW5qZWN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGxhY2VtZW50QXJyYXksIHBvc2l0aW9uRWxlbWVudHMgfSBmcm9tICdwb3NpdGlvbmluZyc7XG5pbXBvcnQgeyBDYWxlbmRhckV2ZW50IH0gZnJvbSAnY2FsZW5kYXItdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItdG9vbHRpcC13aW5kb3cnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgI2RlZmF1bHRUZW1wbGF0ZVxuICAgICAgbGV0LWNvbnRlbnRzPVwiY29udGVudHNcIlxuICAgICAgbGV0LXBsYWNlbWVudD1cInBsYWNlbWVudFwiXG4gICAgICBsZXQtZXZlbnQ9XCJldmVudFwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC10b29sdGlwXCIgW25nQ2xhc3NdPVwiJ2NhbC10b29sdGlwLScgKyBwbGFjZW1lbnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbC10b29sdGlwLWFycm93XCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYWwtdG9vbHRpcC1pbm5lclwiIFtpbm5lckh0bWxdPVwiY29udGVudHNcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgY29udGVudHM6IGNvbnRlbnRzLFxuICAgICAgICBwbGFjZW1lbnQ6IHBsYWNlbWVudCxcbiAgICAgICAgZXZlbnQ6IGV2ZW50XG4gICAgICB9XCJcbiAgICA+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhclRvb2x0aXBXaW5kb3dDb21wb25lbnQge1xuICBASW5wdXQoKSBjb250ZW50czogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIHBsYWNlbWVudDogc3RyaW5nO1xuXG4gIEBJbnB1dCgpIGV2ZW50OiBDYWxlbmRhckV2ZW50O1xuXG4gIEBJbnB1dCgpIGN1c3RvbVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbXdsQ2FsZW5kYXJUb29sdGlwXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJUb29sdGlwRGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgQElucHV0KCdtd2xDYWxlbmRhclRvb2x0aXAnKSBjb250ZW50czogc3RyaW5nOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWlucHV0LXJlbmFtZVxuXG4gIEBJbnB1dCgndG9vbHRpcFBsYWNlbWVudCcpIHBsYWNlbWVudDogUGxhY2VtZW50QXJyYXkgPSAnYXV0byc7IC8vIHRzbGludDpkaXNhYmxlLWxpbmUgbm8taW5wdXQtcmVuYW1lXG5cbiAgQElucHV0KCd0b29sdGlwVGVtcGxhdGUnKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1pbnB1dC1yZW5hbWVcblxuICBASW5wdXQoJ3Rvb2x0aXBFdmVudCcpIGV2ZW50OiBDYWxlbmRhckV2ZW50OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWlucHV0LXJlbmFtZVxuXG4gIEBJbnB1dCgndG9vbHRpcEFwcGVuZFRvQm9keScpIGFwcGVuZFRvQm9keTogYm9vbGVhbjsgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1pbnB1dC1yZW5hbWVcblxuICBwcml2YXRlIHRvb2x0aXBGYWN0b3J5OiBDb21wb25lbnRGYWN0b3J5PENhbGVuZGFyVG9vbHRpcFdpbmRvd0NvbXBvbmVudD47XG4gIHByaXZhdGUgdG9vbHRpcFJlZjogQ29tcG9uZW50UmVmPENhbGVuZGFyVG9vbHRpcFdpbmRvd0NvbXBvbmVudD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudCAvL3RzbGludDpkaXNhYmxlLWxpbmVcbiAgKSB7XG4gICAgdGhpcy50b29sdGlwRmFjdG9yeSA9IGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgIENhbGVuZGFyVG9vbHRpcFdpbmRvd0NvbXBvbmVudFxuICAgICk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGUoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInKVxuICBvbk1vdXNlT3ZlcigpOiB2b2lkIHtcbiAgICB0aGlzLnNob3coKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnKVxuICBvbk1vdXNlT3V0KCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzaG93KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy50b29sdGlwUmVmICYmIHRoaXMuY29udGVudHMpIHtcbiAgICAgIHRoaXMudG9vbHRpcFJlZiA9IHRoaXMudmlld0NvbnRhaW5lclJlZi5jcmVhdGVDb21wb25lbnQoXG4gICAgICAgIHRoaXMudG9vbHRpcEZhY3RvcnksXG4gICAgICAgIDAsXG4gICAgICAgIHRoaXMuaW5qZWN0b3IsXG4gICAgICAgIFtdXG4gICAgICApO1xuICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLmNvbnRlbnRzID0gdGhpcy5jb250ZW50cztcbiAgICAgIHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5jdXN0b21UZW1wbGF0ZSA9IHRoaXMuY3VzdG9tVGVtcGxhdGU7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYuaW5zdGFuY2UuZXZlbnQgPSB0aGlzLmV2ZW50O1xuICAgICAgaWYgKHRoaXMuYXBwZW5kVG9Cb2R5KSB7XG4gICAgICAgIHRoaXMuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudCk7XG4gICAgICB9XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICB0aGlzLnBvc2l0aW9uVG9vbHRpcCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoaWRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRvb2x0aXBSZWYpIHtcbiAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5yZW1vdmUoXG4gICAgICAgIHRoaXMudmlld0NvbnRhaW5lclJlZi5pbmRleE9mKHRoaXMudG9vbHRpcFJlZi5ob3N0VmlldylcbiAgICAgICk7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcG9zaXRpb25Ub29sdGlwKHByZXZpb3VzUG9zaXRpb24/OiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50b29sdGlwUmVmKSB7XG4gICAgICB0aGlzLnRvb2x0aXBSZWYuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy50b29sdGlwUmVmLmluc3RhbmNlLnBsYWNlbWVudCA9IHBvc2l0aW9uRWxlbWVudHMoXG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICB0aGlzLnRvb2x0aXBSZWYubG9jYXRpb24ubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSxcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQsXG4gICAgICAgIHRoaXMuYXBwZW5kVG9Cb2R5XG4gICAgICApO1xuICAgICAgLy8ga2VlcCByZS1wb3NpdGlvbmluZyB0aGUgdG9vbHRpcCB1bnRpbCB0aGUgYXJyb3cgcG9zaXRpb24gZG9lc24ndCBtYWtlIGEgZGlmZmVyZW5jZVxuICAgICAgaWYgKHByZXZpb3VzUG9zaXRpb24gIT09IHRoaXMudG9vbHRpcFJlZi5pbnN0YW5jZS5wbGFjZW1lbnQpIHtcbiAgICAgICAgdGhpcy5wb3NpdGlvblRvb2x0aXAodGhpcy50b29sdGlwUmVmLmluc3RhbmNlLnBsYWNlbWVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=