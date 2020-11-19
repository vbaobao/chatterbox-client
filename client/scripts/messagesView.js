var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
  },

  render: function(data) {
    var html = '';
    for (var element of data) {
      html += MessageView.render(element);
    }
    MessagesView.$chats.append(html);
  }

};