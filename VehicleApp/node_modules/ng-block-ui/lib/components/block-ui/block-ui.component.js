"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var block_ui_instance_service_1 = require("../../services/block-ui-instance.service");
var block_ui_default_name_constant_1 = require("../../constants/block-ui-default-name.constant");
var BlockUIComponent = /** @class */ (function () {
    function BlockUIComponent(blockUI) {
        this.blockUI = blockUI;
    }
    BlockUIComponent.prototype.ngOnInit = function () {
        this.name = this.name || block_ui_default_name_constant_1.BlockUIDefaultName;
        this.template = this.template || this.blockUI.blockUISettings.template;
    };
    BlockUIComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'block-ui',
                    template: "\n    <ng-content></ng-content>\n    <block-ui-content\n      [name]=\"name\"\n      [message]=\"message\"\n      [template]=\"template\"\n      [delayStart]=\"delayStart\"\n      [delayStop]=\"delayStop\"\n    >\n    </block-ui-content>\n  ",
                    encapsulation: core_1.ViewEncapsulation.None
                },] },
    ];
    /** @nocollapse */
    BlockUIComponent.ctorParameters = function () { return [
        { type: block_ui_instance_service_1.BlockUIInstanceService, },
    ]; };
    BlockUIComponent.propDecorators = {
        "name": [{ type: core_1.Input },],
        "message": [{ type: core_1.Input },],
        "delayStart": [{ type: core_1.Input },],
        "delayStop": [{ type: core_1.Input },],
        "template": [{ type: core_1.Input },],
    };
    return BlockUIComponent;
}());
exports.BlockUIComponent = BlockUIComponent;
