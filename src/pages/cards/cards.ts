import {Component} from "@angular/core";
import {NavParams,NavController, AlertController,LoadingController,/* ToastController, MenuController*/} from "ionic-angular";
// import {WebsitePage} from "../websites/website";
import {CardsAddPage} from "../cards-add/cards-add";
// import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { DatabaseComponent } from "../../components/database/database";
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})

export class CardsPage
{
	public user;
	public alert;
	public _items = [];
	public _searchField;
	public cards:Array<any> = [];
	private cno:string="4111897865921234";
	constructor(public nav:NavController,public globalvars:GlobalVars,public db:DatabaseComponent,
		public alertCtrl:AlertController,public loader:LoadingController)
	{
		this.user = this.globalvars.getUserdata()[0];
		this.getCards();
		// this.cards = [{id:'1',year:'2023',acc_no:'1515616515615614'}];
	}

	_showSearchInput():void
	{
		this._searchField = true;
	}
	_hideSearchInput():void
	{
		this._searchField = false;	
	}
	getFilteredItems()
	{
		this.cards = this._items;
	}

	setFilteredItems(e)
	{
		this.getFilteredItems();
		let val = e.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '')
    {
      this.cards = this.cards.filter((item) => {
        return ( 
        	(item.card_type.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
       	  (item.bank.toLowerCase().indexOf(val.toLowerCase()) > -1) || 
       	  (item.acc_no.toLowerCase().indexOf(val.toLowerCase()) > -1) || 
       	  (item.color.toLowerCase().indexOf(val.toLowerCase()) > -1) ||
	        (item.holder_name.toLowerCase().indexOf(val.toLowerCase()) > -1) || 
	        (item.card_pay.toLowerCase().indexOf(val.toLowerCase()) > -1)
        );
      })
    } 
	}

	getCards()
	{
		let load = this.loader.create({
			content:"Loading..."
		});
		load.present();
		let query = "select * from cards where userid='"+this.user.id+"'"; 
		this.db.exeQuery(query).then((res)=>{
			if(res.rows.length)
			{
				for (var i = 0; i < res.rows.length; i++)
				{
					this._items.push(res.rows.item(i));
				}
				this.cards = this._items;
			}
			else
			{
				this.alert = this.alertCtrl.create({
					title:'Success',
					message:"No Records Found.",
					buttons: ['Ok']
				});
			}
			setTimeout(()=>{
				load.dismiss();
				this.alert.present();
			},3000);
		}).catch((err)=>{

		});
	}

	convertStr(string)
	{
		let str:string = string.substr(4,10);
		return string.substr(0,4) + str.replace(str," **** **** ") + string.substr(12,15);
	}

	private _gotoCardsAdd(s:any="")
	{
		this.nav.push(CardsAddPage,{id:s});
	}

	getImage(name)
	{
		let img:string;
		switch (name)
		{
			case "Amex":img = "american.png";break;
			case "Cirrus":img = "cirrus.png";break;
			case "Discover":img = "discover.png";break;
			case "Maestro":img = "maestro.png";break;
			case "Mastercard":img = "master.png";break;
			case "Rupay":img = "rupay.png";break;
			case "Visa":img = "visa.png";break;
			case "Western Union":img = "western.png";break;
		}
		return img;
	}

	private _delete(id)
		{
			let rmquery = "delete from cards where id='"+id+"'";
			this.db.exeQuery(rmquery).then((res)=>{
				let succ = this.alertCtrl.create({
	          title: 'Success!',
	          message: "Record deleted sucessfully.",
	           buttons: [
	              {
	                text: 'Ok',
	                handler: data => {
	                  this.nav.setRoot(CardsPage);
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
	                  this.nav.setRoot(CardsPage);
	                }
	              }]
	        });
	        fail.present();
			});
		}

		private _delCard(id)
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
