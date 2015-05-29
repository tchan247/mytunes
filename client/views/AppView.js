// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});
    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'

  },

  //   setInterval(function(){
  //       console.log(this.playerView.el.currentTime);
  //       if(this.playerView.el.ended){
  //         this.model.set('currentSong', this.model.get('songQueue').get());
  //       }


  //     }.bind(this), 1000);
  // },
  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.songQueueView.$el,
      this.libraryView.$el
    ]);
  }

});

