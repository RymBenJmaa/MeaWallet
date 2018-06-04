import { User } from './../../entities/user';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//var a='^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignUpPage {
user:User=new User();
a:string="@";
  constructor(private storage: Storage,public navCtrl: NavController, public navParams: NavParams,private service:UserService) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  signUpfct(){

    if(this.user.login!=null&&this.user.email!=null&&this.user.password!=null&&this.user.address!=null){
      this.service.signUp(this.user).subscribe(data => {
        this.storage.set('name', this.user.login);
        this.storage.set('address', this.user.address);
        this.navCtrl.push(HomePage);
        
        console.log(data);
        }, err => console.log(err) , 
         () => console.log("savedUser"));
    }else if(this.user.email==null){
      alert("Please insert a valid email");
    }
    else if(this.user.login==null){
      alert("Please insert a login");
    }else if (this.user.password==null){
      alert("Please insert a password");
    }else if (this.user.address==null){
      alert("Please insert an address");
    }else{
      alert("Please fill all the fields");
    }

  }

}
