import {Component, Input,Output, EventEmitter } from "@angular/core";

//Grab everything with import 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({

    selector: "signin-app",
    templateUrl: "app/signin.component.html"
})

export class SigninComponent {
  @Output() userUpdated = new EventEmitter();
    @Input() user;
prenom:string;
nom:string;
login:string;
pwd:string;
errorLog:boolean;

constructor(private http: Http) {
this.login="";
this.pwd="";
this.prenom="";
this.nom="";
this.errorLog=false;

}

  checkLogin(prenom:string, nom:string,login:string , pwd:string):void{
this.prenom=prenom;
this.nom=nom;
    this.login=login;
    this.pwd=pwd;
      var creds = "prenom="+prenom+"&nom="+nom+"&username=" + login + "&password=" + pwd;
    console.log("clicked");
    var headers = new Headers();
   headers.append('Content-Type', 'application/x-www-form-urlencoded');
    this.http.post('http://localhost:8080/toDoList-web/signin',creds,{
      headers:headers
    })
                  .map((res: Response) => res.json())
                  .catch(this.handleError)
                  .subscribe(
                      data =>this.testSignin(data), //this.users=data.users,
                      err =>   this.logError(err),
                      () => console.log('trying to signin')//this.testLogin()
                  );

  }

  testSignin(data:any){

    this.user=data;
 this.userUpdated.emit(this.user);
  //alert("Bienvenu "+data.prenom);

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
