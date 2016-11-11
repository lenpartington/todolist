import {Component, Input,Output, EventEmitter } from "@angular/core";

//Grab everything with import 'rxjs/Rx';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Component({

    selector: "task-app",
    templateUrl: "app/task.component.html"
})

export class TaskComponent {


constructor(private http: Http) {


}

  

}
