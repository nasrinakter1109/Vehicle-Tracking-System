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
    BlockUIModule.forRoot = function (settings) {
        if (settings === void 0) { settings = {}; }
        return {
            ngModule: BlockUIModule,
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
    BlockUIModule.decorators = [
        { type: core_1.NgModule, args: [{
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
                },] },
    ];
    /** @nocollapse */
    BlockUIModule.ctorParameters = function () { return []; };
    return BlockUIModule;
}());
exports.BlockUIModule = BlockUIModule;
