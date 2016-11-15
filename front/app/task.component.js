"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
//Grab everything with import 'rxjs/Rx';
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/throw");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var TaskComponent = (function () {
    function TaskComponent(http) {
        this.http = http;
        this.inputTask = "";
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.checkTasks();
    };
    TaskComponent.prototype.saveTask = function (task) {
        var _this = this;
        if (task == '') {
            return;
        }
        this.inputTask = task;
        var creds = "username=" + this.user.login + "&password=" + this.user.mdp + "&task=" + task;
        console.log("clicked");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/toDoList-web/newTask', creds, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (data) { return _this.getTasks(data); }, //this.users=data.users,
        function (//this.users=data.users,
            err) { return _this.logError(err); }, function () { return console.log('trying to signin'); } //this.testLogin()
        );
    };
    TaskComponent.prototype.termineTask = function (taskId) {
        var _this = this;
        var creds = "taskId=" + taskId;
        console.log("clicked");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/toDoList-web/endTask', creds, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (data) { return _this.getTasks(data); }, //this.users=data.users,
        function (//this.users=data.users,
            err) { return _this.logError(err); }, function () { return console.log('trying to signin'); } //this.testLogin()
        );
    };
    TaskComponent.prototype.unfinishedTask = function (taskId) {
        var _this = this;
        var creds = "taskId=" + taskId;
        console.log("clicked");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/toDoList-web/unendTask', creds, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (data) { return _this.getTasks(data); }, //this.users=data.users,
        function (//this.users=data.users,
            err) { return _this.logError(err); }, function () { return console.log('trying to signin'); } //this.testLogin()
        );
    };
    TaskComponent.prototype.supprimeTask = function (taskId) {
        var _this = this;
        var creds = "taskId=" + taskId;
        console.log("clicked");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/toDoList-web/supprTask', creds, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (data) { return _this.getTasks(data); }, //this.users=data.users,
        function (//this.users=data.users,
            err) { return _this.logError(err); }, function () { return console.log('trying to signin'); } //this.testLogin()
        );
    };
    TaskComponent.prototype.checkTasks = function () {
        var _this = this;
        var creds = "username=" + this.user.login + "&password=" + this.user.mdp;
        console.log("clicked");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/toDoList-web/getTasks', creds, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (data) { return _this.getTasks(data); }, //this.users=data.users,
        function (//this.users=data.users,
            err) { return _this.logError(err); }, function () { return console.log('trying to signin'); } //this.testLogin()
        );
    };
    TaskComponent.prototype.getTasks = function (data) {
        this.inputTask = "";
        this.tasks = data;
    };
    TaskComponent.prototype.logData = function (data) {
        console.log(data);
    };
    TaskComponent.prototype.logError = function (err) {
        this.tasks = [];
        console.error('hi There was an error: ' + err);
    };
    TaskComponent.prototype.handleError = function (error) {
        console.error('server error:', error);
        if (error instanceof http_1.Response) {
            var errMessage = '';
            try {
                errMessage = error.json().error;
            }
            catch (err) {
                errMessage = error.statusText;
            }
            return Observable_1.Observable.throw(errMessage);
        }
        return Observable_1.Observable.throw(error || 'Server error');
    };
    return TaskComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], TaskComponent.prototype, "user", void 0);
TaskComponent = __decorate([
    core_1.Component({
        selector: "task-app",
        templateUrl: "app/task.component.html",
        styleUrls: ['app/task.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], TaskComponent);
exports.TaskComponent = TaskComponent;
//# sourceMappingURL=task.component.js.map