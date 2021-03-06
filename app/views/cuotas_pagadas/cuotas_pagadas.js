"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
var utils = require("utils/utils");
var phone = require("nativescript-phone");
var email = require("nativescript-email");
var frameModule = require("tns-core-modules/ui/frame");
function loaded(args) {
    var bar = args.object;
    bar.selectTab(1);
    bar.on('tabSelected', tabSelected);
}
exports.loaded = loaded;
function tabSelected(args) {
    console.log('tab selected ' + args.newIndex);
    if (args.newIndex == 0) {
        frame_1.topmost().navigate({
            moduleName: "views/datos_auto/datos_auto"
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
function onNavigatedTo(args) {
    var gaugeView = frameModule.topmost().getViewById("gaugeView");
    var scale = gaugeView.scales.getItem(0);
    for (var i = 0; i < scale.indicators.length; i++) {
        var barIndicator = scale.indicators.getItem(i);
        if (barIndicator.maximum == 0) {
            barIndicator.maximum = Math.random() * 100;
        }
    }
}
exports.onNavigatedTo = onNavigatedTo;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VvdGFzX3BhZ2FkYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjdW90YXNfcGFnYWRhcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLG1EQUFvRDtBQUVwRCxtQ0FBcUM7QUFDckMsMENBQTRDO0FBQzVDLDBDQUE0QztBQUM1Qyx1REFBMEQ7QUFHMUQsZ0JBQXVCLElBQUk7SUFDekIsSUFBSSxHQUFHLEdBQXFCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDeEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUVyQyxDQUFDO0FBTEQsd0JBS0M7QUFFRCxxQkFBNEIsSUFBNEI7SUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNyQixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDakIsVUFBVSxFQUFFLDZCQUE2QjtTQUMxQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUNGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNyQixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDakIsVUFBVSxFQUFFLHVDQUF1QztTQUNwRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztBQUNKLENBQUM7QUFaRCxrQ0FZQztBQUVELHVCQUE4QixJQUFJO0lBQzlCLElBQUksU0FBUyxHQUE2RCxXQUFXLENBQUMsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3pILElBQUksS0FBSyxHQUF1RCxTQUFTLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1RixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDL0MsSUFBSSxZQUFZLEdBQXFFLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pILEVBQUUsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1QixZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7QUFDTCxDQUFDO0FBVEQsc0NBU0M7QUFFRDtJQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMsb0RBQW9ELENBQUMsQ0FBQztBQUN0RSxDQUFDO0FBRkQsb0NBRUM7QUFFRDtJQUNFLEtBQUssQ0FBQyxPQUFPLENBQUMseUNBQXlDLENBQUMsQ0FBQztBQUMzRCxDQUFDO0FBRkQsc0NBRUM7QUFFRDtJQUNFLEtBQUssQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUMsSUFBSSxDQUFDLENBQUM7QUFDeEMsQ0FBQztBQUZELG9DQUVDO0FBRUQ7SUFDRSxLQUFLLENBQUMsT0FBTyxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDL0MsQ0FBQztBQUZELDBCQUVDO0FBRUQ7SUFDRSxLQUFLLENBQUMsT0FBTyxDQUFDO1FBQ1osRUFBRSxFQUFFLENBQUMsNEJBQTRCLENBQUM7S0FDbkMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUpELDhCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudERhdGEsIGZyb21PYmplY3QgYXMgT2JzZXJ2YWJsZUZyb21PYmplY3QgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgQm90dG9tTmF2aWdhdGlvbiwgT25UYWJTZWxlY3RlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYm90dG9tLW5hdmlnYXRpb25cIjtcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJ3V0aWxzL3V0aWxzJztcbmltcG9ydCAqIGFzIHBob25lIGZyb20gJ25hdGl2ZXNjcmlwdC1waG9uZSc7XG5pbXBvcnQgKiBhcyBlbWFpbCBmcm9tIFwibmF0aXZlc2NyaXB0LWVtYWlsXCI7XG5pbXBvcnQgZnJhbWVNb2R1bGUgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiKTtcbmltcG9ydCBnYXVnZXNNb2R1bGUgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXByby11aS9nYXVnZXNcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZWQoYXJncykge1xuICBsZXQgYmFyOiBCb3R0b21OYXZpZ2F0aW9uID0gYXJncy5vYmplY3Q7XG4gIGJhci5zZWxlY3RUYWIoMSk7XG4gIGJhci5vbigndGFiU2VsZWN0ZWQnLCB0YWJTZWxlY3RlZCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhYlNlbGVjdGVkKGFyZ3M6IE9uVGFiU2VsZWN0ZWRFdmVudERhdGEpIHtcbiAgY29uc29sZS5sb2coJ3RhYiBzZWxlY3RlZCAnICsgYXJncy5uZXdJbmRleCk7XG4gIGlmKGFyZ3MubmV3SW5kZXggPT0gMCl7XG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgIG1vZHVsZU5hbWU6IFwidmlld3MvZGF0b3NfYXV0by9kYXRvc19hdXRvXCJcbiAgICB9KTtcbiAgfTtcbiAgaWYoYXJncy5uZXdJbmRleCA9PSAyKXtcbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9jdW90YXNfdmVuY2lkYXMvY3VvdGFzX3ZlbmNpZGFzXCJcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGVkVG8oYXJncykge1xuICAgIGxldCBnYXVnZVZpZXc6IGdhdWdlc01vZHVsZS5SYWRSYWRpYWxHYXVnZSA9IDxnYXVnZXNNb2R1bGUuUmFkUmFkaWFsR2F1Z2U+ZnJhbWVNb2R1bGUudG9wbW9zdCgpLmdldFZpZXdCeUlkKFwiZ2F1Z2VWaWV3XCIpO1xuICAgIGxldCBzY2FsZTogZ2F1Z2VzTW9kdWxlLlJhZGlhbFNjYWxlID0gPGdhdWdlc01vZHVsZS5SYWRpYWxTY2FsZT5nYXVnZVZpZXcuc2NhbGVzLmdldEl0ZW0oMCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzY2FsZS5pbmRpY2F0b3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBiYXJJbmRpY2F0b3I6IGdhdWdlc01vZHVsZS5SYWRpYWxCYXJJbmRpY2F0b3IgPSA8Z2F1Z2VzTW9kdWxlLlJhZGlhbEJhckluZGljYXRvcj5zY2FsZS5pbmRpY2F0b3JzLmdldEl0ZW0oaSk7XG4gICAgICAgIGlmIChiYXJJbmRpY2F0b3IubWF4aW11bSA9PSAwKSB7XG4gICAgICAgICAgICBiYXJJbmRpY2F0b3IubWF4aW11bSA9IE1hdGgucmFuZG9tKCkgKiAxMDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvcGVuRmFjZWJvb2soKXtcbiAgdXRpbHMub3BlblVybChcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9TdXBlclBsYW4tMTQzMTgzNjI5NDcwNjkwXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3Blbkluc3RhZ3JhbSgpe1xuICB1dGlscy5vcGVuVXJsKFwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zdXBlcnBsYW5fMGttXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3BlbldoYXRzYXBwKCl7XG4gIHBob25lLmRpYWwoXCIrNTQgOSAzNjIgNDk0LTY4OTJcIix0cnVlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5XZWIoKXtcbiAgdXRpbHMub3BlblVybChcImh0dHA6Ly93d3cuc3VwZXJwbGFuLmNvbS5hclwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5FbWFpbCgpe1xuICBlbWFpbC5jb21wb3NlKHtcbiAgICB0bzogWydjb25zdWx0YXNAc3VwZXJwbGFuLmNvbS5hciddXG4gIH0pO1xufSJdfQ==