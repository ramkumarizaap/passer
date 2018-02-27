import { Component } from '@angular/core';
import { NavController,AlertController,LoadingController } from 'ionic-angular';
// import { HttpErrorResponse } from '@angular/common/http';
import {MobileAppAddPage} from "../mobile-app-add/mobile-app-add";
import { DatabaseComponent } from "../../components/database/database";
import { GlobalVars } from '../../providers/globalVars';

@Component({
  selector: 'page-mobile-app',
  templateUrl: 'mobile-app.html'
})
export class MobileAppPage {
  private searchTerm:string;
  private search:any;
  private user:any;
  private _items:Array<any> = [];
  private _aitems:Array<any> = [];
  private _searchField:boolean = false;
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,public loader:LoadingController,
    public db:DatabaseComponent,public globalvars:GlobalVars)
    {
      this.user = this.globalvars.getUserdata()[0];
      // alert(this.user.id);
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
      let query = "select * from apps where userid='"+this.user.id+"'";
      this.db.exeQuery(query).then((res)=>{
        if(res.rows.length)
        {
          for (var i = 0; i < res.rows.length; i++)
          {            
            this._items.push({
              id:res.rows.item(i).id,
              appname:res.rows.item(i).appname,
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
      //this._aitems = [{appname:'Twitter'}];
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
          return (item.appname.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      } 
  }

  getIcon(icon)
  {
    return icon.toLowerCase()+'-logo';
  }

  _gotoMobileAppAdd(a:any="")
  {
    this.navCtrl.push(MobileAppAddPage,{id:a});
  }

  _delete(id)
  {
    let rmquery = "delete from apps where id='"+id+"'";
    this.db.exeQuery(rmquery).then((res)=>{
      let del = "delete from app_details where appid='"+id+"'";
      this.db.exeQuery(del).then((r)=>r).catch((err)=>err);
      let succ = this.alertCtrl.create({
          title: 'Success!',
          message: "Record deleted sucessfully.",
           buttons: [
              {
                text: 'Ok',
                handler: data => {
                  this.navCtrl.setRoot(MobileAppPage);
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
                  this.navCtrl.setRoot(MobileAppPage);
                }
              }]
        });
        fail.present();
    });
  }

  _delWebsite(id)
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
