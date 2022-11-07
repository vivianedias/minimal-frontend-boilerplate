const path = require("path");

module.exports = {
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR", "en", "es"],
    localePath: path.resolve("./public/locales"),
    localeDetection: false,
  },
};
