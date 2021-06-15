module.exports = {
  siteMetadata: {
    title: "Evil Corp Mainframe",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-theme-auth0",
      options: {
        domain: "evilcorporation.eu.auth0.com",
        clientID: "WnnlsFttKe4rhH0See7327AmpclT2alm",
        redirectUri:
          "https://evilcorporationmainframe.gatsbyjs.io/auth/callback",
        audience: "https://evil-corp-mainframe/api",
        scope: "openid profile email read:payment",
      },
    },
  ],
};
