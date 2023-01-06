(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./lib/http/block-ui-http.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var block_ui_http_module_1 = require("./lib/http/block-ui-http.module");
    exports.BlockUIHttpModule = block_ui_http_module_1.BlockUIHttpModule;
});
