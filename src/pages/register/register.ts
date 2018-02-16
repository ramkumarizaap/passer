import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {HomePage} from "../home/home";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { regexPatterns } from '../../providers/regexPatterns';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  private _signupForm: FormGroup;
  private formdata;
  private user;
  constructor(private sqlite: SQLite,private _formBuilder: FormBuilder,public nav: NavController) {
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

  // register and go to home page
  register()
  {
    if(this._signupForm.valid)
    {
      this.formdata = this._signupForm.value;
      this.sqlite.create({
        name: 'pwdmgr.db',
        location: 'default'
      })
        .then((db: SQLiteObject) => {
          db.executeSql('INSERT INTO users (name,email,password) values(?,?,?)',[this.formdata.fullname,this.formdata.email,this.formdata.password])
            .then(() => alert('Account created successfully.'))
            .catch(e => alert("Error: "+JSON.stringify(e)));

          db.executeSql('SELECT * FROM users',{}).then(res => {
             alert("Success: "+ JSON.stringify(res));
            // this.user = [];
              // for(var i=0; i<res.rows.length; i++) {
              //   this.user.push({
              //       id:res.rows.item(i).id,
              //       name:res.rows.item(i).name,
              //       email:res.rows.item(i).email,
              //       password:res.rows.item(i).password
              //     });
              //   alert("Data: "+ JSON.stringify(this.user));
              // }
              this.login();
          })
          .catch(e => alert("Error: "+JSON.stringify(e)));

        })
        .catch(e => alert("Error:"+JSON.stringify(e)));
     }     
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }
}
