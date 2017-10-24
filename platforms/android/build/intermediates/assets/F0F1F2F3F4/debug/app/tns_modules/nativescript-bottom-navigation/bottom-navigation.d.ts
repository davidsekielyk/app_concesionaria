import { BottomNavigationBase, BottomNavigationTabBase } from './bottom-navigation.common';
export declare class BottomNavigation extends BottomNavigationBase {
    createNativeView(): Object;
    initNativeView(): void;
    onUnloaded(): void;
    readonly android: any;
    createTabs(tabs: BottomNavigationTab[]): void;
    onTabSelected(index: number): void;
    protected selectTabNative(index: number): void;
}
export declare class BottomNavigationTab extends BottomNavigationTabBase {
    constructor(title: string, icon: string, parent?: WeakRef<BottomNavigationBase>);
}
