import {Injectable} from '@angular/core';
@Injectable()
export class GlobalVars {
  myGlobalVar:any;
  myKey:any;

  setUserdata(value) {
    this.myGlobalVar = localStorage.setItem('userData', value);
  }


  deleteUserdata() {
    this.myGlobalVar = localStorage.removeItem('userData');
  }

  getUserdata() {
  	this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
    return this.myGlobalVar;
  }

  getId() {
  	this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
      return this.myGlobalVar.id
  }
  getUserRole() {
    this.myGlobalVar = JSON.parse(localStorage.getItem('userData'));
    return this.myGlobalVar.role 
  }


  setAppdata() {
    let key = "Installed";
    this.myKey = localStorage.setItem('keyStore', key);
  }

   getAppdata() {
    this.myKey = localStorage.getItem('keyStore');
    return this.myKey;
  }

}