import {Component} from "@angular/core";
import {NavParams,NavController, AlertController,LoadingController,/* ToastController, MenuController*/} from "ionic-angular";
import {WebsitePage} from "../websites/website";
// import {RegisterPage} from "../register/register";
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { regexPatterns } from '../../providers/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@Component({
  selector: 'page-website-add',
  templateUrl: 'add-website.html'
})

export class AddWebsitePage
{
	private items:any;
	private _websiteForm:FormGroup;
	private details;
	private _lastId:number;
	private user:any;
	private formdata;
	private len;
	private website;
	constructor(
			private sqlite: SQLite,
			private globalvars: GlobalVars,
			public nav:NavController,
			public _formBuilder:FormBuilder,
			public alertCtrl:AlertController,
			public loader:LoadingController,
			public params: NavParams,
			)
	{
		this.website = this.params.get('id');
		// this.user = this.globalvars.getUserdata();
		// alert(JSON.stringify(this.user));
		this._websiteForm = this._formBuilder.group({
			id:[""],
			title: ["",
        Validators.compose([
          Validators.required,Validators.minLength(6)
        ])
      ],
      url: ["",
        Validators.compose([
          Validators.required,
          Validators.pattern(regexPatterns.url)
        ])
      ],
      details: this._formBuilder.array([ this.createItem() ])
		});

		if(this.website)
		{
			let wdetails: Array<any> = [];
			for(let i in this.website.details){

				wdetails.push(this._formBuilder.group(this.website.details[i]));
			}

			this._websiteForm = this._formBuilder.group({
					id:[this.website.id],
					title:[this.website.title],url:[this.website.url],
					details:this._formBuilder.array(wdetails)
				});
			console.log(this._websiteForm);
		}
		this.len = this._websiteForm.get('details') as FormArray;
		console.log("Length: "+ this.len.length);
	}

	createItem(): FormGroup {
	  return this._formBuilder.group({
	    name: '',
	    password: '',
	    comments: ''
	  });
	}

	_addNew():void
	{
		this.details = this._websiteForm.get('details') as FormArray;
		console.log(this.details);
  	this.details.push(this.createItem());
	}
	_cancel():void
	{
		this.nav.pop();
	}
	private _removeItem(i):void
	{
		this.details = this._websiteForm.get('details') as FormArray;
		console.log(i);
		// let index = this.items.indexOf(i);
		// console.log(index);
 	  //   if(index > -1){
      this.details.removeAt(i);
    // }
	}

	private _submitWebsiteForm():void
	{
		console.log(this._websiteForm.value);
		if(this._websiteForm.valid)
		{
			this.formdata = this._websiteForm.value;
			let loading = this.loader.create({
        content: 'Loading...'
      });
      loading.present();
       this.sqlite.create({
        name: 'pwdmgr.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
      	loading.dismiss();
      	/*Start Insert Data*/
      	if(this.formdata.id=='')
      	{
	        db.executeSql('insert into websites(userid,title,url) values(?,?,?)',[this.user.id,this.formdata.title,this.formdata.url])
	        .then(res => {
	        	this._lastId = res.insertId;
	        	for (var i = 0; i < this.len.length; i++)
		        {
		        	db.executeSql('insert into website_details(websiteid,username,password,comments) values(?,?,?,?)',
		        		[this._lastId,this.formdata.name[i],this.formdata.password[i],this.formdata.comments[i]])
			        .then(det =>{})
			        .catch(e => {
			        		 let err_alert = this.alertCtrl.create({
				            title: 'Error',
				            message: 'Failed to Create',
				            buttons: [
				            	{
							          text: 'Ok',
							          handler: data => {
							            this.nav.setRoot(WebsitePage);
							          }
							        },
				            ],
					          });
					          err_alert.present();
			        });
		        }
		         let alert = this.alertCtrl.create({
	            title: 'Success',
	            message: 'Record created successfully!',
	            buttons: [
		            	{
					          text: 'Ok',
					          handler: data => {
					            this.nav.setRoot(WebsitePage);
					          }
					        },
		            ],
		          });
		          alert.present();
	        })
	        .catch(e => alert("Error1: "+JSON.stringify(e)));
	       }
	       /*End Insert Data*/
	       /*Start Update Data*/
	       else
	       {
	       		db.executeSql('update websites set title=?,url=? where id=?',[this.formdata.title,this.formdata.url,this.formdata.id])
	        	.then(res => {
	        		alert("Updated Website Table.");
	        		for (var i = 0; i < this.len.length; i++)
	        		{
	        			db.executeSql('select * from website_details where id=?',[this.formdata.wid[i]])
	        			.then(res1 => {
	        				if(res1.rows.length > 0)
	        				{
	        					db.executeSql('update website_details set name=?,password=?,comments=? where id=?',
	        						[this.formdata.name[i],this.formdata.passowrd[i],this.formdata.comments[i],this.formdata.wid[i]])
	        					.then(res2 => {
	        						alert(this.formdata.wid[i]+" Details Updated");
	        					})
	        					.catch(e => alert("Update Website Table Error: "+JSON.stringify(e)));
	        				}
	        				else
	        				{
	        					db.executeSql('insert into website_details(name,password,comments) values(?,?,?)',
	        						[this.formdata.name[i],this.formdata.passowrd[i],this.formdata.comments[i]])
	        					.then(res3 => {
	        						alert(res3.insertId+" Details Inserted");
	        					})
	        					.catch(e => alert("Insert Website Table Error: "+JSON.stringify(e)));
	        				}
	        			})
	        			.catch(e => alert("Update Select Error: "+JSON.stringify(e)));
	        		}
	        	})
	        	.catch(e => alert("Update Error1: "+JSON.stringify(e)));
	       }
	       /*End Update Data*/
      });
		}
	}
}