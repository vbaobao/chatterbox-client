var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  renderMessage: function(data) {
    MessagesView.$chats.append(MessageView.render(data));
    Friends.initialize();
  },

  clearChat: function() {
    MessagesView.$chats.text('');
  }

};