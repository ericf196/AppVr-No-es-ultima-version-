import Dexie from 'dexie';

export class TransactionAppDB extends Dexie {
  public videos: Dexie.Table<IVideo, number>;

  constructor() {
    super("DataBase");
    this.version(1).stores({
      videos: '++id, title, subTitle, image , idVideo, type, urlLocal, urlStorage, favorite'
    });

    this.videos.mapToClass(Video);

  }
}

export interface IVideo {
  id?: number;
  title: string;
  subTitle: string;
  image: string;
  idVideo: string;
  type: string;
  urlLocal: string;
  urlStorage: string;
  favorite: number;
}


export class Video implements IVideo {

  id?: number;
  title: string;
  subTitle: string;
  image: string;
  idVideo: string;
  type: string;
  urlLocal: string;
  urlStorage: string;
  favorite: number;


  constructor(id?: number, title?: string, subTitle?: string, image?: string, idVideo?: string, type?: string, urlLocal?: string, urlStorage?: string, favorite?: number) {
    this.title = title;
    this.subTitle = subTitle;
    this.image = image;
    this.idVideo = idVideo;
    this.type = type;
    this.urlLocal = urlLocal;
    this.urlStorage = urlStorage;
    if (id)
      this.id = id;
    this.favorite = favorite;
  }

  save() {
    return db.videos.add(this);
  }

  static allVideos() {
    return db.videos.orderBy("id").toArray();
  }

  static circularVideos() {
    return db.videos.where("type").equalsIgnoreCase("circular").toArray();
  }

  static linealVideos() {
    return db.videos.where("type").equalsIgnoreCase("lineal").toArray();
  }

  static favoriteVideos() {
    return db.videos.where("favorite").equals(1).toArray();
  }

  static updateFavoriteVideos(objFav: any) {
    let value = objFav.favorite;
    (!value) ? value = 1 : value = 0;

    return db.videos.update(objFav.id, {favorite: value});
  }
}

export let db = new TransactionAppDB();
