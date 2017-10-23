import { AddChildFromBuilder, View } from 'tns-core-modules/ui/core/view';
import { CssProperty, Property } from 'tns-core-modules/ui/core/properties';
import { EventData } from 'tns-core-modules/data/observable';
import { Style } from 'tns-core-modules/ui/styling/style';
import { Color } from 'tns-core-modules/color';
export interface OnTabSelectedEventData extends EventData {
    oldIndex: number;
    newIndex: number;
}
export declare abstract class BottomNavigationBase extends View implements AddChildFromBuilder {
    tabs: BottomNavigationTabBase[];
    selectedTabIndex: number;
    activeColor: string;
    inactiveColor: string;
    backgroundColor: string;
    selectTab(index: number): void;
    protected abstract selectTabNative(index: number): void;
    _addChildFromBuilder(name: string, value: any): void;
}
export declare const tabsProperty: Property<BottomNavigationBase, BottomNavigationTabBase[]>;
export declare const activeColorProperty: Property<BottomNavigationBase, string>;
export declare const activeColorCssProperty: CssProperty<Style, Color>;
export declare const inactiveColorProperty: Property<BottomNavigationBase, string>;
export declare const inactiveColorCssProperty: CssProperty<Style, Color>;
export declare const backgroundColorProperty: Property<BottomNavigationBase, string>;
export declare const backgroundColorCssProperty: CssProperty<Style, Color>;
export declare class BottomNavigationTabBase {
    private _title;
    private _icon;
    private _parent?;
    constructor(title: string, icon: string, parent?: WeakRef<BottomNavigationBase>);
    title: string;
    icon: string;
    parent: WeakRef<BottomNavigationBase>;
}
