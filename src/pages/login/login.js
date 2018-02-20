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
import { RegisterPage } from "../register/register";
import { FormBuilder, Validators } from '@angular/forms';
import { GlobalVars } from '../../providers/globalVars';
import { regexPatterns } from '../../providers/regexPatterns';
import { DatabaseComponent } from '../../components/database/database';
var LoginPage = /** @class */ (function () {
    function LoginPage(globalvars, db, _formBuilder, nav, alertCtrl, menu, loader, toastCtrl) {
        this.globalvars = globalvars;
        this.db = db;
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
        // if(this._loginForm.valid)
        // {
        //   let loading = this.loader.create({
        //     content: 'Loading...'
        //   });
        //   loading.present();
        //   this.formdata = this._loginForm.value;
        //   this.sqlite.create({
        //     name: 'pwdmgr.db',
        //     location: 'default'
        //   }).then((db: SQLiteObject) => {
        //     loading.dismiss();
        //      db.executeSql('SELECT * FROM users where email=? and password=?',[this.formdata.email,this.formdata.password])
        //        .then(res => {
        //          alert("Success: "+ JSON.stringify(res));
        //           if(res.rows.length>0)
        //           {
        //             this.user = res.rows.item(0);
        //             this.globalvars.setUserdata(JSON.stringify(this.user));
        //             alert("Data: "+ JSON.stringify(this.user));
        //             this.nav.setRoot(WebsitePage);
        //           }
        //           else
        //           {
        //             let alert = this.alertCtrl.create({
        //               title: 'Error',
        //               message: 'Login Failed!',
        //               buttons: ['Ok'],
        //             });
        //             alert.present();
        //             return false;
        //           }
        //      });
        //   },(err)=>{
        //     loading.dismiss();
        //     this.nav.setRoot(HomePage);
        //       let alert = this.alertCtrl.create({
        //         title: 'Error',
        //         message: 'Login Failed!',
        //         buttons: ['Ok'],
        //       });
        //       alert.present();
        //       // return false;
        //   });
        // }
        if (this._loginForm.valid) {
            var fields = ['email', 'password'];
            this.db.insertData('', this._loginForm.value, 'users').then(function (res) {
                alert("Success Insert: " + JSON.stringify(res));
            }).catch(function (e) {
                alert("Error Insert: " + JSON.stringify(e));
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
            DatabaseComponent,
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