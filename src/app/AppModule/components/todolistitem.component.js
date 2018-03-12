"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TodoListItemComponent = /** @class */ (function () {
    function TodoListItemComponent() {
    }
    TodoListItemComponent.prototype.ngOnInit = function () {
        console.log("finished rendering");
    };
    TodoListItemComponent.prototype.ngOnChanges = function (changes) {
        if (changes['name'] && changes['name'].currentValue == "") {
            alert("todo item name cannot be empty");
            this.name = changes['name'].previousValue;
        }
        console.log("Change has happend", changes);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TodoListItemComponent.prototype, "name", void 0);
    TodoListItemComponent = __decorate([
        core_1.Component({
            selector: "todo-item",
            template: "<div><input type='checkbox' /> {{name}}</div>"
            //inputs: ["name"]
        })
    ], TodoListItemComponent);
    return TodoListItemComponent;
}());
exports.TodoListItemComponent = TodoListItemComponent;
//# sourceMappingURL=todolistitem.component.js.map