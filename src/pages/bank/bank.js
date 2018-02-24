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
import { NavController, AlertController, LoadingController, ActionSheetController, } from "ionic-angular";
// import {WebsitePage} from "../websites/website";
import { BankAddPage } from "../bank-add/bank-add";
// import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { DatabaseComponent } from '../../components/database/database';
var BankPage = /** @class */ (function () {
    function BankPage(nav, actionSheetCtrl, alertCtrl, db, globalvars, loader) {
        this.nav = nav;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.globalvars = globalvars;
        this.loader = loader;
        this.bank = [];
        this._items = [];
        this.user = this.globalvars.getUserdata()[0];
        this.getBanks();
    }
    BankPage_1 = BankPage;
    BankPage.prototype._addBank = function (s) {
        if (s === void 0) { s = ""; }
        this.nav.push(BankAddPage, { id: s });
    };
    BankPage.prototype._showSearchInput = function () {
        this._searchField = true;
    };
    BankPage.prototype._hideSearchInput = function () {
        this._searchField = false;
    };
    BankPage.prototype.getFilteredItems = function () {
        this.bank = this._items;
    };
    BankPage.prototype.setFilteredItems = function (e) {
        this.getFilteredItems();
        var val = e.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.bank = this.bank.filter(function (item) {
                return ((item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.branch.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
    };
    BankPage.prototype.getBanks = function () {
        var _this = this;
        var load = this.loader.create({
            content: "Loading..."
        });
        load.present();
        var query = "select * from banks where userid='" + this.user.id + "'";
        this.db.exeQuery(query).then(function (res) {
            if (res.rows.length) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this._items.push(res.rows.item(i));
                }
                _this.bank = _this._items;
            }
            else {
                _this.alert = _this.alertCtrl.create({
                    title: 'Error!',
                    message: "No Records Found.",
                    buttons: ['Ok']
                });
            }
            setTimeout(function () {
                load.dismiss();
                _this.alert.present();
            }, 3000);
        }).catch(function (err) {
            load.dismiss();
            var fail = _this.alertCtrl.create({
                title: 'Error!',
                message: "Failed to fetch Record.",
                buttons: ['Ok']
            });
            fail.present();
        });
    };
    BankPage.prototype.getImg = function (name) {
        var img;
        switch (name) {
            case "Allahabad Bank":
                img = "allahabad.jpg";
                break;
            case "Axis Bank":
                img = "axis.jpg";
                break;
            case "Canara Bank":
                img = "canara.jpeg";
                break;
            case "City Union Bank":
                img = "city-union.jpg";
                break;
            case "Dhanalaxmi Bank":
                img = "dhanalaxmi.jpg";
                break;
            case "Federal Bank":
                img = "federal.jpg";
                break;
            case "HDFC Bank":
                img = "hdfc.jpg";
                break;
            case "ICICI Bank":
                img = "icici.jpg";
                break;
            case "IDBI Bank":
                img = "idbi.jpg";
                break;
            case "Indian Bank":
                img = "indian.jpg";
                break;
            case "IndusInd Bank":
                img = "indusind.jpg";
                break;
            case "Indian Overseas Bank":
                img = "iob.jpg";
                break;
            case "Karnataka Bank":
                img = "karnataka.png";
                break;
            case "Karur Vysya Bank":
                img = "karur.jpg";
                break;
            case "Laxmi Vilas Bank":
                img = "laxmi-vilas.png";
                break;
            case "Punjab National Bank":
                img = "punjab.jpg";
                break;
            case "State Bank of India":
                img = "sbi.jpg";
                break;
            case "South Indian Bank":
                img = "south-indian.jpg";
                break;
            case "Tamilnadu Mercantile Bank":
                img = "tmb.jpg";
                break;
            case "Vijaya Bank":
                img = "vijaya.png";
                break;
            case "Yes Bank":
                img = "yes.jpg";
                break;
        }
        return img;
    };
    BankPage.prototype.showAction = function (result) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Choose Actions',
            buttons: [
                {
                    text: 'Edit',
                    icon: "ios-create",
                    handler: function () {
                        _this._addBank(result);
                    }
                }, {
                    text: 'Delete',
                    icon: "trash",
                    handler: function () {
                        var confirm = _this.alertCtrl.create({
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
                                        _this._delete(result.id);
                                    }
                                }
                            ]
                        });
                        confirm.present();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    BankPage.prototype._delete = function (id) {
        var _this = this;
        var rmquery = "delete from banks where id='" + id + "'";
        this.db.exeQuery(rmquery).then(function (res) {
            var succ = _this.alertCtrl.create({
                title: 'Success!',
                message: "Record deleted sucessfully.",
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                            _this.nav.setRoot(BankPage_1);
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
                            _this.nav.setRoot(BankPage_1);
                        }
                    }
                ]
            });
            fail.present();
        });
    };
    BankPage = BankPage_1 = __decorate([
        Component({
            selector: 'page-bank',
            templateUrl: 'bank.html'
        }),
        __metadata("design:paramtypes", [NavController, ActionSheetController,
            AlertController, DatabaseComponent, GlobalVars,
            LoadingController])
    ], BankPage);
    return BankPage;
    var BankPage_1;
}());
export { BankPage };
//# sourceMappingURL=bank.js.map