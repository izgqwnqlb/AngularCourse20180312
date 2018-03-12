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
var TodoListComponent = /** @class */ (function () {
    function TodoListComponent() {
        this.completedItemsCounter = 0;
        this.dynamicItem = "TEST DYNAMIC";
    }
    TodoListComponent.prototype.changeDynamicItem = function (newTodoItem) {
        this.dynamicItem = newTodoItem.value;
        newTodoItem.value = "";
    };
    TodoListComponent.prototype.increaseItemsCounter = function () {
        this.completedItemsCounter++;
    };
    TodoListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "todo-list",
            templateUrl: "./todolist.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], TodoListComponent);
    return TodoListComponent;
}());
exports.TodoListComponent = TodoListComponent;
//# sourceMappingURL=todolist.component.js.map