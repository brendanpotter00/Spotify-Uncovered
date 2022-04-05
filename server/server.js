const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const SpotifyWebApi = require("spotify-web-api-node");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post(`/login`, (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: "http://localhost:3000/Spotify-Uncovered",
    clientId: "1e4ea2637287413d8a8146fb09ba3366",
    clientSecret: "4a0373d9258f472fb2079faf9493f8b2",
  });

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(400);
    });
});

app.listen(3001);
