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
        define(["require", "exports", "@angular/core", "rxjs/operator/finally", "../services/block-ui.service", "./block-ui-http-settings.service", "../constants/block-ui-default-name.constant"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var finally_1 = require("rxjs/operator/finally");
    var block_ui_service_1 = require("../services/block-ui.service");
    var block_ui_http_settings_service_1 = require("./block-ui-http-settings.service");
    var block_ui_default_name_constant_1 = require("../constants/block-ui-default-name.constant");
    var BlockUIInterceptor = /** @class */ (function () {
        function BlockUIInterceptor(blockUIService, BlockUIHttpSettings) {
            this.blockUIService = blockUIService;
            this.BlockUIHttpSettings = BlockUIHttpSettings;
            this.settings = {};
        }
        BlockUIInterceptor.prototype.intercept = function (request, next) {
            var _this = this;
            var req = next.handle(request);
            var response$ = req.subscribe.bind(req);
            var active = false;
            req.subscribe = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                if (_this.shouldBlock(request)) {
                    _this.blockUIService.start(block_ui_default_name_constant_1.BlockUIDefaultName);
                    active = true;
                }
                return response$.apply(void 0, args);
            };
            return finally_1._finally
                .call(req, function () { return active && _this.blockUIService.stop(block_ui_default_name_constant_1.BlockUIDefaultName); });
        };
        BlockUIInterceptor.prototype.shouldBlock = function (request) {
            var method = request.method, urlWithParams = request.urlWithParams;
            var settings = this.BlockUIHttpSettings.settings;
            var requestFilters = settings.requestFilters || [];
            return !requestFilters.some(function (f) {
                if (f && f.method && f.url) {
                    return f.method.toUpperCase() === method && f.url.test(urlWithParams);
                }
                else if (typeof f === 'function') {
                    return f(request);
                }
                return f.test(urlWithParams);
            });
        };
        BlockUIInterceptor = __decorate([
            core_1.Injectable(),
            __metadata("design:paramtypes", [block_ui_service_1.BlockUIService,
                block_ui_http_settings_service_1.BlockUIHttpSettings])
        ], BlockUIInterceptor);
        return BlockUIInterceptor;
    }());
    exports.BlockUIInterceptor = BlockUIInterceptor;
});
