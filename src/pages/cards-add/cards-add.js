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
// import {WebsitePage} from "../websites/website";
import { CardsPage } from "../cards/cards";
import { FormBuilder, Validators } from '@angular/forms';
import { BankList, YearList } from '../../providers/bankList';
import { DatabaseComponent } from "../../components/database/database";
import { GlobalVars } from "../../providers/globalVars";
var CardsAddPage = /** @class */ (function () {
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
        // this.user = this.globalvars.getUserdata()[0];
        this.banks = bank.list;
        this.years = this.year.years();
        this._cardForm = this._formBuilder.group({
            id: [this.card.id],
            card_type: [this.card.card_type, Validators.compose([Validators.required])],
            bank: [this.card.bank, Validators.compose([Validators.required])],
            acc_no: [this.card.acc_no, Validators.compose([Validators.required, Validators.minLength(16)])],
            month: [this.card.month, Validators.compose([Validators.required])],
            year: [this.card.year, Validators.compose([Validators.required])],
            pin: [this.card.pin, Validators.compose([Validators.required, Validators.minLength(4)])],
            cvv: [this.card.cvv, Validators.compose([Validators.required, Validators.minLength(3)])],
            holder_name: [this.card.holder_name, Validators.compose([Validators.required, Validators.minLength(4)])],
            card_pay: [this.card.card_pay, Validators.compose([Validators.required])],
            color: [this.card.color, Validators.compose([Validators.required])],
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
            if (formdata.id != null)
                query = "update cards set card_type='" + formdata.card_type + "',bank='" + formdata.bank + "',acc_no='" + formdata.acc_no + "',month='" + formdata.month + "',year='" + formdata.year + "',pin='" + formdata.pin + "',cvv='" + formdata.cvv + "',holder_name='" + formdata.holder_name + "',card_pay='" + formdata.card_pay + "',color='" + formdata.color + "' where id='" + formdata.id + "'";
            else
                query = "insert into cards(userid,card_type,bank,acc_no,month,year,pin,cvv,holder_name,card_pay,color) values('" + this.user.id + "','" + formdata.card_type + "','" + formdata.bank + "','" + formdata.acc_no + "','" + formdata.month + "','" + formdata.year + "','" + formdata.pin + "','" + formdata.cvv + "','" + formdata.holder_name + "','" + formdata.card_pay + "','" + formdata.color + "')";
            alert(query);
            this.db.exeQuery(query).then(function (succ) {
                var alert = _this.alertCtrl.create({
                    title: 'Success',
                    message: "Card saved successfully.",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: function (data) {
                                _this.nav.setRoot(CardsPage);
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
                                _this.nav.setRoot(CardsPage);
                            }
                        }
                    ]
                });
                fail.present();
            });
        }
    };
    CardsAddPage = __decorate([
        Component({
            selector: 'page-cards-add',
            templateUrl: 'cards-add.html'
        }),
        __metadata("design:paramtypes", [BankList, YearList, FormBuilder,
            LoadingController, AlertController, DatabaseComponent,
            GlobalVars, NavController, NavParams])
    ], CardsAddPage);
    return CardsAddPage;
}());
export { CardsAddPage };
//# sourceMappingURL=cards-add.js.map