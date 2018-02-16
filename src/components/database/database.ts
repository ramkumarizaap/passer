import {Component} from "@angular/core";
// import {NavController, AlertController,LoadingController, ToastController, MenuController} from "ionic-angular";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({ selector: 'database' })


export class DatabaseComponent
{
	public item:any;
	public db;
	constructor(private sqlite: SQLite)
	{

		

	}


	createDb()
	{
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
	}
	createTables()
	{
		this.createDb();
		return this.db.then(obj => {
			alert("Table: "+JSON.stringify(obj));
			obj.executeSql('create table users(id INTEGER PRIMARY KEY AUTOINCREMENT,name VARCHAR(32),email VARCHAR(32),password VARCHAR(32))', {})
          .then(() => alert('Users Table Created'))
          .catch(e => alert("Error: "+ JSON.stringify(e)));
    obj.executeSql('create table websites(id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER(11),title VARCHAR(255),url VARCHAR(255))', {})
          .then(() => alert('Websites Table Created'))
          .catch(e => alert("Error: "+ JSON.stringify(e)));
    obj.executeSql('create table website_details(id INTEGER PRIMARY KEY AUTOINCREMENT,websiteid INTEGER(11),username VARCHAR(255),password VARCHAR(255),comments VARCHAR(255))', {})
          .then(() => alert('Website Details Table Created'))
          .catch(e => alert("Error: "+ JSON.stringify(e)));
		}).catch(err => {
			alert("Plugin Error: "+err);
		});
	}
	insertData(fields,data,table)
	{
		let values:string="?";
		for (let i = 0; i < fields.length - 1; i++)
		{
			values +=",?";
		}
		let output:any = {'status':'success','msg':''};
		let query:string = "insert into "+table+" ("+fields+") values("+values+")";
		return this.db.then(obj => {
			alert("Success :"+JSON.stringify(obj));
			alert("Query: "+query);
			obj.executeSql(query,[data]).then((res)=>alert("Insert Data: "+JSON.stringify(res)))
			.catch(error=>alert("Insert Data Error: "+JSON.stringify(error)));
      		output.msg = "Created";
      		return output;
      })
      .catch(e => {
      	alert(e);
      	output.status = "error";
      	output.msg = e;
      	return output;
      });

		// console.log(query);
	}
}