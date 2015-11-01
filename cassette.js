/**
* Cassette.js
**/

// Should play
// - Soundcloud
// - YouTube
// - Mixcloud
// - Mixcrate
// - Beatport

var Cassette = function(element, medium) {
  this.element = element;
  this.medium = medium;
  this.widget = null;

  this.events = {
    "ready": {
      "soundcloud": SC.Widget.Events.READY
    }
  };

  if ('soundcloud' === this.medium) {
    this.widget = SC.Widget(element);
  }
};

Cassette.prototype.on = function(event, callback) {
  var eventName = this.translateEvent(event);

  if ('soundcloud' === this.medium) {
    this.widget.bind(eventName, callback);
  }
};

Cassette.prototype.translateEvent = function(event) {
  return this.events[event][this.medium];
};

Cassette.prototype.play = function(event) {
  if ('soundcloud' === this.medium) {
    this.widget.play();
  }
};