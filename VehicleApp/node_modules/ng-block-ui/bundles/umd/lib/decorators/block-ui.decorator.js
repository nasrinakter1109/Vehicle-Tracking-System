(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../block-ui.module"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var block_ui_module_1 = require("../block-ui.module");
    function BlockUI(value) {
        return function (target, propertyKey, descriptor) {
            target[propertyKey] = block_ui_module_1.BlockUIServiceInstance.decorate(value);
        };
    }
    exports.BlockUI = BlockUI;
});
