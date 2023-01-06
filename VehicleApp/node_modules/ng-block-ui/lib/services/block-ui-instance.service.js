"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var block_ui_actions_constant_1 = require("../constants/block-ui-actions.constant");
var block_ui_default_name_constant_1 = require("../constants/block-ui-default-name.constant");
var BlockUIInstanceService = /** @class */ (function () {
    function BlockUIInstanceService() {
        this.blockUISettings = {};
        this.blockUIInstances = [];
        this.blockUISubject = new ReplaySubject_1.ReplaySubject();
        this.blockUIObservable = this.blockUISubject.asObservable();
        this.blockUIObservable.subscribe(this.blockUIMiddleware.bind(this));
    }
    BlockUIInstanceService.prototype.getSettings = function () {
        return this.blockUISettings;
    };
    BlockUIInstanceService.prototype.updateSettings = function (settings) {
        if (settings === void 0) { settings = {}; }
        this.blockUISettings = __assign({}, this.blockUISettings, settings);
    };
    BlockUIInstanceService.prototype.decorate = function (name) {
        if (name === void 0) { name = block_ui_default_name_constant_1.BlockUIDefaultName; }
        var blockUI = {
            name: name,
            isActive: false,
            start: this.dispatch(this.blockUISubject, block_ui_actions_constant_1.BlockUIActions.START, name),
            update: this.dispatch(this.blockUISubject, block_ui_actions_constant_1.BlockUIActions.UPDATE, name),
            stop: this.dispatch(this.blockUISubject, block_ui_actions_constant_1.BlockUIActions.STOP, name),
            reset: this.dispatch(this.blockUISubject, block_ui_actions_constant_1.BlockUIActions.RESET, name),
            unsubscribe: this.dispatch(this.blockUISubject, block_ui_actions_constant_1.BlockUIActions.UNSUBSCRIBE, name)
        };
        if (this.blockUIInstances.every(function (i) { return i.name !== blockUI.name; })) {
            this.blockUIInstances.push(blockUI);
        }
        return blockUI;
    };
    BlockUIInstanceService.prototype.observe = function () {
        return this.blockUIObservable;
    };
    BlockUIInstanceService.prototype.blockUIMiddleware = function (_a) {
        var action = _a.action, name = _a.name;
        var isActive = null;
        switch (action) {
            case (block_ui_actions_constant_1.BlockUIActions.START):
                isActive = true;
                break;
            case (block_ui_actions_constant_1.BlockUIActions.STOP):
            case (block_ui_actions_constant_1.BlockUIActions.RESET):
                isActive = false;
                break;
        }
        if (isActive !== null) {
            this.blockUIInstances.forEach(function (i) {
                return i.isActive = i.name === name ? isActive : i.isActive;
            });
        }
    };
    BlockUIInstanceService.prototype.dispatch = function (subject, action, name) {
        if (name === void 0) { name = block_ui_default_name_constant_1.BlockUIDefaultName; }
        return function (message) {
            subject.next({
                name: name,
                action: action,
                message: message
            });
        };
    };
    BlockUIInstanceService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    BlockUIInstanceService.ctorParameters = function () { return []; };
    return BlockUIInstanceService;
}());
exports.BlockUIInstanceService = BlockUIInstanceService;
