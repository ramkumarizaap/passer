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
// import {WebsitePage} from "../websites/website";
import { CardsAddPage } from "../cards-add/cards-add";
// import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { DatabaseComponent } from "../../components/database/database";
var CardsPage = /** @class */ (function () {
    function CardsPage(nav, globalvars, db, alertCtrl, loader) {
        this.nav = nav;
        this.globalvars = globalvars;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this._items = [];
        this.cards = [];
        this.cno = "4111897865921234";
        // this.user = this.globalvars.getUserdata()[0];
        // this.getCards();
        this.cards = [{ id: '1', year: '2023', acc_no: '1515616515615614' }];
    }
    CardsPage_1 = CardsPage;
    CardsPage.prototype._showSearchInput = function () {
        this._searchField = true;
    };
    CardsPage.prototype._hideSearchInput = function () {
        this._searchField = false;
    };
    CardsPage.prototype.getFilteredItems = function () {
        this.cards = this._items;
    };
    CardsPage.prototype.setFilteredItems = function (e) {
        this.getFilteredItems();
        var val = e.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.cards = this.cards.filter(function (item) {
                return ((item.card_type.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                    (item.bank.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                    (item.acc_no.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                    (item.color.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                    (item.holder_name.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
                    (item.card_pay.toLowerCase().indexOf(val.toLowerCase()) > -1));
            });
        }
    };
    CardsPage.prototype.getCards = function () {
        var _this = this;
        var load = this.loader.create({
            content: "Loading..."
        });
        load.present();
        var query = "select * from cards where userid='" + this.user.id + "'";
        this.db.exeQuery(query).then(function (res) {
            if (res.rows.length) {
                for (var i = 0; i < res.rows.length; i++) {
                    _this._items.push(res.rows.item(i));
                }
                _this.cards = _this._items;
            }
            else {
                _this.alert = _this.alertCtrl.create({
                    title: 'Success',
                    message: "No Records Found.",
                    buttons: ['Ok']
                });
            }
            setTimeout(function () {
                load.dismiss();
                _this.alert.present();
            }, 3000);
        }).catch(function (err) {
        });
    };
    CardsPage.prototype.convertStr = function (string) {
        var str = string.substr(4, 10);
        return string.substr(0, 4) + str.replace(str, " **** **** ") + string.substr(12, 15);
    };
    CardsPage.prototype._gotoCardsAdd = function (s) {
        if (s === void 0) { s = ""; }
        this.nav.push(CardsAddPage, { id: s });
    };
    CardsPage.prototype.getImage = function (name) {
        var img;
        switch (name) {
            case "Amex":
                img = "american.png";
                break;
            case "Cirrus":
                img = "cirrus.png";
                break;
            case "Discover":
                img = "discover.png";
                break;
            case "Maestro":
                img = "maestro.png";
                break;
            case "Mastercard":
                img = "master.png";
                break;
            case "Rupay":
                img = "rupay.png";
                break;
            case "Visa":
                img = "visa.png";
                break;
            case "Western Union":
                img = "western.png";
                break;
        }
        return img;
    };
    CardsPage.prototype._delete = function (id) {
        var _this = this;
        var rmquery = "delete from cards where id='" + id + "'";
        this.db.exeQuery(rmquery).then(function (res) {
            var succ = _this.alertCtrl.create({
                title: 'Success!',
                message: "Record deleted sucessfully.",
                buttons: [
                    {
                        text: 'Ok',
                        handler: function (data) {
                            _this.nav.setRoot(CardsPage_1);
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
                            _this.nav.setRoot(CardsPage_1);
                        }
                    }
                ]
            });
            fail.present();
        });
    };
    CardsPage.prototype._delCard = function (id) {
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
    CardsPage = CardsPage_1 = __decorate([
        Component({
            selector: 'page-cards',
            templateUrl: 'cards.html'
        }),
        __metadata("design:paramtypes", [NavController, GlobalVars, DatabaseComponent,
            AlertController, LoadingController])
    ], CardsPage);
    return CardsPage;
    var CardsPage_1;
}());
export { CardsPage };
//# sourceMappingURL=cards.js.map