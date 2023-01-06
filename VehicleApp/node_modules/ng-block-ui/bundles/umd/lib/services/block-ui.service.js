var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../constants/block-ui-actions.constant", "./block-ui-instance.service"], factory);
    }
})(function (require, exports) {
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
        BlockUIService.prototype.start = function (target, message) {
            this.dispatch(target, block_ui_actions_constant_1.BlockUIActions.START, message);
        };
        /**
        * Stops blocking for given BlockUI instance or instances
        */
        BlockUIService.prototype.stop = function (target) {
            this.dispatch(target, block_ui_actions_constant_1.BlockUIActions.STOP);
        };
        /**
        * Unsubscribes for given BlockUI instance or instances
        */
        BlockUIService.prototype.unsubscribe = function (target) {
            this.dispatch(target, block_ui_actions_constant_1.BlockUIActions.UNSUBSCRIBE);
        };
        /**
        * Checks if BlockUI is actively blocking
        */
        BlockUIService.prototype.isActive = function (target) {
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
        BlockUIService = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [block_ui_instance_service_1.BlockUIInstanceService])
        ], BlockUIService);
        return BlockUIService;
    }());
    exports.BlockUIService = BlockUIService;
});
