import { Champion } from './Champion';

export class Skin {
  id = '';
  championId = '';
  num = 0;
  name = '';
  splashImg = '';
  splashCenteredImg = '';
  loadingImg = '';
  constructor(champion?: Champion) {
    if (champion === undefined) {
      return this;
    }
    this.id = champion.key + '000';
    this.championId = champion.id.toString();
    this.num = 0;
    this.name = 'Default';
    this.splashImg = champion.splashImg;
    this.loadingImg = champion.loadingImg;
    this.splashCenteredImg = champion.splashCenteredImg;
    return this;
  }
}
