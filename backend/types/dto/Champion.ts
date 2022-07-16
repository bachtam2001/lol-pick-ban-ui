import { Skin } from "./Skin";

export class Champion {
  id = 0;
  name = '';
  key? = '';
  splashImg = '';
  splashCenteredImg = '';
  loadingImg = '';
  squareImg = '';
  idName = '';
  currentSkin = new Skin();
  skins: Array<Skin> = [];
}
