import { Component } from "@angular/core";

@Component({
    moduleId:module.id,
    selector:"todo-list",
    templateUrl:"./todolist.component.html"
})
export class TodoListComponent {

    public dynamicItem: string;

    constructor() {
        this.dynamicItem = "TEST DYNAMIC";
    }

}