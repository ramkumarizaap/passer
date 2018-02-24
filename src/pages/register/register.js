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
import { NavController, AlertController, LoadingController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { FormBuilder, Validators } from '@angular/forms';
import { regexPatterns } from '../../providers/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { DatabaseComponent } from '../../components/database/database';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(db, _formBuilder, nav, globalVars, alertCtrl, loader) {
        this.db = db;
        this._formBuilder = _formBuilder;
        this.nav = nav;
        this.globalVars = globalVars;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this._passwordInputType = "password";
        this._passwordIcon = "eye-off";
        this._signupForm = this._formBuilder.group({
            //FULLNAME
            fullname: ["",
                Validators.compose([
                    Validators.required, Validators.minLength(4)
                ])
            ],
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
    //Toggle Password
    RegisterPage.prototype._toggleViewPassword = function (event) {
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
    // register and go to home page
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this._signupForm.valid) {
            var signload_1 = this.loader.create({
                content: "Loading..."
            });
            signload_1.present();
            this.formdata = this._signupForm.value;
            var query = "insert into users(fullname,email,password)" +
                "values('" + this.formdata.fullname + "','" + this.formdata.email + "','" + this.formdata.password + "')";
            this.db.exeQuery(query).then(function (res) {
                var signup = _this.alertCtrl.create({
                    title: 'Success',
                    message: "Registration done successfully.",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                                _this.login();
                            }
                        }
                    ]
                });
                setTimeout(function () {
                    signload_1.dismiss();
                    signup.present();
                }, 3000);
            }).catch(function (e) {
                signload_1.dismiss();
                var errsignup = _this.alertCtrl.create({
                    title: 'Error',
                    message: "Registration has not successfull.",
                    buttons: ['Ok']
                });
                errsignup.present();
            });
        }
    };
    // go to login page
    RegisterPage.prototype.login = function () {
        this.nav.setRoot(LoginPage);
    };
    RegisterPage = __decorate([
        Component({
            selector: 'page-register',
            templateUrl: 'register.html'
        }),
        __metadata("design:paramtypes", [DatabaseComponent,
            FormBuilder,
            NavController,
            GlobalVars,
            AlertController,
            LoadingController])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map