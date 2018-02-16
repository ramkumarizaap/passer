import {Component} from "@angular/core";
import {NavParams,NavController, AlertController,LoadingController,/* ToastController, MenuController*/} from "ionic-angular";
// import {WebsitePage} from "../websites/website";
// import {RegisterPage} from "../register/register";
// import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';
// import { GlobalVars } from '../../providers/globalVars';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})

export class CardsPage
{
	private cno:string="4111897865921234";
	constructor()
	{

	}

	convertStr(string)
	{
		let str:string = string.substr(4,10);
		console.log(str);
		return string.substr(0,4) + str.replace(str," **** **** ") + string.substr(12,15);
	}
}
