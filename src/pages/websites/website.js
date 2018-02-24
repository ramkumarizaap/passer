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
import { NavController, AlertController, LoadingController, } from "ionic-angular";
import { AddWebsitePage } from "../add-website/add-website";
import { DatabaseComponent } from "../../components/database/database";
import { FormBuilder } from '@angular/forms';
import { GlobalVars } from '../../providers/globalVars';
var WebsitePage = /** @class */ (function () {
    function WebsitePage(nav, db, globalvars, loader, alertCtrl, _formBuilder) {
        this.nav = nav;
        this.db = db;
        this.globalvars = globalvars;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this._formBuilder = _formBuilder;
        this._items = [];
        this._aitems = [];
        this._searchField = false;
        this.user = this.globalvars.getUserdata()[0];
        this.clearFilter();
    }
    WebsitePage_1 = WebsitePage;
    WebsitePage.prototype._showSearchInput = function () {
        this._searchField = true;
    };
    WebsitePage.prototype._hideSearchInput = function () {
        this._searchField = false;
    };
    WebsitePage.prototype.clearFilter = function () {
        var _this = this;
        var load = this.loader.create({
            content: 'Please Wait...'
        });
        load.present();
        var query = "select * from websites where userid='" + this.user.id + "'";
        this.db.exeQuery(query).then(function (res) {
            if (res.rows.length) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this._items.push({
                        id: res.rows.item(i).id,
                        title: res.rows.item(i).title,
                        url: res.rows.item(i).url
                    });
                }
                _this._aitems = _this._items;
            }
            setTimeout(function () {
                load.dismiss();
            }, 4000);
        })
            .catch(function (err) {
            load.dismiss();
            var detfail = _this.alertCtrl.create({
                title: 'Failed!',
                message: "No Records Found.",
                buttons: ['Ok']
            });
            detfail.present();
        });
        // this._items = [{title:'Ram',url:'http://google.com'},{title:'Kumar',url:'yahoo.com'}];
    };
    WebsitePage.prototype.getFilteredItems = function () {
        this._aitems = this._items;
    };
    WebsitePage.prototype.setFilteredItems = function (e) {
        this.getFilteredItems();
        var val = e.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this._aitems = this._aitems.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    WebsitePage.prototype._addWebsite = function (s) {
        if (s === void 0) { s = ""; }
        this.nav.push(AddWebsitePage, { id: s });
    };
    WebsitePage.prototype._delete = function (id) {
        var _this = this;
        var rmquery = "delete from websites where id='" + id + "'";
        this.db.exeQuery(rmquery).then(function (res) {
            var del = "delete from website_details where websiteid='" + id + "'";
            _this.db.exeQuery(del).then(function (r) { return r; }).catch(function (err) { return err; });
            var succ = _this.alertCtrl.create({
                title: 'Success!',
                message: "Record deleted sucessfully.",
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                            _this.nav.setRoot(WebsitePage_1);
                        }
                    }
                ]
            });
            succ.present();
        }).catch(function (err) {
            var fail = _this.alertCtrl.create({
                title: 'Failed!',
                message: "Record failed to delete.",
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                            _this.nav.setRoot(WebsitePage_1);
                        }
                    }
                ]
            });
            fail.present();
        });
    };
    WebsitePage.prototype._delWebsite = function (id) {
        var _this = this;
        var confirm = this.alertCtrl.create({
            title: 'Delete?',
            message: 'Are you sure want to delete this record?',
            buttons: [
                {
                    text: 'No',
                    handler: function () {
                        confirm.dismiss();
                    }
                },
                {
                    text: 'Yes',
                    handler: function () {
                        _this._delete(id);
                    }
                }
            ]
        });
        confirm.present();
    };
    WebsitePage = WebsitePage_1 = __decorate([
        Component({
            selector: 'page-website',
            templateUrl: 'website.html'
        }),
        __metadata("design:paramtypes", [NavController, DatabaseComponent, GlobalVars,
            LoadingController, AlertController, FormBuilder])
    ], WebsitePage);
    return WebsitePage;
    var WebsitePage_1;
}());
export { WebsitePage };
//# sourceMappingURL=website.js.map