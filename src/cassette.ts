declare var SC:any; // Magic

/**
* Cassette.js
**/

// Should play
// - Soundcloud
// - YouTube
// - Mixcloud
// - Mixcrate
// - Beatport


// Implement an abstract Cassette factory
// Should be no concept of medium in Cassette, only in SoundcloudCassette

interface EventObject {
    [index: string]: any;
}

interface CassetteInterface {
    on(event: string, callback: any): CassetteInterface
    play(): CassetteInterface
}

class Cassette implements CassetteInterface {
    on(event: string, callback: any) {

        throw new Error('Abstract method');
        return this;
    }
    play() {
        // @TODO: Abstract :(
        throw new Error('Abstract method');
        return this;
    }
}

class SoundcloudCassette extends Cassette {
    widget: any;

    static events: EventObject = {
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

    static translateEvent(event: string) : any {
        return this.events[event];
    }

    constructor(element: any) {
        this.widget = SC.Widget(element);
        super();
    }

    on(event: string, callback: any) {
        var eventName = SoundcloudCassette.translateEvent(event);
        this.widget.bind(eventName, callback);

        return this;
    }

    play() {
        // Do something
        this.widget.play();
        return this;
    }

    pause() {
        // Do something
        this.widget.pause();
        return this;
    }
}
