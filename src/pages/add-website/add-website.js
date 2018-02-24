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
import { DatabaseComponent } from '../../components/database/database';
var AddWebsitePage = /** @class */ (function () {
    function AddWebsitePage(db, globalvars, nav, _formBuilder, alertCtrl, loader, params) {
        var _this = this;
        this.db = db;
        this.globalvars = globalvars;
        this.nav = nav;
        this._formBuilder = _formBuilder;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.params = params;
        this.lc = [];
        this.website = this.params.get('id');
        this.user = this.globalvars.getUserdata()[0];
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
        this.len = this._websiteForm.get('details');
        if (this.website) {
            var load_1 = this.loader.create({
                content: 'Loading...'
            });
            load_1.present();
            var wdetails_1 = [];
            var query = "select * from website_details where websiteid='" + this.website.id + "'";
            this.db.exeQuery(query).then(function (det) {
                if (det.rows.length) {
                    for (var j = 0; j < det.rows.length; j++) {
                        wdetails_1.push(_this._formBuilder.group(det.rows.item(j)));
                    }
                }
                _this._websiteForm = _this._formBuilder.group({
                    id: [_this.website.id],
                    title: [_this.website.title, Validators.compose([Validators.required, Validators.minLength(6)])],
                    url: [_this.website.url, Validators.compose([Validators.required, Validators.pattern(regexPatterns.url)])],
                    details: _this._formBuilder.array(wdetails_1)
                });
                _this.len = _this._websiteForm.get('details');
                setTimeout(function () { load_1.dismiss(); }, 3000);
            })
                .catch(function (err) {
                var fail = _this.alertCtrl.create({
                    title: 'Failed!',
                    message: "Can't able fetch record.",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                                _this.nav.setRoot(WebsitePage);
                            }
                        }
                    ]
                });
                fail.present();
            });
        }
    }
    AddWebsitePage.prototype.createItem = function () {
        return this._formBuilder.group({
            id: '',
            username: '',
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
        localStorage.removeItem('removeDetails');
        this.nav.pop();
    };
    AddWebsitePage.prototype._removeItem = function (i) {
        this.details = this._websiteForm.get('details');
        if (this._websiteForm.value.details[i].id != '') {
            this.lc.push(this._websiteForm.value.details[i]);
            this.remDetails = localStorage.setItem('removeDetails', JSON.stringify(this.lc));
        }
        // let index = this.items.indexOf(i);
        // console.log(index);
        //   if(index > -1){
        this.details.removeAt(i);
        // }
    };
    AddWebsitePage.prototype._submitWebsiteForm = function () {
        var _this = this;
        // console.log(this._websiteForm.value);
        if (this._websiteForm.valid) {
            var load_2 = this.loader.create({
                content: 'Please Wait...'
            });
            load_2.present();
            var query = void 0;
            var formdata_1 = this._websiteForm.value;
            if (formdata_1.id == '') {
                query = "insert into websites(userid,title,url)" +
                    "values ('" + this.user.id + "','" + formdata_1.title + "','" + formdata_1.url + "')";
            }
            else {
                query = "update websites set title='" + formdata_1.title + "',url='" + formdata_1.url + "' where id='" + formdata_1.id + "'";
            }
            this.db.exeQuery(query).then(function (res) {
                if (formdata_1.id == '')
                    _this._lastId = res.insertId;
                var _loop_1 = function () {
                    var query1;
                    var detailform = formdata_1.details[i];
                    if (formdata_1.id == '') {
                        query1 = "insert into website_details(websiteid,username,password,comments)" +
                            "values ('" + _this._lastId + "','" + detailform.username + "','" + detailform.password + "','" + detailform.comments + "')";
                        _this.db.exeQuery(query1).then(function (wdetails) {
                            // alert("Success Details: "+JSON.stringify(wdetails));
                        })
                            .catch(function (err) {
                            var fail = _this.alertCtrl.create({
                                title: 'Failed!',
                                message: "Website failed to save.",
                                buttons: [
                                    {
                                        text: 'Ok',
                                        handler: function (data) {
                                            _this.nav.setRoot(WebsitePage);
                                        }
                                    }
                                ]
                            });
                            fail.present();
                        });
                    }
                    else {
                        var query3 = "select * from website_details where id='" + detailform.id + "'";
                        _this.db.exeQuery(query3).then(function (rs) {
                            if (rs.rows.length) {
                                query1 = "update website_details set username='" + detailform.username + "',password='" + detailform.password + "',comments='" + detailform.comments + "' where id='" + detailform.id + "'";
                            }
                            else {
                                query1 = "insert into website_details(websiteid,username,password,comments)" +
                                    "values ('" + formdata_1.id + "','" + detailform.username + "','" + detailform.password + "','" + detailform.comments + "')";
                            }
                            _this.db.exeQuery(query1).then(function (wdetails) {
                                // alert("Success Details: "+JSON.stringify(wdetails));
                            })
                                .catch(function (err) {
                                var fail = _this.alertCtrl.create({
                                    title: 'Failed!',
                                    message: "Website failed to save.",
                                    buttons: [
                                        {
                                            text: 'Ok',
                                            handler: function (data) {
                                                _this.nav.setRoot(WebsitePage);
                                            }
                                        }
                                    ]
                                });
                                fail.present();
                            });
                        }).catch(function (err) {
                            var fail = _this.alertCtrl.create({
                                title: 'Failed!',
                                message: "Website failed to save.",
                                buttons: [
                                    {
                                        text: 'Ok',
                                        handler: function (data) {
                                            _this.nav.setRoot(WebsitePage);
                                        }
                                    }
                                ]
                            });
                            fail.present();
                        });
                    }
                };
                /*Insertion For Wesbite Details*/
                for (var i = 0; i < formdata_1.details.length; i++) {
                    _loop_1();
                }
                var websuccess = _this.alertCtrl.create({
                    title: 'Success',
                    message: "Website saved successfully.",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                                _this.nav.setRoot(WebsitePage);
                            }
                        }
                    ]
                });
                setTimeout(function () {
                    load_2.dismiss();
                    websuccess.present();
                }, 5000);
            })
                .catch(function (err) {
                load_2.dismiss();
                var webfail = _this.alertCtrl.create({
                    title: 'Failed!',
                    message: "Website failed to save.",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                                _this.nav.setRoot(WebsitePage);
                            }
                        }
                    ]
                });
                webfail.present();
            });
        }
        var rm = JSON.parse(localStorage.getItem('removeDetails'));
        if (rm != null) {
            this._removeDetailsDB(rm);
            localStorage.removeItem('removeDetails');
        }
    };
    AddWebsitePage.prototype._removeDetailsDB = function (r) {
        if (r.length) {
            for (var i = 0; i < r.length; i++) {
                var rmquery = "delete from website_details where id='" + r[i].id + "'";
                this.db.exeQuery(rmquery).then(function (res) {
                    alert("Del Det: " + JSON.stringify(res));
                }).catch(function (err) {
                    alert("Err Del Det: " + JSON.stringify(err));
                });
            }
        }
    };
    AddWebsitePage = __decorate([
        Component({
            selector: 'page-website-add',
            templateUrl: 'add-website.html'
        }),
        __metadata("design:paramtypes", [DatabaseComponent,
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