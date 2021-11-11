


function  GoogleModule() {
    const { google } = require('googleapis');
    const CLIENT_ID = '968044425042-vp8o30f09jqojgl93gt6f1qoup8eltf9.apps.googleusercontent.com';
    const CLIENT_SECRET = 'ZvhjtwPvtqnb_4o3bTxwaTda';
    const SCOPES = 'https://www.googleapis.com/auth/drive.file'
    const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
    const REFRESH_TOKEN = '1//04JirMCYpIBVuCgYIARAAGAQSNwF-L9IrZ76eYu5biuYOV7KnFizC47UOS3RObRIW9DEXaR-vBsc5istUJxpYYHDkMDUU4pkePYc';

    const oauth2Client = new google.auth.OAuth2(
        CLIENT_ID,
        CLIENT_SECRET,
        REDIRECT_URI
        )
    oauth2Client.setCredentials({refresh_token: REFRESH_TOKEN})
    return oauth2Client
}

module.exports = GoogleModule;