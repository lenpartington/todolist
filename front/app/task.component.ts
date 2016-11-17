import {Component, Input,Output, EventEmitter, OnInit } from "@angular/core";

//Grab everything with import 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({

    selector: "task-app",
    templateUrl: "app/task.component.html",
    styleUrls: ['app/task.component.css']
})

export class TaskComponent {
    @Input() user;
tasks:any;
inputTask:string;

constructor(private http: Http) {
this.inputTask="";

}
ngOnInit(){
  this.checkTasks();
}



saveTask(task:string):void{
  if(task==''){
    return ;
  }
  this.inputTask=task;
  var creds ="username=" + this.user.login + "&password=" + this.user.mdp+"&task="+task;
console.log("clicked");
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
this.http.post('http://localhost:8080/toDoList-web/newTask',creds,{
  headers:headers
})
              .map((res: Response) => res.json())
              .catch(this.handleError)
              .subscribe(
                  data =>this.getTasks(data), //this.users=data.users,
                  err =>   this.logError(err),
                  () => console.log('trying to signin')//this.testLogin()
              );


}

termineTask(taskId){
  var creds ="taskId=" + taskId;
console.log("clicked");
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
this.http.post('http://localhost:8080/toDoList-web/endTask',creds,{
  headers:headers
})
              .map((res: Response) => res.json())
              .catch(this.handleError)
              .subscribe(
                  data =>this.getTasks(data), //this.users=data.users,
                  err =>   this.logError(err),
                  () => console.log('trying to signin')//this.testLogin()
              );

}

unfinishedTask(taskId){
  var creds ="taskId=" + taskId;
console.log("clicked");
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
this.http.post('http://localhost:8080/toDoList-web/unendTask',creds,{
  headers:headers
})
              .map((res: Response) => res.json())
              .catch(this.handleError)
              .subscribe(
                  data =>this.getTasks(data), //this.users=data.users,
                  err =>   this.logError(err),
                  () => console.log('trying to signin')//this.testLogin()
              );

}

supprimeTask(taskId){
  var creds ="taskId=" + taskId;
console.log("clicked");
var headers = new Headers();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
this.http.post('http://localhost:8080/toDoList-web/supprTask',creds,{
  headers:headers
})
              .map((res: Response) => res.json())
              .catch(this.handleError)
              .subscribe(
                  data =>this.getTasks(data), //this.users=data.users,
                  err =>   this.logError(err),
                  () => console.log('trying to signin')//this.testLogin()
              );

}

checkTasks():void{

    var creds ="username=" + this.user.login + "&password=" + this.user.mdp;
  console.log("clicked");
  var headers = new Headers();
 headers.append('Content-Type', 'application/x-www-form-urlencoded');
  this.http.post('http://localhost:8080/toDoList-web/getTasks',creds,{
    headers:headers
  })
                .map((res: Response) => res.json())
                .catch(this.handleError)
                .subscribe(
                    data =>this.getTasks(data), //this.users=data.users,
                    err =>   this.logError(err),
                    () => console.log('trying to signin')//this.testLogin()
                );

}

getTasks(data){
  this.inputTask="";

this.tasks=data;




}

logData(data) {

  console.log(data);
}

logError(err) {
this.tasks=[];
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
