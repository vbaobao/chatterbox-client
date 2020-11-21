var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.change(function() {
      // Add backbone escape here! might be reading $(this).val() as script within nameOfRoom
      var nameOfRoom = $(this).val();
      RoomsView.render(nameOfRoom);
      App.currentRoom = nameOfRoom;
    });

    RoomsView.$button.on('click', function() {
      let newRoomName = window.prompt('What would you like to call your chat room?');

      var escapedBackboneObject = new Backbone.Model({
        message: newRoomName
      });

      var escapedRoomName = escapedBackboneObject.escape('message');
      Rooms.add(escapedRoomName);
    });
  },

  // renders the roomview
  render: function(room) {
    MessagesView.clearChat();
    console.log('what is in the Rooms object', Rooms[room]);
    _.each(Rooms[room], function(message) {
      MessagesView.renderMessage(message);
    });
  },

  // generates drop down list to select room
  renderRoom: function(roomName) {

    RoomsView.$select.append(`<option val="${roomName}">${roomName}</option>`);
  }

};
