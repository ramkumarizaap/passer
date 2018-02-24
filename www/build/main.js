webpackJsonp([0],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__notifications_notifications__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__settings_settings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trips_trips__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_location_search_location__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(storage, nav, popoverCtrl) {
        this.storage = storage;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        // search condition
        this.search = {
            name: "Rio de Janeiro, Brazil",
            date: new Date().toISOString()
        };
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        // this.search.pickup = "Rio de Janeiro, Brazil";
        // this.search.dropOff = "Same as pickup";
        this.storage.get('pickup').then(function (val) {
            if (val === null) {
                _this.search.name = "Rio de Janeiro, Brazil";
            }
            else {
                _this.search.name = val;
            }
        }).catch(function (err) {
            console.log(err);
        });
    };
    // go to result page
    HomePage.prototype.doSearch = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__trips_trips__["a" /* TripsPage */]);
    };
    // choose place
    HomePage.prototype.choosePlace = function (from) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__search_location_search_location__["a" /* SearchLocationPage */], from);
    };
    // to go account page
    HomePage.prototype.goToAccount = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__settings_settings__["a" /* SettingsPage */]);
    };
    HomePage.prototype.presentNotifications = function (myEvent) {
        console.log(myEvent);
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__notifications_notifications__["a" /* NotificationsPage */]);
        popover.present({
            ev: myEvent
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\home\home.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      <strong>Favourites</strong>\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button tappable (click)="presentNotifications($event)">\n        <ion-icon name="notifications"></ion-icon>\n      </button>\n      <button ion-button tappable (click)="goToAccount()">\n        <ion-icon name="cog"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <ion-card no-margin margin-bottom class="full-width">\n    <ion-item tappable (click)="choosePlace(\'from\')" class="border-bottom">\n      <ion-icon name="search" color="primary" item-left></ion-icon>\n      <span>{{ search.name }}</span>\n    </ion-item>\n    <ion-item>\n      <ion-icon name="md-calendar" color="primary" item-left></ion-icon>\n      <ion-datetime class="no-pl" displayFormat="DD/MM/YYYY" pickerFormat="DD/MM/YYYY" [(ngModel)]="search.date"></ion-datetime>\n    </ion-item>\n  </ion-card>\n\n  <button ion-button icon-start block no-margin color="primary" class="round" tappable (click)="doSearch()">\n    <ion-icon name="search"></ion-icon> Search\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* PopoverController */]])
], HomePage);

//
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return regexPatterns; });
var regexPatterns = {
    nameStrings: /^[a-zA-Z]+$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{5,}$/,
    numbersOnly: /^\d+$/,
    url: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/
};

/* nameStrings Regex - Accepts english characters only, lowercase and uppercase
For all unicode characters use - /\p{L}/
Source: https://stackoverflow.com/questions/3617797/regex-to-match-only-letters */
/* email Regex
Source: http://emailregex.com/  - Javascript example*/
/* password Regex - Restrict passwords to:
https://stackoverflow.com/questions/14850553/javascript-regex-for-password-containing-at-least-8-characters-1-number-1-uppe
Characters: 1 Upper, 1 Lower, 1 Digit at minimum
Length: 6 characters
Start : Any
*/
/* phoneNumber - numbers Only
 */ 
//# sourceMappingURL=regexPatterns.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_add_cards_add__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_database_database__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {WebsitePage} from "../websites/website";

// import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';


var CardsPage = CardsPage_1 = (function () {
    function CardsPage(nav, globalvars, db, alertCtrl, loader) {
        this.nav = nav;
        this.globalvars = globalvars;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loader = loader;
        this.cards = [];
        this.cno = "4111897865921234";
        // this.user = this.globalvars.getUserdata()[0];
        this._items = [
            { card_type: "Debit Card", bank: "IndusInd Bank", acc_no: "4111111111111111", month: "01", year: "2018", pin: "1234", cvv: '123', holder_name: "Ramkumar", card_pay: "Visa", color: "Gold" }
        ];
        this.getCards();
    }
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
        this.cards = this._items;
        /*let load = this.loader.create({
            content:"Loading..."
        });
        load.present();
        let query = "select * from cards where userid='"+this.user.id+"'";
        this.db.exeQuery(query).then((res)=>{
            if(res.rows.length)
            {
                for (var i = 0; i < res.rows.length; i++)
                {
                    this.cards.push(res.rows.item(i));
                }
            }
            else
            {
                this.alert = this.alertCtrl.create({
                    title:'Success',
                    message:"No Records Found.",
                    buttons: ['Ok']
                });
            }
            setTimeout(()=>{
                load.dismiss();
                this.alert.present();
            },3000);
        }).catch((err)=>{

        });*/
    };
    CardsPage.prototype.convertStr = function (string) {
        var str = string.substr(4, 10);
        return string.substr(0, 4) + str.replace(str, " **** **** ") + string.substr(12, 15);
    };
    CardsPage.prototype._gotoCardsAdd = function (s) {
        if (s === void 0) { s = ""; }
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__cards_add_cards_add__["a" /* CardsAddPage */], { id: s });
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
    return CardsPage;
}());
CardsPage = CardsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cards',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\cards\cards.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title *ngIf="!_searchField">\n\n      <strong>Cards</strong>\n\n    </ion-title>\n\n    <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="clearFilter($event)" (ionInput)="setFilteredItems($event)" *ngIf="_searchField" class="searchfield" type="text" placeholder="Search..."></ion-searchbar>\n\n    <ion-buttons end>\n\n      <button ion-button *ngIf="!_searchField" tappable (click)="_showSearchInput()">\n\n        <ion-icon name="ios-search"></ion-icon>\n\n      </button>\n\n      <button *ngIf="_searchField" ion-button tappable (click)="_hideSearchInput()">\n\n        <ion-icon name="ios-close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <ion-list>\n\n    <ion-item-sliding  *ngFor="let c of cards" [class]="c.color">\n\n      <ion-item>\n\n      <div class="top-header">\n\n        <div class="card-type" float-left>\n\n            {{c.card_type}}\n\n        </div>\n\n        <div class="bank-name" float-right>\n\n          {{c.bank}}\n\n        </div>\n\n      </div>\n\n      <div class="acc-number">\n\n          {{convertStr(c.acc_no)}}\n\n      </div>\n\n      <div class="detail-div">\n\n          <div class="expire-div" float-left>\n\n            Valid Through {{c.month}}/{{c.year}}\n\n          </div>\n\n          <div class="pin-div" float-right text-right>\n\n            <p>PIN ***</p>\n\n            <p>CVV ****</p>\n\n          </div>\n\n      </div>\n\n      <div class="bottom-div">\n\n          <div class="holder-name" float-left>\n\n            {{c.holder_name}}\n\n          </div>\n\n          <div class="card-type" float-right>\n\n            <img src="assets/icon/cards/{{getImage(c.card_pay)}}">\n\n          </div>\n\n      </div>\n\n      </ion-item>\n\n      <ion-item-options side="right">\n\n        <button ion-button color="dark"  (click)="_gotoCardsAdd(c)">\n\n          <ion-icon name="create"></ion-icon>\n\n          Edit\n\n        </button>\n\n        <button ion-button color="danger" (click)="_delCard(c.id)">\n\n          <ion-icon name="trash"></ion-icon>\n\n          Delete\n\n        </button>\n\n      </ion-item-options>\n\n    </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list *ngIf="cards==\'\'">\n\n    <ion-item text-center>No Records Found.</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-fab right bottom>\n\n    <button (click)="_gotoCardsAdd()" ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\cards\cards.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__components_database_database__["a" /* DatabaseComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__components_database_database__["a" /* DatabaseComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _e || Object])
], CardsPage);

var CardsPage_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return YearList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BankList = (function () {
    function BankList() {
        this.list = [
            'Allahabad Bank',
            'Axis Bank',
            'Canara Bank',
            'City Union Bank',
            'Dhanalaxmi Bank',
            'Federal Bank',
            'HDFC Bank',
            'ICICI Bank',
            'IDBI Bank',
            'Indian Bank',
            'IndusInd Bank',
            'Indian Overseas Bank',
            'Karnataka Bank',
            'Karur Vysya Bank',
            'Laxmi Vilas Bank',
            'Punjab National Bank',
            'State Bank of India',
            'South Indian Bank',
            'Tamilnadu Mercantile Bank',
            'Vijaya Bank',
            'Yes Bank',
        ];
    }
    return BankList;
}());
BankList = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], BankList);

var YearList = (function () {
    function YearList() {
        this.y = new Date();
        this.y1 = this.y.getFullYear();
        this.year = [];
    }
    YearList.prototype.years = function () {
        for (var i = this.y1; i < (this.y1 + 30); i++) {
            this.year.push(i);
        }
        return this.year;
    };
    return YearList;
}());

//# sourceMappingURL=bankList.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bank_add_bank_add__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_database_database__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {WebsitePage} from "../websites/website";

// import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';


var BankPage = BankPage_1 = (function () {
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
        this._items = [{ name: "IndusInd Bank", branch: "Salem" }, { name: "Axis Bank", branch: "Chennai" }];
        this.getBanks();
    }
    BankPage.prototype._addBank = function (s) {
        if (s === void 0) { s = ""; }
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__bank_add_bank_add__["a" /* BankAddPage */], { id: s });
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
                    _this.bank.push(res.rows.item(i));
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
    return BankPage;
}());
BankPage = BankPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bank',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\bank\bank.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title  *ngIf="!_searchField">\n\n      <strong>Bank</strong>\n\n    </ion-title>\n\n    <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="clearFilter($event)" (ionInput)="setFilteredItems($event)" *ngIf="_searchField" class="searchfield" type="text" placeholder="Search..."></ion-searchbar>\n\n    <ion-buttons end>\n\n      <button ion-button *ngIf="!_searchField" tappable (click)="_showSearchInput()">\n\n        <ion-icon name="ios-search"></ion-icon>\n\n      </button>\n\n      <button *ngIf="_searchField" ion-button tappable (click)="_hideSearchInput()">\n\n        <ion-icon name="ios-close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="card-background-page">\n\n  <ion-card *ngFor="let b of bank" (click)="showAction(b)">\n\n    <img src="assets/icon/bank/{{getImg(b.name)}}"/>\n\n    <div class="card-title">{{b.name}}</div>\n\n    <div class="card-subtitle">{{b.branch}}</div>\n\n  </ion-card>\n\n  <ion-list *ngIf="bank==\'\'">\n\n    <ion-item text-center>No Records Found.</ion-item>\n\n  </ion-list>\n\n\n\n  <ion-fab right bottom>\n\n    <button (click)="_addBank()" ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\bank\bank.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__components_database_database__["a" /* DatabaseComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__components_database_database__["a" /* DatabaseComponent */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]) === "function" && _f || Object])
], BankPage);

var BankPage_1, _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=bank.js.map

/***/ }),

/***/ 121:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVars; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GlobalVars = (function () {
    function GlobalVars() {
    }
    GlobalVars.prototype.setUserdata = function (value) {
        this.myGlobalVar = localStorage.setItem('userData', value);
    };
    GlobalVars.prototype.deleteUserdata = function () {
        this.myGlobalVar = localStorage.removeItem('userData');
    };
    GlobalVars.prototype.getUserdata = function () {
        this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
        return this.myGlobalVar;
    };
    GlobalVars.prototype.getId = function () {
        this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
        return this.myGlobalVar.id;
    };
    GlobalVars.prototype.getUserRole = function () {
        this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
        return this.myGlobalVar.role;
    };
    GlobalVars.prototype.setAppdata = function () {
        var key = "Installed";
        this.myKey = localStorage.setItem('keyStore', key);
    };
    GlobalVars.prototype.getAppdata = function () {
        this.myKey = localStorage.getItem('keyStore');
        return this.myKey;
    };
    return GlobalVars;
}());
GlobalVars = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], GlobalVars);

//# sourceMappingURL=globalVars.js.map

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DatabaseComponent = (function () {
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
    return DatabaseComponent;
}());
DatabaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({ selector: 'database' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */]])
], DatabaseComponent);

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    NotificationsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return NotificationsPage;
}());
NotificationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-notifications',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\notifications\notifications.html"*/'<ion-list class="no-margin">\n  <ion-list-header class="no-margin">\n  	<ion-icon name="notifications" color="primary"></ion-icon>\n  	<span ion-text color="primary" class="bold">Notifications</span>\n  </ion-list-header>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	New booking success!\n  </button>\n  <button ion-item color="secondary" class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail"></ion-icon>\n  	Activity rescheduled\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n  <button ion-item class="text-1x" tappable (click)="close()">\n  	<ion-icon name="mail-open" color="secondary"></ion-icon>\n  	<span ion-text color="secondary">Activity rescheduled</span>\n  </button>\n</ion-list>\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\notifications\notifications.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
], NotificationsPage);

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = (function () {
    function SettingsPage(nav) {
        this.nav = nav;
    }
    // logout
    SettingsPage.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\settings\settings.html"*/'<!-- -->\n<ion-header class="no-shadow">\n\n  <ion-navbar class="no-border">\n    <ion-title>\n      <ion-icon name="cog" class="text-primary"></ion-icon>\n      <span class="text-primary">Settings</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="common-bg">\n  <!-- User settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">User Settings</ion-item-divider>\n    <ion-item>\n      <ion-label>Language</ion-label>\n      <ion-select [(ngModel)]="language" cancelText="Cancel" okText="OK">\n        <ion-option value="en-US" selected="true">English (US)</ion-option>\n        <ion-option value="en-GB">English (UK)</ion-option>\n        <ion-option value="en-CA">English (CA)</ion-option>\n        <ion-option value="en-AU">English (AU)</ion-option>\n        <ion-option value="en-IN">English (IN)</ion-option>\n        <ion-option value="pt-BR">Portuguese (BR)</ion-option>\n        <ion-option value="pt-PT">Portuguese (PT)</ion-option>\n        <ion-option value="es-ES">Spanish (ES)</ion-option>\n        <ion-option value="es-AR">Spanish (AR)</ion-option>\n        <ion-option value="es-CO">Spanish (CO)</ion-option>\n        <ion-option value="es-CL">Spanish (CL)</ion-option>\n        <ion-option value="es-MX">Spanish (MX)</ion-option>\n        <ion-option value="zh-CN">Chinese (CN)</ion-option>\n        <ion-option value="zh-TW">Chinese (TW)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Currency</ion-label>\n      <ion-select [(ngModel)]="currency" cancelText="Cancel" okText="OK">\n        <ion-option value="USD" selected="true">U.S Dollar (US$)</ion-option>\n        <ion-option value="EUR">Euro (€)</ion-option>\n        <ion-option value="GBP">Pound (£)</ion-option>\n        <ion-option value="BRL">Brazilian Real (R$)</ion-option>\n        <ion-option value="CNY">Chinese Yuan</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Units</ion-label>\n      <ion-select [(ngModel)]="munits" cancelText="Cancel" okText="OK">\n        <ion-option value="M" selected="true">Miles (ft²)</ion-option>\n        <ion-option value="K">Kilometers (m²)</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Notifications?</ion-label>\n      <ion-toggle checked="true"></ion-toggle>\n    </ion-item>\n  </ion-item-group>\n  <!-- App settings-->\n  <ion-item-group>\n    <ion-item-divider color="secondary" class="bold">App Settings</ion-item-divider>\n    <ion-item>\n      <span>Clear Private Data</span>\n    </ion-item>\n    <ion-item>\n      <ion-label>Push Notifications?</ion-label>\n      <ion-toggle checked="false"></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <span>Privacy Policy</span>\n    </ion-item>\n  </ion-item-group>  \n\n  <!--sign out button-->\n  <button ion-button color="primary" full tappable (click)="logout()">LOG OUT</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\settings\settings.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_regexPatterns__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_database_database__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterPage = (function () {
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
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4)
                ])
            ],
            //EMAIL
            email: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__providers_regexPatterns__["a" /* regexPatterns */].email)
                ])
            ],
            //PASSWORD
            password: ["", __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    // ,Validators.pattern(regexPatterns.password),
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)
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
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\register\register.html"*/'<!-- -->\n<ion-content class="auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary logo-text">\n        <strong>Passer</strong><br><small>Password Security</small>\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="_signupForm" method="post" novalidate>\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="person" item-start class="text-primary"></ion-icon>\n          Full Name\n        </ion-label>\n        <ion-input formControlName="fullname" type="text"></ion-input>\n      </ion-item>\n      <ion-item class="error" no-lines no-padding *ngIf="_signupForm.controls.fullname.hasError(\'required\') && _signupForm.controls.fullname.touched">\n        <p ion-text text-wrap>Please Enter Full Name</p>\n      </ion-item>\n      <ion-item class="error" no-lines no-padding *ngIf="_signupForm.controls.fullname.invalid  && _signupForm.controls.fullname.dirty && _signupForm.controls.fullname.value!=\'\'">\n        <p ion-text text-wrap>Please enter atleast 4 characters.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start  class="text-primary"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input formControlName="email" type="email"></ion-input>\n      </ion-item>\n      <ion-item class="error" no-lines no-padding *ngIf="_signupForm.controls.email.hasError(\'required\') && _signupForm.controls.email.touched">\n        <p ion-text text-wrap>Please Enter Email-ID</p>\n      </ion-item>\n      <ion-item class="error" no-lines no-padding *ngIf="_signupForm.controls.email.invalid  && _signupForm.controls.email.dirty && _signupForm.controls.email.value!=\'\'">\n        <p ion-text text-wrap>Please use correct email format, e.g.:someone@domain.com.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input formControlName="password" [type]="_passwordInputType"></ion-input>\n      </ion-item>\n      <ion-icon float-right name="{{_passwordIcon}}" (click)="_toggleViewPassword($event)" class="password-icon"></ion-icon>\n      <ion-item class="error" no-lines no-padding *ngIf="_signupForm.controls.password.hasError(\'required\') && _signupForm.controls.password.touched">\n        <p ion-text text-wrap>Please Enter Password</p>\n      </ion-item>\n      <ion-item class="error" no-lines no-padding *ngIf="_signupForm.controls.password.invalid  && _signupForm.controls.password.dirty && _signupForm.controls.password.value!=\'\'">\n        <p ion-text text-wrap>Please enter atleast 6 characters.</p>\n      </ion-item>\n    </form>\n\n    <div margin-top>\n      <button ion-button block color="dark" tappable [disabled]="!_signupForm.valid" (click)="register()">\n        SIGN UP\n      </button>\n    </div>\n\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="primary" tappable (click)="login()">Already have an account?</span>\n    </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\register\register.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__components_database_database__["a" /* DatabaseComponent */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddWebsitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__websites_website__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_regexPatterns__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_database_database__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {RegisterPage} from "../register/register";




var AddWebsitePage = (function () {
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
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)
                ])
            ],
            url: ["",
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__providers_regexPatterns__["a" /* regexPatterns */].url)
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
                    title: [_this.website.title, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(6)])],
                    url: [_this.website.url, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_4__providers_regexPatterns__["a" /* regexPatterns */].url)])],
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
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__websites_website__["a" /* WebsitePage */]);
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
                                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__websites_website__["a" /* WebsitePage */]);
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
                                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__websites_website__["a" /* WebsitePage */]);
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
                                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__websites_website__["a" /* WebsitePage */]);
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
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__websites_website__["a" /* WebsitePage */]);
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
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__websites_website__["a" /* WebsitePage */]);
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
    return AddWebsitePage;
}());
AddWebsitePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-website-add',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\add-website\add-website.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <strong>Add Website</strong>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <form [formGroup]="_websiteForm" (submit)="_submitWebsiteForm()" method="post" novalidate="">\n\n    <button ion-button color="dark" [disabled]="!_websiteForm.valid" type="submit">\n\n      <ion-icon name="checkmark"></ion-icon>&nbsp;Save\n\n    </button>\n\n    <button ion-button color="danger" (click)="_cancel()" type="button">\n\n      <ion-icon name="close"></ion-icon>&nbsp;Cancel\n\n    </button>\n\n    <ion-input formControlName="id" type="hidden"></ion-input>\n\n    <ion-item>\n\n      <ion-label floating>Title</ion-label>\n\n      <ion-input formControlName="title" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_websiteForm.controls.title.hasError(\'required\') && _websiteForm.controls.title.touched">\n\n        <p ion-text text-wrap>Please Enter Title</p>\n\n    </ion-item>\n\n     <ion-item class="error" no-lines no-padding *ngIf="_websiteForm.controls.title.invalid  && _websiteForm.controls.title.dirty && _websiteForm.controls.title.value!=\'\'">\n\n        <p ion-text text-wrap>Please enter atleast 6 characters.</p>\n\n      </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>URL</ion-label>\n\n      <ion-input formControlName="url" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_websiteForm.controls.url.hasError(\'required\') && _websiteForm.controls.url.touched">\n\n        <p ion-text text-wrap>Please Enter URL</p>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_websiteForm.controls.url.hasError(\'pattern\')  && _websiteForm.controls.url.dirty && _websiteForm.controls.url.value!=\'\'">\n\n        <p ion-text text-wrap>Please enter valid URL.</p>\n\n    </ion-item>\n\n    <ion-item class="help"><p style="color:#8f8f8f;">Ex: http://www.example.com</p></ion-item>\n\n    <div formArrayName="details">\n\n      <div class="repeat-list" *ngFor="let item of _websiteForm.get(\'details\').controls;let i = index;">\n\n        <div [formGroupName]="i">\n\n          <button *ngIf="len.length > 1" type="button" (click)="_removeItem(i)" color="danger" class="close-btn" small float-right ion-button item-end>\n\n            <ion-icon name="close"></ion-icon>\n\n          </button>\n\n          <ion-input type="hidden" formControlName="id"></ion-input>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-input type="text" formControlName="username" placeholder="Username"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-input type="password" formControlName="password" placeholder="Password"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n          <ion-list>\n\n            <ion-item>\n\n              <ion-input type="text" formControlName="comments" placeholder="Comments"></ion-input>\n\n            </ion-item>\n\n          </ion-list>\n\n        </div>\n\n      </div>\n\n    </div>\n\n    <button class="btn" type="button" (click)="_addNew()" ion-button color="light">\n\n      <ion-icon name="add"></ion-icon>&nbsp;Add New\n\n    </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\add-website\add-website.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__components_database_database__["a" /* DatabaseComponent */],
        __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], AddWebsitePage);

//# sourceMappingURL=add-website.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripsPage = (function () {
    function TripsPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // set sample data
        this.trips = tripService.getAll();
    }
    // view trip detail
    TripsPage.prototype.viewDetail = function (id) {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__trip_detail_trip_detail__["a" /* TripDetailPage */], { id: id });
    };
    return TripsPage;
}());
TripsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trips',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\trips\trips.html"*/'<!-- -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      <span ion-text>Activities</span>\n    </ion-title>\n  </ion-navbar>\n\n  <!--  -->\n  <ion-toolbar padding color="light">\n    <p ion-text no-margin class="text-white">\n      <strong>4</strong> results found!\n    </p>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding class="trips detail-bg">\n  <!--list of trips-->\n  <div class="trip card" *ngFor="let trip of trips" tappable (click)="viewDetail(trip.id)" margin-bottom>\n    <div class="background border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}">\n      <div class="background-filter rlt">\n        <div class="align-bottom" padding-left padding-right>\n          <h6 class="pull-left text-white" ion-text>{{ trip.name }}</h6>\n          <h6 class="pull-right text-white" ion-text>{{ trip.price_adult | currency:\'USD\':true }}</h6>\n          <div class="clear"></div>\n        </div>\n      </div>\n    </div>\n    <div class="padding-sm primary-bg">\n      <ion-icon name="time" class="text-white"></ion-icon>\n      <span ion-text class="text-white">{{ trip.time }}</span>\n      <span class="pull-right" ion-text color="light"><strong>per adult</strong> (childs has <span ion-text  class="text-green bold">50% OFF</span>)</span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\trips\trips.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripsPage);

//# sourceMappingURL=trips.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TripDetailPage = (function () {
    function TripDetailPage(nav, tripService) {
        this.nav = nav;
        this.tripService = tripService;
        // number of adult
        this.adults = 2;
        // number of children
        this.children = 0;
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // minus adult when click minus button
    TripDetailPage.prototype.minusAdult = function () {
        this.adults--;
    };
    // plus adult when click plus button
    TripDetailPage.prototype.plusAdult = function () {
        this.adults++;
    };
    // minus children when click minus button
    TripDetailPage.prototype.minusChildren = function () {
        this.children--;
    };
    // plus children when click plus button
    TripDetailPage.prototype.plusChildren = function () {
        this.children++;
    };
    // go to checkout page
    TripDetailPage.prototype.checkout = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__checkout_trip_checkout_trip__["a" /* CheckoutTripPage */]);
    };
    return TripDetailPage;
}());
TripDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-trip-detail',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\trip-detail\trip-detail.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar  color="primary">\n    <ion-title>\n      <span ion-text>{{ trip.name }}</span>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="common-bg">\n  <!--slides-->\n  <ion-slides class="to-top" pager>\n    <ion-slide *ngFor="let image of trip.images">\n      <img [src]="image" alt="">\n    </ion-slide>\n  </ion-slides>\n\n  <!--services-->\n  <ion-grid class="border-bottom dark-bg">\n    <ion-row>\n      <ion-col text-center>\n        <div class="text-sm">\n          <div>\n            <ion-icon name="time" class="text-white"></ion-icon>\n            <span ion-text color="light">{{ trip.time }}</span>\n            <ion-icon name="checkbox-outline" margin-left class="text-white" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text color="light" *ngIf="trip.free_cancellation">Free cancellation</span>\n            <ion-icon name="list-box" margin-left class="text-white" *ngIf="trip.electric_voucher"></ion-icon>\n            <span ion-text color="light" *ngIf="trip.electric_voucher">Electronic voucher</span>\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!--high light-->\n  <div class="border-bottom" padding>\n    <span ion-text color="dark" class="bold">HIGHLIGHT</span>\n    <ul class="highlight">\n      <li *ngFor="let highlight of trip.highlights">\n        <ion-icon name="checkmark" class="text-green"></ion-icon>\n        <span ion-text color="primary">{{ highlight }}</span>\n      </li>\n    </ul>\n  </div>\n\n  <!--booking form-->\n  <div class="booking-form card round" margin>\n    <div class="border-bottom" padding>\n      <h5>{{ trip.sub_name }}</h5>\n\n      <!--choose guest-->\n      <ion-grid class="filters" no-padding margin-top>\n        <ion-row>\n          <ion-col class="adult" width-70>\n            <span ion-text color="primary"><strong>{{ trip.price_adult | currency:\'USD\':true }}</strong> Adults</span>\n          </ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusAdult()" [hidden]="adults < 2"\n                      color="secondary"></ion-icon>\n          </ion-col>\n          <ion-col width-10 text-center>{{ adults }}</ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusAdult()" color="secondary"></ion-icon>\n          </ion-col>\n        </ion-row>\n        <ion-row margin-top>\n          <ion-col width-70>\n            <span ion-text color="primary"><strong>{{ trip.price_child | currency:\'USD\':true }}</strong> Child (0-12 years)</span>\n          </ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="remove-circle" class="text-2x" tappable (click)="minusChildren()" [hidden]="children < 1"\n                      color="secondary"></ion-icon>\n          </ion-col>\n          <ion-col width-10 text-center>{{ children }}</ion-col>\n          <ion-col width-10 text-center>\n            <ion-icon name="add-circle" class="text-2x" tappable (click)="plusChildren()" color="secondary"></ion-icon>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div padding class="form-bottom">\n<!--       <span ion-text color="dark" class="bold">{{ adults }} Adults</span> -->\n      <!--booking button-->\n      <button ion-button class="pull-right" color="secondary" tappable (click)="checkout()">Book Now {{ adults * trip.price_adult +\n        children * trip.price_child | currency:\'USD\':true }}\n      </button>\n      <div class="clear"></div>\n    </div>\n  </div>\n\n  <!--description-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">DESCRIPTION</span>\n    <p ion-text>{{ trip.description }}</p>\n  </div>\n\n  <!--address-->\n  <div class="border-bottom" padding>\n    <span ion-text color="primary" class="bold">LOCATION</span>\n    <p ion-text>{{ trip.location }}</p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\trip-detail\trip-detail.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */]])
], TripDetailPage);

//# sourceMappingURL=trip-detail.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutTripPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_trip_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutTripPage = (function () {
    function CheckoutTripPage(nav, tripService, loadingCtrl, toastCtrl) {
        this.nav = nav;
        this.tripService = tripService;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        // number of adults
        this.adults = 2;
        // date
        this.date = new Date();
        this.paymethods = 'creditcard';
        // set sample data
        this.trip = tripService.getItem(1);
    }
    // process send button
    CheckoutTripPage.prototype.send = function () {
        var _this = this;
        // send booking info
        var loader = this.loadingCtrl.create({
            content: "Please wait..."
        });
        // show message
        var toast = this.toastCtrl.create({
            showCloseButton: true,
            cssClass: 'profile-bg',
            message: 'Book Activity Success!',
            duration: 3000,
            position: 'bottom'
        });
        loader.present();
        setTimeout(function () {
            loader.dismiss();
            toast.present();
            // back to home page
            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, 3000);
    };
    return CheckoutTripPage;
}());
CheckoutTripPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-checkout-trip',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\checkout-trip\checkout-trip.html"*/'<!-- -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Activity Checkout</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="checkout-trip common-bg">\n  <!--trip information-->\n  <div class="trip-info card round">\n    <div class="trip-image border-bottom" [ngStyle]="{\'background-image\': \'url(\' + trip.thumb + \')\'}"></div>\n    <ion-grid padding>\n      <ion-row>\n        <ion-col width-66>\n          <h5 ion-text color="primary">{{ trip.name }}</h5>\n          <div>\n            <span class="bold">{{ trip.sub_name }}</span>\n            <br/>\n            <span ion-text color="dark">{{ adults }} Adults</span>\n          </div>\n          <div margin-top>\n            <span ion-text color="dark">{{ date | date: \'EEE, MMM dd\' }}</span>\n            <br/>\n            <span ion-text>{{ trip.location }}</span>\n          </div>\n          <div margin-top>\n            <ion-icon name="checkmark" class="text-green" *ngIf="trip.free_cancellation"></ion-icon>\n            <span ion-text *ngIf="trip.free_cancellation">Free cancellation</span>\n          </div>\n        </ion-col>\n        <ion-col col-4>\n          <span ion-text>Total with Tax</span>\n          <h5 ion-text color="primary" class="bold" no-margin>{{ trip.price_adult * adults | currency:\'USD\':true }}</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n    <!--more info-->\n  <h5>Guest Details</h5>\n  <div class="card round" margin-top>\n\n    <ion-list no-margin>\n      <ion-item class="primary-bg">\n        <ion-avatar item-start>\n          <img src="assets/img/avatar.jpeg">\n        </ion-avatar>\n        <h2 ion-text class="text-white bold">João Firmino</h2>\n        <p ion-text class="text-secondary bold">User</p>\n      </ion-item>\n    </ion-list>\n\n    <div padding>\n      <h5 ion-text color="secondary">Other Guests</h5>\n\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Adult 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n      <ion-item no-padding>\n        <ion-label color="dark" stacked>Child 1 Name:</ion-label>\n        <ion-input type="text" placeholder="Ex. Joe Doe" value=""></ion-input>\n      </ion-item>\n    </div>\n  </div>\n\n  <!--payment info-->\n  <h5>Payment Methods</h5>\n  <ion-segment color="secondary" [(ngModel)]="paymethods">\n    <ion-segment-button value="creditcard" >\n      Credit card\n    </ion-segment-button>\n    <ion-segment-button value="paypal">\n      PayPal\n    </ion-segment-button>\n  </ion-segment>\n\n  <div class="card round" margin-top margin-bottom>\n\n    <div [ngSwitch]="paymethods">\n      <ion-grid *ngSwitchCase="\'creditcard\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMTUuMTg3NSAxOSBMIDEyLjU1ODU5NCAyNi44MzIwMzEgQyAxMi41NTg1OTQgMjYuODMyMDMxIDExLjg5NDUzMSAyMy41MTk1MzEgMTEuODI4MTI1IDIzLjEwMTU2MyBDIDEwLjMzMjAzMSAxOS42OTE0MDYgOC4xMjUgMTkuODgyODEzIDguMTI1IDE5Ljg4MjgxMyBMIDEwLjcyNjU2MyAzMCBMIDEwLjcyNjU2MyAyOS45OTYwOTQgTCAxMy44ODY3MTkgMjkuOTk2MDk0IEwgMTguMjU3ODEzIDE5IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkZGRkY7IiBkPSJNIDE3LjY4NzUgMzAgTCAyMC41NTg1OTQgMzAgTCAyMi4yOTY4NzUgMTkgTCAxOS4zOTA2MjUgMTkgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGRkZGRjsiIGQ9Ik0gMzguMDA3ODEzIDE5IEwgMzQuOTg4MjgxIDE5IEwgMzAuMjc3MzQ0IDMwIEwgMzMuMTI4OTA2IDMwIEwgMzMuNzE4NzUgMjguNDI5Njg4IEwgMzcuMzEyNSAyOC40Mjk2ODggTCAzNy42MTcxODggMzAgTCA0MC4yMzA0NjkgMzAgWiBNIDM0LjUxMTcxOSAyNi4zMjgxMjUgTCAzNi4wNzQyMTkgMjIuMTcxODc1IEwgMzYuODk0NTMxIDI2LjMyODEyNSBaICIvPjxwYXRoIHN0eWxlPSIgZmlsbDojRkZGRkZGOyIgZD0iTSAyNi4zNjcxODggMjIuMjA3MDMxIEMgMjYuMzY3MTg4IDIxLjYwMTU2MyAyNi44NjcxODggMjEuMTQ4NDM4IDI4LjI5Njg3NSAyMS4xNDg0MzggQyAyOS4yMjI2NTYgMjEuMTQ4NDM4IDMwLjI4NTE1NiAyMS44MjQyMTkgMzAuMjg1MTU2IDIxLjgyNDIxOSBMIDMwLjc1MzkwNiAxOS41MTU2MjUgQyAzMC43NTM5MDYgMTkuNTE1NjI1IDI5LjM5NDUzMSAxOSAyOC4wNjI1IDE5IEMgMjUuMDQyOTY5IDE5IDIzLjQ4NDM3NSAyMC40NDE0MDYgMjMuNDg0Mzc1IDIyLjI2OTUzMSBDIDIzLjQ4NDM3NSAyNS41NzgxMjUgMjcuNDY0ODQ0IDI1LjEyNSAyNy40NjQ4NDQgMjYuODIwMzEzIEMgMjcuNDY0ODQ0IDI3LjExMzI4MSAyNy4yMzQzNzUgMjcuNzg1MTU2IDI1LjU3NDIxOSAyNy43ODUxNTYgQyAyMy45MTQwNjMgMjcuNzg1MTU2IDIyLjgxNjQwNiAyNy4xNzU3ODEgMjIuODE2NDA2IDI3LjE3NTc4MSBMIDIyLjMyMDMxMyAyOS4zOTQ1MzEgQyAyMi4zMjAzMTMgMjkuMzk0NTMxIDIzLjM4NjcxOSAzMCAyNS40Mzc1IDMwIEMgMjcuNDk2MDk0IDMwIDMwLjM1NTQ2OSAyOC40NjA5MzggMzAuMzU1NDY5IDI2LjI0NjA5NCBDIDMwLjM1NTQ2OSAyMy41ODU5MzggMjYuMzY3MTg4IDIzLjM5NDUzMSAyNi4zNjcxODggMjIuMjA3MDMxIFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRkMxMDc7IiBkPSJNIDEyLjIxMDkzOCAyNC45NDUzMTMgTCAxMS4yNDYwOTQgMjAuMTk1MzEzIEMgMTEuMjQ2MDk0IDIwLjE5NTMxMyAxMC44MDg1OTQgMTkuMTY3OTY5IDkuNjcxODc1IDE5LjE2Nzk2OSBDIDguNTM1MTU2IDE5LjE2Nzk2OSA1LjIzNDM3NSAxOS4xNjc5NjkgNS4yMzQzNzUgMTkuMTY3OTY5IEMgNS4yMzQzNzUgMTkuMTY3OTY5IDEwLjg5NDUzMSAyMC44Mzk4NDQgMTIuMjEwOTM4IDI0Ljk0NTMxMyBaICIvPjwvZz48L3N2Zz4=" alt="Visa" />\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojM0Y1MUI1OyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjIxMDkzOCA0My4yMTA5MzggMzkgNDEgMzkgTCA3IDM5IEMgNC43ODkwNjMgMzkgMyAzNy4yMTA5MzggMyAzNSBMIDMgMTMgQyAzIDEwLjc4OTA2MyA0Ljc4OTA2MyA5IDcgOSBMIDQxIDkgQyA0My4yMTA5MzggOSA0NSAxMC43ODkwNjMgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGQzEwNzsiIGQ9Ik0gNDAgMjQgQyA0MCAyOS41MjM0MzggMzUuNTIzNDM4IDM0IDMwIDM0IEMgMjQuNDc2NTYzIDM0IDIwIDI5LjUyMzQzOCAyMCAyNCBDIDIwIDE4LjQ3NjU2MyAyNC40NzY1NjMgMTQgMzAgMTQgQyAzNS41MjM0MzggMTQgNDAgMTguNDc2NTYzIDQwIDI0IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiNGRjNEMDA7IiBkPSJNIDIyLjAxNTYyNSAzMCBDIDIxLjU1MDc4MSAyOS4zODI4MTMgMjEuMTUyMzQ0IDI4LjcxNDg0NCAyMC44Mzk4NDQgMjggTCAyNi4xNjQwNjMgMjggQyAyNi40NDE0MDYgMjcuMzYzMjgxIDI2LjY2MDE1NiAyNi42OTUzMTMgMjYuODAwNzgxIDI2IEwgMjAuMjAzMTI1IDI2IEMgMjAuMDcwMzEzIDI1LjM1NTQ2OSAyMCAyNC42ODc1IDIwIDI0IEwgMjcgMjQgQyAyNyAyMy4zMTI1IDI2LjkyOTY4OCAyMi42NDQ1MzEgMjYuODAwNzgxIDIyIEwgMjAuMTk5MjE5IDIyIEMgMjAuMzQzNzUgMjEuMzA0Njg4IDIwLjU1ODU5NCAyMC42MzY3MTkgMjAuODM5ODQ0IDIwIEwgMjYuMTY0MDYzIDIwIEMgMjUuODUxNTYzIDE5LjI4NTE1NiAyNS40NTMxMjUgMTguNjE3MTg4IDI0Ljk4ODI4MSAxOCBMIDIyLjAxNTYyNSAxOCBDIDIyLjQ0OTIxOSAxNy40MjE4NzUgMjIuOTQ1MzEzIDE2Ljg3ODkwNiAyMy40OTYwOTQgMTYuNDA2MjUgQyAyMS43NDYwOTQgMTQuOTEwMTU2IDE5LjQ4MDQ2OSAxNCAxNyAxNCBDIDExLjQ3NjU2MyAxNCA3IDE4LjQ3NjU2MyA3IDI0IEMgNyAyOS41MjM0MzggMTEuNDc2NTYzIDM0IDE3IDM0IEMgMjAuMjY5NTMxIDM0IDIzLjE2MDE1NiAzMi40MjU3ODEgMjQuOTg0Mzc1IDMwIFogIi8+PC9nPjwvc3ZnPg==" alt="mastercard">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojRTFFN0VBOyIgZD0iTSA0NSAzNSBDIDQ1IDM3LjE5OTIxOSA0My4xOTkyMTkgMzkgNDEgMzkgTCA3IDM5IEMgNC44MDA3ODEgMzkgMyAzNy4xOTkyMTkgMyAzNSBMIDMgMTMgQyAzIDEwLjgwMDc4MSA0LjgwMDc4MSA5IDcgOSBMIDQxIDkgQyA0My4xOTkyMTkgOSA0NSAxMC44MDA3ODEgNDUgMTMgWiAiLz48cGF0aCBzdHlsZT0iIGZpbGw6I0ZGNkQwMDsiIGQ9Ik0gNDUgMzUgQyA0NSAzNy4xOTkyMTkgNDMuMTk5MjE5IDM5IDQxIDM5IEwgMTYgMzkgQyAxNiAzOSAzOS42MDE1NjMgMzUuMTk5MjE5IDQ1IDI0IFogTSAyMiAyNCBDIDIyIDI1LjY5OTIxOSAyMy4zMDA3ODEgMjcgMjUgMjcgQyAyNi42OTkyMTkgMjcgMjggMjUuNjk5MjE5IDI4IDI0IEMgMjggMjIuMzAwNzgxIDI2LjY5OTIxOSAyMSAyNSAyMSBDIDIzLjMwMDc4MSAyMSAyMiAyMi4zMDA3ODEgMjIgMjQgWiAiLz48cGF0aCBzdHlsZT0iICIgZD0iTSAxMS4xOTkyMTkgMjEgTCAxMi4zMDA3ODEgMjEgTCAxMi4zMDA3ODEgMjcgTCAxMS4xOTkyMTkgMjcgWiBNIDE3LjE5OTIxOSAyNCBDIDE3LjE5OTIxOSAyNS42OTkyMTkgMTguNSAyNyAyMC4xOTkyMTkgMjcgQyAyMC42OTkyMTkgMjcgMjEuMTAxNTYzIDI2Ljg5ODQzOCAyMS42MDE1NjMgMjYuNjk5MjE5IEwgMjEuNjAxNTYzIDI1LjM5ODQzOCBDIDIxLjE5OTIxOSAyNS44MDA3ODEgMjAuODAwNzgxIDI2IDIwLjE5OTIxOSAyNiBDIDE5LjEwMTU2MyAyNiAxOC4zMDA3ODEgMjUuMTk5MjE5IDE4LjMwMDc4MSAyNCBDIDE4LjMwMDc4MSAyMi44OTg0MzggMTkuMTAxNTYzIDIyIDIwLjE5OTIxOSAyMiBDIDIwLjY5OTIxOSAyMiAyMS4xMDE1NjMgMjIuMTk5MjE5IDIxLjYwMTU2MyAyMi42MDE1NjMgTCAyMS42MDE1NjMgMjEuMzAwNzgxIEMgMjEuMTAxNTYzIDIxLjEwMTU2MyAyMC42OTkyMTkgMjAuODk4NDM4IDIwLjE5OTIxOSAyMC44OTg0MzggQyAxOC41IDIxIDE3LjE5OTIxOSAyMi4zOTg0MzggMTcuMTk5MjE5IDI0IFogTSAzMC42MDE1NjMgMjQuODk4NDM4IEwgMjkgMjEgTCAyNy44MDA3ODEgMjEgTCAzMC4zMDA3ODEgMjcgTCAzMC44OTg0MzggMjcgTCAzMy4zOTg0MzggMjEgTCAzMi4xOTkyMTkgMjEgWiBNIDMzLjg5ODQzOCAyNyBMIDM3LjEwMTU2MyAyNyBMIDM3LjEwMTU2MyAyNiBMIDM1IDI2IEwgMzUgMjQuMzk4NDM4IEwgMzcgMjQuMzk4NDM4IEwgMzcgMjMuMzk4NDM4IEwgMzUgMjMuMzk4NDM4IEwgMzUgMjIgTCAzNy4xMDE1NjMgMjIgTCAzNy4xMDE1NjMgMjEgTCAzMy44OTg0MzggMjEgWiBNIDQxLjUgMjIuODAwNzgxIEMgNDEuNSAyMS42OTkyMTkgNDAuODAwNzgxIDIxIDM5LjUgMjEgTCAzNy44MDA3ODEgMjEgTCAzNy44MDA3ODEgMjcgTCAzOC44OTg0MzggMjcgTCAzOC44OTg0MzggMjQuNjAxNTYzIEwgMzkgMjQuNjAxNTYzIEwgNDAuNjAxNTYzIDI3IEwgNDIgMjcgTCA0MC4xOTkyMTkgMjQuNSBDIDQxIDI0LjMwMDc4MSA0MS41IDIzLjY5OTIxOSA0MS41IDIyLjgwMDc4MSBaIE0gMzkuMTk5MjE5IDIzLjgwMDc4MSBMIDM4Ljg5ODQzOCAyMy44MDA3ODEgTCAzOC44OTg0MzggMjIgTCAzOS4xOTkyMTkgMjIgQyAzOS44OTg0MzggMjIgNDAuMzAwNzgxIDIyLjMwMDc4MSA0MC4zMDA3ODEgMjIuODk4NDM4IEMgNDAuMzAwNzgxIDIzLjM5ODQzOCA0MCAyMy44MDA3ODEgMzkuMTk5MjE5IDIzLjgwMDc4MSBaIE0gNy42OTkyMTkgMjEgTCA2IDIxIEwgNiAyNyBMIDcuNjAxNTYzIDI3IEMgMTAuMTAxNTYzIDI3IDEwLjY5OTIxOSAyNC44OTg0MzggMTAuNjk5MjE5IDI0IEMgMTAuODAwNzgxIDIyLjE5OTIxOSA5LjUgMjEgNy42OTkyMTkgMjEgWiBNIDcuMzk4NDM4IDI2IEwgNy4xMDE1NjMgMjYgTCA3LjEwMTU2MyAyMiBMIDcuNSAyMiBDIDkgMjIgOS42MDE1NjMgMjMgOS42MDE1NjMgMjQgQyA5LjYwMTU2MyAyNC4zOTg0MzggOS41IDI2IDcuMzk4NDM4IDI2IFogTSAxNS4zMDA3ODEgMjMuMzAwNzgxIEMgMTQuNjAxNTYzIDIzIDE0LjM5ODQzOCAyMi44OTg0MzggMTQuMzk4NDM4IDIyLjYwMTU2MyBDIDE0LjM5ODQzOCAyMi4xOTkyMTkgMTQuODAwNzgxIDIyIDE1LjE5OTIxOSAyMiBDIDE1LjUgMjIgMTUuODAwNzgxIDIyLjEwMTU2MyAxNi4xMDE1NjMgMjIuNSBMIDE2LjY5OTIxOSAyMS42OTkyMTkgQyAxNi4xOTkyMTkgMjEuMTk5MjE5IDE1LjY5OTIxOSAyMSAxNSAyMSBDIDE0IDIxIDEzLjE5OTIxOSAyMS42OTkyMTkgMTMuMTk5MjE5IDIyLjY5OTIxOSBDIDEzLjE5OTIxOSAyMy41IDEzLjYwMTU2MyAyMy44OTg0MzggMTQuNjAxNTYzIDI0LjMwMDc4MSBDIDE1LjE5OTIxOSAyNC41IDE1LjY5OTIxOSAyNC42OTkyMTkgMTUuNjk5MjE5IDI1LjE5OTIxOSBDIDE1LjY5OTIxOSAyNS42OTkyMTkgMTUuMzAwNzgxIDI2IDE0LjgwMDc4MSAyNiBDIDE0LjMwMDc4MSAyNiAxMy44MDA3ODEgMjUuNjk5MjE5IDEzLjYwMTU2MyAyNS4xOTkyMTkgTCAxMi44OTg0MzggMjUuODk4NDM4IEMgMTMuMzk4NDM4IDI2LjY5OTIxOSAxNCAyNyAxNC44OTg0MzggMjcgQyAxNi4xMDE1NjMgMjcgMTYuODk4NDM4IDI2LjE5OTIxOSAxNi44OTg0MzggMjUuMTAxNTYzIEMgMTYuODk4NDM4IDI0LjE5OTIxOSAxNi41IDIzLjgwMDc4MSAxNS4zMDA3ODEgMjMuMzAwNzgxIFogIi8+PC9nPjwvc3ZnPg==" alt="discover">\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAyNTIgMjUyIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwyNTJ2LTI1MmgyNTJ2MjUyeiIgZmlsbD0ibm9uZSIvPjxnPjxnIGlkPSJzdXJmYWNlMSI+PHBhdGggZD0iTTIzNi4yNSwxODMuNzVjMCwxMS42MDc0MiAtOS4zOTI1OCwyMSAtMjEsMjFoLTE3OC41Yy0xMS42MDc0MiwwIC0yMSwtOS4zOTI1OCAtMjEsLTIxdi0xMTUuNWMwLC0xMS42MDc0MiA5LjM5MjU4LC0yMSAyMSwtMjFoMTc4LjVjMTEuNjA3NDIsMCAyMSw5LjM5MjU4IDIxLDIxeiIgZmlsbD0iIzE2YTA4NSIvPjxwYXRoIGQ9Ik0xMTYuODMzMDEsMTA1bC0xMS4wOTQ3MywyNC41ODg4N2wtMTEuMDMzMiwtMjQuNTg4ODdoLTE0LjE1MDM5djM1LjMxNDQ2bC0xNS43NzA1MSwtMzUuMzE0NDZoLTExLjkzNTU1bC0xNi4wOTg2MywzNi42NDc0Nmg5LjUzNjEzbDMuNTA2ODQsLTguMTgyNjJoMTguMDI2MzdsMy41ODg4Nyw4LjE4MjYyaDE4LjE5MDQzdi0yNy4yMTM4N2wxMi4wNTg1OSwyNy4yMTM4N2g4LjIwMzEzbDEyLjM0NTcxLC0yNi43NDIxOXYyNi43NDIxOWg5LjA0Mzk0di0zNi42NDc0NnpNNTMuMjE3NzcsMTI1LjU0ODgzbDUuMzczMDQsLTEyLjc5Njg3bDUuNTk4NjQsMTIuNzk2ODh6IiBmaWxsPSIjZmZmZmZmIi8+PHBhdGggZD0iTTE5OC44ODQ3NywxMjIuOTIzODNsMTYuMzY1MjMsLTE3LjgyMTI5aC0xMS42NDg0NGwtMTAuNDU4OTgsMTEuMzYxMzNsLTEwLjEzMDg2LC0xMS40NjM4N2gtMzYuMDExNzJ2MzYuNjQ3NDZoMzQuODQyNzdsMTAuOTcxNjgsLTEyLjEyMDEybDEwLjcwNTA4LDEyLjIyMjY2aDExLjYwNzQyek0xNzcuMDY0NDYsMTMzLjk1NzAzaC0yMS4wNDEwMnYtNy4yMzkyNmgyMC4xMzg2N3YtNi45NTIxNWgtMjAuMTM4Njd2LTYuODcwMTJsMjIuMjA5OTYsMC4wNjE1Mmw4LjkwMDM5LDkuOTY2OHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="Amex">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="text" placeholder="Card Holder"></ion-input>\n<!--               <ion-icon name="person" item-end no-margin></ion-icon> -->\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Card Number" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="MM" class="max-width full-width">\n                <ion-option value="01">01</ion-option>\n                <ion-option value="02">02</ion-option>\n                <ion-option value="03">03</ion-option>\n                <ion-option value="04">04</ion-option>\n                <ion-option value="05">05</ion-option>\n                <ion-option value="06">06</ion-option>\n                <ion-option value="07">07</ion-option>\n                <ion-option value="08">08</ion-option>\n                <ion-option value="09">09</ion-option>\n                <ion-option value="10">10</ion-option>\n                <ion-option value="11">11</ion-option>\n                <ion-option value="12">12</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-select placeholder="YY" class="max-width full-width">\n                <ion-option value="19">19</ion-option>\n                <ion-option value="20">20</ion-option>\n                <ion-option value="21">21</ion-option>\n                <ion-option value="22">22</ion-option>\n                <ion-option value="23">23</ion-option>\n                <ion-option value="24">24</ion-option>\n              </ion-select>\n            </ion-item>\n          </ion-col>\n          <ion-col col-4>\n            <ion-item no-padding>\n              <ion-input placeholder="CVV" type="number"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-grid *ngSwitchCase="\'paypal\'" padding>\n        <ion-row>\n          <ion-col no-padding text-center>\n            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA0OCA0OCIgdmVyc2lvbj0iMS4xIiB3aWR0aD0iMzJweCIgaGVpZ2h0PSIzMnB4Ij48ZyBpZD0ic3VyZmFjZTEiPjxwYXRoIHN0eWxlPSIgZmlsbDojMTU2NUMwOyIgZD0iTSAxOC42OTkyMTkgMTMuNzY1NjI1IEwgMTguNzAzMTI1IDEzLjc2OTUzMSBDIDE4LjgwODU5NCAxMy4zMjQyMTkgMTkuMTg3NSAxMyAxOS42NjAxNTYgMTMgTCAzMy4xMzI4MTMgMTMgQyAzMy4xNDg0MzggMTMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xODM1OTQgMTIuOTkyMTg4IEMgMzIuODk0NTMxIDguMjE0ODQ0IDI4Ljg4NjcxOSA2IDI1LjM1MTU2MyA2IEwgMTEuODc4OTA2IDYgQyAxMS40MDIzNDQgNiAxMS4wMjczNDQgNi4zMzU5MzggMTAuOTIxODc1IDYuNzc3MzQ0IEwgMTAuOTE3OTY5IDYuNzczNDM4IEwgNS4wMjczNDQgMzMuODEyNSBMIDUuMDQyOTY5IDMzLjgxMjUgQyA1LjAyNzM0NCAzMy44Nzg5MDYgNS4wMDM5MDYgMzMuOTM3NSA1LjAwMzkwNiAzNC4wMDc4MTMgQyA1LjAwMzkwNiAzNC41NjI1IDUuNDQ5MjE5IDM1IDYuMDAzOTA2IDM1IEwgMTQuMDc0MjE5IDM1IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMwMzlCRTU7IiBkPSJNIDMzLjE4MzU5NCAxMi45OTIxODggQyAzMy4yMzQzNzUgMTMuODcxMDk0IDMzLjE3OTY4OCAxNC44MjQyMTkgMzIuOTUzMTI1IDE1Ljg3NSBDIDMxLjY3MTg3NSAyMS44NzEwOTQgMjcuMDQyOTY5IDI0Ljk5MjE4OCAyMS4zMjAzMTMgMjQuOTkyMTg4IEMgMjEuMzIwMzEzIDI0Ljk5MjE4OCAxNy44NDc2NTYgMjQuOTkyMTg4IDE3LjAwNzgxMyAyNC45OTIxODggQyAxNi40ODQzNzUgMjQuOTkyMTg4IDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuMTI1IDI1LjUzMTI1IEwgMTQuMzg2NzE5IDMzLjU3ODEyNSBMIDE0LjA4MjAzMSAzNS4wMDc4MTMgTCAxNC4wNzQyMTkgMzUuMDA3ODEzIEwgMTIuODEyNSA0MC44MDQ2ODggTCAxMi44MjQyMTkgNDAuODA0Njg4IEMgMTIuODEyNSA0MC44NzEwOTQgMTIuNzg1MTU2IDQwLjkyOTY4OCAxMi43ODUxNTYgNDEgQyAxMi43ODUxNTYgNDEuNTU0Njg4IDEzLjIzNDM3NSA0MiAxMy43ODUxNTYgNDIgTCAyMS4xMTcxODggNDIgTCAyMS4xMzI4MTMgNDEuOTg4MjgxIEMgMjEuNjA1NDY5IDQxLjk4NDM3NSAyMS45ODA0NjkgNDEuNjQ0NTMxIDIyLjA3ODEyNSA0MS4yMDMxMjUgTCAyMi4wOTM3NSA0MS4xODc1IEwgMjMuOTA2MjUgMzIuNzY5NTMxIEMgMjMuOTA2MjUgMzIuNzY5NTMxIDI0LjAzMTI1IDMxLjk2ODc1IDI0Ljg3ODkwNiAzMS45Njg3NSBDIDI1LjcyMjY1NiAzMS45Njg3NSAyOS4wNTQ2ODggMzEuOTY4NzUgMjkuMDU0Njg4IDMxLjk2ODc1IEMgMzQuNzc3MzQ0IDMxLjk2ODc1IDM5LjQ1NzAzMSAyOC44NjMyODEgNDAuNzM4MjgxIDIyLjg2NzE4OCBDIDQyLjE3OTY4OCAxNi4xMDU0NjkgMzcuMzU5Mzc1IDEzLjAxOTUzMSAzMy4xODM1OTQgMTIuOTkyMTg4IFogIi8+PHBhdGggc3R5bGU9IiBmaWxsOiMyODM1OTM7IiBkPSJNIDE5LjY2MDE1NiAxMyBDIDE5LjE4NzUgMTMgMTguODA4NTk0IDEzLjMyNDIxOSAxOC43MDMxMjUgMTMuNzY5NTMxIEwgMTguNjk5MjE5IDEzLjc2NTYyNSBMIDE2LjEyNSAyNS41MzEyNSBDIDE2LjIzODI4MSAyNS4yOTY4NzUgMTYuNDg0Mzc1IDI0Ljk5MjE4OCAxNy4wMDM5MDYgMjQuOTkyMTg4IEMgMTcuODQ3NjU2IDI0Ljk5MjE4OCAyMS4yMzgyODEgMjQuOTkyMTg4IDIxLjIzODI4MSAyNC45OTIxODggQyAyNi45NjQ4NDQgMjQuOTkyMTg4IDMxLjY3MTg3NSAyMS44NzEwOTQgMzIuOTUzMTI1IDE1Ljg3ODkwNiBDIDMzLjE3OTY4OCAxNC44MjQyMTkgMzMuMjM0Mzc1IDEzLjg3MTA5NCAzMy4xODM1OTQgMTIuOTk2MDk0IEMgMzMuMTY0MDYzIDEyLjk5MjE4OCAzMy4xNDg0MzggMTMgMzMuMTMyODEzIDEzIFogIi8+PC9nPjwvc3ZnPg==" alt="paypal">\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input type="mail" placeholder="E-mail"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item no-padding>\n              <ion-input placeholder="Password" type="password"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n\n  </div>\n\n  <!--submit button-->\n  <button ion-button class="round" color="primary" margin-top full tappable (click)="send()">SEND</button>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\checkout-trip\checkout-trip.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__services_trip_service__["a" /* TripService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
], CheckoutTripPage);

//# sourceMappingURL=checkout-trip.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchLocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {SearchCarsPage} from "../search-cars/search-cars";
var SearchLocationPage = (function () {
    function SearchLocationPage(storage, nav, navParams) {
        this.storage = storage;
        this.nav = nav;
        this.navParams = navParams;
        // places
        this.places = {
            nearby: [
                {
                    id: 1,
                    name: "Current Location"
                },
                {
                    id: 2,
                    name: "Rio de Janeiro, Brazil"
                },
                {
                    id: 3,
                    name: "São Paulo, Brazil"
                },
                {
                    id: 4,
                    name: "New York, United States"
                },
                {
                    id: 5,
                    name: "London, United Kingdom"
                },
                {
                    id: 6,
                    name: "Same as pickup"
                }
            ],
            recent: [
                {
                    id: 1,
                    name: "Rio de Janeiro"
                }
            ]
        };
        this.fromto = this.navParams.data;
    }
    // search by item
    SearchLocationPage.prototype.searchBy = function (item) {
        if (this.fromto === 'from') {
            this.storage.set('pickup', item.name);
        }
        if (this.fromto === 'to') {
            this.storage.set('dropOff', item.name);
        }
        // this.nav.push(SearchCarsPage);
        this.nav.pop();
    };
    return SearchLocationPage;
}());
SearchLocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-search-location',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\search-location\search-location.html"*/'<!-- # -->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-input placeholder="Enter Destination" padding-left autofocus></ion-input>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="list-no-border">\n    <!--nearby places-->\n    <ion-item *ngFor="let item of places.nearby" tappable (click)="searchBy(item)">\n      <ion-icon name="md-locate" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n    <!--recent places-->\n    <ion-item *ngFor="let item of places.recent" tappable (click)="searchBy(item)">\n      <ion-icon name="md-time" item-left color="primary"></ion-icon>\n      <span ion-text color="primary">{{ item.name }}</span>\n    </ion-item>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\search-location\search-location.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], SearchLocationPage);

//# sourceMappingURL=search-location.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileAppPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mobile_app_add_mobile_app_add__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpErrorResponse } from '@angular/common/http';

var MobileAppPage = (function () {
    function MobileAppPage(navCtrl) {
        this.navCtrl = navCtrl;
        this._searchField = false;
        this.clearFilter();
    }
    MobileAppPage.prototype._showSearchInput = function () {
        this._searchField = true;
    };
    MobileAppPage.prototype._hideSearchInput = function () {
        this._searchField = false;
    };
    MobileAppPage.prototype.clearFilter = function () {
        this._apps = [
            {
                name: 'Twitter',
                details: [
                    { name: '1', password: '123', comments: 'Login' },
                    { name: '2', password: '456', comments: 'App' },
                ]
            },
            {
                name: 'Gmail',
                details: [
                    { name: '1', password: '123', comments: 'Login' },
                    { name: '2', password: '456', comments: 'App' },
                ]
            },
            {
                name: 'Facebook',
                details: [
                    { name: '1', password: '123', comments: 'Login' },
                    { name: '2', password: '456', comments: 'App' },
                ]
            }
        ];
    };
    MobileAppPage.prototype.setFilteredItems = function (e) {
        this.clearFilter();
        var val = e.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this._apps = this._apps.filter(function (item) {
                return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    MobileAppPage.prototype.getIcon = function (icon) {
        return icon.toLowerCase() + '-logo';
    };
    MobileAppPage.prototype._gotoMobileAppAdd = function (a) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__mobile_app_add_mobile_app_add__["a" /* MobileAppAddPage */], { id: a });
    };
    return MobileAppPage;
}());
MobileAppPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mobile-app',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\mobile-app\mobile-app.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="!_searchField">Apps</ion-title>\n    <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="clearFilter($event)" (ionInput)="setFilteredItems($event)" *ngIf="_searchField" class="searchfield" type="text" placeholder="Search..."></ion-searchbar>\n    <ion-buttons end>\n      <button ion-button tappable (click)="_showSearchInput()">\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n      <button *ngIf="_searchField" ion-button tappable (click)="_hideSearchInput()">\n        <ion-icon name="ios-close-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="common-bg">\n  <ion-list  class="full-width">\n    <ion-item-sliding *ngFor="let a of _apps" (click)="_gotoMobileAppAdd(a)">\n    <ion-item>\n      <ion-avatar item-start>\n        <ion-icon name="{{getIcon(a.name)}}"></ion-icon>\n      </ion-avatar>\n      <h2>{{a.name}}</h2>\n    </ion-item>\n    <ion-item-options side="right">\n      <button ion-button color="primary">\n        <ion-icon name="create"></ion-icon>\n        Edit\n      </button>\n      <button ion-button color="danger">\n        <ion-icon name="trash"></ion-icon>\n        Delete\n      </button>\n    </ion-item-options>\n  </ion-item-sliding>\n  </ion-list>\n  <ion-fab right bottom>\n    <button ion-fab color="danger" (click)="_gotoMobileAppAdd()"><ion-icon name="add"></ion-icon></button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\mobile-app\mobile-app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
], MobileAppPage);

//# sourceMappingURL=mobile-app.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MobileAppAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { HttpErrorResponse } from '@angular/common/http';

var MobileAppAddPage = (function () {
    function MobileAppAddPage(navCtrl, _formBuilder, params) {
        this.navCtrl = navCtrl;
        this._formBuilder = _formBuilder;
        this.params = params;
        this._searchField = false;
        this._appForm = this._formBuilder.group({
            name: ["",
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6)
                ])
            ],
            details: this._formBuilder.array([this.createItem()])
        });
        this.appvalue = this.params.get('id');
        if (this.appvalue) {
            var adetails = [];
            for (var i in this.appvalue.details) {
                adetails.push(this._formBuilder.group(this.appvalue.details[i]));
            }
            this._appForm = this._formBuilder.group({
                id: [this.appvalue.id],
                name: [this.appvalue.name],
                details: this._formBuilder.array(adetails)
            });
            console.log(this._appForm);
        }
        this.len = this._appForm.get('details');
    }
    MobileAppAddPage.prototype._cancel = function () {
        this.navCtrl.pop();
    };
    MobileAppAddPage.prototype.createItem = function () {
        return this._formBuilder.group({
            name: '',
            password: '',
            comments: ''
        });
    };
    MobileAppAddPage.prototype._addNew = function () {
        this.details = this._appForm.get('details');
        console.log(this.details);
        this.details.push(this.createItem());
    };
    MobileAppAddPage.prototype._removeItem = function (i) {
        this.details = this._appForm.get('details');
        console.log(i);
        // let index = this.items.indexOf(i);
        // console.log(index);
        //   if(index > -1){
        this.details.removeAt(i);
        // }
    };
    return MobileAppAddPage;
}());
MobileAppAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mobile-app-add',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\mobile-app-add\mobile-app-add.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Add App</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <form  [formGroup]="_appForm" method="post" novalidate="">\n\n    <button ion-button color="dark" type="submit">\n\n      <ion-icon name="checkmark"></ion-icon>&nbsp;Save\n\n    </button>\n\n    <button ion-button (click)="_cancel()" color="danger" type="button">\n\n      <ion-icon name="close"></ion-icon>&nbsp;Cancel\n\n    </button>\n\n    <ion-item>\n\n      <ion-label floating>App Name</ion-label>\n\n      <ion-select formControlName="name">\n\n      	<ion-option value="Amazon">Amazon</ion-option><ion-option value="Dribbble">Dribbble</ion-option>\n\n      	<ion-option value="Dropbox">Dropbox</ion-option><ion-option value="Facebook">Facebook</ion-option>\n\n      	<ion-option value="Flipkart">Flipkart</ion-option><ion-option value="Githhub">Githhub</ion-option>\n\n      	<ion-option value="Gmail">Gmail</ion-option><ion-option value="Instagram">Instagram</ion-option>\n\n      	<ion-option value="LinkedIn">LinkedIn</ion-option><ion-option value="Skype">Skype</ion-option>\n\n      	<ion-option value="Snapchat">Snapchat</ion-option><ion-option value="Snapdeal">Snapdeal</ion-option>\n\n      	<ion-option value="Tumblr">Tumblr</ion-option><ion-option value="Twitter">Twitter</ion-option>\n\n      	<ion-option value="Yahoo">Yahoo</ion-option><ion-option value="Youtube">Youtube</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_appForm.controls.name.hasError(\'required\') && _appForm.controls.name.touched">\n\n        <p ion-text text-wrap>Please Select App Name</p>\n\n    </ion-item>\n\n    <div class="clearfix"></div>\n\n    <div formArrayName="details">\n\n	    <div class="repeat-list"  *ngFor="let item of _appForm.get(\'details\').controls;let i = index;">\n\n	      <div [formGroupName]="i">\n\n	        <button *ngIf="len.length > 1" type="button" (click)="_removeItem(i)" color="danger" class="close-btn" small float-right ion-button item-end>\n\n	          <ion-icon name="close"></ion-icon>\n\n	        </button>\n\n	        <ion-list>\n\n	          <ion-item>\n\n	            <ion-input type="text" formControlName="name" placeholder="Username"></ion-input>\n\n	          </ion-item>\n\n	        </ion-list>\n\n	        <ion-list>\n\n	          <ion-item>\n\n	            <ion-input type="password" formControlName="password" placeholder="Password"></ion-input>\n\n	          </ion-item>\n\n	        </ion-list>\n\n	        <ion-list>\n\n	          <ion-item>\n\n	            <ion-input type="text"  formControlName="comments" placeholder="Comments"></ion-input>\n\n	          </ion-item>\n\n	        </ion-list>\n\n	      </div>\n\n	   	</div>\n\n	  </div>\n\n    <button class="btn" type="button" (click)="_addNew()" ion-button color="light">\n\n      <ion-icon name="add"></ion-icon>&nbsp;Add New\n\n    </button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\mobile-app-add\mobile-app-add.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], MobileAppAddPage);

//# sourceMappingURL=mobile-app-add.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cards_cards__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bankList__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_globalVars__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {WebsitePage} from "../websites/website";





var CardsAddPage = (function () {
    function CardsAddPage(bank, year, _formBuilder, loader, alertCtrl, db, globalvars, nav, params) {
        this.bank = bank;
        this.year = year;
        this._formBuilder = _formBuilder;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.globalvars = globalvars;
        this.nav = nav;
        this.params = params;
        this.color = "Silver";
        this.banks = [];
        this.years = [];
        this.card = { id: '', card_type: '', bank: '', acc_no: '', month: '', year: '', pin: '', cvv: '', holder_name: '', card_pay: '', color: '' };
        this.editdata = this.params.get('id');
        if (this.editdata.id != '') {
            this.card = this.editdata;
        }
        this.user = this.globalvars.getUserdata()[0];
        this.banks = bank.list;
        this.years = this.year.years();
        this._cardForm = this._formBuilder.group({
            id: [this.card.id],
            card_type: [this.card.card_type, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            bank: [this.card.bank, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            acc_no: [this.card.acc_no, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(16)])],
            month: [this.card.month, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            year: [this.card.year, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            pin: [this.card.pin, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4)])],
            cvv: [this.card.cvv, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(3)])],
            holder_name: [this.card.holder_name, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].minLength(4)])],
            card_pay: [this.card.card_pay, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
            color: [this.card.color, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["f" /* Validators */].required])],
        });
    }
    CardsAddPage.prototype._changeColor = function (value) {
        console.log(value);
        this.color = value;
    };
    CardsAddPage.prototype._submitCardForm = function () {
        var _this = this;
        console.log(this._cardForm.value);
        if (this._cardForm.valid) {
            var formdata = this._cardForm.value;
            var load_1 = this.loader.create({
                content: "Please Wait..."
            });
            load_1.present();
            var query = void 0;
            if (formdata.id != '')
                query = "update cards set card_type='" + formdata.card_type + "',bank='" + formdata.bank + "',acc_no='" + formdata.acc_no + "',month='" + formdata.month + "',year='" + formdata.year + "',pin='" + formdata.pin + "',cvv='" + formdata.cvv + "',holder_name='" + formdata.holder_name + "',card_pay='" + formdata.card_pay + "',color='" + formdata.color + "' where id='" + formdata.id + "'";
            else
                query = "insert into cards(userid,card_type,bank,acc_no,month,year,pin,cvv,holder_name,card_pay,color) values('" + this.user.id + "','" + formdata.card_type + "','" + formdata.bank + "','" + formdata.acc_no + "','" + formdata.month + "','" + formdata.year + "','" + formdata.pin + "','" + formdata.cvv + "','" + formdata.holder_name + "','" + formdata.card_pay + "','" + formdata.color + "')";
            this.db.exeQuery(query).then(function (succ) {
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    message: "Card saved successfully.",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__cards_cards__["a" /* CardsPage */]);
                            }
                        }
                    ]
                });
                setTimeout(function () {
                    load_1.dismiss();
                    alert.present();
                }, 3000);
            })
                .catch(function (err) {
                load_1.dismiss();
                var fail = _this.alertCtrl.create({
                    title: 'Failed!',
                    message: "Card not saved.",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__cards_cards__["a" /* CardsPage */]);
                            }
                        }
                    ]
                });
                fail.present();
            });
        }
    };
    return CardsAddPage;
}());
CardsAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cards-add',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\cards-add\cards-add.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <strong>Add Card</strong>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <form method="post" [formGroup]="_cardForm" (submit)="_submitCardForm()" novalidate="">\n\n    <ion-input formControlName="id" type="hidden"></ion-input>\n\n    <button ion-button color="dark" type="submit" [disabled]="!_cardForm.valid">\n\n      <ion-icon name="checkmark"></ion-icon>&nbsp;Save\n\n    </button>\n\n    <button ion-button color="danger" (click)="_cancel()" type="button">\n\n      <ion-icon name="close"></ion-icon>&nbsp;Cancel\n\n    </button>\n\n    <div class="card">\n\n    <div [class]="color">\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-select formControlName="card_type">\n\n            <ion-option selected value="">Select Card</ion-option>\n\n            <ion-option value="Debit Card">Debit Card</ion-option>\n\n            <ion-option value="Credit Card">Credit Card</ion-option>\n\n          </ion-select>\n\n          <p class="error" *ngIf="_cardForm.controls.card_type.hasError(\'required\') && _cardForm.controls.card_type.touched" ion-text text-wrap>Please Select Card Type</p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-select formControlName="bank">\n\n            <ion-option selected value="">Select Bank</ion-option>\n\n            <ion-option *ngFor="let b of banks" [value] = "b">{{b}}</ion-option>\n\n          </ion-select>\n\n          <p class="error" *ngIf="_cardForm.controls.bank.hasError(\'required\') && _cardForm.controls.bank.touched" ion-text text-wrap>Please Select Bank</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-input formControlName="acc_no" maxlength="16" type="number" placeholder="Card Number"></ion-input>\n\n           <p class="error" *ngIf="_cardForm.controls.acc_no.hasError(\'required\') && _cardForm.controls.acc_no.touched" ion-text text-wrap>Please Enter Card Number</p>\n\n           <p class="error" *ngIf="_cardForm.controls.acc_no.invalid && _cardForm.controls.acc_no.dirty && _cardForm.controls.acc_no.value!=\'\'" ion-text text-wrap>Please Enter atleast 16 Characters</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row class="detail-div">\n\n        <ion-col col-6>\n\n          <ion-select float- formControlName="month">\n\n            <ion-option value="">Select Month</ion-option>\n\n            <ion-option selected value="01">01</ion-option><ion-option value="02">02</ion-option>\n\n            <ion-option value="03">03</ion-option><ion-option value="04">04</ion-option>\n\n            <ion-option value="05">05</ion-option><ion-option value="06">06</ion-option>\n\n            <ion-option value="07">07</ion-option><ion-option value="08">08</ion-option>\n\n            <ion-option value="09">09</ion-option><ion-option value="10">10</ion-option>\n\n            <ion-option value="11">11</ion-option><ion-option value="12">12</ion-option>\n\n          </ion-select>\n\n          <p class="error" *ngIf="_cardForm.controls.month.hasError(\'required\') && _cardForm.controls.month.touched" ion-text text-wrap>Please Select Month</p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-select float- formControlName="year">\n\n            <ion-option value="">Select Year</ion-option>\n\n            <ion-option *ngFor="let y of years;let i = index;" [value] = "y">{{y}}</ion-option>\n\n          </ion-select>\n\n          <p class="error" *ngIf="_cardForm.controls.year.hasError(\'required\') && _cardForm.controls.year.touched" ion-text text-wrap>Please Select Year</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-6>\n\n          <ion-input formControlName="pin" type="number" placeholder="PIN" float-left></ion-input>\n\n          <p class="error" *ngIf="_cardForm.controls.pin.hasError(\'required\') && _cardForm.controls.pin.touched" ion-text text-wrap>Please Enter PIN</p>\n\n          <p class="error" *ngIf="_cardForm.controls.pin.invalid  && _cardForm.controls.pin.dirty && _cardForm.controls.pin.value!=\'\'" ion-text text-wrap>Please Enter alteast 4 characters.</p>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n          <ion-input formControlName="cvv" type="number" placeholder="CVV" float-right></ion-input>\n\n          <p class="error" *ngIf="_cardForm.controls.cvv.hasError(\'required\') && _cardForm.controls.cvv.touched" ion-text text-wrap>Please Enter CVV</p>\n\n          <p class="error" *ngIf="_cardForm.controls.cvv.invalid  && _cardForm.controls.cvv.dirty && _cardForm.controls.cvv.value!=\'\'" ion-text text-wrap>Please Enter alteast 4 characters.</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-12>\n\n          <ion-input formControlName="holder_name" placeholder="Card Holder Name" type="" name=""></ion-input>\n\n          <p class="error" *ngIf="_cardForm.controls.holder_name.hasError(\'required\') && _cardForm.controls.holder_name.touched" ion-text text-wrap>Please Enter Card Holder Name</p>\n\n           <p class="error" *ngIf="_cardForm.controls.holder_name.invalid  && _cardForm.controls.holder_name.dirty && _cardForm.controls.holder_name.value!=\'\'" ion-text text-wrap>Please Enter alteast 4 characters.</p>\n\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n        <ion-col col-7>\n\n          <ion-select formControlName="card_pay">\n\n            <ion-option value="">Select Card Type</ion-option>\n\n            <ion-option selected value="Amex">American Express</ion-option>\n\n            <ion-option value="Cirrus">Cirrus</ion-option>\n\n            <ion-option value="Discover">Discover</ion-option>\n\n            <ion-option value="Maestro">Maestro</ion-option>\n\n            <ion-option value="Mastercard">Mastercard</ion-option>\n\n            <ion-option value="Rupay">Rupay</ion-option>\n\n            <ion-option value="Visa">Visa</ion-option>\n\n            <ion-option value="Western Union">Western Union</ion-option>\n\n          </ion-select>\n\n          <p class="error" *ngIf="_cardForm.controls.card_pay.hasError(\'required\') && _cardForm.controls.card_pay.touched" ion-text text-wrap>Please Enter Card Type</p>\n\n        </ion-col>\n\n        <ion-col col-5>\n\n          <ion-select formControlName="color" (ionChange)="_changeColor($event)">\n\n            <ion-option value="">Select Card Color</ion-option>\n\n            <ion-option selected value="Silver">Silver</ion-option>\n\n            <ion-option value="Gold">Gold</ion-option>\n\n            <ion-option value="Platinum">Platinum</ion-option>\n\n            <ion-option value="Blue">Blue</ion-option>\n\n          </ion-select>\n\n          <p class="error" *ngIf="_cardForm.controls.color.hasError(\'required\') && _cardForm.controls.color.touched" ion-text text-wrap>Please Enter Card Color</p>\n\n        </ion-col>\n\n      </ion-row>\n\n    </div>\n\n    </div>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\cards-add\cards-add.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__providers_bankList__["a" /* BankList */], __WEBPACK_IMPORTED_MODULE_4__providers_bankList__["b" /* YearList */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__components_database_database__["a" /* DatabaseComponent */],
        __WEBPACK_IMPORTED_MODULE_6__providers_globalVars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], CardsAddPage);

//# sourceMappingURL=cards-add.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankAddPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bank_bank__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_bankList__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BankAddPage = (function () {
    function BankAddPage(nav, _formBuilder, bCtrl, db, globalvars, loader, alertCtrl, params) {
        this.nav = nav;
        this._formBuilder = _formBuilder;
        this.bCtrl = bCtrl;
        this.db = db;
        this.globalvars = globalvars;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this.params = params;
        this.bank = { id: '', holder_name: '', name: '', account_number: '', account_type: '', branch: '', ifsc: '', micr: '' };
        this.bvalue = [{}];
        this.user = this.globalvars.getUserdata()[0];
        this.banks = bCtrl.list;
        this.editdata = this.params.get('id');
        if (this.editdata.id != '') {
            this.bank = this.editdata;
        }
        this._bankForm = this._formBuilder.group({
            id: [this.bank.id],
            holder_name: [this.bank.holder_name, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(4)
                ])],
            name: [this.bank.name,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required
                ])
            ],
            account_number: [this.bank.account_number,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern('[0-9]*'),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6)
                ])
            ],
            account_type: [this.bank.account_type,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required,
                ])
            ],
            branch: [this.bank.branch,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required,
                ])
            ],
            ifsc: [this.bank.ifsc],
            micr: [this.bank.micr],
        });
    }
    BankAddPage.prototype._cancel = function () {
        this.nav.pop();
    };
    BankAddPage.prototype._submitBankForm = function () {
        var _this = this;
        if (this._bankForm.valid) {
            var load_1 = this.loader.create({
                content: "Please Wait..."
            });
            load_1.present();
            var formdata = this._bankForm.value;
            var query = void 0;
            if (formdata.id != null) {
                query = "update banks set holder_name='" + formdata.holder_name + "',account_number='" + formdata.account_number + "'," +
                    "account_type='" + formdata.account_type + "',branch='" + formdata.branch + "',ifsc='" + formdata.ifsc + "',micr='" + formdata.micr + "' where id='" + formdata.id + "'";
            }
            else {
                query = "insert into banks(userid,holder_name,name,account_number,account_type,branch,ifsc,micr)" +
                    "values('" + this.user.id + "','" + formdata.holder_name + "','" + formdata.name + "','" + formdata.account_number + "','" + formdata.account_type + "','" + formdata.branch + "','" + formdata.ifsc + "','" + formdata.micr + "')";
            }
            this.db.exeQuery(query).then(function (res) {
                var success = _this.alertCtrl.create({
                    title: "Success",
                    message: "Bank saved successfuly",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () {
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__bank_bank__["a" /* BankPage */]);
                            }
                        }
                    ]
                });
                setTimeout(function () {
                    load_1.dismiss();
                    success.present();
                }, 3000);
            })
                .catch(function (err) {
                var alert = _this.alertCtrl.create({
                    title: "Failed",
                    message: "Something went Wrong!",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function () {
                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__bank_bank__["a" /* BankPage */]);
                            }
                        }
                    ]
                });
            });
        }
    };
    return BankAddPage;
}());
BankAddPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-bank-add',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\bank-add\bank-add.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>\n\n      <strong>Add Bank</strong>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <form [formGroup]="_bankForm" (submit)="_submitBankForm()" method="post" novalidate="">\n\n    <ion-input formControlName="id" type="text"></ion-input>\n\n    <button ion-button color="dark" [disabled]="!_bankForm.valid"  type="submit">\n\n      <ion-icon name="checkmark"></ion-icon>&nbsp;Save\n\n    </button>\n\n    <button ion-button color="danger" (click)="_cancel()" type="button">\n\n      <ion-icon name="close"></ion-icon>&nbsp;Cancel\n\n    </button>\n\n    <ion-item>\n\n      <ion-label floating>Bank Name</ion-label>\n\n      <ion-select formControlName="name">\n\n      	<ion-option *ngFor="let b of banks" [value]="b">{{b}}</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_bankForm.controls.name.hasError(\'required\') && _bankForm.controls.name.touched">\n\n        <p ion-text text-wrap>Please Select Bank Name</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Account Holder Name</ion-label>\n\n      <ion-input formControlName="holder_name" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_bankForm.controls.holder_name.hasError(\'required\') && _bankForm.controls.holder_name.touched">\n\n        <p ion-text text-wrap>Please Enter Account Holder Name</p>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_bankForm.controls.holder_name.invalid  && _bankForm.controls.holder_name.dirty && _bankForm.controls.holder_name.value!=\'\'">\n\n        <p ion-text text-wrap>Please enter atleast 4 characters.</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Account Number</ion-label>\n\n      <ion-input formControlName="account_number" type="number"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_bankForm.controls.account_number.hasError(\'required\') && _bankForm.controls.account_number.touched">\n\n        <p ion-text text-wrap>Please Enter Account Number</p>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_bankForm.controls.account_number.hasError(\'pattern\')  && _bankForm.controls.account_number.dirty && _bankForm.controls.account_number.value!=\'\'">\n\n        <p ion-text text-wrap>Please Enter valid Account Number.</p>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_bankForm.controls.account_number.invalid  && _bankForm.controls.account_number.dirty && _bankForm.controls.account_number.value!=\'\'">\n\n        <p ion-text text-wrap>Please enter atleast 6 characters.</p>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-label floating>Account Type</ion-label>\n\n      <ion-select formControlName="account_type">\n\n      	<ion-option value="Savings">Savings</ion-option>\n\n      	<ion-option value="Fixed">Fixed</ion-option>\n\n      	<ion-option value="Current">Current</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_bankForm.controls.account_type.hasError(\'required\') && _bankForm.controls.account_type.touched">\n\n        <p ion-text text-wrap>Please Select Account Type</p>\n\n    </ion-item>\n\n    <ion-item>\n\n    <ion-label floating>Branch</ion-label>\n\n      <ion-input formControlName="branch" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error" no-lines no-padding *ngIf="_bankForm.controls.branch.hasError(\'required\') && _bankForm.controls.branch.touched">\n\n        <p ion-text text-wrap>Please Enter Branch</p>\n\n    </ion-item>\n\n    <ion-item>\n\n    	<ion-label floating>IFSC Code</ion-label>\n\n      <ion-input formControlName="ifsc" type="text"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n    	<ion-label floating>MICR Code</ion-label>\n\n      <ion-input formControlName="micr" type="text"></ion-input>\n\n    </ion-item>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\bank-add\bank-add.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_6__providers_bankList__["a" /* BankList */],
        __WEBPACK_IMPORTED_MODULE_5__components_database_database__["a" /* DatabaseComponent */], __WEBPACK_IMPORTED_MODULE_3__providers_globalVars__["a" /* GlobalVars */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], BankAddPage);

//# sourceMappingURL=bank-add.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(238);



// this is the magic wand
Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_21" /* enableProdMode */])();
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_activity_service__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_trip_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_weather__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_globalVars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_websites_website__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_checkout_trip_checkout_trip__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_notifications_notifications__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_search_location_search_location__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_trip_detail_trip_detail__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_trips_trips__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_mobile_app_mobile_app__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_mobile_app_add_mobile_app_add__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_cards_cards__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_bank_bank__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_bank_add_bank_add__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_cards_add_cards_add__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_add_website_add_website__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__providers_bankList__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































// import services
// end import services
// end import services
// import pages
// end import pages
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_add_website_add_website__["a" /* AddWebsitePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_websites_website__["a" /* WebsitePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_mobile_app_mobile_app__["a" /* MobileAppPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_search_location_search_location__["a" /* SearchLocationPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_trips_trips__["a" /* TripsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_mobile_app_add_mobile_app_add__["a" /* MobileAppAddPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_bank_bank__["a" /* BankPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_bank_add_bank_add__["a" /* BankAddPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_cards_add_cards_add__["a" /* CardsAddPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {
                scrollPadding: false,
                scrollAssist: true,
                autoFocusAssist: false
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__ionic3_start_theme',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_16__pages_settings_settings__["a" /* SettingsPage */],
            __WEBPACK_IMPORTED_MODULE_31__pages_add_website_add_website__["a" /* AddWebsitePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_checkout_trip_checkout_trip__["a" /* CheckoutTripPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_websites_website__["a" /* WebsitePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_mobile_app_mobile_app__["a" /* MobileAppPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_notifications_notifications__["a" /* NotificationsPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_search_location_search_location__["a" /* SearchLocationPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_trip_detail_trip_detail__["a" /* TripDetailPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_trips_trips__["a" /* TripsPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_mobile_app_add_mobile_app_add__["a" /* MobileAppAddPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_cards_cards__["a" /* CardsPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_bank_bank__["a" /* BankPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_bank_add_bank_add__["a" /* BankAddPage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_cards_add_cards_add__["a" /* CardsAddPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_keyboard__["a" /* Keyboard */],
            __WEBPACK_IMPORTED_MODULE_9__services_activity_service__["a" /* ActivityService */],
            __WEBPACK_IMPORTED_MODULE_10__services_trip_service__["a" /* TripService */],
            __WEBPACK_IMPORTED_MODULE_14__components_database_database__["a" /* DatabaseComponent */],
            __WEBPACK_IMPORTED_MODULE_11__services_weather__["a" /* WeatherProvider */],
            __WEBPACK_IMPORTED_MODULE_12__providers_globalVars__["a" /* GlobalVars */],
            __WEBPACK_IMPORTED_MODULE_32__providers_bankList__["a" /* BankList */],
            __WEBPACK_IMPORTED_MODULE_32__providers_bankList__["b" /* YearList */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_activities__ = __webpack_require__(294);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = (function () {
    function ActivityService() {
        this.activities = __WEBPACK_IMPORTED_MODULE_1__mock_activities__["a" /* ACTIVITIES */];
    }
    ActivityService.prototype.getAll = function () {
        return this.activities;
    };
    ActivityService.prototype.getItem = function (id) {
        for (var i = 0; i < this.activities.length; i++) {
            if (this.activities[i].id === parseInt(id)) {
                return this.activities[i];
            }
        }
        return null;
    };
    ActivityService.prototype.remove = function (item) {
        this.activities.splice(this.activities.indexOf(item), 1);
    };
    return ActivityService;
}());
ActivityService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], ActivityService);

//# sourceMappingURL=activity-service.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ACTIVITIES; });
var ACTIVITIES = [];
//# sourceMappingURL=mock-activities.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TRIPS; });
var TRIPS = [
    {
        id: 1,
        name: "Copacabana Beach",
        price_adult: 60,
        price_child: 30,
        time: "12h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_1.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [
            "assets/img/trip/thumb/trip_5.jpg",
            "assets/img/trip/thumb/trip_6.jpg",
            "assets/img/trip/thumb/trip_7.jpg",
            "assets/img/trip/thumb/trip_8.jpg",
        ],
        highlights: [
            "Numerous kiosks",
            "First in a string of Atlantic Ocean-facing beaches",
            "Sand is flanked by mountains in the background",
            "Swing in the turquoise waters",
            "Water Sports",
        ]
    },
    {
        id: 2,
        name: "Christ the Redeemer",
        price_adult: 90,
        price_child: 45,
        time: "4h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_2.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Rio de Janeiro, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 3,
        name: "Ipiranga Museum",
        price_adult: 30,
        price_child: 15,
        time: "6h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_3.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "São Paulo, Brazil",
        images: [],
        highlights: []
    },
    {
        id: 4,
        name: "Fernando de Noronha",
        price_adult: 500,
        price_child: 250,
        time: "24h",
        free_cancellation: 1,
        electric_voucher: 1,
        sub_name: "English Commentary Tour",
        thumb: "assets/img/trip/thumb/trip_4.jpg",
        description: "From sexy Ipanema and Copacabana, to more secluded and slightly lesser-known stretches of sand, like Prainha Beach, Brazil's Rio de Janeiro is best known for its beaches. Grab your sunscreen and Brazilian bikinis and head to the sunny shores of Rio's best beaches.",
        location: "Fernando de Noronha, Brazil",
        images: [],
        highlights: []
    }
];
//# sourceMappingURL=mock-trips.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherProvider = (function () {
    function WeatherProvider(http) {
        this.http = http;
        this.apiKey = '1e4a0bdb251c64e4';
        console.log('Hello WeatherProvider Provider');
        this.url = 'http://api.wunderground.com/api/' + this.apiKey + '/conditions/q/';
    }
    WeatherProvider.prototype.getWeather = function (state, city) {
        return this.http.get(this.url + state + '/' + city + '.json').map(function (res) { return res; });
    };
    return WeatherProvider;
}());
WeatherProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
], WeatherProvider);

//# sourceMappingURL=weather.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_login_login__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_websites_website__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mobile_app_mobile_app__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cards_cards__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bank_bank__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_globalVars__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








// import { AddWebsitePage } from "../pages/add-website/add-website";

// import { MobileAppAddPage } from "../pages/mobile-app-add/mobile-app-add";


// import { BankAddPage } from "../pages/bank-add/bank-add";
// import { CardsAddPage } from "../pages/cards-add/cards-add";


var MyApp = (function () {
    function MyApp(db, platform, globalvars, statusBar, splashScreen, keyboard) {
        this.db = db;
        this.platform = platform;
        this.globalvars = globalvars;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.keyboard = keyboard;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_cards_cards__["a" /* CardsPage */];
        this.initializeApp();
        this.appMenuItems = [
            { title: 'Websites', component: __WEBPACK_IMPORTED_MODULE_7__pages_websites_website__["a" /* WebsitePage */], icon: 'ios-globe' },
            { title: 'Apps', component: __WEBPACK_IMPORTED_MODULE_8__pages_mobile_app_mobile_app__["a" /* MobileAppPage */], icon: 'ios-appstore' },
            { title: 'Cards', component: __WEBPACK_IMPORTED_MODULE_9__pages_cards_cards__["a" /* CardsPage */], icon: 'ios-card' },
            { title: 'Bank', component: __WEBPACK_IMPORTED_MODULE_10__pages_bank_bank__["a" /* BankPage */], icon: 'logo-usd' },
            { title: 'Notes', component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */], icon: 'ios-document' },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.db.createDb();
            var ins = _this.globalvars.getAppdata();
            if (ins == null) {
                _this.globalvars.setAppdata();
            }
            // Okay, so the platform is ready and our plugins are available.
            //*** Control Splash Screen
            // this.splashScreen.show();
            // this.splashScreen.hide();
            //*** Control Status Bar
            _this.statusBar.styleDefault();
            _this.statusBar.overlaysWebView(false);
            //*** Control Keyboard
            _this.keyboard.disableScroll(true);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.globalvars.deleteUserdata();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_login_login__["a" /* LoginPage */]);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]) === "function" && _a || Object)
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\app\app.html"*/'<ion-menu side="left" id="authenticated" [content]="content">\n  <ion-header>\n    <ion-toolbar class="user-profile">\n\n      <ion-grid>\n        <ion-row>\n          <ion-col col-4>\n              <div class="user-avatar">\n                <img src="assets/img/avatar.jpeg">\n              </div>\n          </ion-col>\n          <ion-col padding-top col-8>\n            <h2 ion-text class="no-margin bold text-white">\n              Ramkumar\n            </h2>\n          </ion-col>\n        </ion-row>\n\n        <ion-row no-padding class="other-data">\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose>\n              <ion-icon name="contact"></ion-icon>\n              Edit Profile\n            </button>\n          </ion-col>\n          <ion-col no-padding class="column">\n            <button ion-button icon-left small full color="light" menuClose (click)="logout()">\n              <ion-icon name="log-out"></ion-icon>\n              Log Out\n            </button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content color="primary">\n    <ion-list class="user-list">\n      <button ion-item menuClose class="text-1x" *ngFor="let menuItem of appMenuItems" (click)="openPage(menuItem)">\n        <ion-icon item-left [name]="menuItem.icon" color="primary"></ion-icon>\n        <span ion-text color="primary">{{menuItem.title}}</span>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_11__components_database_database__["a" /* DatabaseComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__components_database_database__["a" /* DatabaseComponent */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_12__providers_globalVars__["a" /* GlobalVars */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__providers_globalVars__["a" /* GlobalVars */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_keyboard__["a" /* Keyboard */]) === "function" && _g || Object])
], MyApp);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TripService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_trips__ = __webpack_require__(295);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TripService = (function () {
    function TripService() {
        this.trips = __WEBPACK_IMPORTED_MODULE_1__mock_trips__["a" /* TRIPS */];
    }
    TripService.prototype.getAll = function () {
        return this.trips;
    };
    TripService.prototype.getItem = function (id) {
        for (var i = 0; i < this.trips.length; i++) {
            if (this.trips[i].id === parseInt(id)) {
                return this.trips[i];
            }
        }
        return null;
    };
    TripService.prototype.remove = function (item) {
        this.trips.splice(this.trips.indexOf(item), 1);
    };
    return TripService;
}());
TripService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], TripService);

//# sourceMappingURL=trip-service.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__websites_website__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_regexPatterns__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_database_database__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(globalvars, db, _formBuilder, nav, alertCtrl, menu, loader) {
        this.globalvars = globalvars;
        this.db = db;
        this._formBuilder = _formBuilder;
        this.nav = nav;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.loader = loader;
        this._passwordInputType = "password";
        this._passwordIcon = "eye-off";
        this.menu.swipeEnable(false);
        this.globalvars.deleteUserdata();
        this._loginForm = _formBuilder.group({
            //EMAIL
            email: ["",
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(__WEBPACK_IMPORTED_MODULE_6__providers_regexPatterns__["a" /* regexPatterns */].email)
                ])
            ],
            //PASSWORD
            password: ["", __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].compose([
                    // ,Validators.pattern(regexPatterns.password),
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].minLength(6)
                ])
            ]
        });
    }
    // Password Toggle
    LoginPage.prototype._toggleViewPassword = function (event) {
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
    // go to register page
    LoginPage.prototype.register = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_2__register_register__["a" /* RegisterPage */]);
    };
    // login and go to home page
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this._loginForm.valid) {
            var logload_1 = this.loader.create({
                content: "Loading..."
            });
            logload_1.present();
            var formdata = this._loginForm.value;
            var query = "select * from users where email='" + formdata.email + "' and password='" + formdata.password + "'";
            this.db.exeQuery(query).then(function (res) {
                if (res.rows.length) {
                    var user = [];
                    user.push({
                        id: res.rows.item(0).id,
                        fullname: res.rows.item(0).fullname,
                        email: res.rows.item(0).email,
                        password: res.rows.item(0).password,
                    });
                    _this.globalvars.setUserdata(JSON.stringify(user));
                    setTimeout(function () {
                        logload_1.dismiss();
                        _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__websites_website__["a" /* WebsitePage */]);
                    }, 4000);
                }
                else {
                    logload_1.dismiss();
                    var alert_1 = _this.alertCtrl.create({
                        title: 'Failed!',
                        message: 'Invalid Username or Password',
                        buttons: ['Ok'],
                    });
                    alert_1.present();
                    return false;
                }
            }).catch(function (e) {
                logload_1.dismiss();
                var alert = _this.alertCtrl.create({
                    title: 'Failed!',
                    message: 'Invalid Username or Password',
                    buttons: ['Ok'],
                });
                alert.present();
                return false;
            });
        }
    };
    LoginPage.prototype.forgotPass = function () {
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\login\login.html"*/'<!-- -->\n<ion-content padding class="animated fadeIn login auth-page">\n  <div class="login-content">\n\n    <!-- Logo -->\n    <div padding-horizontal text-center class="animated fadeInDown">\n      <div class="logo"></div>\n      <h2 ion-text class="text-primary logo-text">\n        <strong>Passer</strong><br><small>Password Security</small>\n      </h2>\n    </div>\n\n    <!-- Login form -->\n    <form class="list-form" [formGroup]="_loginForm" method="post" novalidate>\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="mail" item-start class="text-primary"></ion-icon>\n          Email\n        </ion-label>\n        <ion-input formControlName="email" type="email"></ion-input>\n      </ion-item>\n      <ion-item class="error" no-lines no-padding *ngIf="_loginForm.controls.email.hasError(\'required\') && _loginForm.controls.email.touched">\n        <p ion-text text-wrap>Please Enter Email-ID</p>\n      </ion-item>\n      <ion-item class="error" no-lines no-padding *ngIf="_loginForm.controls.email.invalid  && _loginForm.controls.email.dirty && _loginForm.controls.email.value!=\'\'">\n        <p ion-text text-wrap>Please use correct email format, e.g.:someone@domain.com.</p>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>\n          <ion-icon name="lock" item-start class="text-primary"></ion-icon>\n          Password\n        </ion-label>\n        <ion-input formControlName="password" [type]="_passwordInputType"></ion-input>\n      </ion-item>\n      <ion-icon float-right name="{{_passwordIcon}}" (click)="_toggleViewPassword($event)" class="password-icon"></ion-icon>\n      <ion-item class="error" no-lines no-padding *ngIf="_loginForm.controls.password.hasError(\'required\') && _loginForm.controls.password.touched">\n        <p ion-text text-wrap>Please Enter Password</p>\n      </ion-item>\n      <ion-item class="error" no-lines no-padding *ngIf="_loginForm.controls.password.invalid  && _loginForm.controls.password.dirty && _loginForm.controls.password.value!=\'\'">\n        <p ion-text text-wrap>Please enter atleast 6 characters.</p>\n      </ion-item>\n    </form>\n\n    <p text-right ion-text color="secondary" tappable (click)="forgotPass()"><strong>Forgot Password?</strong></p>\n\n    <div>\n      <button ion-button icon-start block color="dark" [disabled]="!_loginForm.valid" tappable (click)="login()">\n        <ion-icon name="log-in"></ion-icon>\n        SIGN IN\n      </button>\n    </div>\n    <!-- Other links -->\n    <div text-center margin-top>\n      <span ion-text color="secondary" tappable (click)="register()">New here? <strong>Sign up</strong></span>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__providers_globalVars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_7__components_database_database__["a" /* DatabaseComponent */],
        __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsitePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_website_add_website__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WebsitePage = WebsitePage_1 = (function () {
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
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__add_website_add_website__["a" /* AddWebsitePage */], { id: s });
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
    return WebsitePage;
}());
WebsitePage = WebsitePage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-website',template:/*ion-inline-start:"C:\xampp\htdocs\passer\src\pages\websites\website.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title  *ngIf="!_searchField">\n\n      <strong>Websites</strong>\n\n    </ion-title>\n\n    <ion-searchbar [(ngModel)]="searchTerm" (ionCancel)="clearFilter($event)" (ionInput)="setFilteredItems($event)" *ngIf="_searchField" class="searchfield" type="text" placeholder="Search..."></ion-searchbar>\n\n    <ion-buttons end>\n\n      <button ion-button *ngIf="!_searchField" tappable (click)="_showSearchInput()">\n\n        <ion-icon name="ios-search"></ion-icon>\n\n      </button>\n\n      <button *ngIf="_searchField" ion-button tappable (click)="_hideSearchInput()">\n\n        <ion-icon name="ios-close-circle"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding class="animated fadeIn common-bg">\n\n  <ion-list  class="full-width">\n\n    <ion-item-sliding *ngFor="let s of _aitems">\n\n    <ion-item>\n\n      <ion-avatar item-start>\n\n        <ion-icon name="globe"></ion-icon>\n\n      </ion-avatar>\n\n      <h2>{{s.title}}</h2>\n\n      <p>{{s.url}}</p>\n\n    </ion-item>\n\n    <ion-item-options side="right">\n\n      <button ion-button color="primary"  (click)="_addWebsite(s)">\n\n        <ion-icon name="create"></ion-icon>\n\n        Edit\n\n      </button>\n\n      <button ion-button color="danger" (click)="_delWebsite(s.id)">\n\n        <ion-icon name="trash"></ion-icon>\n\n        Delete\n\n      </button>\n\n    </ion-item-options>\n\n  </ion-item-sliding>\n\n  </ion-list>\n\n  <ion-list *ngIf="_items==\'\'">\n\n    <ion-item text-center>No Records Found.</ion-item>\n\n  </ion-list>\n\n  <ion-fab right bottom>\n\n    <button (click)="_addWebsite()" ion-fab color="danger"><ion-icon name="add"></ion-icon></button>\n\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\passer\src\pages\websites\website.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__components_database_database__["a" /* DatabaseComponent */], __WEBPACK_IMPORTED_MODULE_5__providers_globalVars__["a" /* GlobalVars */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
], WebsitePage);

var WebsitePage_1;
//# sourceMappingURL=website.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map