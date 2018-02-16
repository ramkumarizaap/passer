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
// import {WebsitePage} from "../websites/website";
// import {RegisterPage} from "../register/register";
// import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';
// import { GlobalVars } from '../../providers/globalVars';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
var CardsPage = /** @class */ (function () {
    function CardsPage() {
        this.cno = "4111897865921234";
    }
    CardsPage.prototype.convertStr = function (string) {
        var str = string.substr(4, 10);
        console.log(str);
        return string.substr(0, 4) + str.replace(str, " **** **** ") + string.substr(12, 15);
    };
    CardsPage = __decorate([
        Component({
            selector: 'page-cards',
            templateUrl: 'cards.html'
        }),
        __metadata("design:paramtypes", [])
    ], CardsPage);
    return CardsPage;
}());
export { CardsPage };
//# sourceMappingURL=cards.js.map