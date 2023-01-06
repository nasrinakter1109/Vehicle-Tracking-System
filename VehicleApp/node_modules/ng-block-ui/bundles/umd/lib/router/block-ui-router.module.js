var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "../block-ui.module", "./block-ui-prevent-navigation.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var block_ui_module_1 = require("../block-ui.module");
    var block_ui_prevent_navigation_service_1 = require("./block-ui-prevent-navigation.service");
    var BlockUIRouterModule = /** @class */ (function () {
        function BlockUIRouterModule() {
        }
        BlockUIRouterModule_1 = BlockUIRouterModule;
        BlockUIRouterModule.forRoot = function () {
            return {
                ngModule: BlockUIRouterModule_1,
                providers: [
                    block_ui_prevent_navigation_service_1.BlockUIPreventNavigation
                ]
            };
        };
        BlockUIRouterModule = BlockUIRouterModule_1 = __decorate([
            core_1.NgModule({
                imports: [
                    block_ui_module_1.BlockUIModule
                ]
            })
        ], BlockUIRouterModule);
        return BlockUIRouterModule;
        var BlockUIRouterModule_1;
    }());
    exports.BlockUIRouterModule = BlockUIRouterModule;
});
