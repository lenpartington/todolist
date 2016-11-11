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
var SigninComponent = (function () {
    function SigninComponent(http) {
        this.http = http;
        this.userUpdated = new core_1.EventEmitter();
        this.login = "";
        this.pwd = "";
        this.prenom = "";
        this.nom = "";
        this.errorLog = false;
    }
    SigninComponent.prototype.checkLogin = function (prenom, nom, login, pwd) {
        var _this = this;
        this.prenom = prenom;
        this.nom = nom;
        this.login = login;
        this.pwd = pwd;
        var creds = "prenom=" + prenom + "&nom=" + nom + "&username=" + login + "&password=" + pwd;
        console.log("clicked");
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/toDoList-web/signin', creds, {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (data) { return _this.testSignin(data); }, //this.users=data.users,
        function (//this.users=data.users,
            err) { return _this.logError(err); }, function () { return console.log('trying to signin'); } //this.testLogin()
        );
    };
    SigninComponent.prototype.testSignin = function (data) {
        this.user = data;
        this.userUpdated.emit(this.user);
        //alert("Bienvenu "+data.prenom);
    };
    SigninComponent.prototype.logData = function (data) {
        console.log(data);
    };
    SigninComponent.prototype.logError = function (err) {
        this.errorLog = true;
        console.error('hi There was an error: ' + err);
    };
    SigninComponent.prototype.handleError = function (error) {
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
    return SigninComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SigninComponent.prototype, "userUpdated", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SigninComponent.prototype, "user", void 0);
SigninComponent = __decorate([
    core_1.Component({
        selector: "signin-app",
        templateUrl: "app/signin.component.html"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], SigninComponent);
exports.SigninComponent = SigninComponent;
//# sourceMappingURL=signin.component.js.map