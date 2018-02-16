import {Component} from "@angular/core";
import {NavParams,NavController, AlertController,LoadingController,/* ToastController, MenuController*/} from "ionic-angular";
// import {WebsitePage} from "../websites/website";
import {BankAddPage} from "../bank-add/bank-add";
// import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';
// import { GlobalVars } from '../../providers/globalVars';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@Component({
  selector: 'page-bank',
  templateUrl: 'bank.html'
})

export class BankPage
{
	constructor(public nav:NavController)
	{

	}
	_addBank():void
	{
		this.nav.push(BankAddPage);
	}
}
