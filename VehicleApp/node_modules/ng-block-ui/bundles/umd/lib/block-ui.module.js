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
        define(["require", "exports", "@angular/core", "@angular/common", "./components/block-ui/block-ui.component", "./components/block-ui-content/block-ui-content.component", "./services/block-ui-instance.service", "./services/block-ui.service", "./directives/block-ui.directive"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var common_1 = require("@angular/common");
    var block_ui_component_1 = require("./components/block-ui/block-ui.component");
    var block_ui_content_component_1 = require("./components/block-ui-content/block-ui-content.component");
    var block_ui_instance_service_1 = require("./services/block-ui-instance.service");
    var block_ui_service_1 = require("./services/block-ui.service");
    var block_ui_directive_1 = require("./directives/block-ui.directive");
    exports.BlockUIServiceInstance = new block_ui_instance_service_1.BlockUIInstanceService();
    // Needed for AOT compiling
    exports.BlockUIModuleSettings = new core_1.InjectionToken('BlockUIModuleSettings');
    function provideInstance(settings) {
        exports.BlockUIServiceInstance.updateSettings(settings);
        return exports.BlockUIServiceInstance;
    }
    exports.provideInstance = provideInstance;
    var BlockUIModule = /** @class */ (function () {
        function BlockUIModule() {
        }
        BlockUIModule_1 = BlockUIModule;
        BlockUIModule.forRoot = function (settings) {
            if (settings === void 0) { settings = {}; }
            return {
                ngModule: BlockUIModule_1,
                providers: [
                    {
                        provide: exports.BlockUIModuleSettings,
                        useValue: settings
                    },
                    {
                        provide: block_ui_instance_service_1.BlockUIInstanceService,
                        useFactory: provideInstance,
                        deps: [exports.BlockUIModuleSettings]
                    },
                    block_ui_service_1.BlockUIService
                ]
            };
        };
        BlockUIModule = BlockUIModule_1 = __decorate([
            core_1.NgModule({
                imports: [
                    common_1.CommonModule
                ],
                entryComponents: [
                    block_ui_component_1.BlockUIComponent,
                    block_ui_content_component_1.BlockUIContentComponent
                ],
                declarations: [
                    block_ui_component_1.BlockUIComponent,
                    block_ui_directive_1.BlockUIDirective,
                    block_ui_content_component_1.BlockUIContentComponent
                ],
                exports: [
                    block_ui_component_1.BlockUIComponent,
                    block_ui_directive_1.BlockUIDirective,
                    block_ui_content_component_1.BlockUIContentComponent
                ]
            })
        ], BlockUIModule);
        return BlockUIModule;
        var BlockUIModule_1;
    }());
    exports.BlockUIModule = BlockUIModule;
});
