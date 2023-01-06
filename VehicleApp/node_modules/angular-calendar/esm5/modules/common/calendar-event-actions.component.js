/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef } from '@angular/core';
import { trackByIndex } from './util';
var CalendarEventActionsComponent = /** @class */ (function () {
    function CalendarEventActionsComponent() {
        this.trackByIndex = trackByIndex;
    }
    CalendarEventActionsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mwl-calendar-event-actions',
                    template: "\n    <ng-template #defaultTemplate let-event=\"event\">\n      <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n        <a\n          class=\"cal-event-action\"\n          href=\"javascript:;\"\n          *ngFor=\"let action of event.actions; trackBy: trackByIndex\"\n          (mwlClick)=\"action.onClick({ event: event })\"\n          [ngClass]=\"action.cssClass\"\n          [innerHtml]=\"action.label\"\n        >\n        </a>\n      </span>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event\n      }\"\n    >\n    </ng-template>\n  "
                }] }
    ];
    CalendarEventActionsComponent.propDecorators = {
        event: [{ type: Input }],
        customTemplate: [{ type: Input }]
    };
    return CalendarEventActionsComponent;
}());
export { CalendarEventActionsComponent };
if (false) {
    /** @type {?} */
    CalendarEventActionsComponent.prototype.event;
    /** @type {?} */
    CalendarEventActionsComponent.prototype.customTemplate;
    /** @type {?} */
    CalendarEventActionsComponent.prototype.trackByIndex;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZXZlbnQtYWN0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jb21tb24vY2FsZW5kYXItZXZlbnQtYWN0aW9ucy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sUUFBUSxDQUFDOzs7NEJBZ0NyQixZQUFZOzs7Z0JBOUI1QixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLHVwQkFxQlQ7aUJBQ0Y7Ozt3QkFFRSxLQUFLO2lDQUVMLEtBQUs7O3dDQWhDUjs7U0E2QmEsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENhbGVuZGFyRXZlbnQgfSBmcm9tICdjYWxlbmRhci11dGlscyc7XG5pbXBvcnQgeyB0cmFja0J5SW5kZXggfSBmcm9tICcuL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtd2wtY2FsZW5kYXItZXZlbnQtYWN0aW9ucycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlICNkZWZhdWx0VGVtcGxhdGUgbGV0LWV2ZW50PVwiZXZlbnRcIj5cbiAgICAgIDxzcGFuICpuZ0lmPVwiZXZlbnQuYWN0aW9uc1wiIGNsYXNzPVwiY2FsLWV2ZW50LWFjdGlvbnNcIj5cbiAgICAgICAgPGFcbiAgICAgICAgICBjbGFzcz1cImNhbC1ldmVudC1hY3Rpb25cIlxuICAgICAgICAgIGhyZWY9XCJqYXZhc2NyaXB0OjtcIlxuICAgICAgICAgICpuZ0Zvcj1cImxldCBhY3Rpb24gb2YgZXZlbnQuYWN0aW9uczsgdHJhY2tCeTogdHJhY2tCeUluZGV4XCJcbiAgICAgICAgICAobXdsQ2xpY2spPVwiYWN0aW9uLm9uQ2xpY2soeyBldmVudDogZXZlbnQgfSlcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImFjdGlvbi5jc3NDbGFzc1wiXG4gICAgICAgICAgW2lubmVySHRtbF09XCJhY3Rpb24ubGFiZWxcIlxuICAgICAgICA+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvc3Bhbj5cbiAgICA8L25nLXRlbXBsYXRlPlxuICAgIDxuZy10ZW1wbGF0ZVxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tVGVtcGxhdGUgfHwgZGVmYXVsdFRlbXBsYXRlXCJcbiAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7XG4gICAgICAgIGV2ZW50OiBldmVudFxuICAgICAgfVwiXG4gICAgPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGBcbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJFdmVudEFjdGlvbnNDb21wb25lbnQge1xuICBASW5wdXQoKSBldmVudDogQ2FsZW5kYXJFdmVudDtcblxuICBASW5wdXQoKSBjdXN0b21UZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICB0cmFja0J5SW5kZXggPSB0cmFja0J5SW5kZXg7XG59XG4iXX0=