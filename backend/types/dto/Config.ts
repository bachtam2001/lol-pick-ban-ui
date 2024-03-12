export class Config {
  teams = {
    "blueTeam": {
      "name": "Team Blue",
      "short": "BLUE",
      "score": 0,
      "coach": "Coach Blue",
      "color": "#2d58bd"
    },
    "redTeam": {
      "name": "Team Red",
      "short": "RED",
      "score": 0,
      "coach": "Coach Red",
      "color": "#f09b38"
    },
  };
  contentPatch = 'latest';
  contentCdn = 'https://ddragon.leagueoflegends.com/cdn';
  overwriteRecording = true;
}
