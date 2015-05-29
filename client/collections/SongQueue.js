// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue,this);
    this.on('dequeue', this.dequeue,this);
    this.on('ended',this.playNext, this);
  },

  enqueue: function(song){
    if(this.length === 1){
      this.at(0).play();
    }
  },

  dequeue: function(song){
    if(this.at(0) === song){

      this.playNext();
    }
    else {
      this.remove(song);
    }
  },

  playNext: function() {
    this.shift();
    if(this.length < 1){
      this.trigger('stop');
    }
    else{
      this.playFirst();
    }

  },

  playFirst: function(){
    console.log(this.at(0));
    this.at(0).play();
  }
});
