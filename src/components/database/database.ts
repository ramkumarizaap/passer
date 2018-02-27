import {Component} from "@angular/core";
import { AlertController,LoadingController} from "ionic-angular";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { GlobalVars } from "../../providers/globalVars";
@Component({ selector: 'database' })


export class DatabaseComponent
{
	public item:any;
	public db;
	public ins;
	constructor(private sqlite: SQLite,public load:LoadingController,public alertCtrl:AlertController,
			public globalvars:GlobalVars)
	{
		this.ins = this.globalvars.getAppdata();
	}


	createDb()
	{
		let loader1 = this.load.create({
			content: "Loading Resources 1/7..."
		});
		loader1.present();
    this.sqlite.create({
      name: 'pwdmgr.db',
      location: 'default'
    }).then((db:SQLiteObject)=>{
    	this.db = db;
    	 /*User Table Creation */
    		if(this.ins == null)
    		{
		    	  this.db.executeSql('create table users(id INTEGER PRIMARY KEY AUTOINCREMENT,fullname VARCHAR(32),email VARCHAR(32),password VARCHAR(32))', {})
		    			.then((res) =>{
				      	setTimeout(() => {
				      		loader1.setContent('Loading Resources 2/7...');
				      	},2000);
		    		})
			      .catch(e =>{ 
			      	loader1.dismiss();
			      		let alert = this.alertCtrl.create({
								title: 'Error',
				        message: e.message,
				        buttons: ['Ok'],
							});
							alert.present();
							return false;
			      });
			      /*Website Table Creation*/
			      this.db.executeSql('create table websites(id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER(11),title VARCHAR(255),url VARCHAR(255))', {})
		    			.then((res) =>{
				      	setTimeout(() => {
				      		loader1.setContent('Loading Resources 3/7...');
				      	},4000);
		    		})
			      .catch(e =>{
			      	loader1.dismiss();
			      		let alert = this.alertCtrl.create({
								title: 'Error',
				        message: e.message,
				        buttons: ['Ok'],
							});
							alert.present();
							return false;
			      });
			      /*Wesite Details Table Creation*/
			      this.db.executeSql('create table website_details(id INTEGER PRIMARY KEY AUTOINCREMENT,websiteid INTEGER(11),username VARCHAR(255),password VARCHAR(255),comments VARCHAR(255))', {})
		    			.then((res) =>{
				      	setTimeout(() => {
				      		loader1.setContent('Loading Resources 4/7...');
				      	},6000);
		    		})
			      .catch(e =>{ 
			      	loader1.dismiss();
			      		let alert = this.alertCtrl.create({
								title: 'Error',
				        message: e.message,
				        buttons: ['Ok'],
							});
							alert.present();
							return false;
			      });
			      /*Cards Table Creation*/
			      this.db.executeSql('create table cards(id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER(11),card_type VARCHAR(255),bank VARCHAR(255),acc_no VARCHAR(255),month VARCHAR(255),year VARCHAR(255),pin VARCHAR(255),cvv VARCHAR(255),holder_name VARCHAR(255),card_pay VARCHAR(255),color VARCHAR(255))', {})
		    			.then((res) =>{
				      	setTimeout(() => {
				      		loader1.setContent('Loading Resources 5/7...');
				      	},8000);
		    		})
			      .catch(e =>{ 
			      	loader1.dismiss();
			      		let alert = this.alertCtrl.create({
								title: 'Error',
				        message: e.message,
				        buttons: ['Ok'],
							});
							alert.present();
							// return false;
			      });
			      /*Banks Table Creation*/
			      this.db.executeSql('create table banks(id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER(11),holder_name VARCHAR(255),name VARCHAR(255),account_number VARCHAR(255),account_type VARCHAR(255),branch VARCHAR(255),ifsc VARCHAR(255),micr VARCHAR(255))', {})
		    			.then((res) =>{
				      	setTimeout(() => {
				      		loader1.setContent('Loading Resources 6/7...');
				      	},10000);
		    		})
			      .catch(e =>{ 
			      	loader1.dismiss();
			      		let alert = this.alertCtrl.create({
								title: 'Error',
				        message: e.message,
				        buttons: ['Ok'],
							});
							alert.present();
							// return false;
			      });

			      /*Apps Table Creation*/
			      this.db.executeSql('create table apps(id INTEGER PRIMARY KEY AUTOINCREMENT,userid INTEGER(11),appname VARCHAR(255))', {})
		    			.then((res) =>{
				      	setTimeout(() => {
				      		loader1.setContent('Loading Resources 7/7...');
				      	},12000);
		    		})
			      .catch(e =>{ 
			      	loader1.dismiss();
			      		let alert = this.alertCtrl.create({
								title: 'Error',
				        message: e.message,
				        buttons: ['Ok'],
							});
							alert.present();
							// return false;
			      });
			      /*Apps Details Table Creation*/
			      this.db.executeSql('create table app_details(id INTEGER PRIMARY KEY AUTOINCREMENT,appid INTEGER(11),username VARCHAR(255),password VARCHAR(255),comments VARCHAR(255))', {})
		    			.then((res) =>{
				      	setTimeout(() => {
				      		loader1.dismiss();
				      	},12000);
		    		})
			      .catch(e =>{ 
			      	loader1.dismiss();
			      		let alert = this.alertCtrl.create({
								title: 'Error',
				        message: e.message,
				        buttons: ['Ok'],
							});
							alert.present();
							// return false;
			      });
			  }
			  else
			  	loader1.dismiss();
			
    }).catch((err)=>{
    	loader1.dismiss();
			let alert = this.alertCtrl.create({
				title: 'Error',
        message: err,
        buttons: ['Ok'],
			});
			// alert.present();
			return false;
    });
	}
	exeQuery(query)
	{
		// alert(query);
    return this.db.executeSql(query,{}).then((data) => data).catch((err)=>err);
	}
}