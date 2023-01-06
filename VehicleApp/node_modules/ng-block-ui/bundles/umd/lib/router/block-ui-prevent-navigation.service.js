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
        define(["require", "exports", "@angular/core", "../services/block-ui.service", "../constants/block-ui-default-name.constant"], factory);
    }
})(function (require, exports) {
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
        BlockUIPreventNavigation = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [block_ui_service_1.BlockUIService])
        ], BlockUIPreventNavigation);
        return BlockUIPreventNavigation;
    }());
    exports.BlockUIPreventNavigation = BlockUIPreventNavigation;
});
