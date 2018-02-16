import {Component} from "@angular/core";
import {NavParams,NavController, AlertController,LoadingController,/* ToastController, MenuController*/} from "ionic-angular";
// import {WebsitePage} from "../websites/website";
// import {RegisterPage} from "../register/register";
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
// import { regexPatterns } from '../../providers/regexPatterns';
// import { GlobalVars } from '../../providers/globalVars';
// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@Component({
  selector: 'page-bank-add',
  templateUrl: 'bank-add.html'
})

export class BankAddPage
{
	private _bankForm:FormGroup;
	private bvalue:Array<any> = [{
		
	}];
	constructor(public nav:NavController,public _formBuilder:FormBuilder)
	{
		this._bankForm = this._formBuilder.group({
			name: ["",
        Validators.compose([
          Validators.required
        ])
      ],
      account_number:["",
      		Validators.compose([
          	Validators.required,
          	Validators.pattern('[0-9]*'),
          	Validators.minLength(6)
        	])
      	],
    	account_type:["",
    		Validators.compose([
        	Validators.required,
      	])
    	],
    	branch:["",
    		Validators.compose([
        	Validators.required,
      	])
    	],
    	ifsc:[""],
    	micr:[""],
    });
	}
	_cancel():void
	{
		this.nav.pop();
	}
}
