import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  cordovaVr() {
    window['VrView'].playVideo("http://192.190.43.47/resources/Remo_L1Z3.mp4");
    // window['VrView'].playVideo("http://dncomputing.com/resources/ems/Remo_L1Z3.mp4", "TYPE_MONO", "FORMAT_DEFAULT");
  }

  /*cordovaVrLocal() {
    //window['VrView'].playVideoFromAppFolder();
    window['VrView'].playVideoFromAppFolder("file:///storage/emulated/0/Android/data/io.ionic.starter/files/Remo_L1Z3.mp4");
  }*/

  cordovaVrLocal() {
    //window['VrView'].playVideoFromAppFolder();
    window['VrView'].playVideoFromAppFolder("media/videos/congo.mp4");
  }

}
