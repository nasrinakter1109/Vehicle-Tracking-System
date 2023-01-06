"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var import0 = require("@angular/core/src/linker/ng_module_factory");
var import1 = require("./passwordStrengthBar.module");
var PasswordStrengthBarModuleInjector = (function (_super) {
    __extends(PasswordStrengthBarModuleInjector, _super);
    function PasswordStrengthBarModuleInjector(parent) {
        return _super.call(this, parent, [], []) || this;
    }
    PasswordStrengthBarModuleInjector.prototype.createInternal = function () {
        this._PasswordStrengthBarModule_0 = new import1.PasswordStrengthBarModule();
        return this._PasswordStrengthBarModule_0;
    };
    PasswordStrengthBarModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import1.PasswordStrengthBarModule)) {
            return this._PasswordStrengthBarModule_0;
        }
        return notFoundResult;
    };
    PasswordStrengthBarModuleInjector.prototype.destroyInternal = function () {
    };
    return PasswordStrengthBarModuleInjector;
}(import0.NgModuleInjector));
exports.PasswordStrengthBarModuleNgFactory = new import0.NgModuleFactory(PasswordStrengthBarModuleInjector, import1.PasswordStrengthBarModule);
//# sourceMappingURL=passwordStrengthBar.module.ngfactory.js.map