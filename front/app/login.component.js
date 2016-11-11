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
var LoginComponent = (function () {
    function LoginComponent(http) {
        this.http = http;
        this.login = "";
        this.pwd = "";
        this.errorLog = false;
        this.signin = false;
    }
    LoginComponent.prototype.signinToggle = function () {
        this.signin = true;
    };
    LoginComponent.prototype.deconnexion = function () {
        this.user = null;
    };
    LoginComponent.prototype.checkLogin = function (login, pwd) {
        var _this = this;
        this.login = login;
        this.pwd = pwd;
        var creds = "username=" + login + "&password=" + pwd;
        console.log("clicked");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/toDoList-web/login', creds, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (data) { return _this.testLogin(data); }, //this.users=data.users,
        function (//this.users=data.users,
            err) { return _this.logError(err); }, function () { return console.log('trying to login'); } //this.testLogin()
        );
    };
    LoginComponent.prototype.testLogin = function (data) {
        this.user = data;
        //  alert("Salut "+data.prenom+ " : "+this.user.nom);
    };
    LoginComponent.prototype.userUpdated = function (user) {
        this.user = user;
    };
    LoginComponent.prototype.logData = function (data) {
        console.log(data);
    };
    LoginComponent.prototype.logError = function (err) {
        this.errorLog = true;
        console.error('hi There was an error: ' + err);
    };
    LoginComponent.prototype.handleError = function (error) {
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
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        selector: "login-app",
        templateUrl: "app/login.component.html",
    }),
    __metadata("design:paramtypes", [http_1.Http])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map