import {Component} from "@angular/core";
import {NavParams,NavController, AlertController,LoadingController,/* ToastController, MenuController*/} from "ionic-angular";
import {BankPage} from "../bank/bank";
import {GlobalVars} from "../../providers/globalVars";
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';
import { DatabaseComponent } from '../../components/database/database';
import { BankList } from '../../providers/bankList';
@Component({
  selector: 'page-bank-add',
  templateUrl: 'bank-add.html'
})

export class BankAddPage
{
	private _bankForm:FormGroup;
  public banks;
  public editdata;
  public user;
  public bank = {id:'',holder_name:'',name:'',account_number:'',account_type:'',branch:'',ifsc:'',micr:''};
	private bvalue:Array<any> = [{
		
	}];
	constructor(public nav:NavController,public _formBuilder:FormBuilder,public bCtrl:BankList,
    public db:DatabaseComponent,public globalvars:GlobalVars,public loader:LoadingController,
    public alertCtrl:AlertController,public params:NavParams)
	{
    this.user = this.globalvars.getUserdata()[0];
    this.banks = bCtrl.list;
    this.editdata = this.params.get('id');
    if(this.editdata.id!='')
    {
      this.bank = this.editdata;
    }
		this._bankForm = this._formBuilder.group({
      id:[this.bank.id],
      holder_name:[this.bank.holder_name,Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])],
			name: [this.bank.name,
        Validators.compose([
          Validators.required
        ])
      ],
      account_number:[this.bank.account_number,
      		Validators.compose([
          	Validators.required,
          	Validators.pattern('[0-9]*'),
          	Validators.minLength(6)
        	])
      	],
    	account_type:[this.bank.account_type,
    		Validators.compose([
        	Validators.required,
      	])
    	],
    	branch:[this.bank.branch,
    		Validators.compose([
        	Validators.required,
      	])
    	],
    	ifsc:[this.bank.ifsc],
    	micr:[this.bank.micr],
    });
	}
	_cancel():void
	{
		this.nav.pop();
	}

  _submitBankForm():void
  {
    if(this._bankForm.valid)
    {
      let load = this.loader.create({
        content:"Please Wait..."
      });
      load.present();
      let formdata = this._bankForm.value;
      let query;
      if(formdata.id!= null)
      {
        query  = "update banks set holder_name='"+formdata.holder_name+"',account_number='"+formdata.account_number+"',"+
        "account_type='"+formdata.account_type+"',branch='"+formdata.branch+"',ifsc='"+formdata.ifsc+"',micr='"+formdata.micr+"' where id='"+formdata.id+"'";
      }
      else
      {
        query = "insert into banks(userid,holder_name,name,account_number,account_type,branch,ifsc,micr)"+
        "values('"+this.user.id+"','"+formdata.holder_name+"','"+formdata.name+"','"+formdata.account_number+"','"+formdata.account_type+"','"+formdata.branch+"','"+formdata.ifsc+"','"+formdata.micr+"')";
      }
      this.db.exeQuery(query).then((res)=>{
        let success = this.alertCtrl.create({
          title:"Success",
          message:"Bank saved successfuly",
          buttons:[
            {
              text:'Ok',
              handler:()=>{
                this.nav.setRoot(BankPage);
              }
            }
          ]
        });
        setTimeout(()=>{
          load.dismiss();
          success.present();
        },3000);
      })
      .catch((err)=>{
        let alert = this.alertCtrl.create({
          title:"Failed",
          message:"Something went Wrong!",
          buttons:[
            {
              text:'Ok',
              handler:()=>{
                this.nav.setRoot(BankPage);
              }
            }
          ]
        });
      });
    }
  }
}
