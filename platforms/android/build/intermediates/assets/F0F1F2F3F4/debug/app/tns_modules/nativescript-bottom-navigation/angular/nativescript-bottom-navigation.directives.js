"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BottomNavigationDirective = (function () {
    function BottomNavigationDirective() {
    }
    return BottomNavigationDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BottomNavigationDirective.prototype, "activeColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BottomNavigationDirective.prototype, "inactiveColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BottomNavigationDirective.prototype, "backgroundColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], BottomNavigationDirective.prototype, "tabs", void 0);
BottomNavigationDirective = __decorate([
    core_1.Directive({
        selector: "BottomNavigation"
    })
], BottomNavigationDirective);
exports.BottomNavigationDirective = BottomNavigationDirective;
var BottomNavigationTabDirective = (function () {
    function BottomNavigationTabDirective() {
    }
    return BottomNavigationTabDirective;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BottomNavigationTabDirective.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], BottomNavigationTabDirective.prototype, "icon", void 0);
BottomNavigationTabDirective = __decorate([
    core_1.Directive({
        selector: "BottomNavigationTab"
    })
], BottomNavigationTabDirective);
exports.BottomNavigationTabDirective = BottomNavigationTabDirective;
exports.DIRECTIVES = [BottomNavigationDirective, BottomNavigationTabDirective];
//# sourceMappingURL=nativescript-bottom-navigation.directives.js.map