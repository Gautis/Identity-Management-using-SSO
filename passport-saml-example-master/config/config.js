const fs = require('fs');
module.exports = {
  development: {
    app: {
      name: 'Passport SAML strategy example',
      port: process.env.PORT || 3000
    },
    passport: {
      strategy: 'saml',
      saml: {
        path: process.env.SAML_PATH || '/login/callback',
        entryPoint: process.env.SAML_ENTRY_POINT || 'https://portal.sso.ap-south-1.amazonaws.com/saml/assertion/NjY4MjMwNjUxNTU1X2lucy1hOGVhOWNmYWYzZTU3YTY0',
        issuer: 'passport-saml',
        cert: process.env.SAML_CERT || fs.readFileSync('sso_cert.pem','utf8')
      }
    }
  }
};
