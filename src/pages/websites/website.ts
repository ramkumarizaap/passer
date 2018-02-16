import {Component} from "@angular/core";
import {NavController, AlertController,LoadingController,/* ToastController, MenuController*/} from "ionic-angular";
import {AddWebsitePage} from "../add-website/add-website";
import { DatabaseComponent } from "../../components/database/database";
import { FormBuilder, FormGroup, FormArray,Validators } from '@angular/forms';
import { GlobalVars } from '../../providers/globalVars';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
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
	private _items:any;
	private _searchField:boolean = false;
	constructor(public nav:NavController,private sqlite: SQLite,private globalvars: GlobalVars,
		public loader:LoadingController,public alertCtrl:AlertController,public _formBuilder:FormBuilder,
		public db:DatabaseComponent)
	{
		// this.user = this.globalvars.getUserdata();
		alert("Website Page: "+JSON.stringify(this.user));
		// alert("User Id: "+this.user.id);
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
			// let loading = this.loader.create({
   //      content: 'Loading...'
   //    });
   //    loading.present();
			// this.sqlite.create({
   //      name: 'pwdmgr.db',
   //      location: 'default'
   //    }).then((db: SQLiteObject) => {
   //    		db.executeSql('SELECT * FROM websites where userid=?',[this.user.id])
   //         .then(res => {
   //         	alert("Success: "+ JSON.stringify(res));
   //         	loading.dismiss();
   //         	alert("Length1: "+res.rows.length);
   //            if(res.rows.length>0)
   //            {
   //            	this.items = [];
   //            	alert("Length2: "+res.rows.length);
   //              for (var i = 0; i < res.rows.length; i++)
   //              {
   //              	alert("Title: "+res.rows.item(i).title);
   //              	this.items.push({
   //              		id:res.rows.item(i).id,
   //              		name:res.rows.item(i).title,
   //              		url:res.rows.item(i).url
   //              	});
   //              }
   //              alert("Success: "+JSON.stringify(this.items));
   //            }
   //            else
   //            {
   //              let alert = this.alertCtrl.create({
   //                title: 'Error',
   //                message: 'No Records Found!',
   //                buttons: ['Ok'],
   //              });
   //              alert.present();
   //              return false;
   //            }

   //         },(err)=>{
			//         loading.dismiss();
			//           let alert = this.alertCtrl.create({
			//             title: 'Error',
			//             message: JSON.stringify(err),
			//             buttons: ['Ok'],
			//           });
			//           alert.present();
			//        });
   //    });
			this._items = [
					{
						id:'1',title:'Ram',url:"http://www.google.com",
						details:[
						{name:'1',password:'123',comments:'comments'},
						{name:'2',password:'456',comments:'Login'}
						]
					},
					{
						id:'2',title:'Kumar',url:"http://www.google.com",
					},
					];

				console.log(this._items);
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

    _addWebsite(s):void
    {
    	let field:Array<any> = ['name','password','comments'];
    	// this.db.insertData(field).then(res => {
    	// 	console.log(res);
    	// });

    	// this.nav.push(AddWebsitePage,{id:s});
    }
}
