import { Coin2Service } from './../../services/coin2.service';
import { MeaService } from './../../services/mea.service';
import { PlayService } from './../../services/play.service';
import { Coin1Service } from './../../services/coin1.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the TransactionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transaction',
  templateUrl: 'transaction.html',
})
export class TransactionPage {
  coinName:any;
  initialBalance:any;
  amount:any;
  to:string;
  constructor(private coin2Service: Coin2Service,private coin1Service: Coin1Service,private playService: PlayService,private meaService: MeaService,public navCtrl: NavController, public navParams: NavParams,private alertCtrl: AlertController) {
     this.coinName = navParams.get('coinName');
      this.initialBalance = navParams.get('initialBalance');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionPage');
  }
  confirmT(){
    if(this.to.length<"0xfB585fb0C4A6a5Cf13eBe9e5BAC80E7cf727Ee8f".length){
      let alert2 = this.alertCtrl.create({
        title: 'Incorrect address',
        subTitle: "Please insert a correct recepient address" ,
        buttons: ['Dismiss']
      });
      alert2.present();
    }else{
      let alert = this.alertCtrl.create({
        title: 'Confirm transaction',
        message: 'Send '+ this.amount+" "+this.coinName +' to '+this.to+'?',
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Yes!',
            handler: () => {
              switch (this.coinName) {
                case 'MeaCoin':
                   this.meaService.transfert(this.to,this.amount).then((val) => {
                    let alert2 = this.alertCtrl.create({
                      title: 'Transaction Result',
                      subTitle: val,
                      buttons: ['Dismiss']
                    });
                    alert2.present();
                   });
                    break;
                case 'PlayCoin':
                    this.playService.transfert(this.to,this.amount).then((val) => {
                      let alert2 = this.alertCtrl.create({
                        title: 'Transaction Result',
                        subTitle: val,
                        buttons: ['Dismiss']
                      });
                      alert2.present();
                     });
                    break;
                case 'Coin1':
                   this.coin1Service.transfert(this.to,this.amount).then((val) => {
                    let alert2 =  this.alertCtrl.create({
                      title: 'Transaction Result',
                      subTitle: val,
                      buttons: ['Dismiss']
                    });
                    alert2.present();
                   });
                    break;
                case 'Coin2':
                   this.coin2Service.transfert(this.to,this.amount).then((val) => {
                    let alert2 = this.alertCtrl.create({
                      title: 'Transaction Result',
                      subTitle: val,
                      buttons: ['Dismiss']
                    });
                    alert2.present();
                   });
                    break;
              }
            }
          }
        ]
      });
      alert.present();
    }
  }
  
}
