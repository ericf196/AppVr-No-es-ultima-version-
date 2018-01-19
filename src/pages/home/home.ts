import {Component, ViewChild} from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import {ScreenOrientation} from "@ionic-native/screen-orientation";
import {TransactionAppDB} from "../../database";
import {Video, db, IVideo} from '../../database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private videosall: any;
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, private screenOrientation: ScreenOrientation, private transactionAppDB: TransactionAppDB) {

    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    var p = this.transactionAppDB;
    this.transactionAppDB.table('videos').count().then(function (count) {
      if (!count) {
        p.table('videos').add({
          title: 'Remo Egipto',
          subTitle: 'Prueba Sub Title',
          image: 'assets/imgs/BiciEgiptoFiltro.jpg',
          idVideo: 'nbxzL329Vyc',
          type: 'lineal',
          urlLocal: 'url/local',
          urlStorage: 'http://dncomputing.com/resources/ems/Remo_L1Z3.mp4',
          favorite: 0
        });
        p.table('videos').add({
          title: 'Remo Bosque',
          subTitle: 'Prueba Sub Title1',
          image: 'assets/imgs/Circular1.jpg',
          idVideo: 'nbxzL329Vyc',
          type: 'lineal',
          urlLocal: 'url/local1',
          urlStorage: 'http://dncomputing.com/resources/ems/Remo_L1Z3.mp4',
          favorite: 0
        });
        p.table('videos').add({
          title: 'Remo Pueblo ',
          subTitle: 'Prueba Sub Title2',
          image: 'assets/imgs/BiciPetraFiltro.jpg',
          idVideo: 'nbxzL329Vyc',
          type: 'lineal',
          urlLocal: 'url/local2',
          urlStorage: 'http://dncomputing.com/resources/ems/Remo_L1Z3.mp4',
          favorite: 0
        });
        p.table('videos').add({
          title: 'Bici Petra',
          subTitle: 'Prueba Sub Title3',
          image: 'assets/imgs/Circular1.jpg',
          idVideo: 'nbxzL329Vyc',
          type: 'lineal',
          urlLocal: 'url/local3',
          urlStorage: 'http://dncomputing.com/resources/ems/Remo_L1Z3.mp4',
          favorite: 0
        });
        p.table('videos').add({
          title: 'Bici Egipto',
          subTitle: 'Prueba Sub Title4',
          image: 'assets/imgs/BiciEgiptoFiltro.jpg',
          idVideo: 'nbxzL329Vyc',
          type: 'lineal',
          urlLocal: 'url/local4',
          urlStorage: 'http://dncomputing.com/resources/ems/Remo_L1Z3.mp4',
          favorite: 0
        });
        p.table('videos').add({
          title: 'Bici Desierto',
          subTitle: 'Prueba Sub Title5',
          image: 'assets/imgs/Circular2.jpg',
          idVideo: 'nbxzL329Vyc',
          type: 'lineal',
          urlLocal: 'url/local5',
          urlStorage: 'http://dncomputing.com/resources/ems/Remo_L1Z3.mp4',
          favorite: 0
        });
        p.table('videos').add({
          title: 'Entrenador personal Egipto ',
          subTitle: 'Prueba Sub Title6',
          image: 'assets/imgs/CircularEgiptoFiltro.jpg',
          idVideo: 'nbxzL329Vyc',
          type: 'circular',
          urlLocal: 'url/local6',
          urlStorage: 'http://dncomputing.com/resources/ems/Remo_L1Z3.mp4',
          favorite: 0
        });
      }
    });


    Video.allVideos().then(videos => {
      this.videosall=videos;
      //console.log(this.videosall);
    });

  }

}
