import {EventData, fromObject as ObservableFromObject } from 'tns-core-modules/data/observable';
import {Page} from "tns-core-modules/ui/page";
import { topmost } from "tns-core-modules/ui/frame";

let userObservable = ObservableFromObject({
    grupo: "",
    orden: ""
});

export function pageLoaded(args: EventData){
    let page = <Page>args.object;
    page.bindingContext = userObservable;
}

export function login(){
    topmost().navigate({
        moduleName: "views/datos_auto/datos_auto"
    });
}