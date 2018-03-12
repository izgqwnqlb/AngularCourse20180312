import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app.component";
import { TodoListComponent } from "./components/todolist.component";
import { TodoListItemComponent } from "./components/todolistitem.component";

@NgModule({
    declarations:[AppComponent, TodoListComponent, TodoListItemComponent],
    providers:[],
    imports:[BrowserModule],
    exports:[],
    bootstrap:[AppComponent]
})
export class AppModule {

}

