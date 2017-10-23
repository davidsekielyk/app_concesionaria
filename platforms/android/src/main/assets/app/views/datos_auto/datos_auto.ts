import { topmost } from "tns-core-modules/ui/frame";
import { BottomNavigation, OnTabSelectedEventData } from "nativescript-bottom-navigation";

export function loaded(args) {
  let bar: BottomNavigation = args.object;
  bar.selectTab(0);
  bar.on('tabSelected', tabSelected);

}

export function tabSelected(args: OnTabSelectedEventData) {
  console.log('tab selected ' + args.newIndex);
  if(args.newIndex == 1){
    topmost().navigate({
      moduleName: "views/cuotas_pagadas/cuotas_pagadas"
    });
  };
  if(args.newIndex == 2){
    topmost().navigate({
      moduleName: "views/cuotas_vencidas/cuotas_vencidas"
    });
  };
}