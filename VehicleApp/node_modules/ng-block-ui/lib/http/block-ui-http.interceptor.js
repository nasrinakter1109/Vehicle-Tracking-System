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
    BlockUIInterceptor.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    BlockUIInterceptor.ctorParameters = function () { return [
        { type: block_ui_service_1.BlockUIService, },
        { type: block_ui_http_settings_service_1.BlockUIHttpSettings, },
    ]; };
    return BlockUIInterceptor;
}());
exports.BlockUIInterceptor = BlockUIInterceptor;
