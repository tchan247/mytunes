// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',
  text: '',

  initialize: function(){
    this.model.on('change:currentSong', function(model){
      // this.el = this.el + ('<p>' + model.get('currentSong').title +'</p>');
      this.setSong(model.get('currentSong'));
      console.log(this.el)
    }, this);
  },

  events:{
    'ended': function () { this.model.ended() }
  },

  setSong: function(song){
    this.model = song;
    if(!this.model.get('url')){
      this.el.pause();
    }
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url') || '');
  }

});
