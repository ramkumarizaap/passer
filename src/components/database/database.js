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
// import {NavController, AlertController,LoadingController, ToastController, MenuController} from "ionic-angular";
import { SQLite } from '@ionic-native/sqlite';
var DatabaseComponent = /** @class */ (function () {
    function DatabaseComponent(sqlite) {
        this.sqlite = sqlite;
    }
    DatabaseComponent.prototype.createDb = function () {
        /*this.sqlite.create({
      name: 'pwdmgr.db',
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        db.executeSql('create table users(id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(32),email VARCHAR(32),password VARCHAR(32))', {})
          .then(() => alert('Users Table Created'))
          .catch(e => alert("Error: "+ JSON.stringify(e)));
        db.executeSql('create table websites(id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER(11),title VARCHAR(255),url VARCHAR(255))', {})
          .then(() => alert('Websites Table Created'))
          .catch(e => alert("Error: "+JSON.stringify(e)));
        db.executeSql('create table website_details(id INTEGER PRIMARY KEY AUTOINCREMENT,websiteid INTEGER(11),username VARCHAR(255),password VARCHAR(255),comments VARCHAR(255))', {})
          .then(() => alert('Website Details Table Created'))
          .catch(e => alert("Error: "+JSON.stringify(e)));
      })
      .catch(e =>{ alert("Error NO:"+e);});*/
        this.db = this.sqlite.create({
            name: 'pwdmgr.db',
            location: 'default'
        });
    };
    DatabaseComponent.prototype.createTables = function () {
        this.createDb();
        return this.db.then(function (obj) {
            alert("Table: " + JSON.stringify(obj));
            obj.executeSql('create table users(id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(32),email VARCHAR(32),password VARCHAR(32))', {})
                .then(function () { return alert('Users Table Created'); })
                .catch(function (e) { return alert("Error: " + JSON.stringify(e)); });
        }).catch(function (err) {
            alert(err);
        });
    };
    DatabaseComponent.prototype.insertData = function (fields) {
        var values = "?";
        for (var i = 0; i < fields.length - 1; i++) {
            values += ",?";
        }
        var output = { 'status': 'success', 'msg': '' };
        var query = "insert into websites(" + fields + ") values(" + values + ")";
        return this.db.then(function (db) {
            alert("Success :" + JSON.stringify(db));
            output.msg = "Created";
            return output;
        })
            .catch(function (e) {
            alert(e);
            output.status = "error";
            output.msg = e;
            return output;
        });
        // console.log(query);
    };
    DatabaseComponent = __decorate([
        Component({ selector: 'database' }),
        __metadata("design:paramtypes", [SQLite])
    ], DatabaseComponent);
    return DatabaseComponent;
}());
export { DatabaseComponent };
//# sourceMappingURL=database.js.map