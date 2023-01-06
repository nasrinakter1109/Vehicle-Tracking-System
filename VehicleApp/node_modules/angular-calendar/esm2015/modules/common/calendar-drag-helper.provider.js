/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { isInside } from './util';
/** @type {?} */
const DRAG_THRESHOLD = 1;
export class CalendarDragHelper {
    /**
     * @param {?} dragContainerElement
     * @param {?} draggableElement
     */
    constructor(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    validateDrag({ x, y, snapDraggedEvents, dragAlreadyMoved }) {
        /** @type {?} */
        const isWithinThreshold = Math.abs(x) > DRAG_THRESHOLD || Math.abs(y) > DRAG_THRESHOLD;
        if (snapDraggedEvents) {
            /** @type {?} */
            const newRect = Object.assign({}, this.startPosition, {
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
    }
}
if (false) {
    /** @type {?} */
    CalendarDragHelper.prototype.startPosition;
    /** @type {?} */
    CalendarDragHelper.prototype.dragContainerElement;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItZHJhZy1oZWxwZXIucHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9hbmd1bGFyLWNhbGVuZGFyLyIsInNvdXJjZXMiOlsibW9kdWxlcy9jb21tb24vY2FsZW5kYXItZHJhZy1oZWxwZXIucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxRQUFRLENBQUM7O0FBRWxDLE1BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQztBQUV6QixNQUFNOzs7OztJQUdKLFlBQ1Usc0JBQ1IsZ0JBQTZCO1FBRHJCLHlCQUFvQixHQUFwQixvQkFBb0I7UUFHNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO0tBQy9EOzs7OztJQUVELFlBQVksQ0FBQyxFQUNYLENBQUMsRUFDRCxDQUFDLEVBQ0QsaUJBQWlCLEVBQ2pCLGdCQUFnQixFQU1qQjs7UUFDQyxNQUFNLGlCQUFpQixHQUNyQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQWMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQztRQUUvRCxJQUFJLGlCQUFpQixFQUFFOztZQUNyQixNQUFNLE9BQU8sR0FBZSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNoRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEdBQUcsQ0FBQztnQkFDakMsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLENBQUM7Z0JBQ25DLEdBQUcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsR0FBRyxDQUFDO2dCQUMvQixNQUFNLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQzthQUN0QyxDQUFDLENBQUM7WUFFSCxPQUFPLENBQ0wsQ0FBQyxpQkFBaUIsSUFBSSxnQkFBZ0IsQ0FBQztnQkFDdkMsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUNyRSxDQUFDO1NBQ0g7YUFBTTtZQUNMLE9BQU8saUJBQWlCLElBQUksZ0JBQWdCLENBQUM7U0FDOUM7S0FDRjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNJbnNpZGUgfSBmcm9tICcuL3V0aWwnO1xuXG5jb25zdCBEUkFHX1RIUkVTSE9MRCA9IDE7XG5cbmV4cG9ydCBjbGFzcyBDYWxlbmRhckRyYWdIZWxwZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHN0YXJ0UG9zaXRpb246IENsaWVudFJlY3Q7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBkcmFnQ29udGFpbmVyRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgZHJhZ2dhYmxlRWxlbWVudDogSFRNTEVsZW1lbnRcbiAgKSB7XG4gICAgdGhpcy5zdGFydFBvc2l0aW9uID0gZHJhZ2dhYmxlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfVxuXG4gIHZhbGlkYXRlRHJhZyh7XG4gICAgeCxcbiAgICB5LFxuICAgIHNuYXBEcmFnZ2VkRXZlbnRzLFxuICAgIGRyYWdBbHJlYWR5TW92ZWRcbiAgfToge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgc25hcERyYWdnZWRFdmVudHM6IGJvb2xlYW47XG4gICAgZHJhZ0FscmVhZHlNb3ZlZDogYm9vbGVhbjtcbiAgfSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzV2l0aGluVGhyZXNob2xkID1cbiAgICAgIE1hdGguYWJzKHgpID4gRFJBR19USFJFU0hPTEQgfHwgTWF0aC5hYnMoeSkgPiBEUkFHX1RIUkVTSE9MRDtcblxuICAgIGlmIChzbmFwRHJhZ2dlZEV2ZW50cykge1xuICAgICAgY29uc3QgbmV3UmVjdDogQ2xpZW50UmVjdCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhcnRQb3NpdGlvbiwge1xuICAgICAgICBsZWZ0OiB0aGlzLnN0YXJ0UG9zaXRpb24ubGVmdCArIHgsXG4gICAgICAgIHJpZ2h0OiB0aGlzLnN0YXJ0UG9zaXRpb24ucmlnaHQgKyB4LFxuICAgICAgICB0b3A6IHRoaXMuc3RhcnRQb3NpdGlvbi50b3AgKyB5LFxuICAgICAgICBib3R0b206IHRoaXMuc3RhcnRQb3NpdGlvbi5ib3R0b20gKyB5XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKGlzV2l0aGluVGhyZXNob2xkIHx8IGRyYWdBbHJlYWR5TW92ZWQpICYmXG4gICAgICAgIGlzSW5zaWRlKHRoaXMuZHJhZ0NvbnRhaW5lckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIG5ld1JlY3QpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXNXaXRoaW5UaHJlc2hvbGQgfHwgZHJhZ0FscmVhZHlNb3ZlZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==