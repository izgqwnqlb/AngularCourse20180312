import { Component, Input, SimpleChange } from "@angular/core";

@Component({
    selector: "todo-item",
    template:"<div><input type='checkbox' /> {{name}}</div>"
    //inputs: ["name"]
})
export class TodoListItemComponent {

    @Input()
    public name: string;

    public ngOnInit(): void {

        console.log("finished rendering");

    }

    public ngOnChanges(changes: SimpleChange):void {

        if (changes['name'] && changes['name'].currentValue == "") {
            alert("todo item name cannot be empty");
            this.name = changes['name'].previousValue;
        }

        console.log("Change has happend",changes);

    }

}