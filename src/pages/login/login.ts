import {Component} from "@angular/core";
import {NavController, AlertController,LoadingController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
import {RegisterPage} from "../register/register";
import {WebsitePage} from "../websites/website";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalVars } from '../../providers/globalVars';
import { regexPatterns } from '../../providers/regexPatterns';
import { DatabaseComponent } from '../../components/database/database';
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  private _loginForm: FormGroup;
  private formdata;
  private user:any;
  constructor(
    private globalvars:GlobalVars,
    public db:DatabaseComponent,
    private _formBuilder: FormBuilder,
    public nav: NavController, 
    private alertCtrl: AlertController,
    public menu: MenuController,
    private loader:LoadingController,
    public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
    this._loginForm = _formBuilder.group({
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

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login()
  {
    // if(this._loginForm.valid)
    // {
    //   let loading = this.loader.create({
    //     content: 'Loading...'
    //   });
    //   loading.present();
    //   this.formdata = this._loginForm.value;
    //   this.sqlite.create({
    //     name: 'pwdmgr.db',
    //     location: 'default'
    //   }).then((db: SQLiteObject) => {
    //     loading.dismiss();
    //      db.executeSql('SELECT * FROM users where email=? and password=?',[this.formdata.email,this.formdata.password])
    //        .then(res => {
    //          alert("Success: "+ JSON.stringify(res));
    //           if(res.rows.length>0)
    //           {
    //             this.user = res.rows.item(0);
    //             this.globalvars.setUserdata(JSON.stringify(this.user));
    //             alert("Data: "+ JSON.stringify(this.user));
    //             this.nav.setRoot(WebsitePage);
    //           }
    //           else
    //           {
    //             let alert = this.alertCtrl.create({
    //               title: 'Error',
    //               message: 'Login Failed!',
    //               buttons: ['Ok'],
    //             });
    //             alert.present();
    //             return false;
    //           }
    //      });

    //   },(err)=>{
    //     loading.dismiss();
    //     this.nav.setRoot(HomePage);
    //       let alert = this.alertCtrl.create({
    //         title: 'Error',
    //         message: 'Login Failed!',
    //         buttons: ['Ok'],
    //       });
    //       alert.present();
    //       // return false;
    //   });
    // }
    if(this._loginForm.valid)
    {
      let fields:Array<any> = ['email','password'];
      this.db.insertData('',this._loginForm.value,'users').then(res=>{
         alert("Success Insert: "+JSON.stringify(res));
      }).catch(e=>{
        alert("Error Insert: "+JSON.stringify(e));
      });
    }
  }

  forgotPass()
  {
    let forgot = this.alertCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
