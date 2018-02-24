import {Component} from "@angular/core";
import {NavParams,NavController, AlertController,LoadingController,ActionSheetController ,/* ToastController, MenuController*/} from "ionic-angular";
// import {WebsitePage} from "../websites/website";
import {BankAddPage} from "../bank-add/bank-add";
// import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import {DatabaseComponent } from '../../components/database/database';
@Component({
  selector: 'page-bank',
  templateUrl: 'bank.html'
})

export class BankPage
{
	public bank:Array<any> = [];
	public alert;
	public _items = [];
	public user;
	public _searchField;
	constructor(public nav:NavController,public actionSheetCtrl:ActionSheetController,
		public alertCtrl:AlertController,public db:DatabaseComponent,public globalvars:GlobalVars,
		public loader:LoadingController)
	{
		this.user = this.globalvars.getUserdata()[0];
		this.getBanks();
	}
	_addBank(s:any=""):void
	{
		this.nav.push(BankAddPage,{id:s});
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
		this.bank = this._items;
	}

	setFilteredItems(e)
	{
		this.getFilteredItems();
		let val = e.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '')
    {
      this.bank = this.bank.filter((item) => {
        return ( (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.branch.toLowerCase().indexOf(val.toLowerCase()) > -1) );
      })
    } 
	}
	getBanks()
	{
		let load = this.loader.create({
			content:"Loading..."
		});
		load.present();
		let query = "select * from banks where userid='"+this.user.id+"'";
		this.db.exeQuery(query).then((res)=>{
			if(res.rows.length)
			{
				for (var i = 0; i < res.rows.length; i++)
				{
					this._items.push(res.rows.item(i));
				}
				this.bank = this._items;
			}
			else
			{
				this.alert = this.alertCtrl.create({
					title:'Error!',
					message:"No Records Found.",
					buttons: ['Ok']
				});
			}
			setTimeout(()=>{
				load.dismiss();
				this.alert.present();
			},3000);
		}).catch((err)=>{
			load.dismiss();
			let fail = this.alertCtrl.create({
					title:'Error!',
					message:"Failed to fetch Record.",
					buttons: ['Ok']
				});
			fail.present();
		});
	}

	getImg(name)
	{
		let img;
		switch (name)
		{
			case "Allahabad Bank":img="allahabad.jpg";break;
			case "Axis Bank":img="axis.jpg";break;
			case "Canara Bank":img="canara.jpeg";break;
			case "City Union Bank":img="city-union.jpg";break;
			case "Dhanalaxmi Bank":img="dhanalaxmi.jpg";break;
			case "Federal Bank":img="federal.jpg";break;
			case "HDFC Bank":img="hdfc.jpg";break;
			case "ICICI Bank":img="icici.jpg";break;
			case "IDBI Bank":img="idbi.jpg";break;
			case "Indian Bank":img="indian.jpg";break;
			case "IndusInd Bank":img="indusind.jpg";break;
			case "Indian Overseas Bank":img="iob.jpg";break;
			case "Karnataka Bank":img="karnataka.png";break;
			case "Karur Vysya Bank":img="karur.jpg";break;
			case "Laxmi Vilas Bank":img="laxmi-vilas.png";break;
			case "Punjab National Bank":img="punjab.jpg";break;
			case "State Bank of India":img="sbi.jpg";break;
			case "South Indian Bank":img="south-indian.jpg";break;
			case "Tamilnadu Mercantile Bank":img="tmb.jpg";break;
			case "Vijaya Bank":img="vijaya.png";break;
			case "Yes Bank":img="yes.jpg";break;
		}
		return img;
	}

	showAction(result)
	{
		let actionSheet = this.actionSheetCtrl.create({
      title: 'Choose Actions',
      buttons: [
        {
          text: 'Edit',
          icon:"ios-create",
          handler: () => {
            this._addBank(result);
          }
        },{
          text: 'Delete',
          icon:"trash",
          handler: () => {
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
					            this._delete(result.id);
					          }
					        }
					      ]
					    });
					    confirm.present();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
	}

	_delete(id)
	{
		let rmquery = "delete from banks where id='"+id+"'";
			this.db.exeQuery(rmquery).then((res)=>{
				let succ = this.alertCtrl.create({
	          title: 'Success!',
	          message: "Record deleted sucessfully.",
	           buttons: [
	              {
	                text: 'Ok',
	                handler: data => {
	                  this.nav.setRoot(BankPage);
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
	                  this.nav.setRoot(BankPage);
	                }
	              }]
	        });
	        fail.present();
			});
	}

}
