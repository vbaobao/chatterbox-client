var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.change(function() {
      RoomsView.render($(this).val());
    });

    RoomsView.$button.on('click', function() {
      let newRoomName = window.prompt('What would you like to call your chat room?');
      Rooms.add(newRoomName);
    });
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

    RoomsView.$select.append(`<option val="${roomName}">${roomName}</option>`);
  }

};
