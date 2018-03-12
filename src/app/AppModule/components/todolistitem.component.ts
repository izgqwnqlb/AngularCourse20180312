import { Component } from "@angular/core";

@Component({
    selector: "todo-item",
    template:"<div><input type='checkbox' /> {{name}}</div>",
    inputs: ["name"]
})
export class TodoListItemComponent {

    public name: string;

}