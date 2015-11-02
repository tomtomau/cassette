# Cassette.js
A platform agnostic wrapper around common audio web embeds. Suggest features in GitHub issues!

```
var soundcloudFrame = document.getElementById("soundcloud-frame"),
// Create a new instance, passing the element and medium (SoundCloud, YouTube, etc.)
soundcloudCassette = new Cassette(soundcloudFrame, 'soundcloud');

soundcloudCassette.on('ready', function(){
	soundcloudCasstte.play();
});
```

## Events

### Ready:
- Soundcloud: **SC.Widget.Events.READY**

## API

### Play:
As described on box.

`cassette.play();`
`cassette.pause();`