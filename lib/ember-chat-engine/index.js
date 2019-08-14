/*jshint node:true*/
var EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
  name: 'ember-chat-engine',
  lazyLoading: {
    enabled: true
  },
  isDevelopingAddon: function() {
    return true;
  }
});
