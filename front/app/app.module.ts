import { NgModule }      from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule }    from '@angular/http';
import { LoginComponent }   from "./login.component";
import { SigninComponent } from './signin.component';
import { TaskComponent } from './task.component';


@NgModule({
  imports:      [ BrowserModule , HttpModule],
  declarations: [ LoginComponent, SigninComponent ,TaskComponent ],
  bootstrap:    [ LoginComponent , SigninComponent,TaskComponent ]
})

export class AppModule { }
