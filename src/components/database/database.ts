import {Component} from "@angular/core";
import {/*NavController,*/ AlertController,LoadingController/*, ToastController, MenuController*/} from "ionic-angular";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Component({ selector: 'database' })


export class DatabaseComponent
{
	public item:any;
	public db;
	constructor(private sqlite: SQLite,public load:LoadingController,
		public alertCtrl:AlertController)
	{

		

	}


	createDb()
	{
		let loader1 = this.load.create({
			content: "Loading Resources 1/3..."
		});
		loader1.present();
    this.sqlite.create({
      name: 'pwdmgr.db',
      location: 'default'
    }).then((db:SQLiteObject)=>{
    	 this.db = db;
    	 /*User Table Creation */
    	 this.db.executeSql('create table users(id INTEGER PRIMARY KEY AUTOINCREMENT,fullname VARCHAR(32),email VARCHAR(32),password VARCHAR(32))', {})
    			.then((res) =>{
		      	setTimeout(() => {
		      		loader1.setContent('Loading Resources 2/3...');
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
		      		loader1.setContent('Loading Resources 3/3...');
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
		      		loader1.dismiss();
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
    }).catch((err)=>{
    	loader1.dismiss();
			let alert = this.alertCtrl.create({
				title: 'Error',
        message: err,
        buttons: ['Ok'],
			});
			alert.present();
			return false;
    });
	}
	exeQuery(query)
	{
		// alert(query);
    return this.db.executeSql(query,{}).then((data) => data).catch((err)=>err);
	}
}