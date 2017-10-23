"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bottom_navigation_common_1 = require("./bottom-navigation.common");
var color_1 = require("tns-core-modules/color");
var image_source_1 = require("tns-core-modules/image-source");
var BitmapDrawable = android.graphics.drawable.BitmapDrawable;
var AHBottomNavigation = com.aurelhubert.ahbottomnavigation.AHBottomNavigation;
var AHBottomNavigationItem = com.aurelhubert.ahbottomnavigation.AHBottomNavigationItem;
var BottomNavigation = (function (_super) {
    __extends(BottomNavigation, _super);
    function BottomNavigation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BottomNavigation.prototype.createNativeView = function () {
        this.nativeView = new AHBottomNavigation(this._context);
        var owner = new WeakRef(this);
        this.nativeView.setOnTabSelectedListener(new AHBottomNavigation.OnTabSelectedListener({
            get owner() {
                return owner.get();
            },
            onTabSelected: function (position, wasSelected) {
                if (this.owner && !wasSelected && this.owner.selectedTabIndex !== position) {
                    this.owner.onTabSelected(position);
                }
                return true;
            }
        }));
        this.nativeView.setTitleState(AHBottomNavigation.TitleState.ALWAYS_SHOW);
        this.nativeView.setAccentColor(new color_1.Color(this.activeColor).android);
        this.nativeView.setInactiveColor(new color_1.Color(this.inactiveColor).android);
        this.nativeView.setColored(false);
        this.nativeView.setDefaultBackgroundColor(new color_1.Color(this.backgroundColor).android);
        return this.nativeView;
    };
    BottomNavigation.prototype.initNativeView = function () {
        this.nativeView.setTitleState(AHBottomNavigation.TitleState.ALWAYS_SHOW);
        this.nativeView.setAccentColor(new color_1.Color(this.activeColor).android);
        this.nativeView.setInactiveColor(new color_1.Color(this.inactiveColor).android);
        this.nativeView.setColored(false);
        this.nativeView.setDefaultBackgroundColor(new color_1.Color(this.backgroundColor).android);
    };
    BottomNavigation.prototype.onUnloaded = function () {
        this.nativeView = null;
        _super.prototype.onUnloaded.call(this);
    };
    Object.defineProperty(BottomNavigation.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    BottomNavigation.prototype[bottom_navigation_common_1.tabsProperty.getDefault] = function () {
        return null;
    };
    BottomNavigation.prototype[bottom_navigation_common_1.tabsProperty.setNative] = function (value) {
        this.createTabs(value);
    };
    BottomNavigation.prototype.createTabs = function (tabs) {
        for (var _i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {
            var tab = tabs_1[_i];
            var icon = new BitmapDrawable(image_source_1.fromResource(tab.icon).android);
            var item = new AHBottomNavigationItem(tab.title, icon, new color_1.Color('white').android);
            this.nativeView.addItem(item);
        }
        this.nativeView.setCurrentItem(this.selectedTabIndex);
    };
    BottomNavigation.prototype[bottom_navigation_common_1.activeColorProperty.setNative] = function (activeColor) {
        this.nativeView.setAccentColor(new color_1.Color(activeColor).android);
    };
    BottomNavigation.prototype[bottom_navigation_common_1.activeColorCssProperty.setNative] = function (activeColor) {
        this.nativeView.setAccentColor(activeColor.android);
    };
    BottomNavigation.prototype[bottom_navigation_common_1.inactiveColorProperty.setNative] = function (inactiveColor) {
        this.nativeView.setInactiveColor(new color_1.Color(inactiveColor).android);
    };
    BottomNavigation.prototype[bottom_navigation_common_1.inactiveColorCssProperty.setNative] = function (inactiveColor) {
        this.nativeView.setInactiveColor(inactiveColor.android);
    };
    BottomNavigation.prototype[bottom_navigation_common_1.backgroundColorProperty.setNative] = function (backgroundColor) {
        this.nativeView.setDefaultBackgroundColor(new color_1.Color(backgroundColor).android);
    };
    BottomNavigation.prototype[bottom_navigation_common_1.backgroundColorCssProperty.setNative] = function (backgroundColor) {
        this.nativeView.setDefaultBackgroundColor(backgroundColor.android);
    };
    BottomNavigation.prototype.onTabSelected = function (index) {
        var eventData = {
            eventName: 'tabSelected',
            object: this,
            oldIndex: this.selectedTabIndex,
            newIndex: index
        };
        this.selectedTabIndex = index;
        this.notify(eventData);
    };
    BottomNavigation.prototype.selectTabNative = function (index) {
        this.nativeView.setCurrentItem(index);
    };
    return BottomNavigation;
}(bottom_navigation_common_1.BottomNavigationBase));
exports.BottomNavigation = BottomNavigation;
var BottomNavigationTab = (function (_super) {
    __extends(BottomNavigationTab, _super);
    function BottomNavigationTab(title, icon, parent) {
        return _super.call(this, title, icon, parent) || this;
    }
    return BottomNavigationTab;
}(bottom_navigation_common_1.BottomNavigationTabBase));
exports.BottomNavigationTab = BottomNavigationTab;
//# sourceMappingURL=bottom-navigation.js.map