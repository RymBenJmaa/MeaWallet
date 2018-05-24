import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../entities/user';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {
user:User=new User();
  constructor(public navCtrl: NavController, public navParams: NavParams,private service:UserService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  signUpfct(){
  this.service.signUp(this.user).subscribe(data => {
    this.navCtrl.push(HomePage);
    
    console.log(data);
    }, err => console.log(err) , 
     () => console.log("savedUser"));
  }

}
