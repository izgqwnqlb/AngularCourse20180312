import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./components/app.component";

@NgModule({
    declarations:[AppComponent],
    providers:[],
    imports:[BrowserModule],
    exports:[],
    bootstrap:[AppComponent]
})
export class AppModule {

}

