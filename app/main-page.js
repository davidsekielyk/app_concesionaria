"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var frame_1 = require("tns-core-modules/ui/frame");
var userObservable = observable_1.fromObject({
    grupo: "",
    orden: ""
});
function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = userObservable;
}
exports.pageLoaded = pageLoaded;
function login() {
    frame_1.topmost().navigate({
        moduleName: "views/datos_auto/datos_auto"
    });
}
exports.login = login;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0RBQWdHO0FBRWhHLG1EQUFvRDtBQUVwRCxJQUFJLGNBQWMsR0FBRyx1QkFBb0IsQ0FBQztJQUN0QyxLQUFLLEVBQUUsRUFBRTtJQUNULEtBQUssRUFBRSxFQUFFO0NBQ1osQ0FBQyxDQUFDO0FBRUgsb0JBQTJCLElBQWU7SUFDdEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQztBQUN6QyxDQUFDO0FBSEQsZ0NBR0M7QUFFRDtJQUNJLGVBQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQztRQUNmLFVBQVUsRUFBRSw2QkFBNkI7S0FDNUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUpELHNCQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtFdmVudERhdGEsIGZyb21PYmplY3QgYXMgT2JzZXJ2YWJsZUZyb21PYmplY3QgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IHRvcG1vc3QgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9mcmFtZVwiO1xuXG5sZXQgdXNlck9ic2VydmFibGUgPSBPYnNlcnZhYmxlRnJvbU9iamVjdCh7XG4gICAgZ3J1cG86IFwiXCIsXG4gICAgb3JkZW46IFwiXCJcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpe1xuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHVzZXJPYnNlcnZhYmxlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9naW4oKXtcbiAgICB0b3Btb3N0KCkubmF2aWdhdGUoe1xuICAgICAgICBtb2R1bGVOYW1lOiBcInZpZXdzL2RhdG9zX2F1dG8vZGF0b3NfYXV0b1wiXG4gICAgfSk7XG59Il19