var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.change(function() {
      RoomsView.render($(this).val());
    });

    RoomsView.$button.on();
  },

  // renders the roomview
  render: function(room) {
    MessagesView.clearChat();
    _.each(Rooms[room], function(message) {
      MessagesView.renderMessage(message);
    });

  },

  // generates drop down list to select room
  renderRoom: function(roomName) {
    //switch to render
    // _.each(Rooms[roomName], function(message) {
    //   MessagesView.renderMessage(message);
    // });

    RoomsView.$select.append(`<option val="${roomName}">${roomName}</option>`);
  }

};
