var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HttpErrorResponse } from '@angular/common/http';
import { MobileAppAddPage } from "../mobile-app-add/mobile-app-add";
var MobileAppPage = /** @class */ (function () {
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
        this.navCtrl.push(MobileAppAddPage, { id: a });
    };
    MobileAppPage = __decorate([
        Component({
            selector: 'page-mobile-app',
            templateUrl: 'mobile-app.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], MobileAppPage);
    return MobileAppPage;
}());
export { MobileAppPage };
//# sourceMappingURL=mobile-app.js.map