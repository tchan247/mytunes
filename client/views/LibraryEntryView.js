// LibraryEntryView.js - Defines a backbone view class for the entries that will
// appear within the library views.
// These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr class="songEntry"',
  songTitle: function(){ return this.model.attributes['title'].replace(/\s/g, "")},
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><button id="' + this.songTitle() + '">Like</button></td>'),
  initialize: function(){
    this.events['click #' + this.songTitle()] = function(){
      console.log(this);
    }
  },

  events: {
    'click': function() {
      this.model.enqueue();

    }
    // ,
    // 'click this.songTitle': function(){
    //   console.log("Liked");
    // }
  },
  generateId: function(){
    var id = 0;
    return function(){
      id++;
      return id;
    };
  },
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
