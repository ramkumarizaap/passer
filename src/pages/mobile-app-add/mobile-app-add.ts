import { Component } from '@angular/core';
import {NavParams,NavController, AlertController,LoadingController} from "ionic-angular";
// import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { GlobalVars } from '../../providers/globalVars';
import { MobileAppPage } from '../mobile-app/mobile-app';
import { DatabaseComponent } from '../../components/database/database';

@Component({
  selector: 'page-mobile-app-add',
  templateUrl: 'mobile-app-add.html'
})
export class MobileAppAddPage {
  private _apps:any;
  private _appForm:FormGroup;
  private searchTerm:string;
  private details;
  private len;
  public _lastId;
  private appvalue;
  public user;
  private _searchField:boolean = false;
  constructor(
    public navCtrl: NavController,public _formBuilder:FormBuilder,public params: NavParams,
    public globalvars:GlobalVars,public alertCtrl:AlertController,public loader:LoadingController,
    public db:DatabaseComponent) {
  	this.user = this.globalvars.getUserdata()[0];
  	this._appForm = this._formBuilder.group({
  		id:[""],
			appname: ["",
        Validators.compose([
          Validators.required,Validators.minLength(6)
        ])
      ],
      details: this._formBuilder.array([ this.createItem() ])
      });
  	this.len = this._appForm.get('details') as FormArray;
  	this.appvalue = this.params.get('id');
  	if(this.appvalue)
		{
			let load = this.loader.create({
				content:'Loading...'
			});
			load.present();
			let adetails: Array<any> = [];
			let query = "select * from app_details where appid='"+this.appvalue.id+"'";
			this.db.exeQuery(query).then((det)=>{
				if(det.rows.length)
				{
					for (var j = 0; j < det.rows.length ; j++)
					{
						adetails.push(this._formBuilder.group(det.rows.item(j)));
					}
				}
				this._appForm = this._formBuilder.group({
					id:[this.appvalue.id],
					appname:[this.appvalue.appname,Validators.compose([Validators.required,Validators.minLength(6)])],
					details:this._formBuilder.array(adetails)
				});
				this.len = this._appForm.get('details') as FormArray;
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
                  this.navCtrl.setRoot(MobileAppPage);
                }
              }]
        });
        fail.present();
			});
		}


  }

  _cancel()
  {
    this.navCtrl.pop(); 
  }

  createItem(): FormGroup {
	  return this._formBuilder.group({
	    username: '',
	    password: '',
	    comments: ''
	  });
	}

	_addNew():void
	{
		this.details = this._appForm.get('details') as FormArray;
		console.log(this.details);
  	this.details.push(this.createItem());
	}

	private _removeItem(i):void
	{
		this.details = this._appForm.get('details') as FormArray;
		console.log(i);
		// let index = this.items.indexOf(i);
		// console.log(index);
 	  //   if(index > -1){
      this.details.removeAt(i);
    // }
	}

	private _submitAppForm():void
	{
		// console.log(this._websiteForm.value);
		if(this._appForm.valid)
		{
			let load = this.loader.create({
				content:'Please Wait...'
			});
			load.present();
			let query:string;
			let formdata = this._appForm.value;
			if(formdata.id == null || formdata.id == '')
			{
				query = "insert into apps(userid,appname) values ('"+this.user.id+"','"+formdata.appname+"')";
			}
			else
			{
				query = "update apps set appname='"+formdata.appname+"' where id='"+formdata.id+"'";
			}
			this.db.exeQuery(query).then((res)=>{
				if(formdata.id=='' || formdata.id == null)
					this._lastId = res.insertId;
				/*Insertion For App Details*/
				for (var i = 0; i < formdata.details.length; i++)
				{
					let query1:string;
					let detailform = formdata.details[i];
					if(formdata.id=='' || formdata.id == null)
					{
						query1 = "insert into app_details(appid,username,password,comments)"+
							"values ('"+this._lastId+"','"+detailform.username+"','"+detailform.password+"','"+detailform.comments+"')";
						this.db.exeQuery(query1).then((wdetails)=>{
								// alert("Success Details: "+JSON.stringify(wdetails));
							})
							.catch(err=>{
									let fail = this.alertCtrl.create({
					          title: 'Failed!',
					          message: "App failed to save.",
					           buttons: [
					              {
					                text: 'Ok',
					                handler: data => {
					                  this.navCtrl.setRoot(MobileAppPage);
					                }
					              }]
					        });
					        fail.present();
							});
					}
					else
					{
						let query3 = "select * from app_details where id='"+detailform.id+"'";
						this.db.exeQuery(query3).then((rs)=>{
							if(rs.rows.length)
							{
								query1 = "update app_details set username='"+detailform.username+"',password='"+detailform.password+"',comments='"+detailform.comments+"' where id='"+detailform.id+"'";
							}
							else
							{
								query1 = "insert into app_details(appid,username,password,comments)"+
							"values ('"+formdata.id+"','"+detailform.username+"','"+detailform.password+"','"+detailform.comments+"')";
							}
							this.db.exeQuery(query1).then((wdetails)=>{
									// alert("Success Details2: "+JSON.stringify(wdetails));
								})
								.catch(err=>{
										let fail = this.alertCtrl.create({
						          title: 'Failed!',
						          message: "App failed to save.",
						           buttons: [
						              {
						                text: 'Ok',
						                handler: data => {
						                  this.navCtrl.setRoot(MobileAppPage);
						                }
						              }]
						        });
						        fail.present();
								});
						}).catch((err)=>{
							let fail = this.alertCtrl.create({
			          title: 'Failed!',
			          message: "App failed to save.",
			           buttons: [
			              {
			                text: 'Ok',
			                handler: data => {
			                  this.navCtrl.setRoot(MobileAppPage);
			                }
			              }]
			        });
			        fail.present();
						});
					}
				}
        let websuccess = this.alertCtrl.create({
          title: 'Success',
          message: "App saved successfully.",
           buttons: [
              {
                text: 'Ok',
                handler: data => {
                  this.navCtrl.setRoot(MobileAppPage);
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
          message: "App failed to save.",
           buttons: [
              {
                text: 'Ok',
                handler: data => {
                  this.navCtrl.setRoot(MobileAppPage);
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
				let rmquery = "delete from app_details where id='"+r[i].id+"'";
				this.db.exeQuery(rmquery).then((res)=>{
					// alert("Del Det: "+JSON.stringify(res));
				}).catch(err=>{
					// alert("Err Del Det: "+JSON.stringify(err));
				});
			}
		}
	}
}