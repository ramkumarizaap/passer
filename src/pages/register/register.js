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
import { NavController } from "ionic-angular";
import { LoginPage } from "../login/login";
import { FormBuilder, Validators } from '@angular/forms';
import { regexPatterns } from '../../providers/regexPatterns';
import { SQLite } from '@ionic-native/sqlite';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(sqlite, _formBuilder, nav) {
        this.sqlite = sqlite;
        this._formBuilder = _formBuilder;
        this.nav = nav;
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
    // register and go to home page
    RegisterPage.prototype.register = function () {
        var _this = this;
        if (this._signupForm.valid) {
            this.formdata = this._signupForm.value;
            this.sqlite.create({
                name: 'pwdmgr.db',
                location: 'default'
            })
                .then(function (db) {
                db.executeSql('INSERT INTO users (name,email,password) values(?,?,?)', [_this.formdata.fullname, _this.formdata.email, _this.formdata.password])
                    .then(function () { return alert('Account created successfully.'); })
                    .catch(function (e) { return alert("Error: " + JSON.stringify(e)); });
                db.executeSql('SELECT * FROM users', {}).then(function (res) {
                    alert("Success: " + JSON.stringify(res));
                    // this.user = [];
                    // for(var i=0; i<res.rows.length; i++) {
                    //   this.user.push({
                    //       id:res.rows.item(i).id,
                    //       name:res.rows.item(i).name,
                    //       email:res.rows.item(i).email,
                    //       password:res.rows.item(i).password
                    //     });
                    //   alert("Data: "+ JSON.stringify(this.user));
                    // }
                    _this.login();
                })
                    .catch(function (e) { return alert("Error: " + JSON.stringify(e)); });
            })
                .catch(function (e) { return alert("Error:" + JSON.stringify(e)); });
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
        __metadata("design:paramtypes", [SQLite, FormBuilder, NavController])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map