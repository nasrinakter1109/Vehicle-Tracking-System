/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { isInside } from './util';
/** @type {?} */
var DRAG_THRESHOLD = 1;
var CalendarDragHelper = /** @class */ (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    CalendarDragHelper.prototype.validateDrag = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var x = _a.x, y = _a.y, snapDraggedEvents = _a.snapDraggedEvents, dragAlreadyMoved = _a.dragAlreadyMoved;
        /** @type {?} */
        var isWithinThreshold = Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
        if (snapDraggedEvents) {
            /** @type {?} */
            var newRect = Object.assign({}, this.startPosition, {
                left: this.startPosition.left + x,
                right: this.startPosition.right + x,
                top: this.startPosition.top + y,
                bottom: this.startPosition.bottom + y
            });
            return ((isWithinThreshold || dragAlreadyMoved) &&
                isInside(this.dragContainerElement.getBoundingClientRect(), newRect));
        }
        else {
            return isWithinThreshold || dragAlreadyMoved;
        }
    };
    return CalendarDragHelper;
}());
export { CalendarDragHelper };
if (false) {
    /** @type {?} */
    CalendarDragHelper.prototype.startPosition;
    /** @type {?} */
    CalendarDragHelper.prototype.dragContainerElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZHJhZy1oZWxwZXIucHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jb21tb24vY2FsZW5kYXItZHJhZy1oZWxwZXIucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBRWxDLElBQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUV6QixJQUFBO0lBR0UsNEJBQ1Usc0JBQ1IsZ0JBQTZCO1FBRHJCLHlCQUFvQixHQUFwQixvQkFBb0I7UUFHNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQy9EOzs7OztJQUVELHlDQUFZOzs7O0lBQVosVUFBYSxFQVVaO1lBVEMsUUFBQyxFQUNELFFBQUMsRUFDRCx3Q0FBaUIsRUFDakIsc0NBQWdCOztRQU9oQixJQUFNLGlCQUFpQixHQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQWMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUUvRCxJQUFJLGlCQUFpQixFQUFFOztZQUNyQixJQUFNLE9BQU8sR0FBZSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNoRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsQ0FBQztnQkFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLENBQUM7Z0JBQ25DLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQzthQUN0QyxDQUFDLENBQUM7WUFFSCxPQUFPLENBQ0wsQ0FBQyxpQkFBaUIsSUFBSSxnQkFBZ0IsQ0FBQztnQkFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUNyRSxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8saUJBQWlCLElBQUksZ0JBQWdCLENBQUM7U0FDOUM7S0FDRjs2QkEzQ0g7SUE0Q0MsQ0FBQTtBQXhDRCw4QkF3Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0luc2lkZSB9IGZyb20gJy4vdXRpbCc7XG5cbmNvbnN0IERSQUdfVEhSRVNIT0xEID0gMTtcblxuZXhwb3J0IGNsYXNzIENhbGVuZGFyRHJhZ0hlbHBlciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc3RhcnRQb3NpdGlvbjogQ2xpZW50UmVjdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGRyYWdDb250YWluZXJFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBkcmFnZ2FibGVFbGVtZW50OiBIVE1MRWxlbWVudFxuICApIHtcbiAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBkcmFnZ2FibGVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB9XG5cbiAgdmFsaWRhdGVEcmFnKHtcbiAgICB4LFxuICAgIHksXG4gICAgc25hcERyYWdnZWRFdmVudHMsXG4gICAgZHJhZ0FscmVhZHlNb3ZlZFxuICB9OiB7XG4gICAgeDogbnVtYmVyO1xuICAgIHk6IG51bWJlcjtcbiAgICBzbmFwRHJhZ2dlZEV2ZW50czogYm9vbGVhbjtcbiAgICBkcmFnQWxyZWFkeU1vdmVkOiBib29sZWFuO1xuICB9KTogYm9vbGVhbiB7XG4gICAgY29uc3QgaXNXaXRoaW5UaHJlc2hvbGQgPVxuICAgICAgTWF0aC5hYnMoeCkgPiBEUkFHX1RIUkVTSE9MRCB8fCBNYXRoLmFicyh5KSA+IERSQUdfVEhSRVNIT0xEO1xuXG4gICAgaWYgKHNuYXBEcmFnZ2VkRXZlbnRzKSB7XG4gICAgICBjb25zdCBuZXdSZWN0OiBDbGllbnRSZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGFydFBvc2l0aW9uLCB7XG4gICAgICAgIGxlZnQ6IHRoaXMuc3RhcnRQb3NpdGlvbi5sZWZ0ICsgeCxcbiAgICAgICAgcmlnaHQ6IHRoaXMuc3RhcnRQb3NpdGlvbi5yaWdodCArIHgsXG4gICAgICAgIHRvcDogdGhpcy5zdGFydFBvc2l0aW9uLnRvcCArIHksXG4gICAgICAgIGJvdHRvbTogdGhpcy5zdGFydFBvc2l0aW9uLmJvdHRvbSArIHlcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAoaXNXaXRoaW5UaHJlc2hvbGQgfHwgZHJhZ0FscmVhZHlNb3ZlZCkgJiZcbiAgICAgICAgaXNJbnNpZGUodGhpcy5kcmFnQ29udGFpbmVyRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgbmV3UmVjdClcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpc1dpdGhpblRocmVzaG9sZCB8fCBkcmFnQWxyZWFkeU1vdmVkO1xuICAgIH1cbiAgfVxufVxuIl19