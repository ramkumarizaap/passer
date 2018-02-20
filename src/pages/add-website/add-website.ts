import {Component} from "@angular/core";
import {NavParams,NavController, AlertController,LoadingController,/* ToastController, MenuController*/} from "ionic-angular";
import {WebsitePage} from "../websites/website";
// import {RegisterPage} from "../register/register";
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { regexPatterns } from '../../providers/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { DatabaseComponent } from '../../components/database/database';
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
			private db: DatabaseComponent,
			private globalvars: GlobalVars,
			public nav:NavController,
			public _formBuilder:FormBuilder,
			public alertCtrl:AlertController,
			public loader:LoadingController,
			public params: NavParams,
			)
	{
		this.website = this.params.get('id');
		this.user = this.globalvars.getUserdata()[0];
		alert("User:"+JSON.stringify(this.user));
		alert("User Id: "+this.user.id);
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
			let load = this.loader.create({
				content:'Please Wait...'
			});
			load.present();
			let formdata = this._websiteForm.value;
			let query:string = "insert into websites(userid,title,url)"+
					"values ('"+this.user.id+"','"+formdata.title+"','"+formdata.url+"')";
			this.db.exeQuery(query).then((res)=>{
				alert("Add Success: "+JSON.stringify(res));
				this._lastId = res.insertId;
				alert("insert Id: "+this._lastId);

				/*Insertion For Wesbite Details*/
			for (var i = 0; i < formdata.details.length; i++)
			{

				let detailform = formdata.details[i];
				alert("Det:"+JSON.stringify(detailform));
				alert("Last Idd:"+this._lastId);
				let query1 = "insert into website_details(websiteid,username,password,comments)"+
					"values ('"+this._lastId+"','"+detailform.name+"','"+detailform.password+"','"+detailform.comments+"')";
				this.db.exeQuery(query1).then((wdetails)=>{
					alert("Success Details: "+JSON.stringify(wdetails));
				})
				.catch(err=>{
					alert("Error Details: "+JSON.stringify(err));
				});
			}

				 let websuccess = this.alertCtrl.create({
          title: 'Success',
          message: "Website created successfully.",
           buttons: [
              {
                text: 'Ok',
                handler: data => {
                  //this.nav.setRoot(WebsitePage);
                }
              }]
        });
				 setTimeout(()=>{
				 	load.dismiss();
				 	websuccess.present();
				 },5000);
			})
			.catch(err=>{
				load.dismiss();
				let webfail = this.alertCtrl.create({
          title: 'Failed!',
          message: "Website failed to create.",
           buttons: [
              {
                text: 'Ok',
                handler: data => {
                  this.nav.setRoot(WebsitePage);
                }
              }]
        });
        webfail.present();
			});
		}
	}
}