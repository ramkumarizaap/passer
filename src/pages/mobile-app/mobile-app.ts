import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { HttpErrorResponse } from '@angular/common/http';
import {MobileAppAddPage} from "../mobile-app-add/mobile-app-add";

@Component({
  selector: 'page-mobile-app',
  templateUrl: 'mobile-app.html'
})
export class MobileAppPage {
  private _apps:any;
  private searchTerm:string;
  private _searchField:boolean = false;
  constructor(
    public navCtrl: NavController) {
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
    this._apps = [
          {
            name:'Twitter',
            details:
            [
              {name:'1',password:'123',comments:'Login'},
              {name:'2',password:'456',comments:'App'},
            ]
          },
          {
            name:'Gmail',
            details:
            [
              {name:'1',password:'123',comments:'Login'},
              {name:'2',password:'456',comments:'App'},
            ]
          },
          {
            name:'Facebook',
            details:
            [
              {name:'1',password:'123',comments:'Login'},
              {name:'2',password:'456',comments:'App'},
            ]
          }
          ];
  }
  setFilteredItems(e)
  {
    this.clearFilter();
    let val = e.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '')
    {
      this._apps = this._apps.filter((item) => {
        return (item.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } 
  }

  getIcon(icon)
  {
    return icon.toLowerCase()+'-logo';
  }

  _gotoMobileAppAdd(a)
  {
    this.navCtrl.push(MobileAppAddPage,{id:a});
  }


}
