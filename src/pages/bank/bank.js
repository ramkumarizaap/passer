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
import { BankAddPage } from "../bank-add/bank-add";
// import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';
// import { GlobalVars } from '../../providers/globalVars';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
var BankPage = /** @class */ (function () {
    function BankPage(nav) {
        this.nav = nav;
    }
    BankPage.prototype._addBank = function () {
        this.nav.push(BankAddPage);
    };
    BankPage = __decorate([
        Component({
            selector: 'page-bank',
            templateUrl: 'bank.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], BankPage);
    return BankPage;
}());
export { BankPage };
//# sourceMappingURL=bank.js.map