import {EventData, fromObject as ObservableFromObject } from 'tns-core-modules/data/observable';
import {Page} from "tns-core-modules/ui/page";
import { topmost } from "tns-core-modules/ui/frame";
import { BottomNavigation, OnTabSelectedEventData } from "nativescript-bottom-navigation";
import * as utils from 'utils/utils';
import * as phone from 'nativescript-phone';
import * as email from "nativescript-email";
import frameModule = require("tns-core-modules/ui/frame");
import gaugesModule = require("nativescript-pro-ui/gauges");

export function loaded(args) {
  let bar: BottomNavigation = args.object;
  bar.selectTab(1);
  bar.on('tabSelected', tabSelected);

}

export function tabSelected(args: OnTabSelectedEventData) {
  console.log('tab selected ' + args.newIndex);
  if(args.newIndex == 0){
    topmost().navigate({
      moduleName: "views/datos_auto/datos_auto"
    });
  };
  if(args.newIndex == 2){
    topmost().navigate({
      moduleName: "views/cuotas_vencidas/cuotas_vencidas"
    });
  };
}

export function onNavigatedTo(args) {
    let gaugeView: gaugesModule.RadRadialGauge = <gaugesModule.RadRadialGauge>frameModule.topmost().getViewById("gaugeView");
    let scale: gaugesModule.RadialScale = <gaugesModule.RadialScale>gaugeView.scales.getItem(0);
    for (var i = 0; i < scale.indicators.length; i++) {
        let barIndicator: gaugesModule.RadialBarIndicator = <gaugesModule.RadialBarIndicator>scale.indicators.getItem(i);
        if (barIndicator.maximum == 0) {
            barIndicator.maximum = Math.random() * 100;
        }
    }
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