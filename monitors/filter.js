const { Monitor } = require("@botbind/klasa");

module.exports = class extends Monitor {
  constructor(...args) {
    super(...args, {
      ignoreOthers: false,
      ignoreBots: false,
      ignoreEdits: false
    });
  }

  async run(msg) {
    if (!msg.guild) return;

    const { content } = msg;
    if (!content || !content.length) return;

    const filteredWords = msg.guild.settings.get("filteredWords");
    if (!filteredWords || !filteredWords.length) return;

    // If they said a filtered word, this variable will be equal to that word.
    const hitTheFilter = filteredWords.find(word =>
      content.includes(word.toLowerCase())
    );
    if (!hitTheFilter) return;

    if (msg.deletable) msg.delete();
  }
};
