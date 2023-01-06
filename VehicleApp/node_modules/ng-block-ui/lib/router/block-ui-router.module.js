"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var block_ui_module_1 = require("../block-ui.module");
var block_ui_prevent_navigation_service_1 = require("./block-ui-prevent-navigation.service");
var BlockUIRouterModule = /** @class */ (function () {
    function BlockUIRouterModule() {
    }
    BlockUIRouterModule.forRoot = function () {
        return {
            ngModule: BlockUIRouterModule,
            providers: [
                block_ui_prevent_navigation_service_1.BlockUIPreventNavigation
            ]
        };
    };
    BlockUIRouterModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        block_ui_module_1.BlockUIModule
                    ]
                },] },
    ];
    /** @nocollapse */
    BlockUIRouterModule.ctorParameters = function () { return []; };
    return BlockUIRouterModule;
}());
exports.BlockUIRouterModule = BlockUIRouterModule;
