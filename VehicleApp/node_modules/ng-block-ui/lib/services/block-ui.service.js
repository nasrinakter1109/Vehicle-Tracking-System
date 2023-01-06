"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var block_ui_actions_constant_1 = require("../constants/block-ui-actions.constant");
var block_ui_instance_service_1 = require("./block-ui-instance.service");
var BlockUIService = /** @class */ (function () {
    function BlockUIService(blockUIInstance) {
        this.blockUIInstance = blockUIInstance;
    }
    /**
    * Starts blocking for given BlockUI instance or instances
    */
    /**
      * Starts blocking for given BlockUI instance or instances
      */
    BlockUIService.prototype.start = /**
      * Starts blocking for given BlockUI instance or instances
      */
    function (target, message) {
        this.dispatch(target, block_ui_actions_constant_1.BlockUIActions.START, message);
    };
    /**
    * Stops blocking for given BlockUI instance or instances
    */
    /**
      * Stops blocking for given BlockUI instance or instances
      */
    BlockUIService.prototype.stop = /**
      * Stops blocking for given BlockUI instance or instances
      */
    function (target) {
        this.dispatch(target, block_ui_actions_constant_1.BlockUIActions.STOP);
    };
    /**
    * Unsubscribes for given BlockUI instance or instances
    */
    /**
      * Unsubscribes for given BlockUI instance or instances
      */
    BlockUIService.prototype.unsubscribe = /**
      * Unsubscribes for given BlockUI instance or instances
      */
    function (target) {
        this.dispatch(target, block_ui_actions_constant_1.BlockUIActions.UNSUBSCRIBE);
    };
    /**
    * Checks if BlockUI is actively blocking
    */
    /**
      * Checks if BlockUI is actively blocking
      */
    BlockUIService.prototype.isActive = /**
      * Checks if BlockUI is actively blocking
      */
    function (target) {
        if (target === void 0) { target = null; }
        var targets = target ? this.toArray(target) : null;
        var instances = this.blockUIInstance.blockUIInstances;
        return instances.some(function (i) {
            if (!targets) {
                return i.isActive;
            }
            return targets.indexOf(i.name) >= 0 && i.isActive;
        });
    };
    BlockUIService.prototype.dispatch = function (target, type, message) {
        var _this = this;
        if (target === void 0) { target = []; }
        var instances = this.toArray(target);
        instances.forEach(function (i) { return _this.blockUIInstance.decorate(i)[type](message); });
    };
    BlockUIService.prototype.toArray = function (target) {
        if (target === void 0) { target = []; }
        return typeof target === 'string' ? [target] : target;
    };
    BlockUIService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    BlockUIService.ctorParameters = function () { return [
        { type: block_ui_instance_service_1.BlockUIInstanceService, },
    ]; };
    return BlockUIService;
}());
exports.BlockUIService = BlockUIService;
