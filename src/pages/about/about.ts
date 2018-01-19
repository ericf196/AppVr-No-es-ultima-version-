import { Component } from '@angular/core';
import {NavController, AlertController, LoadingController} from 'ionic-angular';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {Video} from "../../database";
import {FileTransfer, FileTransferObject} from "@ionic-native/file-transfer";
import {File} from '@ionic-native/file';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  private videosCirculares: any;
  private fileTransfer: FileTransferObject = this.transfer.create();

  constructor(public loadingCtrl: LoadingController, public alertCtrl: AlertController, public navCtrl: NavController, private transfer: FileTransfer, private file: File,private screenOrientation: ScreenOrientation) {
    this.dataLoad();
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
  }


  addSrc(video: any): string {
    if (video.favorite) {
      return 'assets/imgs/yellow-star.png';
    } else {
      return 'assets/imgs/gray-star.png';
    }
  }


  showAgreement() {
    let confirm = this.alertCtrl.create({
      title: 'Desea Descargas este video?',
      message: 'Esta apunto de descargar el video podria tardar algunos minutos.',
      buttons: [
        {
          text: 'No Acepto',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Acepto',
          handler: () => {
            console.log('Agree clicked');
            let loader = this.loadingCtrl.create({
              content: "Espere el video se descargara a su dispositivo",
              duration: 3000
            });
            loader.present();
          }
        }
      ]
    });
    confirm.present();
  }

  download() {
    const url = 'http://dncomputing.com/resources/ems/Remo_L1Z3.mp4';
    this.fileTransfer.download(url, this.file.externalDataDirectory + 'Remo_L1Z3.mp4').then((entry) => {
      console.log('download complete: ' + entry.toURL());

      //this.downloadv = "" + this.file.externalDataDirectory;
    }, (error) => {
      //this.downloadv = error;
    });
  }

  dataLoad() {
    Video.circularVideos().then(videos => {
      this.videosCirculares = videos;
      console.log(this.videosCirculares);
    });
  }

  /*startVideo(video: any) {
    console.log("" + video);
    this.youtube.openVideo("" + video);
  }*/

  favorite(objFav: any) {
    Video.updateFavoriteVideos(objFav).then(updated => {
      if (updated) {
        console.log("Video was updated");
        this.dataLoad();
      } else
        console.log("Nothing was updated");
    });

    console.log("favorite about " + objFav.id);
    console.log("favorite about " + objFav.favorite);
  }

}
