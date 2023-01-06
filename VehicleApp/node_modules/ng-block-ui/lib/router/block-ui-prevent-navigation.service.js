"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var block_ui_service_1 = require("../services/block-ui.service");
var block_ui_default_name_constant_1 = require("../constants/block-ui-default-name.constant");
var BlockUIPreventNavigation = /** @class */ (function () {
    function BlockUIPreventNavigation(blockUIService) {
        this.blockUIService = blockUIService;
    }
    BlockUIPreventNavigation.prototype.canActivate = function () {
        return !this.blockUIService.isActive(block_ui_default_name_constant_1.BlockUIDefaultName);
    };
    BlockUIPreventNavigation.prototype.canActivateChild = function () {
        return !this.blockUIService.isActive(block_ui_default_name_constant_1.BlockUIDefaultName);
    };
    BlockUIPreventNavigation.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    BlockUIPreventNavigation.ctorParameters = function () { return [
        { type: block_ui_service_1.BlockUIService, },
    ]; };
    return BlockUIPreventNavigation;
}());
exports.BlockUIPreventNavigation = BlockUIPreventNavigation;
