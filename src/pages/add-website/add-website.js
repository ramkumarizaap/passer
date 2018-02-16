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
import { NavParams, NavController, AlertController, LoadingController, } from "ionic-angular";
import { WebsitePage } from "../websites/website";
// import {RegisterPage} from "../register/register";
import { FormBuilder, Validators } from '@angular/forms';
import { regexPatterns } from '../../providers/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { SQLite } from '@ionic-native/sqlite';
var AddWebsitePage = /** @class */ (function () {
    function AddWebsitePage(sqlite, globalvars, nav, _formBuilder, alertCtrl, loader, params) {
        this.sqlite = sqlite;
        this.globalvars = globalvars;
        this.nav = nav;
        this._formBuilder = _formBuilder;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.params = params;
        this.website = this.params.get('id');
        // this.user = this.globalvars.getUserdata();
        // alert(JSON.stringify(this.user));
        this._websiteForm = this._formBuilder.group({
            id: [""],
            title: ["",
                Validators.compose([
                    Validators.required, Validators.minLength(6)
                ])
            ],
            url: ["",
                Validators.compose([
                    Validators.required,
                    Validators.pattern(regexPatterns.url)
                ])
            ],
            details: this._formBuilder.array([this.createItem()])
        });
        if (this.website) {
            var wdetails = [];
            for (var i in this.website.details) {
                wdetails.push(this._formBuilder.group(this.website.details[i]));
            }
            this._websiteForm = this._formBuilder.group({
                id: [this.website.id],
                title: [this.website.title], url: [this.website.url],
                details: this._formBuilder.array(wdetails)
            });
            console.log(this._websiteForm);
        }
        this.len = this._websiteForm.get('details');
        console.log("Length: " + this.len.length);
    }
    AddWebsitePage.prototype.createItem = function () {
        return this._formBuilder.group({
            name: '',
            password: '',
            comments: ''
        });
    };
    AddWebsitePage.prototype._addNew = function () {
        this.details = this._websiteForm.get('details');
        console.log(this.details);
        this.details.push(this.createItem());
    };
    AddWebsitePage.prototype._cancel = function () {
        this.nav.pop();
    };
    AddWebsitePage.prototype._removeItem = function (i) {
        this.details = this._websiteForm.get('details');
        console.log(i);
        // let index = this.items.indexOf(i);
        // console.log(index);
        //   if(index > -1){
        this.details.removeAt(i);
        // }
    };
    AddWebsitePage.prototype._submitWebsiteForm = function () {
        var _this = this;
        console.log(this._websiteForm.value);
        if (this._websiteForm.valid) {
            this.formdata = this._websiteForm.value;
            var loading_1 = this.loader.create({
                content: 'Loading...'
            });
            loading_1.present();
            this.sqlite.create({
                name: 'pwdmgr.db',
                location: 'default'
            }).then(function (db) {
                loading_1.dismiss();
                /*Start Insert Data*/
                if (_this.formdata.id == '') {
                    db.executeSql('insert into websites(userid,title,url) values(?,?,?)', [_this.user.id, _this.formdata.title, _this.formdata.url])
                        .then(function (res) {
                        _this._lastId = res.insertId;
                        for (var i = 0; i < _this.len.length; i++) {
                            db.executeSql('insert into website_details(websiteid,username,password,comments) values(?,?,?,?)', [_this._lastId, _this.formdata.name[i], _this.formdata.password[i], _this.formdata.comments[i]])
                                .then(function (det) { })
                                .catch(function (e) {
                                var err_alert = _this.alertCtrl.create({
                                    title: 'Error',
                                    message: 'Failed to Create',
                                    buttons: [
                                        {
                                            text: 'Ok',
                                            handler: function (data) {
                                                _this.nav.setRoot(WebsitePage);
                                            }
                                        },
                                    ],
                                });
                                err_alert.present();
                            });
                        }
                        var alert = _this.alertCtrl.create({
                            title: 'Success',
                            message: 'Record created successfully!',
                            buttons: [
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        _this.nav.setRoot(WebsitePage);
                                    }
                                },
                            ],
                        });
                        alert.present();
                    })
                        .catch(function (e) { return alert("Error1: " + JSON.stringify(e)); });
                }
                else {
                    db.executeSql('update websites set title=?,url=? where id=?', [_this.formdata.title, _this.formdata.url, _this.formdata.id])
                        .then(function (res) {
                        alert("Updated Website Table.");
                        for (var i = 0; i < _this.len.length; i++) {
                            db.executeSql('select * from website_details where id=?', [_this.formdata.wid[i]])
                                .then(function (res1) {
                                if (res1.rows.length > 0) {
                                    db.executeSql('update website_details set name=?,password=?,comments=? where id=?', [_this.formdata.name[i], _this.formdata.passowrd[i], _this.formdata.comments[i], _this.formdata.wid[i]])
                                        .then(function (res2) {
                                        alert(_this.formdata.wid[i] + " Details Updated");
                                    })
                                        .catch(function (e) { return alert("Update Website Table Error: " + JSON.stringify(e)); });
                                }
                                else {
                                    db.executeSql('insert into website_details(name,password,comments) values(?,?,?)', [_this.formdata.name[i], _this.formdata.passowrd[i], _this.formdata.comments[i]])
                                        .then(function (res3) {
                                        alert(res3.insertId + " Details Inserted");
                                    })
                                        .catch(function (e) { return alert("Insert Website Table Error: " + JSON.stringify(e)); });
                                }
                            })
                                .catch(function (e) { return alert("Update Select Error: " + JSON.stringify(e)); });
                        }
                    })
                        .catch(function (e) { return alert("Update Error1: " + JSON.stringify(e)); });
                }
                /*End Update Data*/
            });
        }
    };
    AddWebsitePage = __decorate([
        Component({
            selector: 'page-website-add',
            templateUrl: 'add-website.html'
        }),
        __metadata("design:paramtypes", [SQLite,
            GlobalVars,
            NavController,
            FormBuilder,
            AlertController,
            LoadingController,
            NavParams])
    ], AddWebsitePage);
    return AddWebsitePage;
}());
export { AddWebsitePage };
//# sourceMappingURL=add-website.js.map