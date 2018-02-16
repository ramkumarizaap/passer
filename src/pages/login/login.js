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
import { NavController, AlertController, LoadingController, ToastController, MenuController } from "ionic-angular";
import { HomePage } from "../home/home";
import { RegisterPage } from "../register/register";
import { WebsitePage } from "../websites/website";
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalVars } from '../../providers/globalVars';
import { regexPatterns } from '../../providers/regexPatterns';
import { SQLite } from '@ionic-native/sqlite';
var LoginPage = /** @class */ (function () {
    function LoginPage(globalvars, sqlite, _formBuilder, nav, alertCtrl, menu, loader, toastCtrl) {
        this.globalvars = globalvars;
        this.sqlite = sqlite;
        this._formBuilder = _formBuilder;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.loader = loader;
        this.toastCtrl = toastCtrl;
        this.menu.swipeEnable(false);
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
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(RegisterPage);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this._loginForm.valid) {
            var loading_1 = this.loader.create({
                content: 'Loading...'
            });
            loading_1.present();
            this.formdata = this._loginForm.value;
            this.sqlite.create({
                name: 'pwdmgr.db',
                location: 'default'
            }).then(function (db) {
                loading_1.dismiss();
                db.executeSql('SELECT * FROM users where email=? and password=?', [_this.formdata.email, _this.formdata.password])
                    .then(function (res) {
                    alert("Success: " + JSON.stringify(res));
                    if (res.rows.length > 0) {
                        _this.user = res.rows.item(0);
                        _this.globalvars.setUserdata(JSON.stringify(_this.user));
                        alert("Data: " + JSON.stringify(_this.user));
                        _this.nav.setRoot(WebsitePage);
                    }
                    else {
                        var alert_1 = _this.alertCtrl.create({
                            title: 'Error',
                            message: 'Login Failed!',
                            buttons: ['Ok'],
                        });
                        alert_1.present();
                        return false;
                    }
                });
            }, function (err) {
                loading_1.dismiss();
                _this.nav.setRoot(HomePage);
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    message: 'Login Failed!',
                    buttons: ['Ok'],
                });
                alert.present();
                // return false;
            });
        }
    };
    LoginPage.prototype.forgotPass = function () {
        var _this = this;
        var forgot = this.alertCtrl.create({
            title: 'Forgot Password?',
            message: "Enter you email address to send a reset link password.",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Email',
                    type: 'email'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        console.log('Send clicked');
                        var toast = _this.toastCtrl.create({
                            message: 'Email was sended successfully',
                            duration: 3000,
                            position: 'top',
                            cssClass: 'dark-trans',
                            closeButtonText: 'OK',
                            showCloseButton: true
                        });
                        toast.present();
                    }
                }
            ]
        });
        forgot.present();
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',
            templateUrl: 'login.html'
        }),
        __metadata("design:paramtypes", [GlobalVars,
            SQLite,
            FormBuilder,
            NavController,
            AlertController,
            MenuController,
            LoadingController,
            ToastController])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.js.map