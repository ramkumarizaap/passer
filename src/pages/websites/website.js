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
import { DatabaseComponent } from "../../components/database/database";
import { FormBuilder } from '@angular/forms';
import { GlobalVars } from '../../providers/globalVars';
import { SQLite } from '@ionic-native/sqlite';
var WebsitePage = /** @class */ (function () {
    function WebsitePage(nav, sqlite, globalvars, loader, alertCtrl, _formBuilder, db) {
        this.nav = nav;
        this.sqlite = sqlite;
        this.globalvars = globalvars;
        this.loader = loader;
        this.alertCtrl = alertCtrl;
        this._formBuilder = _formBuilder;
        this.db = db;
        this._searchField = false;
        // this.user = this.globalvars.getUserdata();
        alert("Website Page: " + JSON.stringify(this.user));
        // alert("User Id: "+this.user.id);
        this.clearFilter();
    }
    WebsitePage.prototype._showSearchInput = function () {
        this._searchField = true;
    };
    WebsitePage.prototype._hideSearchInput = function () {
        this._searchField = false;
    };
    WebsitePage.prototype.clearFilter = function () {
        // let loading = this.loader.create({
        //      content: 'Loading...'
        //    });
        //    loading.present();
        // this.sqlite.create({
        //      name: 'pwdmgr.db',
        //      location: 'default'
        //    }).then((db: SQLiteObject) => {
        //    		db.executeSql('SELECT * FROM websites where userid=?',[this.user.id])
        //         .then(res => {
        //         	alert("Success: "+ JSON.stringify(res));
        //         	loading.dismiss();
        //         	alert("Length1: "+res.rows.length);
        //            if(res.rows.length>0)
        //            {
        //            	this.items = [];
        //            	alert("Length2: "+res.rows.length);
        //              for (var i = 0; i < res.rows.length; i++)
        //              {
        //              	alert("Title: "+res.rows.item(i).title);
        //              	this.items.push({
        //              		id:res.rows.item(i).id,
        //              		name:res.rows.item(i).title,
        //              		url:res.rows.item(i).url
        //              	});
        //              }
        //              alert("Success: "+JSON.stringify(this.items));
        //            }
        //            else
        //            {
        //              let alert = this.alertCtrl.create({
        //                title: 'Error',
        //                message: 'No Records Found!',
        //                buttons: ['Ok'],
        //              });
        //              alert.present();
        //              return false;
        //            }
        //         },(err)=>{
        //         loading.dismiss();
        //           let alert = this.alertCtrl.create({
        //             title: 'Error',
        //             message: JSON.stringify(err),
        //             buttons: ['Ok'],
        //           });
        //           alert.present();
        //        });
        //    });
        this._items = [
            {
                id: '1', title: 'Ram', url: "http://www.google.com",
                details: [
                    { name: '1', password: '123', comments: 'comments' },
                    { name: '2', password: '456', comments: 'Login' }
                ]
            },
            {
                id: '2', title: 'Kumar', url: "http://www.google.com",
            },
        ];
        console.log(this._items);
    };
    WebsitePage.prototype.setFilteredItems = function (e) {
        this.clearFilter();
        var val = e.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this._items = this._items.filter(function (item) {
                return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    WebsitePage.prototype._addWebsite = function (s) {
        var field = ['name', 'password', 'comments'];
        // this.db.insertData(field).then(res => {
        // 	console.log(res);
        // });
        // this.nav.push(AddWebsitePage,{id:s});
    };
    WebsitePage = __decorate([
        Component({
            selector: 'page-website',
            templateUrl: 'website.html'
        }),
        __metadata("design:paramtypes", [NavController, SQLite, GlobalVars,
            LoadingController, AlertController, FormBuilder,
            DatabaseComponent])
    ], WebsitePage);
    return WebsitePage;
}());
export { WebsitePage };
//# sourceMappingURL=website.js.map