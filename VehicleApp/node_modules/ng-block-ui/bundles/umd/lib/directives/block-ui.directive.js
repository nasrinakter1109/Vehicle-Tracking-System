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
        define(["require", "exports", "@angular/core", "../components/block-ui-content/block-ui-content.component", "../services/block-ui-instance.service", "../constants/block-ui-default-name.constant"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var block_ui_content_component_1 = require("../components/block-ui-content/block-ui-content.component");
    var block_ui_instance_service_1 = require("../services/block-ui-instance.service");
    var block_ui_default_name_constant_1 = require("../constants/block-ui-default-name.constant");
    var BlockUIDirective = /** @class */ (function () {
        function BlockUIDirective(blockUIService, viewRef, templateRef, renderer, componentFactoryResolver) {
            this.blockUIService = blockUIService;
            this.viewRef = viewRef;
            this.templateRef = templateRef;
            this.renderer = renderer;
            this.componentFactoryResolver = componentFactoryResolver;
        }
        Object.defineProperty(BlockUIDirective.prototype, "blockUI", {
            set: function (name) { this.blockTarget = name; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(BlockUIDirective.prototype, "blockUIMessage", {
            set: function (message) { this.message = message; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(BlockUIDirective.prototype, "blockUITemplate", {
            set: function (template) { this.template = template; },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(BlockUIDirective.prototype, "blockUIDelayStart", {
            set: function (delayStart) {
                this.delayStart = delayStart ? Number(delayStart) : null;
            },
            enumerable: true,
            configurable: true
        });
        ;
        Object.defineProperty(BlockUIDirective.prototype, "blockUIDelayStop", {
            set: function (delayStop) {
                this.delayStop = delayStop ? Number(delayStop) : null;
            },
            enumerable: true,
            configurable: true
        });
        ;
        BlockUIDirective.prototype.ngOnInit = function () {
            try {
                this.viewRef.createEmbeddedView(this.templateRef);
                var parentElement = this.viewRef.element.nativeElement.nextSibling;
                if (parentElement && !this.isComponentInTemplate(parentElement)) {
                    this.renderer.addClass(parentElement, 'block-ui__element');
                    this.blockUIComponentRef = this.createComponent();
                    var blockUIContent = this.findContentNode(this.viewRef.element.nativeElement);
                    if (blockUIContent) {
                        var settings = this.blockUIService.getSettings();
                        parentElement.appendChild(blockUIContent);
                        this.blockUIComponentRef.instance.className = 'block-ui-wrapper--element';
                        this.blockUIComponentRef.instance.name = this.blockTarget || block_ui_default_name_constant_1.BlockUIDefaultName;
                        if (this.message)
                            this.blockUIComponentRef.instance.defaultMessage = this.message;
                        if (this.delayStart)
                            this.blockUIComponentRef.instance.delayStart = this.delayStart;
                        if (this.delayStop)
                            this.blockUIComponentRef.instance.delayStop = this.delayStop;
                        if (this.template || settings.template)
                            this.blockUIComponentRef.instance.templateCmp = this.template || settings.template;
                    }
                }
            }
            catch (error) {
                console.error('ng-block-ui:', error);
            }
        };
        BlockUIDirective.prototype.isComponentInTemplate = function (element) {
            var children = (element || []).children;
            children = Array.from(children).reverse();
            return children.some(function (el) { return el.localName === 'block-ui'; });
        };
        // Needed for IE (#17)
        BlockUIDirective.prototype.findContentNode = function (element) {
            var nextSibling = element.nextSibling;
            return [nextSibling, nextSibling.nextSibling].find(function (e) { return e.localName === 'block-ui-content'; });
        };
        BlockUIDirective.prototype.createComponent = function () {
            var resolvedBlockUIComponent = this.componentFactoryResolver.resolveComponentFactory(block_ui_content_component_1.BlockUIContentComponent);
            return this.viewRef.createComponent(resolvedBlockUIComponent);
        };
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], BlockUIDirective.prototype, "blockUI", null);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], BlockUIDirective.prototype, "blockUIMessage", null);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], BlockUIDirective.prototype, "blockUITemplate", null);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], BlockUIDirective.prototype, "blockUIDelayStart", null);
        __decorate([
            core_1.Input(),
            __metadata("design:type", Object),
            __metadata("design:paramtypes", [Object])
        ], BlockUIDirective.prototype, "blockUIDelayStop", null);
        BlockUIDirective = __decorate([
            core_1.Directive({ selector: '[blockUI]' }),
            __metadata("design:paramtypes", [block_ui_instance_service_1.BlockUIInstanceService,
                core_1.ViewContainerRef,
                core_1.TemplateRef,
                core_1.Renderer2,
                core_1.ComponentFactoryResolver])
        ], BlockUIDirective);
        return BlockUIDirective;
    }());
    exports.BlockUIDirective = BlockUIDirective;
});
