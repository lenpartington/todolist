import {Component} from "@angular/core";
import { SigninComponent } from './signin.component';
import { TaskComponent } from './task.component';
//Grab everything with import 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
    selector: "login-app",
    templateUrl: "app/login.component.html",
    styleUrls: ['app/login.component.css']
  
})

export class LoginComponent {
  login:string;
  pwd:string;
  user:any;
 errorLog:boolean;
 signin:boolean;

    constructor(private http: Http) {
this.login="";
this.pwd="";
this.errorLog=false;
this.signin=false;


    }

    signinToggle():void{
      this.signin=true;
    }
    deconnexion():void{
this.user=null;
    }

checkLogin(login:string , pwd:string):void{

  this.login=login;
  this.pwd=pwd;
    var creds = "username=" + login + "&password=" + pwd;
  console.log("clicked");
  var headers = new Headers();
 headers.append('Content-Type', 'application/x-www-form-urlencoded');
  this.http.post('http://localhost:8080/toDoList-web/login',creds,{
    headers:headers
  })
                .map((res: Response) => res.json())
                .catch(this.handleError)
                .subscribe(
                    data =>this.testLogin(data), //this.users=data.users,
                    err =>   this.logError(err),
                    () => console.log('trying to login')//this.testLogin()
                );

}

testLogin(data:any){
  this.user=data;
//  alert("Salut "+data.prenom+ " : "+this.user.nom);

}

userUpdated(user:any) {
  this.user=user;
  }




logData(data) {

  console.log(data);
}

logError(err) {
  this.errorLog=true;
  console.error('hi There was an error: ' + err);
}

private handleError(error: any) {
  console.error('server error:', error);
  if (error instanceof Response) {
    let errMessage = '';
    try {
      errMessage = error.json().error;
    } catch(err) {
      errMessage = error.statusText;
    }
    return Observable.throw(errMessage);
  }
  return Observable.throw(error || 'Server error');
}
}
