"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
function loaded(args) {
    var bar = args.object;
    bar.selectTab(2);
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
    if (args.newIndex == 1) {
        frame_1.topmost().navigate({
            moduleName: "views/cuotas_pagadas/cuotas_pagadas"
        });
    }
    ;
}
exports.tabSelected = tabSelected;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VvdGFzX3ZlbmNpZGFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VvdGFzX3ZlbmNpZGFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQW9EO0FBR3BELGdCQUF1QixJQUFJO0lBQ3pCLElBQUksR0FBRyxHQUFxQixJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakIsR0FBRyxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLENBQUM7QUFFckMsQ0FBQztBQUxELHdCQUtDO0FBRUQscUJBQTRCLElBQTRCO0lBQ3RELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3QyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDckIsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2pCLFVBQVUsRUFBRSw2QkFBNkI7U0FDMUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7SUFDRixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFBLENBQUM7UUFDckIsZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ2pCLFVBQVUsRUFBRSxxQ0FBcUM7U0FDbEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFBLENBQUM7QUFDSixDQUFDO0FBWkQsa0NBWUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IEJvdHRvbU5hdmlnYXRpb24sIE9uVGFiU2VsZWN0ZWRFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWJvdHRvbS1uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkZWQoYXJncykge1xuICBsZXQgYmFyOiBCb3R0b21OYXZpZ2F0aW9uID0gYXJncy5vYmplY3Q7XG4gIGJhci5zZWxlY3RUYWIoMik7XG4gIGJhci5vbigndGFiU2VsZWN0ZWQnLCB0YWJTZWxlY3RlZCk7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRhYlNlbGVjdGVkKGFyZ3M6IE9uVGFiU2VsZWN0ZWRFdmVudERhdGEpIHtcbiAgY29uc29sZS5sb2coJ3RhYiBzZWxlY3RlZCAnICsgYXJncy5uZXdJbmRleCk7XG4gIGlmKGFyZ3MubmV3SW5kZXggPT0gMCl7XG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgIG1vZHVsZU5hbWU6IFwidmlld3MvZGF0b3NfYXV0by9kYXRvc19hdXRvXCJcbiAgICB9KTtcbiAgfTtcbiAgaWYoYXJncy5uZXdJbmRleCA9PSAxKXtcbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9jdW90YXNfcGFnYWRhcy9jdW90YXNfcGFnYWRhc1wiXG4gICAgfSk7XG4gIH07XG59Il19