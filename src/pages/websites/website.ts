import {Component} from "@angular/core";
import {NavController, AlertController,LoadingController,/* ToastController, MenuController*/} from "ionic-angular";
import {AddWebsitePage} from "../add-website/add-website";
import { DatabaseComponent } from "../../components/database/database";
import { FormBuilder, FormGroup, FormArray,Validators } from '@angular/forms';
import { GlobalVars } from '../../providers/globalVars';
@Component({
  selector: 'page-website',
  templateUrl: 'website.html'
})
export class WebsitePage
{
	private searchTerm:string;
	private search:any;
	private user:any;
	private _items:Array<any> = [];
	private _aitems:Array<any> = [];
	private _searchField:boolean = false;
	constructor(public nav:NavController,public db: DatabaseComponent,private globalvars: GlobalVars,
		public loader:LoadingController,public alertCtrl:AlertController,public _formBuilder:FormBuilder)
	{
		this.user = this.globalvars.getUserdata()[0];
		this.clearFilter();
	}
		_showSearchInput():void
		{
			this._searchField = true;
		}
		_hideSearchInput():void
		{
			this._searchField = false;	
		}
		clearFilter()
		{
			let load = this.loader.create({
				content:'Please Wait...'
			});
			load.present();
			let query = "select * from websites where userid='"+this.user.id+"'";
			this.db.exeQuery(query).then((res)=>{
				if(res.rows.length)
				{
					for (var i = 0; i < res.rows.length; i++)
					{						
						this._items.push({
							id:res.rows.item(i).id,
							title:res.rows.item(i).title,
							url:res.rows.item(i).url
						});
					}
					this._aitems = this._items;
				}
				setTimeout(()=>{
					load.dismiss();
				},4000);
			})
			.catch(err=>{
				load.dismiss();
				let detfail = this.alertCtrl.create({
          title: 'Failed!',
          message: "No Records Found.",
           buttons: ['Ok']
        });
        detfail.present();
			});
			// this._items = [{title:'Ram',url:'http://google.com'},{title:'Kumar',url:'yahoo.com'}];
		}
		getFilteredItems()
		{
			this._aitems = this._items;
		}

		setFilteredItems(e)
		{
			this.getFilteredItems();
			let val = e.target.value;
	    // if the value is an empty string don't filter the items
	    if (val && val.trim() != '')
	    {
	      this._aitems = this._aitems.filter((item) => {
	        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
	      })
	    } 
    }

    _addWebsite(s:any=""):void
    {
    	this.nav.push(AddWebsitePage,{id:s});
    }
    private _delete(id)
		{
			let rmquery = "delete from websites where id='"+id+"'";
			this.db.exeQuery(rmquery).then((res)=>{
				let del = "delete from website_details where websiteid='"+id+"'";
				this.db.exeQuery(del).then((r)=>r).catch((err)=>err);
				let succ = this.alertCtrl.create({
	          title: 'Success!',
	          message: "Record deleted sucessfully.",
	           buttons: [
	              {
	                text: 'Ok',
	                handler: data => {
	                  this.nav.setRoot(WebsitePage);
	                }
	              }]
	        });
	        succ.present();
			}).catch(err=>{
				let fail = this.alertCtrl.create({
	          title: 'Failed!',
	          message: "Record failed to delete.",
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

		private _delWebsite(id)
		{
			let confirm = this.alertCtrl.create({
	      title: 'Delete?',
	      message: 'Are you sure want to delete this record?',
	      buttons: [
	        {
	          text: 'No',
	          handler: () => {
	            confirm.dismiss();
	          }
	        },
	        {
	          text: 'Yes',
	          handler: () => {
	            this._delete(id);
	          }
	        }
	      ]
	    });
	    confirm.present();
		}
}
