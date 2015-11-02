var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Cassette = (function () {
    function Cassette() {
    }
    Cassette.prototype.on = function (event, callback) {
        throw new Error('Abstract method');
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
    SoundcloudCassette.translateEvent = function (event) {
        return this.events[event];
    };
    SoundcloudCassette.prototype.on = function (event, callback) {
        var eventName = SoundcloudCassette.translateEvent(event);
        this.widget.bind(eventName, callback);
        return this;
    };
    SoundcloudCassette.prototype.play = function () {
        // Do something
        this.widget.play();
        return this;
    };
    SoundcloudCassette.prototype.pause = function () {
        // Do something
        this.widget.pause();
        return this;
    };
    SoundcloudCassette.events = {
        // Ready: Player is ready to start
        "READY": SC.Widget.Events.READY,
        // Playing: Play progress, some widgets fire this off periodically
        "PLAYING": SC.Widget.Events.PLAY_PROGRESS,
        // Play: Player begins
        "PLAY": SC.Widget.Events.PLAY,
        // Finish: Player has finished playing audio
        "FINISH": SC.Widget.Events.FINISH,
        // Pause: Player has been paused, somehow
        "PAUSE": SC.Widget.Events.PAUSE
    };
    return SoundcloudCassette;
})(Cassette);
