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
import { NavController, } from "ionic-angular";
// import {WebsitePage} from "../websites/website";
// import {RegisterPage} from "../register/register";
import { FormBuilder, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';
// import { GlobalVars } from '../../providers/globalVars';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
var BankAddPage = /** @class */ (function () {
    function BankAddPage(nav, _formBuilder) {
        this.nav = nav;
        this._formBuilder = _formBuilder;
        this.bvalue = [{}];
        this._bankForm = this._formBuilder.group({
            name: ["",
                Validators.compose([
                    Validators.required
                ])
            ],
            account_number: ["",
                Validators.compose([
                    Validators.required,
                    Validators.pattern('[0-9]*'),
                    Validators.minLength(6)
                ])
            ],
            account_type: ["",
                Validators.compose([
                    Validators.required,
                ])
            ],
            branch: ["",
                Validators.compose([
                    Validators.required,
                ])
            ],
            ifsc: [""],
            micr: [""],
        });
    }
    BankAddPage.prototype._cancel = function () {
        this.nav.pop();
    };
    BankAddPage = __decorate([
        Component({
            selector: 'page-bank-add',
            templateUrl: 'bank-add.html'
        }),
        __metadata("design:paramtypes", [NavController, FormBuilder])
    ], BankAddPage);
    return BankAddPage;
}());
export { BankAddPage };
//# sourceMappingURL=bank-add.js.map