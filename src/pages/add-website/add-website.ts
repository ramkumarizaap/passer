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
	public lc = [];
	private len;
	public remDetails;
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
		this.len = this._websiteForm.get('details') as FormArray;
		if(this.website)
		{
			let load = this.loader.create({
				content:'Loading...'
			});
			load.present();
			let wdetails: Array<any> = [];
			let query = "select * from website_details where websiteid='"+this.website.id+"'";
			this.db.exeQuery(query).then((det)=>{
				if(det.rows.length)
				{
					for (var j = 0; j < det.rows.length ; j++)
					{
						wdetails.push(this._formBuilder.group(det.rows.item(j)));
					}
				}
				this._websiteForm = this._formBuilder.group({
					id:[this.website.id],
					title:[this.website.title,Validators.compose([Validators.required,Validators.minLength(6)])],
					url:[this.website.url,Validators.compose([Validators.required,Validators.pattern(regexPatterns.url)])],
					details:this._formBuilder.array(wdetails)
				});
				this.len = this._websiteForm.get('details') as FormArray;
				setTimeout(()=>{ load.dismiss();},3000);
			})
			.catch(err=>{
				let fail = this.alertCtrl.create({
          title: 'Failed!',
          message: "Can't able fetch record.",
           buttons: [
              {
                text: 'Ok',
                handler: data => {
                  this.nav.setRoot(WebsitePage);
                }
              }]
        });
        fail.present();
			});
		}
	}


	createItem(): FormGroup {
	  return this._formBuilder.group({
	  	id:'',
	    username: '',
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
		localStorage.removeItem('removeDetails');
		this.nav.pop();
	}
	private _removeItem(i):void
	{
		this.details = this._websiteForm.get('details') as FormArray;
		if(this._websiteForm.value.details[i].id != '')
		{
			this.lc.push(this._websiteForm.value.details[i]);
			this.remDetails = localStorage.setItem('removeDetails', JSON.stringify(this.lc));
		}
		// let index = this.items.indexOf(i);
		// console.log(index);
 	  //   if(index > -1){
      this.details.removeAt(i);
    // }
	}

	private _submitWebsiteForm():void
	{
		// console.log(this._websiteForm.value);
		if(this._websiteForm.valid)
		{
			let load = this.loader.create({
				content:'Please Wait...'
			});
			load.present();
			let query:string;
			let formdata = this._websiteForm.value;
			if(formdata.id=='')
			{
				query = "insert into websites(userid,title,url)"+
					"values ('"+this.user.id+"','"+formdata.title+"','"+formdata.url+"')";
			}
			else
			{
				query = "update websites set title='"+formdata.title+"',url='"+formdata.url+"' where id='"+formdata.id+"'";
			}

			this.db.exeQuery(query).then((res)=>{
				if(formdata.id=='')
					this._lastId = res.insertId;
				/*Insertion For Wesbite Details*/
				for (var i = 0; i < formdata.details.length; i++)
				{
					let query1:string;
					let detailform = formdata.details[i];
					if(formdata.id=='')
					{
						query1 = "insert into website_details(websiteid,username,password,comments)"+
							"values ('"+this._lastId+"','"+detailform.username+"','"+detailform.password+"','"+detailform.comments+"')";
						this.db.exeQuery(query1).then((wdetails)=>{
								// alert("Success Details: "+JSON.stringify(wdetails));
							})
							.catch(err=>{
									let fail = this.alertCtrl.create({
					          title: 'Failed!',
					          message: "Website failed to save.",
					           buttons: [
					              {
					                text: 'Ok',
					                handler: data => {
					                  this.nav.setRoot(WebsitePage);
					                }
					              }]
					        });
					        fail.present();
							});
					}
					else
					{
						let query3 = "select * from website_details where id='"+detailform.id+"'";
						this.db.exeQuery(query3).then((rs)=>{
							if(rs.rows.length)
							{
								query1 = "update website_details set username='"+detailform.username+"',password='"+detailform.password+"',comments='"+detailform.comments+"' where id='"+detailform.id+"'";
							}
							else
							{
								query1 = "insert into website_details(websiteid,username,password,comments)"+
							"values ('"+formdata.id+"','"+detailform.username+"','"+detailform.password+"','"+detailform.comments+"')";
							}
							this.db.exeQuery(query1).then((wdetails)=>{
									// alert("Success Details: "+JSON.stringify(wdetails));
								})
								.catch(err=>{
										let fail = this.alertCtrl.create({
						          title: 'Failed!',
						          message: "Website failed to save.",
						           buttons: [
						              {
						                text: 'Ok',
						                handler: data => {
						                  this.nav.setRoot(WebsitePage);
						                }
						              }]
						        });
						        fail.present();
								});
						}).catch((err)=>{
							let fail = this.alertCtrl.create({
			          title: 'Failed!',
			          message: "Website failed to save.",
			           buttons: [
			              {
			                text: 'Ok',
			                handler: data => {
			                  this.nav.setRoot(WebsitePage);
			                }
			              }]
			        });
			        fail.present();
						});
					}
				}
        let websuccess = this.alertCtrl.create({
          title: 'Success',
          message: "Website saved successfully.",
           buttons: [
              {
                text: 'Ok',
                handler: data => {
                  this.nav.setRoot(WebsitePage);
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
          message: "Website failed to save.",
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
		let rm =  JSON.parse(localStorage.getItem('removeDetails'));
		if(rm != null)
		{
			this._removeDetailsDB(rm);
			localStorage.removeItem('removeDetails');
		}
	}


	private _removeDetailsDB(r)
	{
		if(r.length)
		{
			for (var i = 0; i < r.length;i++)
			{
				let rmquery = "delete from website_details where id='"+r[i].id+"'";
				this.db.exeQuery(rmquery).then((res)=>{
					alert("Del Det: "+JSON.stringify(res));
				}).catch(err=>{
					alert("Err Del Det: "+JSON.stringify(err));
				});
			}
		}
	}


}