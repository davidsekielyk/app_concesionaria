"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
var utils = require("utils/utils");
var phone = require("nativescript-phone");
var email = require("nativescript-email");
var contextData;
function pageLoaded(args) {
    var page = args.object;
    contextData = page.navigationContext;
}
exports.pageLoaded = pageLoaded;
function loaded(args) {
    var bar = args.object;
    bar.selectTab(0);
    bar.on('tabSelected', tabSelected);
}
exports.loaded = loaded;
function tabSelected(args) {
    console.log('tab selected ' + args.newIndex);
    if (args.newIndex == 1) {
        frame_1.topmost().navigate({
            moduleName: "views/cuotas_pagadas/cuotas_pagadas"
        });
    }
    ;
    if (args.newIndex == 2) {
        frame_1.topmost().navigate({
            moduleName: "views/cuotas_vencidas/cuotas_vencidas"
        });
    }
    ;
}
exports.tabSelected = tabSelected;
function openFacebook() {
    utils.openUrl("https://www.facebook.com/SuperPlan-143183629470690");
}
exports.openFacebook = openFacebook;
function openInstagram() {
    utils.openUrl("https://www.instagram.com/superplan_0km");
}
exports.openInstagram = openInstagram;
function openWhatsapp() {
    phone.dial("+54 9 362 494-6892", true);
}
exports.openWhatsapp = openWhatsapp;
function openWeb() {
    utils.openUrl("http://www.superplan.com.ar");
}
exports.openWeb = openWeb;
function openEmail() {
    email.compose({
        to: ['consultas@superplan.com.ar']
    });
}
exports.openEmail = openEmail;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3NfYXV0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdG9zX2F1dG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtREFBb0Q7QUFFcEQsbUNBQXFDO0FBQ3JDLDBDQUE0QztBQUM1QywwQ0FBNEM7QUFFNUMsSUFBSSxXQUFXLENBQUM7QUFFaEIsb0JBQTJCLElBQWU7SUFDeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO0FBQ3ZDLENBQUM7QUFIRCxnQ0FHQztBQUVELGdCQUF1QixJQUFJO0lBQ3pCLElBQUksR0FBRyxHQUFxQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFckMsQ0FBQztBQUxELHdCQUtDO0FBRUQscUJBQTRCLElBQTRCO0lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDckIsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2pCLFVBQVUsRUFBRSxxQ0FBcUM7U0FDbEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFDRixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDckIsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2pCLFVBQVUsRUFBRSx1Q0FBdUM7U0FDcEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7QUFDSixDQUFDO0FBWkQsa0NBWUM7QUFFRDtJQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRkQsb0NBRUM7QUFFRDtJQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBRkQsc0NBRUM7QUFFRDtJQUNFLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUZELG9DQUVDO0FBRUQ7SUFDRSxLQUFLLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELDBCQUVDO0FBRUQ7SUFDRSxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ1osRUFBRSxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDbkMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUpELDhCQUlDO0FBR0QsaUNBQWlDO0FBQ2pDLHVDQUF1QztBQUN2QyxxREFBcUQ7QUFDckQsUUFBUTtBQUNSLEtBQUs7QUFFTCxzQ0FBc0M7QUFDdEMsMkVBQTJFO0FBQzNFLEtBQUs7QUFFTCx1Q0FBdUM7QUFDdkMsZ0VBQWdFO0FBQ2hFLEtBQUs7QUFFTCxxQ0FBcUM7QUFDckMsNkNBQTZDO0FBQzdDLElBQUk7QUFFSixnQ0FBZ0M7QUFDaEMsb0RBQW9EO0FBQ3BELElBQUk7QUFFSixrQ0FBa0M7QUFDbEMsc0JBQXNCO0FBQ3RCLDZDQUE2QztBQUM3QyxVQUFVO0FBQ1YsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnREYXRhLCBmcm9tT2JqZWN0IGFzIE9ic2VydmFibGVGcm9tT2JqZWN0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IEJvdHRvbU5hdmlnYXRpb24sIE9uVGFiU2VsZWN0ZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJvdHRvbS1uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICd1dGlscy91dGlscyc7XG5pbXBvcnQgKiBhcyBwaG9uZSBmcm9tICduYXRpdmVzY3JpcHQtcGhvbmUnO1xuaW1wb3J0ICogYXMgZW1haWwgZnJvbSBcIm5hdGl2ZXNjcmlwdC1lbWFpbFwiO1xuXG5sZXQgY29udGV4dERhdGE7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IEV2ZW50RGF0YSl7XG4gIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gIGNvbnRleHREYXRhID0gcGFnZS5uYXZpZ2F0aW9uQ29udGV4dDsgXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZWQoYXJncykge1xuICBsZXQgYmFyOiBCb3R0b21OYXZpZ2F0aW9uID0gYXJncy5vYmplY3Q7XG4gIGJhci5zZWxlY3RUYWIoMCk7XG4gIGJhci5vbigndGFiU2VsZWN0ZWQnLCB0YWJTZWxlY3RlZCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhYlNlbGVjdGVkKGFyZ3M6IE9uVGFiU2VsZWN0ZWRFdmVudERhdGEpIHtcbiAgY29uc29sZS5sb2coJ3RhYiBzZWxlY3RlZCAnICsgYXJncy5uZXdJbmRleCk7XG4gIGlmKGFyZ3MubmV3SW5kZXggPT0gMSl7XG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgIG1vZHVsZU5hbWU6IFwidmlld3MvY3VvdGFzX3BhZ2FkYXMvY3VvdGFzX3BhZ2FkYXNcIlxuICAgIH0pO1xuICB9O1xuICBpZihhcmdzLm5ld0luZGV4ID09IDIpe1xuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICBtb2R1bGVOYW1lOiBcInZpZXdzL2N1b3Rhc192ZW5jaWRhcy9jdW90YXNfdmVuY2lkYXNcIlxuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkZhY2Vib29rKCl7XG4gIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vU3VwZXJQbGFuLTE0MzE4MzYyOTQ3MDY5MFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5JbnN0YWdyYW0oKXtcbiAgdXRpbHMub3BlblVybChcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc3VwZXJwbGFuXzBrbVwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5XaGF0c2FwcCgpe1xuICBwaG9uZS5kaWFsKFwiKzU0IDkgMzYyIDQ5NC02ODkyXCIsdHJ1ZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuV2ViKCl7XG4gIHV0aWxzLm9wZW5VcmwoXCJodHRwOi8vd3d3LnN1cGVycGxhbi5jb20uYXJcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuRW1haWwoKXtcbiAgZW1haWwuY29tcG9zZSh7XG4gICAgdG86IFsnY29uc3VsdGFzQHN1cGVycGxhbi5jb20uYXInXVxuICB9KTtcbn1cblxuXG4vLyBleHBvcnRzLm9wZW5VcmwgPSBmdW5jdGlvbigpIHtcbi8vICAgICBpZihjb250ZXh0RGF0YS5kZXNjYXJnYV9jdW90YSkge1xuLy8gICAgICAgICB1dGlscy5vcGVuVXJsKGNvbnRleHREYXRhLmRlc2NhcmdhX2N1b3RhKTtcbi8vICAgICB9XG4vLyB9O1xuXG4vLyBleHBvcnRzLm9wZW5GYWNlYm9vayA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vU3VwZXJQbGFuLTE0MzE4MzYyOTQ3MDY5MFwiKTtcbi8vIH07XG5cbi8vIGV4cG9ydHMub3Blbkluc3RhZ3JhbSA9IGZ1bmN0aW9uKCkge1xuLy8gICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3N1cGVycGxhbl8wa21cIik7XG4vLyB9O1xuXG4vLyBleHBvcnRzLm9wZW5XaGF0c2FwcCA9IGZ1bmN0aW9uKCl7XG4vLyAgICAgcGhvbmUuZGlhbChcIis1NCA5IDM2MiA0OTQtNjg5MlwiLHRydWUpO1xuLy8gfVxuXG4vLyBleHBvcnRzLm9wZW5XZWIgPSBmdW5jdGlvbigpe1xuLy8gICAgIHV0aWxzLm9wZW5VcmwoXCJodHRwOi8vd3d3LnN1cGVycGxhbi5jb20uYXJcIik7XG4vLyB9XG5cbi8vIGV4cG9ydHMub3BlbkVtYWlsID0gZnVuY3Rpb24oKXtcbi8vICAgICBlbWFpbC5jb21wb3NlKHtcbi8vICAgICAgICAgdG86IFsnY29uc3VsdGFzQHN1cGVycGxhbi5jb20uYXInXVxuLy8gICAgIH0pO1xuLy8gfSJdfQ==