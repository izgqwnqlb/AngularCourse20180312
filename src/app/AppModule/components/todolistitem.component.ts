import { Component, Input, SimpleChange, EventEmitter } from "@angular/core";

@Component({
    selector: "todo-item",
    template:"<div><input type='checkbox' (click)='completeItem()' /> {{name}} ({{hasBeenCompleted}})</div>",
    outputs:["completed"]
    //inputs: ["name"]
})
export class TodoListItemComponent {

    @Input()
    public name: string;

    public completed: EventEmitter<boolean>

    public hasBeenCompleted: boolean = false;

    constructor() {
        this.completed = new EventEmitter<boolean>();
    }

    public completeItem(): void {
       
        if (!this.hasBeenCompleted) {
            this.completed.emit(true);
            this.hasBeenCompleted = true;
        }

    }

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