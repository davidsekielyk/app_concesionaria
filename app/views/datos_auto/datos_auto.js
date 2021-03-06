"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
var utils = require("utils/utils");
var phone = require("nativescript-phone");
var email = require("nativescript-email");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3NfYXV0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdG9zX2F1dG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxtREFBb0Q7QUFFcEQsbUNBQXFDO0FBQ3JDLDBDQUE0QztBQUM1QywwQ0FBNEM7QUFJNUMsZ0JBQXVCLElBQUk7SUFDekIsSUFBSSxHQUFHLEdBQXFCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDeEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUVyQyxDQUFDO0FBTEQsd0JBS0M7QUFFRCxxQkFBNEIsSUFBNEI7SUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNyQixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDakIsVUFBVSxFQUFFLHFDQUFxQztTQUNsRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUNGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNyQixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDakIsVUFBVSxFQUFFLHVDQUF1QztTQUNwRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztBQUNKLENBQUM7QUFaRCxrQ0FZQztBQUVEO0lBQ0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO0FBQ3RFLENBQUM7QUFGRCxvQ0FFQztBQUVEO0lBQ0UsS0FBSyxDQUFDLE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQyxDQUFDO0FBQzNELENBQUM7QUFGRCxzQ0FFQztBQUVEO0lBQ0UsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBQyxJQUFJLENBQUMsQ0FBQztBQUN4QyxDQUFDO0FBRkQsb0NBRUM7QUFFRDtJQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMsNkJBQTZCLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRkQsMEJBRUM7QUFFRDtJQUNFLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDWixFQUFFLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztLQUNuQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBSkQsOEJBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RGF0YSwgZnJvbU9iamVjdCBhcyBPYnNlcnZhYmxlRnJvbU9iamVjdCB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7UGFnZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuaW1wb3J0IHsgdG9wbW9zdCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ZyYW1lXCI7XG5pbXBvcnQgeyBCb3R0b21OYXZpZ2F0aW9uLCBPblRhYlNlbGVjdGVkRXZlbnREYXRhIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1ib3R0b20tbmF2aWdhdGlvblwiO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAndXRpbHMvdXRpbHMnO1xuaW1wb3J0ICogYXMgcGhvbmUgZnJvbSAnbmF0aXZlc2NyaXB0LXBob25lJztcbmltcG9ydCAqIGFzIGVtYWlsIGZyb20gXCJuYXRpdmVzY3JpcHQtZW1haWxcIjtcbmltcG9ydCB7QW5kcm9pZEFwcGxpY2F0aW9ufSBmcm9tIFwiYXBwbGljYXRpb25cIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZGVkKGFyZ3MpIHtcbiAgbGV0IGJhcjogQm90dG9tTmF2aWdhdGlvbiA9IGFyZ3Mub2JqZWN0O1xuICBiYXIuc2VsZWN0VGFiKDApO1xuICBiYXIub24oJ3RhYlNlbGVjdGVkJywgdGFiU2VsZWN0ZWQpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0YWJTZWxlY3RlZChhcmdzOiBPblRhYlNlbGVjdGVkRXZlbnREYXRhKSB7XG4gIGNvbnNvbGUubG9nKCd0YWIgc2VsZWN0ZWQgJyArIGFyZ3MubmV3SW5kZXgpO1xuICBpZihhcmdzLm5ld0luZGV4ID09IDEpe1xuICAgIHRvcG1vc3QoKS5uYXZpZ2F0ZSh7XG4gICAgICBtb2R1bGVOYW1lOiBcInZpZXdzL2N1b3Rhc19wYWdhZGFzL2N1b3Rhc19wYWdhZGFzXCJcbiAgICB9KTtcbiAgfTtcbiAgaWYoYXJncy5uZXdJbmRleCA9PSAyKXtcbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9jdW90YXNfdmVuY2lkYXMvY3VvdGFzX3ZlbmNpZGFzXCJcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5GYWNlYm9vaygpe1xuICB1dGlscy5vcGVuVXJsKFwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL1N1cGVyUGxhbi0xNDMxODM2Mjk0NzA2OTBcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuSW5zdGFncmFtKCl7XG4gIHV0aWxzLm9wZW5VcmwoXCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3N1cGVycGxhbl8wa21cIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuV2hhdHNhcHAoKXtcbiAgcGhvbmUuZGlhbChcIis1NCA5IDM2MiA0OTQtNjg5MlwiLHRydWUpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbldlYigpe1xuICB1dGlscy5vcGVuVXJsKFwiaHR0cDovL3d3dy5zdXBlcnBsYW4uY29tLmFyXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbkVtYWlsKCl7XG4gIGVtYWlsLmNvbXBvc2Uoe1xuICAgIHRvOiBbJ2NvbnN1bHRhc0BzdXBlcnBsYW4uY29tLmFyJ11cbiAgfSk7XG59XG4iXX0=