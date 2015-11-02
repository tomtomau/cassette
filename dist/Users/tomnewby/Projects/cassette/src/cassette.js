var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SC = require('SC');
var Cassette = (function () {
    function Cassette() {
    }
    Cassette.prototype.on = function (event, callback) {
        // @TODO?
        return this;
    };
    Cassette.prototype.play = function () {
        // @TODO: Abstract :(
        throw new Error('Abstract method');
        return this;
    };
    return Cassette;
})();
var SoundcloudCassette = (function (_super) {
    __extends(SoundcloudCassette, _super);
    function SoundcloudCassette(element) {
        this.widget = SC.Widget(element);
        _super.call(this);
    }
    SoundcloudCassette.prototype.play = function () {
        // Do something
        return this;
    };
    return SoundcloudCassette;
})(Cassette);
//function Cassette(element, medium) {
//  var cassette = null;
//
//  if ('soundcloud' === medium) {
//    cassette = new SoundcloudCassette(element, medium);
//
//  }
//
//  cassette.element = element;
//  cassette.medium = medium;
//  cassette.foo = [];
//  cassette.widget = null;
//
//  cassette.events = {
//    // Ready: Player is ready to start
//    "READY": {
//      "soundcloud": SC.Widget.Events.READY
//    },
//    // Playing: Play progress, some widgets fire this off periodically
//    "PLAYING": {
//      "soundcloud": SC.Widget.Events.PLAY_PROGRESS
//    },
//    // Play: Player begins
//    "PLAY": {
//      "soundcloud": SC.Widget.Events.PLAY
//    },
//    // Finish: Player has finished playing audio
//    "FINISH": {
//      "soundcloud": SC.Widget.Events.FINISH
//    },
//    // Pause: Player has been paused, somehow
//    "PAUSE": {
//      "soundcloud": SC.Widget.Events.PAUSE
//    }
//  };
//
//  return cassette;
//}
//
//Cassette.prototype.translateEvent = function(event) {
//
//  return this.events[event][this.medium];
//};
//
//SoundcloudCassette.__proto__ = Cassette;
//SoundcloudCassette.constructor = SoundcloudCassette;
//
//function SoundcloudCassette(element, medium) {
//  this.widget = SC.Widget(element);
//
//  return this;
//}
//
//SoundcloudCassette.prototype.on = function(event, callback) {
//  var eventName = this.translateEvent(event);
//
//  this.widget.bind(eventName, callback);
//
//  return this;
//};
//
//SoundcloudCassette.prototype.play = function(event) {
//  this.widget.play();
//}; 
