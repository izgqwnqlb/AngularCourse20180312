import { Component, ViewEncapsulation } from "@angular/core";

@Component(
{ 
    moduleId:module.id,
    selector:"my-app",
    templateUrl:"./app.component.html",
    styleUrls:["./app.component.css"],
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {

    public developer:string;

    constructor() {
        this.developer = "Matthias";
    }

    public clearDeveloperName(): void {
        this.developer = "";
    }

}