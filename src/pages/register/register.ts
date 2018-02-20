import {Component} from "@angular/core";
import {NavController,AlertController,LoadingController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexPatterns } from '../../providers/regexPatterns';
import { GlobalVars } from '../../providers/globalVars';
import { DatabaseComponent } from '../../components/database/database';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private _signupForm: FormGroup;
  private formdata;
  private user;
  private _passwordInputType: string = "password";
  private _passwordIcon : string = "eye-off";
  constructor(private db: DatabaseComponent,
      private _formBuilder: FormBuilder,
      public nav: NavController,
      public globalVars:GlobalVars,
      public alertCtrl:AlertController,
      public loader:LoadingController) {
    this._signupForm = this._formBuilder.group({
      //FULLNAME
       fullname: ["",
        Validators.compose([
          Validators.required,Validators.minLength(4)
        ])
      ],
      //EMAIL
      email: ["",
        Validators.compose([
          Validators.required,Validators.pattern(regexPatterns.email)
        ])
      ],
      //PASSWORD
      password: ["", Validators.compose([
          // ,Validators.pattern(regexPatterns.password),
          Validators.required,
          Validators.minLength(6)
        ])
      ]
    });
  }

  //Toggle Password
   private _toggleViewPassword(event: MouseEvent) {
    event.preventDefault();
    console.info("show password");
    if (this._passwordInputType === "password") {
      this._passwordInputType = "text";
      this._passwordIcon = "eye";
    } else {
      this._passwordIcon = "eye-off";
      this._passwordInputType = "password";
    };
  };


  // register and go to home page
  register()
  {
    if(this._signupForm.valid)
    {
      let signload = this.loader.create({
          content: "Loading..."
        });
      signload.present();
      this.formdata = this._signupForm.value;
      let query = "insert into users(fullname,email,password)"+
          "values('"+this.formdata.fullname+"','"+this.formdata.email+"','"+this.formdata.password+"')";
      this.db.exeQuery(query).then(res=>{
        let signup = this.alertCtrl.create({
          title: 'Success',
          message: "Registration done successfully.",
           buttons: [
              {
                text: 'Ok',
                handler: data => {
                  this.login();
                }
              }]
        });
       setTimeout(()=>{
           signload.dismiss();
           signup.present();
         },3000);
       }).catch(e=>{
         signload.dismiss();
          let errsignup = this.alertCtrl.create({
          title: 'Error',
          message: "Registration has not successfull.",
           buttons: ['Ok']
        });
        errsignup.present();
      });
    }
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
