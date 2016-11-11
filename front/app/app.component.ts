import {Component} from "@angular/core";
//Grab everything with import 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({
    selector: "index-app",
    templateUrl: "app/app.component.html"
})

export class AppComponent {
  login:string;
  pwd:string;
  users:any;


    constructor(private http: Http) {
this.login="";
this.pwd="";


    }

checkLogin(login:string , pwd:string):void{
  this.login=login;
  this.pwd=pwd;
  console.log("clicked");
  this.http.get('http://localhost:8080/toDoList-web/maliste')
                .map((res: Response) => res.json())
                .catch(this.handleError)
                .subscribe(
                    data => this.users=data.users,
                    err => this.logError(err),
                    () => this.testLogin()
                );

}
testLogin(){
  alert("test");
for(let user of this.users){
  if(this.login==user.login && this.pwd==user.pwd){
alert("pompi");
  }
}

}


logData(data) {

  console.log(data);
}

logError(err) {
  console.error('There was an error: ' + err);
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
