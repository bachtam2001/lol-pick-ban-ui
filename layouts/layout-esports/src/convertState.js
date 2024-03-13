import banImg from "./assets/ban_placeholder_1.svg";
// import topSplash from "./assets/top_splash_placeholder.svg";
// import jungSplash from "./assets/jung_splash_placeholder.svg";
// import midSplash from "./assets/mid_splash_placeholder.svg";
// import botSplash from "./assets/bot_splash_placeholder.svg";
// import supSplash from "./assets/sup_splash_placeholder.svg";

import leftSpalsh from "./assets/left_splash.png";
import rightSplash from "./assets/right_splash.png";

// const pickSplashes = [topSplash, jungSplash, midSplash, botSplash, supSplash];

const makeUrlAbsolute = (url, backendUrl) => {
  if (!url || !url.startsWith("/cache")) {
    return url;
  }

  const httpBackendUrl = backendUrl.replace("ws://", "http://").replace("wss://", "https://");
  const components = httpBackendUrl.split("/");

  return components[0] + "//" + components[2] + url;
};

const putPlaceholders = (team, backendUrl, side) => {
  for (let i = 0; i < 5; i++) {
    // Picks
    // Check if exists
    if (i >= team.picks.length) {
      // Does not exists, push
      team.picks.push({
        champion: {
          loadingImg: side === "blue" ? leftSpalsh : rightSplash,
        },
      });
    } else {
      // Exists, check!
      const pick = team.picks[i];
      if (!pick.champion || !pick.champion.loadingImg) {
        pick.champion = {
          loadingImg: side === "blue" ? leftSpalsh : rightSplash,
        };
        // pick.spell1 = null;
        // pick.spell2 = null;
      }

      if (pick.spell1) {
        pick.spell1.icon = makeUrlAbsolute(pick.spell1.icon, backendUrl);
      }
      if (pick.spell2) {
        pick.spell2.icon = makeUrlAbsolute(pick.spell2.icon, backendUrl);
      }
      pick.champion.loadingImg = makeUrlAbsolute(pick.champion.loadingImg, backendUrl);
      pick.champion.splashImg = makeUrlAbsolute(pick.champion.splashImg, backendUrl);
      pick.champion.squareImg = makeUrlAbsolute(pick.champion.squareImg, backendUrl);
    }

    // Bans
    if (i >= team.bans.length) {
      // Does not exist
      team.bans.push({
        champion: {
          squareImg: banImg,
        },
      });
    } else {
      const ban = team.bans[i];
      if (!ban.champion || !ban.champion.squareImg) {
        ban.champion = {
          squareImg: banImg,
        };
      }

      ban.champion.squareImg = makeUrlAbsolute(ban.champion.squareImg, backendUrl);
    }
  }
};

const convertState = (state, backendUrl) => {
  if (Object.keys(state).length !== 0) {
    putPlaceholders(state.blueTeam, backendUrl, "blue");
    putPlaceholders(state.redTeam, backendUrl, "red");
  }
  return state;
};

export default convertState;
