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
import { BankPage } from "../bank/bank";
import { GlobalVars } from "../../providers/globalVars";
import { FormBuilder, Validators } from '@angular/forms';
import { DatabaseComponent } from '../../components/database/database';
import { BankList } from '../../providers/bankList';
var BankAddPage = /** @class */ (function () {
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
            holder_name: [this.bank.holder_name, Validators.compose([
                    Validators.required,
                    Validators.minLength(4)
                ])],
            name: [this.bank.name,
                Validators.compose([
                    Validators.required
                ])
            ],
            account_number: [this.bank.account_number,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9]*'),
                    Validators.minLength(6)
                ])
            ],
            account_type: [this.bank.account_type,
                Validators.compose([
                    Validators.required,
                ])
            ],
            branch: [this.bank.branch,
                Validators.compose([
                    Validators.required,
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
                                _this.nav.setRoot(BankPage);
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
                                _this.nav.setRoot(BankPage);
                            }
                        }
                    ]
                });
            });
        }
    };
    BankAddPage = __decorate([
        Component({
            selector: 'page-bank-add',
            templateUrl: 'bank-add.html'
        }),
        __metadata("design:paramtypes", [NavController, FormBuilder, BankList,
            DatabaseComponent, GlobalVars, LoadingController,
            AlertController, NavParams])
    ], BankAddPage);
    return BankAddPage;
}());
export { BankAddPage };
//# sourceMappingURL=bank-add.js.map