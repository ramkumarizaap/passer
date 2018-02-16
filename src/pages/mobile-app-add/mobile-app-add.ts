import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
// import { HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, FormGroup,FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'page-mobile-app-add',
  templateUrl: 'mobile-app-add.html'
})
export class MobileAppAddPage {
  private _apps:any;
  private _appForm:FormGroup;
  private searchTerm:string;
  private details;
  private len;
  private appvalue;
  private _searchField:boolean = false;
  constructor(
    public navCtrl: NavController,public _formBuilder:FormBuilder,public params: NavParams) {
  	this._appForm = this._formBuilder.group({
			name: ["",
        Validators.compose([
          Validators.required,Validators.minLength(6)
        ])
      ],
      details: this._formBuilder.array([ this.createItem() ])
      });
  	this.appvalue = this.params.get('id');
  	if(this.appvalue)
		{
			let adetails: Array<any> = [];
			for(let i in this.appvalue.details){

				adetails.push(this._formBuilder.group(this.appvalue.details[i]));
			}

			this._appForm = this._formBuilder.group({
					id:[this.appvalue.id],
					name:[this.appvalue.name],
					details:this._formBuilder.array(adetails)
				});
			console.log(this._appForm);
		}


  	this.len = this._appForm.get('details') as FormArray;
  }

  _cancel()
  {
    this.navCtrl.pop(); 
  }

  createItem(): FormGroup {
	  return this._formBuilder.group({
	    name: '',
	    password: '',
	    comments: ''
	  });
	}

	_addNew():void
	{
		this.details = this._appForm.get('details') as FormArray;
		console.log(this.details);
  	this.details.push(this.createItem());
	}

	private _removeItem(i):void
	{
		this.details = this._appForm.get('details') as FormArray;
		console.log(i);
		// let index = this.items.indexOf(i);
		// console.log(index);
 	  //   if(index > -1){
      this.details.removeAt(i);
    // }
	}
}