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
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.login = "";
        this.pwd = "";
    }
    AppComponent.prototype.checkLogin = function (login, pwd) {
        var _this = this;
        this.login = login;
        this.pwd = pwd;
        console.log("clicked");
        this.http.get('http://localhost:8080/toDoList-web/maliste')
            .map(function (res) { return res.json(); })
            .catch(this.handleError)
            .subscribe(function (data) { return _this.users = data.users; }, function (err) { return _this.logError(err); }, function () { return _this.testLogin(); });
    };
    AppComponent.prototype.testLogin = function () {
        alert("test");
        for (var _i = 0, _a = this.users; _i < _a.length; _i++) {
            var user = _a[_i];
            if (this.login == user.login && this.pwd == user.pwd) {
                alert("pompi");
            }
        }
    };
    AppComponent.prototype.logData = function (data) {
        console.log(data);
    };
    AppComponent.prototype.logError = function (err) {
        console.error('There was an error: ' + err);
    };
    AppComponent.prototype.handleError = function (error) {
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
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "index-app",
        templateUrl: "app/app.component.html"
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map