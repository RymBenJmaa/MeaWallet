import { HomePage } from './../home/home';
import { User } from './../../entities/user';
import { UserService } from './../../services/user.service';
import { SignUpPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [UserService],

})
export class LoginPage {
  signupPage = SignUpPage;
  user :User = new User();
  constructor(public navCtrl: NavController, public navParams: NavParams, private service: UserService) {
  }
  signup()
  {
    this.navCtrl.push(SignUpPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
   
  }
  login(){
   
    this.service.login(this.user).subscribe(data => {
      console.log(data[0]);
       {if(data[0]==null) {
          alert("Creditentials doesn't exist");
          this.navCtrl.push(SignUpPage);
      } else {
        alert("Creditentials exist");
        this.navCtrl.push(HomePage);
      }
  
  }  err=>console.error(err);
       ()=>console.log("user loaded");
     });
    }
  
  

}
