// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  // playlist: [],
  // addsong : function(song){
  //   playlist.push(song);
  // }

   play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }


});
