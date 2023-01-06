(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lib/router/block-ui-router.module", "./lib/router/block-ui-prevent-navigation.service"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var block_ui_router_module_1 = require("./lib/router/block-ui-router.module");
    exports.BlockUIRouterModule = block_ui_router_module_1.BlockUIRouterModule;
    var block_ui_prevent_navigation_service_1 = require("./lib/router/block-ui-prevent-navigation.service");
    exports.BlockUIPreventNavigation = block_ui_prevent_navigation_service_1.BlockUIPreventNavigation;
});
