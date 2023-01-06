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
        define(["require", "exports", "@angular/core", "@angular/common/http", "../block-ui.module", "./block-ui-http-settings.service", "./block-ui-http.interceptor"], factory);
    }
})(function (require, exports) {
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
        BlockUIHttpModule_1 = BlockUIHttpModule;
        BlockUIHttpModule.forRoot = function (settings) {
            if (settings === void 0) { settings = {}; }
            return {
                ngModule: BlockUIHttpModule_1,
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
        BlockUIHttpModule = BlockUIHttpModule_1 = __decorate([
            core_1.NgModule({
                imports: [block_ui_module_1.BlockUIModule]
            })
        ], BlockUIHttpModule);
        return BlockUIHttpModule;
        var BlockUIHttpModule_1;
    }());
    exports.BlockUIHttpModule = BlockUIHttpModule;
});
