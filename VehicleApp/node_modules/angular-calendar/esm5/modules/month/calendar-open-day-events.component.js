/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { trackByEventId } from '../common/util';
/** @type {?} */
export var collapseAnimation = trigger('collapse', [
    transition('void => *', [
        style({ height: 0, overflow: 'hidden' }),
        animate('150ms', style({ height: '*' }))
    ]),
    transition('* => void', [
        style({ height: '*', overflow: 'hidden' }),
        animate('150ms', style({ height: 0 }))
    ])
]);
var CalendarOpenDayEventsComponent = /** @class */ (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new EventEmitter();
        this.trackByEventId = trackByEventId;
    }
    CalendarOpenDayEventsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mwl-calendar-open-day-events',
                    template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\"\n      let-isOpen=\"isOpen\"\n    >\n      <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n        <div\n          *ngFor=\"let event of events; trackBy: trackByEventId\"\n          [ngClass]=\"event?.cssClass\"\n          mwlDraggable\n          [class.cal-draggable]=\"event.draggable\"\n          dragActiveClass=\"cal-drag-active\"\n          [dropData]=\"{ event: event }\"\n          [dragAxis]=\"{ x: event.draggable, y: event.draggable }\"\n        >\n          <span\n            class=\"cal-event\"\n            [style.backgroundColor]=\"event.color?.primary\"\n          >\n          </span>\n          &ngsp;\n          <mwl-calendar-event-title\n            [event]=\"event\"\n            [customTemplate]=\"eventTitleTemplate\"\n            view=\"month\"\n            (mwlClick)=\"eventClicked.emit({ event: event })\"\n          >\n          </mwl-calendar-event-title>\n          &ngsp;\n          <mwl-calendar-event-actions\n            [event]=\"event\"\n            [customTemplate]=\"eventActionsTemplate\"\n          >\n          </mwl-calendar-event-actions>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        events: events,\n        eventClicked: eventClicked,\n        isOpen: isOpen\n      }\"\n    >\n    </ng-template>\n  ",
                    animations: [collapseAnimation]
                }] }
    ];
    CalendarOpenDayEventsComponent.propDecorators = {
        isOpen: [{ type: Input }],
        events: [{ type: Input }],
        customTemplate: [{ type: Input }],
        eventTitleTemplate: [{ type: Input }],
        eventActionsTemplate: [{ type: Input }],
        eventClicked: [{ type: Output }]
    };
    return CalendarOpenDayEventsComponent;
}());
export { CalendarOpenDayEventsComponent };
if (false) {
    /** @type {?} */
    CalendarOpenDayEventsComponent.prototype.isOpen;
    /** @type {?} */
    CalendarOpenDayEventsComponent.prototype.events;
    /** @type {?} */
    CalendarOpenDayEventsComponent.prototype.customTemplate;
    /** @type {?} */
    CalendarOpenDayEventsComponent.prototype.eventTitleTemplate;
    /** @type {?} */
    CalendarOpenDayEventsComponent.prototype.eventActionsTemplate;
    /** @type {?} */
    CalendarOpenDayEventsComponent.prototype.eventClicked;
    /** @type {?} */
    CalendarOpenDayEventsComponent.prototype.trackByEventId;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItb3Blbi1kYXktZXZlbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2FuZ3VsYXItY2FsZW5kYXIvIiwic291cmNlcyI6WyJtb2R1bGVzL21vbnRoL2NhbGVuZGFyLW9wZW4tZGF5LWV2ZW50cy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osV0FBVyxFQUNaLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxPQUFPLEVBQ1AsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBRVIsTUFBTSxxQkFBcUIsQ0FBQztBQUU3QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7O0FBRWhELFdBQWEsaUJBQWlCLEdBQTZCLE9BQU8sQ0FBQyxVQUFVLEVBQUU7SUFDN0UsVUFBVSxDQUFDLFdBQVcsRUFBRTtRQUN0QixLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQztRQUN4QyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0tBQ3pDLENBQUM7SUFDRixVQUFVLENBQUMsV0FBVyxFQUFFO1FBQ3RCLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1FBQzFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7S0FDdkMsQ0FBQztDQUNILENBQUMsQ0FBQzs7O3NCQXdEMEIsS0FBSzs0QkFXdUIsSUFBSSxZQUFZLEVBRW5FOzhCQUVhLGNBQWM7OztnQkFyRWhDLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsOEJBQThCO29CQUN4QyxRQUFRLEVBQUUsdytDQWdEVDtvQkFDRCxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztpQkFDaEM7Ozt5QkFFRSxLQUFLO3lCQUVMLEtBQUs7aUNBRUwsS0FBSztxQ0FFTCxLQUFLO3VDQUVMLEtBQUs7K0JBRUwsTUFBTTs7eUNBNUZUOztTQWlGYSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICB0cmlnZ2VyLFxuICBzdHlsZSxcbiAgdHJhbnNpdGlvbixcbiAgYW5pbWF0ZSxcbiAgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQ2FsZW5kYXJFdmVudCB9IGZyb20gJ2NhbGVuZGFyLXV0aWxzJztcbmltcG9ydCB7IHRyYWNrQnlFdmVudElkIH0gZnJvbSAnLi4vY29tbW9uL3V0aWwnO1xuXG5leHBvcnQgY29uc3QgY29sbGFwc2VBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YSA9IHRyaWdnZXIoJ2NvbGxhcHNlJywgW1xuICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXG4gICAgc3R5bGUoeyBoZWlnaHQ6IDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9KSxcbiAgICBhbmltYXRlKCcxNTBtcycsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpXG4gIF0pLFxuICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgc3R5bGUoeyBoZWlnaHQ6ICcqJywgb3ZlcmZsb3c6ICdoaWRkZW4nIH0pLFxuICAgIGFuaW1hdGUoJzE1MG1zJywgc3R5bGUoeyBoZWlnaHQ6IDAgfSkpXG4gIF0pXG5dKTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXdsLWNhbGVuZGFyLW9wZW4tZGF5LWV2ZW50cycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICAjZGVmYXVsdFRlbXBsYXRlXG4gICAgICBsZXQtZXZlbnRzPVwiZXZlbnRzXCJcbiAgICAgIGxldC1ldmVudENsaWNrZWQ9XCJldmVudENsaWNrZWRcIlxuICAgICAgbGV0LWlzT3Blbj1cImlzT3BlblwiXG4gICAgPlxuICAgICAgPGRpdiBjbGFzcz1cImNhbC1vcGVuLWRheS1ldmVudHNcIiBbQGNvbGxhcHNlXSAqbmdJZj1cImlzT3BlblwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgKm5nRm9yPVwibGV0IGV2ZW50IG9mIGV2ZW50czsgdHJhY2tCeTogdHJhY2tCeUV2ZW50SWRcIlxuICAgICAgICAgIFtuZ0NsYXNzXT1cImV2ZW50Py5jc3NDbGFzc1wiXG4gICAgICAgICAgbXdsRHJhZ2dhYmxlXG4gICAgICAgICAgW2NsYXNzLmNhbC1kcmFnZ2FibGVdPVwiZXZlbnQuZHJhZ2dhYmxlXCJcbiAgICAgICAgICBkcmFnQWN0aXZlQ2xhc3M9XCJjYWwtZHJhZy1hY3RpdmVcIlxuICAgICAgICAgIFtkcm9wRGF0YV09XCJ7IGV2ZW50OiBldmVudCB9XCJcbiAgICAgICAgICBbZHJhZ0F4aXNdPVwieyB4OiBldmVudC5kcmFnZ2FibGUsIHk6IGV2ZW50LmRyYWdnYWJsZSB9XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICBjbGFzcz1cImNhbC1ldmVudFwiXG4gICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZENvbG9yXT1cImV2ZW50LmNvbG9yPy5wcmltYXJ5XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICZuZ3NwO1xuICAgICAgICAgIDxtd2wtY2FsZW5kYXItZXZlbnQtdGl0bGVcbiAgICAgICAgICAgIFtldmVudF09XCJldmVudFwiXG4gICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiZXZlbnRUaXRsZVRlbXBsYXRlXCJcbiAgICAgICAgICAgIHZpZXc9XCJtb250aFwiXG4gICAgICAgICAgICAobXdsQ2xpY2spPVwiZXZlbnRDbGlja2VkLmVtaXQoeyBldmVudDogZXZlbnQgfSlcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L213bC1jYWxlbmRhci1ldmVudC10aXRsZT5cbiAgICAgICAgICAmbmdzcDtcbiAgICAgICAgICA8bXdsLWNhbGVuZGFyLWV2ZW50LWFjdGlvbnNcbiAgICAgICAgICAgIFtldmVudF09XCJldmVudFwiXG4gICAgICAgICAgICBbY3VzdG9tVGVtcGxhdGVdPVwiZXZlbnRBY3Rpb25zVGVtcGxhdGVcIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L213bC1jYWxlbmRhci1ldmVudC1hY3Rpb25zPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmctdGVtcGxhdGU+XG4gICAgPG5nLXRlbXBsYXRlXG4gICAgICBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBkZWZhdWx0VGVtcGxhdGVcIlxuICAgICAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntcbiAgICAgICAgZXZlbnRzOiBldmVudHMsXG4gICAgICAgIGV2ZW50Q2xpY2tlZDogZXZlbnRDbGlja2VkLFxuICAgICAgICBpc09wZW46IGlzT3BlblxuICAgICAgfVwiXG4gICAgPlxuICAgIDwvbmctdGVtcGxhdGU+XG4gIGAsXG4gIGFuaW1hdGlvbnM6IFtjb2xsYXBzZUFuaW1hdGlvbl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJPcGVuRGF5RXZlbnRzQ29tcG9uZW50IHtcbiAgQElucHV0KCkgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgZXZlbnRzOiBDYWxlbmRhckV2ZW50W107XG5cbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KCkgZXZlbnRUaXRsZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpIGV2ZW50QWN0aW9uc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBPdXRwdXQoKVxuICBldmVudENsaWNrZWQ6IEV2ZW50RW1pdHRlcjx7IGV2ZW50OiBDYWxlbmRhckV2ZW50IH0+ID0gbmV3IEV2ZW50RW1pdHRlcjx7XG4gICAgZXZlbnQ6IENhbGVuZGFyRXZlbnQ7XG4gIH0+KCk7XG5cbiAgdHJhY2tCeUV2ZW50SWQgPSB0cmFja0J5RXZlbnRJZDtcbn1cbiJdfQ==