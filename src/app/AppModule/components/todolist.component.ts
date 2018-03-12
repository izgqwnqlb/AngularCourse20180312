import { Component, Input } from "@angular/core";

@Component({
    moduleId:module.id,
    selector:"todo-list",
    templateUrl:"./todolist.component.html"
})
export class TodoListComponent {

    public dynamicItem: string;
    public completedItemsCounter: number = 0;

    constructor() {
        this.dynamicItem = "TEST DYNAMIC";
    }

    public changeDynamicItem(newTodoItem: any): void {

        this.dynamicItem = newTodoItem.value;
        newTodoItem.value = "";
    }

    public increaseItemsCounter(): void {
        this.completedItemsCounter++;
    }

}