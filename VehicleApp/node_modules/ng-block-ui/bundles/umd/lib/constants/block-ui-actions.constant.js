(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BlockUIActions = /** @class */ (function () {
        function BlockUIActions() {
        }
        BlockUIActions.START = 'start';
        BlockUIActions.STOP = 'stop';
        BlockUIActions.UPDATE = 'update';
        BlockUIActions.RESET = 'reset';
        BlockUIActions.UNSUBSCRIBE = 'unsubscribe';
        return BlockUIActions;
    }());
    exports.BlockUIActions = BlockUIActions;
});
