"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var block_ui_module_1 = require("../block-ui.module");
var block_ui_http_settings_service_1 = require("./block-ui-http-settings.service");
var block_ui_http_interceptor_1 = require("./block-ui-http.interceptor");
// Needed for AOT compiling
exports.BlockUIHttpModuleSettings = new core_1.InjectionToken('BlockUIHttpModuleSettings');
function provideSettingsInstance(settings) {
    return { settings: settings };
}
exports.provideSettingsInstance = provideSettingsInstance;
var BlockUIHttpModule = /** @class */ (function () {
    function BlockUIHttpModule() {
    }
    BlockUIHttpModule.forRoot = function (settings) {
        if (settings === void 0) { settings = {}; }
        return {
            ngModule: BlockUIHttpModule,
            providers: [
                {
                    provide: exports.BlockUIHttpModuleSettings,
                    useValue: settings
                },
                {
                    provide: block_ui_http_settings_service_1.BlockUIHttpSettings,
                    useFactory: provideSettingsInstance,
                    deps: [exports.BlockUIHttpModuleSettings]
                },
                {
                    provide: http_1.HTTP_INTERCEPTORS,
                    useClass: block_ui_http_interceptor_1.BlockUIInterceptor,
                    multi: true
                }
            ]
        };
    };
    BlockUIHttpModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [block_ui_module_1.BlockUIModule]
                },] },
    ];
    /** @nocollapse */
    BlockUIHttpModule.ctorParameters = function () { return []; };
    return BlockUIHttpModule;
}());
exports.BlockUIHttpModule = BlockUIHttpModule;
