const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const SPOTIFY_AUTHORIZE_ENDPOINT = "https://accounts.spotify.com/authorize";
const REDIRECT_URI = process.env.REDIRECT_URI;
const SPACE_DELIMITER = "%20";
const SCOPES = [
    "user-top-read",
    "user-read-private",
    "user-library-read",
    "playlist-read-private",
];
const SCOPES_URL_PARAM = SCOPES.join(SPACE_DELIMITER);
module.exports = {CLIENT_ID, CLIENT_SECRET, SPOTIFY_AUTHORIZE_ENDPOINT, REDIRECT_URI, SCOPES, SCOPES_URL_PARAM}