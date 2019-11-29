const {
  Client,
  Client: { plugin }
} = require("@botbind/klasa");

Client.defaultGuildSchema.add("filteredWords", "string", {
  default: [],
  array: true
});

module.exports = {
  [plugin]() {
    this.monitors.registerCoreDirectory(`${__dirname}/`);
  }
};
