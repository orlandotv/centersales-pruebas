const jsforce = require('jsforce');
const config = require('../config/config');
const oauth2 = new jsforce.OAuth2({
    loginUrl : config.logInUrlDev,
    clientId : config.clientId,
    clientSecret : config.clientSecret,
    redirectUri : config.redirectUri
});

const authController = {
    authLogin: (req, res, next) => {
        res.redirect(oauth2.getAuthorizationUrl({ scope : 'api id web' }));
    },
    authCallback: (req, res, next) => {
        const conn = new jsforce.Connection({ oauth2 : oauth2 });
        const code = req.param('code');
        conn.authorize(code, (err, userInfo) => {
            if (err) { 
                next(err); 
            }

            req.session.userID = userInfo.id;
            req.session.accessToken = conn.accessToken;
            req.session.refreshToken = conn.refreshToken;
            req.session.instanceUrl = conn.instanceUrl;

            res.redirect('/');
        });
    },
    checkSession: (req, res, next) => {
        if(!req.session.accessToken || !req.session.instanceUrl) {
            return res.redirect('/oauth2/auth');
        }

        next();
    }
}

module.exports = authController;