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
        define(["require", "exports", "@angular/core", "rxjs/add/operator/map", "../../services/block-ui-instance.service", "../../constants/block-ui-actions.constant", "../../constants/block-ui-default-name.constant", "./block-ui-content.component.style", "./block-ui-content.component.template"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    require("rxjs/add/operator/map");
    var block_ui_instance_service_1 = require("../../services/block-ui-instance.service");
    var block_ui_actions_constant_1 = require("../../constants/block-ui-actions.constant");
    var block_ui_default_name_constant_1 = require("../../constants/block-ui-default-name.constant");
    var block_ui_content_component_style_1 = require("./block-ui-content.component.style");
    var block_ui_content_component_template_1 = require("./block-ui-content.component.template");
    var BlockUIContentComponent = /** @class */ (function () {
        function BlockUIContentComponent(blockUI, resolver, changeDetectionRef) {
            this.blockUI = blockUI;
            this.resolver = resolver;
            this.changeDetectionRef = changeDetectionRef;
            this.name = block_ui_default_name_constant_1.BlockUIDefaultName;
            this.delayStart = 0;
            this.delayStop = 0;
            this.state = { startTimeout: null, stopTimeout: null, blockCount: 0 };
            this.active = false;
        }
        BlockUIContentComponent.prototype.ngOnInit = function () {
            this.settings = this.blockUI.getSettings();
            this.blockUISubscription = this.subscribeToBlockUI(this.blockUI.observe());
        };
        BlockUIContentComponent.prototype.ngAfterViewInit = function () {
            try {
                if (this.templateCmp) {
                    if (this.templateCmp instanceof core_1.TemplateRef) {
                        this.templateOutlet.createEmbeddedView(this.templateCmp);
                    }
                    else {
                        var templateComp = this.resolver.resolveComponentFactory(this.templateCmp);
                        this.templateCompRef = this.templateOutlet.createComponent(templateComp);
                        this.updateBlockTemplate(this.message);
                    }
                }
            }
            catch (error) {
                console.error('ng-block-ui:', error);
            }
        };
        BlockUIContentComponent.prototype.ngAfterViewChecked = function () {
            this.changeDetectionRef.detectChanges();
        };
        BlockUIContentComponent.prototype.subscribeToBlockUI = function (blockUI$) {
            var _this = this;
            return blockUI$
                .subscribe(function (event) { return _this.onDispatchedEvent(event); });
        };
        BlockUIContentComponent.prototype.onDispatchedEvent = function (event) {
            switch (event.action) {
                case (block_ui_actions_constant_1.BlockUIActions.START):
                    this.onStart(event);
                    break;
                case (block_ui_actions_constant_1.BlockUIActions.STOP):
                    this.onStop(event);
                    break;
                case (block_ui_actions_constant_1.BlockUIActions.UPDATE):
                    this.onUpdate(event);
                    break;
                case (block_ui_actions_constant_1.BlockUIActions.RESET):
                    this.onReset();
                    break;
                case (block_ui_actions_constant_1.BlockUIActions.UNSUBSCRIBE):
                    this.onStop(event);
                    this.onUnsubscribe(event.name);
                    break;
            }
        };
        BlockUIContentComponent.prototype.onStart = function (_a) {
            var _this = this;
            var name = _a.name, message = _a.message;
            if (name === this.name) {
                var delay = this.delayStart || this.settings.delayStart || 0;
                if (delay) {
                    if (this.state.startTimeout == null) {
                        this.state.startTimeout = setTimeout(function () {
                            _this.showBlock(message);
                        }, delay);
                    }
                    this.state.blockCount++;
                }
                else {
                    this.showBlock(message);
                }
            }
        };
        BlockUIContentComponent.prototype.onStop = function (_a) {
            var _this = this;
            var name = _a.name, action = _a.action;
            if (name === this.name) {
                if (this.state.blockCount > 1) {
                    this.state.blockCount--;
                }
                else {
                    if (!this.active) {
                        this.clearState();
                    }
                    else {
                        var delay = this.delayStop || this.settings.delayStop || 0;
                        if (delay) {
                            if (this.state.stopTimeout == null) {
                                this.state.stopTimeout = setTimeout(function () {
                                    _this.hideBlock();
                                }, delay);
                            }
                        }
                        else {
                            this.hideBlock();
                        }
                    }
                }
            }
        };
        BlockUIContentComponent.prototype.onReset = function () {
            this.hideBlock();
        };
        BlockUIContentComponent.prototype.onUpdate = function (_a) {
            var name = _a.name, message = _a.message;
            if (name === this.name) {
                this.active = true;
                this.message = message || this.defaultMessage || this.settings.message;
                this.updateBlockTemplate(this.message);
                this.changeDetectionRef.detectChanges();
            }
        };
        BlockUIContentComponent.prototype.showBlock = function (message) {
            this.active = true;
            this.message = message || this.defaultMessage || this.settings.message;
            this.updateBlockTemplate(this.message);
            this.changeDetectionRef.detectChanges();
        };
        BlockUIContentComponent.prototype.hideBlock = function () {
            this.clearState();
            this.active = false;
            this.changeDetectionRef.detectChanges();
        };
        BlockUIContentComponent.prototype.clearState = function () {
            this.state.startTimeout != null && clearTimeout(this.state.startTimeout);
            this.state.stopTimeout != null && clearTimeout(this.state.stopTimeout);
            this.state.blockCount = 0;
            this.state.startTimeout = null;
            this.state.stopTimeout = null;
        };
        BlockUIContentComponent.prototype.updateBlockTemplate = function (msg) {
            if (this.templateCompRef && this.templateCompRef instanceof core_1.ComponentRef) {
                this.templateCompRef.instance.message = msg;
            }
        };
        BlockUIContentComponent.prototype.onUnsubscribe = function (name) {
            if (this.blockUISubscription && name === this.name) {
                this.blockUISubscription.unsubscribe();
            }
        };
        BlockUIContentComponent.prototype.ngOnDestroy = function () {
            this.onUnsubscribe(this.name);
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", String)
        ], BlockUIContentComponent.prototype, "name", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Number)
        ], BlockUIContentComponent.prototype, "delayStart", void 0);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Number)
        ], BlockUIContentComponent.prototype, "delayStop", void 0);
        __decorate([
            core_1.Input('message'),
            __metadata("design:type", String)
        ], BlockUIContentComponent.prototype, "defaultMessage", void 0);
        __decorate([
            core_1.Input('template'),
            __metadata("design:type", Object)
        ], BlockUIContentComponent.prototype, "templateCmp", void 0);
        __decorate([
            core_1.ViewChild('templateOutlet', { read: core_1.ViewContainerRef }),
            __metadata("design:type", core_1.ViewContainerRef)
        ], BlockUIContentComponent.prototype, "templateOutlet", void 0);
        BlockUIContentComponent = __decorate([
            core_1.Component({
                selector: 'block-ui-content',
                template: block_ui_content_component_template_1.template,
                styles: [block_ui_content_component_style_1.styles],
                encapsulation: core_1.ViewEncapsulation.None
            }),
            __metadata("design:paramtypes", [block_ui_instance_service_1.BlockUIInstanceService,
                core_1.ComponentFactoryResolver,
                core_1.ChangeDetectorRef])
        ], BlockUIContentComponent);
        return BlockUIContentComponent;
    }());
    exports.BlockUIContentComponent = BlockUIContentComponent;
});
