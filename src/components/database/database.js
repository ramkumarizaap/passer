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
import { AlertController, LoadingController } from "ionic-angular";
import { SQLite } from '@ionic-native/sqlite';
import { GlobalVars } from "../../providers/globalVars";
var DatabaseComponent = /** @class */ (function () {
    function DatabaseComponent(sqlite, load, alertCtrl, globalvars) {
        this.sqlite = sqlite;
        this.load = load;
        this.alertCtrl = alertCtrl;
        this.globalvars = globalvars;
        this.ins = this.globalvars.getAppdata();
    }
    DatabaseComponent.prototype.createDb = function () {
        var _this = this;
        var loader1 = this.load.create({
            content: "Loading Resources 1/5..."
        });
        loader1.present();
        this.sqlite.create({
            name: 'pwdmgr.db',
            location: 'default'
        }).then(function (db) {
            _this.db = db;
            /*User Table Creation */
            if (_this.ins == null) {
                _this.db.executeSql('create table users(id INTEGER PRIMARY KEY AUTOINCREMENT,fullname VARCHAR(32),email VARCHAR(32),password VARCHAR(32))', {})
                    .then(function (res) {
                    setTimeout(function () {
                        loader1.setContent('Loading Resources 2/5...');
                    }, 2000);
                })
                    .catch(function (e) {
                    loader1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        message: e.message,
                        buttons: ['Ok'],
                    });
                    alert.present();
                    return false;
                });
                /*Website Table Creation*/
                _this.db.executeSql('create table websites(id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER(11),title VARCHAR(255),url VARCHAR(255))', {})
                    .then(function (res) {
                    setTimeout(function () {
                        loader1.setContent('Loading Resources 3/5...');
                    }, 4000);
                })
                    .catch(function (e) {
                    loader1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        message: e.message,
                        buttons: ['Ok'],
                    });
                    alert.present();
                    return false;
                });
                /*Wesite Details Table Creation*/
                _this.db.executeSql('create table website_details(id INTEGER PRIMARY KEY AUTOINCREMENT,websiteid INTEGER(11),username VARCHAR(255),password VARCHAR(255),comments VARCHAR(255))', {})
                    .then(function (res) {
                    setTimeout(function () {
                        loader1.setContent('Loading Resources 4/5...');
                    }, 6000);
                })
                    .catch(function (e) {
                    loader1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        message: e.message,
                        buttons: ['Ok'],
                    });
                    alert.present();
                    return false;
                });
                /*Cards Table Creation*/
                _this.db.executeSql('create table cards(id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER(11),card_type VARCHAR(255),bank VARCHAR(255),acc_no VARCHAR(255),month VARCHAR(255),year VARCHAR(255),pin VARCHAR(255),cvv VARCHAR(255),holder_name VARCHAR(255),card_pay VARCHAR(255),color VARCHAR(255))', {})
                    .then(function (res) {
                    setTimeout(function () {
                        loader1.setContent('Loading Resources 5/5...');
                    }, 8000);
                })
                    .catch(function (e) {
                    loader1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        message: e.message,
                        buttons: ['Ok'],
                    });
                    alert.present();
                    // return false;
                });
                /*Banks Table Creation*/
                _this.db.executeSql('create table banks(id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER(11),holder_name VARCHAR(255),name VARCHAR(255),account_number VARCHAR(255),account_type VARCHAR(255),branch VARCHAR(255),ifsc VARCHAR(255),micr VARCHAR(255))', {})
                    .then(function (res) {
                    setTimeout(function () {
                        loader1.dismiss();
                    }, 10000);
                })
                    .catch(function (e) {
                    loader1.dismiss();
                    var alert = _this.alertCtrl.create({
                        title: 'Error',
                        message: e.message,
                        buttons: ['Ok'],
                    });
                    alert.present();
                    // return false;
                });
            }
            else
                loader1.dismiss();
        }).catch(function (err) {
            loader1.dismiss();
            var alert = _this.alertCtrl.create({
                title: 'Error',
                message: err,
                buttons: ['Ok'],
            });
            // alert.present();
            return false;
        });
    };
    DatabaseComponent.prototype.exeQuery = function (query) {
        // alert(query);
        return this.db.executeSql(query, {}).then(function (data) { return data; }).catch(function (err) { return err; });
    };
    DatabaseComponent = __decorate([
        Component({ selector: 'database' }),
        __metadata("design:paramtypes", [SQLite, LoadingController, AlertController,
            GlobalVars])
    ], DatabaseComponent);
    return DatabaseComponent;
}());
export { DatabaseComponent };
//# sourceMappingURL=database.js.map