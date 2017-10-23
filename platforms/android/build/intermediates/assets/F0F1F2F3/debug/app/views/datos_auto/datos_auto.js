"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var frame_1 = require("tns-core-modules/ui/frame");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3NfYXV0by5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdG9zX2F1dG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBb0Q7QUFHcEQsZ0JBQXVCLElBQUk7SUFDekIsSUFBSSxHQUFHLEdBQXFCLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDeEMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNqQixHQUFHLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxXQUFXLENBQUMsQ0FBQztBQUVyQyxDQUFDO0FBTEQsd0JBS0M7QUFFRCxxQkFBNEIsSUFBNEI7SUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNyQixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDakIsVUFBVSxFQUFFLHFDQUFxQztTQUNsRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztJQUNGLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUEsQ0FBQztRQUNyQixlQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDakIsVUFBVSxFQUFFLHVDQUF1QztTQUNwRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQUEsQ0FBQztBQUNKLENBQUM7QUFaRCxrQ0FZQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuaW1wb3J0IHsgQm90dG9tTmF2aWdhdGlvbiwgT25UYWJTZWxlY3RlZEV2ZW50RGF0YSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYm90dG9tLW5hdmlnYXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRlZChhcmdzKSB7XG4gIGxldCBiYXI6IEJvdHRvbU5hdmlnYXRpb24gPSBhcmdzLm9iamVjdDtcbiAgYmFyLnNlbGVjdFRhYigwKTtcbiAgYmFyLm9uKCd0YWJTZWxlY3RlZCcsIHRhYlNlbGVjdGVkKTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gdGFiU2VsZWN0ZWQoYXJnczogT25UYWJTZWxlY3RlZEV2ZW50RGF0YSkge1xuICBjb25zb2xlLmxvZygndGFiIHNlbGVjdGVkICcgKyBhcmdzLm5ld0luZGV4KTtcbiAgaWYoYXJncy5uZXdJbmRleCA9PSAxKXtcbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgbW9kdWxlTmFtZTogXCJ2aWV3cy9jdW90YXNfcGFnYWRhcy9jdW90YXNfcGFnYWRhc1wiXG4gICAgfSk7XG4gIH07XG4gIGlmKGFyZ3MubmV3SW5kZXggPT0gMil7XG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKHtcbiAgICAgIG1vZHVsZU5hbWU6IFwidmlld3MvY3VvdGFzX3ZlbmNpZGFzL2N1b3Rhc192ZW5jaWRhc1wiXG4gICAgfSk7XG4gIH07XG59Il19