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
import { /*NavController, AlertController,*/ LoadingController /*, ToastController, MenuController*/ } from "ionic-angular";
import { SQLite } from '@ionic-native/sqlite';
var DatabaseComponent = /** @class */ (function () {
    function DatabaseComponent(sqlite, load) {
        this.sqlite = sqlite;
        this.load = load;
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
        var loader1 = this.load.create({
            content: 'Loading Resources 1/3...'
        });
        var loader2 = this.load.create({
            content: 'Loading Resources 2/3...'
        });
        var loader3 = this.load.create({
            content: 'Loading Resources 3/3...'
        });
        return this.db.then(function (obj) {
            alert("Table: " + JSON.stringify(obj));
            obj.executeSql('create table users(id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(32),email VARCHAR(32),password VARCHAR(32))', {})
                .then(function () {
                loader1.present();
            })
                .catch(function (e) { return alert("Error: " + JSON.stringify(e)); });
            obj.executeSql('create table websites(id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER(11),title VARCHAR(255),url VARCHAR(255))', {})
                .then(function () { return loader1.present(); });
        })
            .catch(function (e) { return alert("Error: " + JSON.stringify(e)); });
        obj.executeSql('create table website_details(id INTEGER PRIMARY KEY AUTOINCREMENT,websiteid INTEGER(11),username VARCHAR(255),password VARCHAR(255),comments VARCHAR(255))', {})
            .then(function () { return alert('Website Details Table Created'); })
            .catch(function (e) { return alert("Error: " + JSON.stringify(e)); });
    };
    DatabaseComponent.prototype.catch = function (err, _a) {
        var alert = _a.alert;
    };
    DatabaseComponent = __decorate([
        Component({ selector: 'database' }),
        __metadata("design:paramtypes", [SQLite, LoadingController])
    ], DatabaseComponent);
    return DatabaseComponent;
}());
export { DatabaseComponent };
("Plugin Error: " + err);
;
insertData(fields, data, table);
{
    var values = "?";
    for (var i = 0; i < fields.length - 1; i++) {
        values += ",?";
    }
    var output = { 'status': 'success', 'msg': '' };
    var query = "insert into " + table + " (" + fields + ") values(" + values + ")";
    return this.db.then(function (obj) {
        alert("Success :" + JSON.stringify(obj));
        alert("Query: " + query);
        obj.executeSql(query, [data]).then(function (res) { return alert("Insert Data: " + JSON.stringify(res)); })
            .catch(function (error) { return alert("Insert Data Error: " + JSON.stringify(error)); });
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
}
//# sourceMappingURL=database.js.map