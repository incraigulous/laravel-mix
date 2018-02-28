let JavaScript = require('./JavaScript');

class Preact extends JavaScript {
    dependencies() {
        return ['babel-preset-preact'].concat(super.dependencies());
    }

    register(entry, output) {
        Config.preact = true;

        return super.js(entry, output);
    }
}

module.exports = Preact;