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
    // Needed for IE (#17)
    BlockUIDirective.prototype.findContentNode = 
    // Needed for IE (#17)
    function (element) {
        var nextSibling = element.nextSibling;
        return [nextSibling, nextSibling.nextSibling].find(function (e) { return e.localName === 'block-ui-content'; });
    };
    BlockUIDirective.prototype.createComponent = function () {
        var resolvedBlockUIComponent = this.componentFactoryResolver.resolveComponentFactory(block_ui_content_component_1.BlockUIContentComponent);
        return this.viewRef.createComponent(resolvedBlockUIComponent);
    };
    BlockUIDirective.decorators = [
        { type: core_1.Directive, args: [{ selector: '[blockUI]' },] },
    ];
    /** @nocollapse */
    BlockUIDirective.ctorParameters = function () { return [
        { type: block_ui_instance_service_1.BlockUIInstanceService, },
        { type: core_1.ViewContainerRef, },
        { type: core_1.TemplateRef, },
        { type: core_1.Renderer2, },
        { type: core_1.ComponentFactoryResolver, },
    ]; };
    BlockUIDirective.propDecorators = {
        "blockUI": [{ type: core_1.Input },],
        "blockUIMessage": [{ type: core_1.Input },],
        "blockUITemplate": [{ type: core_1.Input },],
        "blockUIDelayStart": [{ type: core_1.Input },],
        "blockUIDelayStop": [{ type: core_1.Input },],
    };
    return BlockUIDirective;
}());
exports.BlockUIDirective = BlockUIDirective;
