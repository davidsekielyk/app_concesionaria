import {EventData, fromObject as ObservableFromObject } from 'tns-core-modules/data/observable';
import {Page} from "tns-core-modules/ui/page";
import { topmost } from "tns-core-modules/ui/frame";
import { BottomNavigation, OnTabSelectedEventData } from "nativescript-bottom-navigation";
import * as utils from 'utils/utils';
import * as phone from 'nativescript-phone';
import * as email from "nativescript-email";

let contextData;

export function pageLoaded(args: EventData){
  let page = <Page>args.object;
  contextData = page.navigationContext; 
}

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

export function openFacebook(){
  utils.openUrl("https://www.facebook.com/SuperPlan-143183629470690");
}

export function openInstagram(){
  utils.openUrl("https://www.instagram.com/superplan_0km");
}

export function openWhatsapp(){
  phone.dial("+54 9 362 494-6892",true);
}

export function openWeb(){
  utils.openUrl("http://www.superplan.com.ar");
}

export function openEmail(){
  email.compose({
    to: ['consultas@superplan.com.ar']
  });
}


// exports.openUrl = function() {
//     if(contextData.descarga_cuota) {
//         utils.openUrl(contextData.descarga_cuota);
//     }
// };

// exports.openFacebook = function() {
//     utils.openUrl("https://www.facebook.com/SuperPlan-143183629470690");
// };

// exports.openInstagram = function() {
//     utils.openUrl("https://www.instagram.com/superplan_0km");
// };

// exports.openWhatsapp = function(){
//     phone.dial("+54 9 362 494-6892",true);
// }

// exports.openWeb = function(){
//     utils.openUrl("http://www.superplan.com.ar");
// }

// exports.openEmail = function(){
//     email.compose({
//         to: ['consultas@superplan.com.ar']
//     });
// }