import { TransactionPage } from './../transaction/transaction';
import { Coin2Service } from './../../services/coin2.service';
import { Coin1Service } from './../../services/coin1.service';
import { PlayService } from './../../services/play.service';
import { MeaService } from './../../services/mea.service';
import { User } from './../../entities/user';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
const Web3 = require('web3');
declare var require: any
var web3:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userConnected:User =new User();
  ether:any = 0;
  cote:string=" \" ";
  play:any = 0;
  mea:any = 0;
  coin1:any = 0;
  coin2:any = 0;
 
  constructor(private coin2Service: Coin2Service,private coin1Service: Coin1Service,private playService: PlayService,private meaService: MeaService, private storage: Storage,public navParams: NavParams,public navCtrl: NavController) {
    if (typeof web3 !== 'undefined') {
      web3 = new Web3(web3.currentProvider);
    } else {
      // set the provider you want from Web3.providers
      web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/"));
    }
    storage.get('name').then((val) => {
      console.log('Your name is', val);
      this.userConnected.login=val;
    });
    storage.get('address').then((val) => {
      console.log('Your address is 9bal', val);
      this.userConnected.address=val;

    }).then((val)=>{
    console.log(this.userConnected.address,"héthi el val el thenia ta3 ladr");
      web3.eth.defaultAccount = web3.eth.accounts["\""+this.userConnected.address+"\""];
      web3.eth.getBalance( this.userConnected.address).then(res=>{

        this.ether = web3.utils.fromWei(res);
        console.log("Final ether",this.ether);
    })
    this.meaService.getBalance(this.userConnected.address).then(res1=>{
          this.mea=res1;
          console.log("Final mea",this.mea);
    });
    this.playService.getBalance(this.userConnected.address).then(res2=>{
      this.play=res2;
      console.log("Final play",this.play);
    });
    this.coin1Service.getBalance(this.userConnected.address).then(res3=>{
      this.coin1=res3;
      console.log("Final coin1",this.coin1);
    });
    this.coin2Service.getBalance(this.userConnected.address).then(res4=>{
      this.coin2=res4;
      console.log("Final coin2",this.coin2);
    });
    });
  
  }
  ionViewDidLoad(){

  }
  Transaction(currentBalance:any , coin:string){
    console.log(coin+" clicked balance:",currentBalance);
    this.navCtrl.push(TransactionPage,{
      coinName: coin,
      initialBalance: currentBalance
    });
  }
}
