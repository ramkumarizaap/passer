var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { NavController, AlertController, LoadingController, MenuController } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { WebsitePage } from "../websites/website";
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalVars } from '../../providers/globalVars';
import { regexPatterns } from '../../providers/regexPatterns';
import { DatabaseComponent } from '../../components/database/database';
var LoginPage = /** @class */ (function () {
    function LoginPage(globalvars, db, _formBuilder, nav, alertCtrl, menu, loader) {
        this.globalvars = globalvars;
        this.db = db;
        this._formBuilder = _formBuilder;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.loader = loader;
        this._passwordInputType = "password";
        this._passwordIcon = "eye-off";
        this.menu.swipeEnable(false);
        this.globalvars.deleteUserdata();
        this._loginForm = _formBuilder.group({
            //EMAIL
            email: ["",
                Validators.compose([
                    Validators.required, Validators.pattern(regexPatterns.email)
                ])
            ],
            //PASSWORD
            password: ["", Validators.compose([
                    // ,Validators.pattern(regexPatterns.password),
                    Validators.required,
                    Validators.minLength(6)
                ])
            ]
        });
    }
    // Password Toggle
    LoginPage.prototype._toggleViewPassword = function (event) {
        event.preventDefault();
        console.info("show password");
        if (this._passwordInputType === "password") {
            this._passwordInputType = "text";
            this._passwordIcon = "eye";
        }
        else {
            this._passwordIcon = "eye-off";
            this._passwordInputType = "password";
        }
        ;
    };
    ;
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(RegisterPage);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this._loginForm.valid) {
            var logload_1 = this.loader.create({
                content: "Loading..."
            });
            logload_1.present();
            var formdata = this._loginForm.value;
            var query = "select * from users where email='" + formdata.email + "' and password='" + formdata.password + "'";
            this.db.exeQuery(query).then(function (res) {
                if (res.rows.length) {
                    var user = [];
                    user.push({
                        id: res.rows.item(0).id,
                        fullname: res.rows.item(0).fullname,
                        email: res.rows.item(0).email,
                        password: res.rows.item(0).password,
                    });
                    _this.globalvars.setUserdata(JSON.stringify(user));
                    setTimeout(function () {
                        logload_1.dismiss();
                        _this.nav.setRoot(WebsitePage);
                    }, 4000);
                }
                else {
                    logload_1.dismiss();
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Failed!',
                        message: 'Invalid Username or Password',
                        buttons: ['Ok'],
                    });
                    alert_1.present();
                    return false;
                }
            }).catch(function (e) {
                logload_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Failed!',
                    message: 'Invalid Username or Password',
                    buttons: ['Ok'],
                });
                alert.present();
                return false;
            });
        }
    };
    LoginPage.prototype.forgotPass = function () {
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [GlobalVars,
            DatabaseComponent,
            FormBuilder,
            NavController,
            AlertController,
            MenuController,
            LoadingController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map