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
import { NavController, NavParams } from 'ionic-angular';
// import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
var MobileAppAddPage = /** @class */ (function () {
    function MobileAppAddPage(navCtrl, _formBuilder, params) {
        this.navCtrl = navCtrl;
        this._formBuilder = _formBuilder;
        this.params = params;
        this._searchField = false;
        this._appForm = this._formBuilder.group({
            name: ["",
                Validators.compose([
                    Validators.required, Validators.minLength(6)
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
    MobileAppAddPage = __decorate([
        Component({
            selector: 'page-mobile-app-add',
            templateUrl: 'mobile-app-add.html'
        }),
        __metadata("design:paramtypes", [NavController, FormBuilder, NavParams])
    ], MobileAppAddPage);
    return MobileAppAddPage;
}());
export { MobileAppAddPage };
//# sourceMappingURL=mobile-app-add.js.map