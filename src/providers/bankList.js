var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
var BankList = /** @class */ (function () {
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
    BankList = __decorate([
        Injectable()
    ], BankList);
    return BankList;
}());
export { BankList };
var YearList = /** @class */ (function () {
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
export { YearList };
//# sourceMappingURL=bankList.js.map