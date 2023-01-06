"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var block_ui_module_1 = require("../block-ui.module");
function BlockUI(value) {
    return function (target, propertyKey, descriptor) {
        target[propertyKey] = block_ui_module_1.BlockUIServiceInstance.decorate(value);
    };
}
exports.BlockUI = BlockUI;
