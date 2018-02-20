import {Component} from "@angular/core";
import {NavController, AlertController,LoadingController,  MenuController} from "ionic-angular";
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
  public _items;
  public _details;
  private users:any;
  private _passwordInputType: string = "password";
  private _passwordIcon : string = "eye-off";
  constructor(
    private globalvars:GlobalVars,
    public db:DatabaseComponent,
    private _formBuilder: FormBuilder,
    public nav: NavController, 
    private alertCtrl: AlertController,
    public menu: MenuController,
    private loader:LoadingController) {
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

    this._items = [{id:'1',name:'Ram'},{id:'2',name:'Kumar'}];
    for (var i = 0; i < this._items.length; i++)
    {
      this._items.push({id:this._items[i].id,username:this._items[i].name});
    }
    alert(JSON.stringify(this._items));

  }

  // Password Toggle
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

  // go to register page
  register() {
    this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  login()
  {
    if(this._loginForm.valid)
    {
      let logload = this.loader.create({
          content: "Loading..."
        });
      logload.present();
      let formdata = this._loginForm.value;
      let query = "select * from users where email='"+formdata.email+"' and password='"+formdata.password+"'";
      this.db.exeQuery(query).then(res=>{
          if(res.rows.length)
          {
            let user=[];
            user.push({
                id:res.rows.item(0).id,
                fullname:res.rows.item(0).fullname,
                email:res.rows.item(0).email,
                password:res.rows.item(0).password,
            });
            this.globalvars.setUserdata(JSON.stringify(user));
            setTimeout(()=>{            
             logload.dismiss();
             this.nav.setRoot(WebsitePage);
           },4000);
          }
          else
          {
            logload.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Failed!',
              message: 'Invalid Username or Password',
              buttons: ['Ok'],
            });
            alert.present();
            return false;
          }
     }).catch(e=>{
       logload.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Failed!',
            message: 'Invalid Username or Password',
            buttons: ['Ok'],
          });
          alert.present();
          return false;
      });
    }
  }

  forgotPass()
  {
   
  }
}
