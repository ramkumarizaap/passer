import {Component} from "@angular/core";
import {NavParams,NavController, AlertController,LoadingController,/* ToastController, MenuController*/} from "ionic-angular";
// import {WebsitePage} from "../websites/website";
import {CardsPage} from "../cards/cards";
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { regexPatterns } from '../../providers/regexPatterns';
import { BankList,YearList } from '../../providers/bankList';
import { DatabaseComponent } from "../../components/database/database";
import { GlobalVars } from "../../providers/globalVars";
@Component({
  selector: 'page-cards-add',
  templateUrl: 'cards-add.html'
})

export class CardsAddPage
{
	public color:string = "Silver";
	public banks=[];
	public years=[];
	public user;
	public editdata;
	public card = {id:'',card_type:'',bank:'',acc_no:'',month:'',year:'',pin:'',cvv:'',holder_name:'',card_pay:'',color:''};
	public _cardForm:FormGroup;
	constructor(public bank:BankList,public year:YearList,public _formBuilder:FormBuilder,
		public loader:LoadingController,public alertCtrl:AlertController,public db:DatabaseComponent,
		public globalvars:GlobalVars,public nav:NavController,public params:NavParams)
	{
		this.editdata = this.params.get('id');
		if(this.editdata.id!='')
		{
			this.card = this.editdata;
		}
		this.user = this.globalvars.getUserdata()[0];
		this.banks = bank.list;
		this.years = this.year.years();

		this._cardForm = this._formBuilder.group({
			id:[this.card.id],
			card_type: [this.card.card_type,Validators.compose([Validators.required])],
			bank: [this.card.bank,Validators.compose([Validators.required])],
      acc_no: [this.card.acc_no,Validators.compose([Validators.required,Validators.minLength(16)])],
      month:[this.card.month,Validators.compose([Validators.required])],
      year:[this.card.year,Validators.compose([Validators.required])],
      pin: [this.card.pin,Validators.compose([Validators.required,Validators.minLength(4)])],
      cvv: [this.card.cvv,Validators.compose([Validators.required,Validators.minLength(3)])],
      holder_name: [this.card.holder_name,Validators.compose([Validators.required,Validators.minLength(4)])],
      card_pay: [this.card.card_pay,Validators.compose([Validators.required])],
      color: [this.card.color,Validators.compose([Validators.required])],
		});
	}

	_changeColor(value)
	{
		console.log(value);
		this.color = value;
	}

	_submitCardForm()
	{
		console.log(this._cardForm.value);
		if(this._cardForm.valid)
		{
			let formdata = this._cardForm.value;
			let load = this.loader.create({
				content:"Please Wait..."
			});
			load.present();
			let query;
			if(formdata.id!='')
				query = "update cards set card_type='"+formdata.card_type+"',bank='"+formdata.bank+"',acc_no='"+formdata.acc_no+"',month='"+formdata.month+"',year='"+formdata.year+"',pin='"+formdata.pin+"',cvv='"+formdata.cvv+"',holder_name='"+formdata.holder_name+"',card_pay='"+formdata.card_pay+"',color='"+formdata.color+"' where id='"+formdata.id+"'";
			else	
			 query = "insert into cards(userid,card_type,bank,acc_no,month,year,pin,cvv,holder_name,card_pay,color) values('"+this.user.id+"','"+formdata.card_type+"','"+formdata.bank+"','"+formdata.acc_no+"','"+formdata.month+"','"+formdata.year+"','"+formdata.pin+"','"+formdata.cvv+"','"+formdata.holder_name+"','"+formdata.card_pay+"','"+formdata.color+"')";
			this.db.exeQuery(query).then((succ)=>{
				let alert = this.alertCtrl.create({
					title:'Success',
					message:"Card saved successfully.",
					buttons: [
            {
              text: 'Ok',
              handler: data => {
                this.nav.setRoot(CardsPage);
              }
            }]
				});
				setTimeout(()=>{
				load.dismiss();
				alert.present();
				},3000);
			})
			.catch((err)=>{
				load.dismiss();
				let fail = this.alertCtrl.create({
					title:'Failed!',
					message:"Card not saved.",
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
	}
}
