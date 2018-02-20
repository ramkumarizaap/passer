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
	private details:any;
	private _items:Array<any> = [];
	private _searchField:boolean = false;
	constructor(public nav:NavController,public db: DatabaseComponent,private globalvars: GlobalVars,
		public loader:LoadingController,public alertCtrl:AlertController,public _formBuilder:FormBuilder)
	{
		this.user = this.globalvars.getUserdata()[0];
		alert("Website Page: "+JSON.stringify(this.user));
		alert("User Id: "+this.user.id);
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
				alert("Success Website: "+JSON.stringify(res));
				if(res.rows.length)
				{
					for (var i = 0; i < res.rows.length; i++)
					{
						this._items.push({
								id:res.rows.item(i).id,
								title:res.rows.item(i).title,
								url:res.rows.item(i).url,
							});
						let query1 = "select * from website_details where websiteid='"+res.rows.item(i).id+"'";
						this.db.exeQuery(query1).then((sdetails)=>{
							alert("Success Website Details: "+JSON.stringify(sdetails));
							if(sdetails.rows.length)
							{
								alert("Details Length: "+sdetails.rows.length);
								this.details = [];
								for (var j = 0; j < sdetails.rows.length; j++)
								{
									this._items.push({
										details:{
											id:sdetails.rows.item(j).id,
											websiteid:sdetails.rows.item(j).websiteid,
											username:sdetails.rows.item(j).username,
											password:sdetails.rows.item(j).password,
											comments:sdetails.rows.item(j).comments
										}
									});
								}
							}							
							alert("Success Items: "+JSON.stringify(this._items));
						})
						.catch(err=>{
							alert("Error Website Details: "+JSON.stringify(err));
						});
					}
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
		}
		setFilteredItems(e)
		{
			this.clearFilter();
			let val = e.target.value;
	    // if the value is an empty string don't filter the items
	    if (val && val.trim() != '')
	    {
	      this._items = this._items.filter((item) => {
	        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
	      })
	    } 
    }

    _addWebsite(s:any=""):void
    {
    	this.nav.push(AddWebsitePage);
    }
}
