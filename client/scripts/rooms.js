var Rooms = {

  add: function(newRoomName) {
    // let newRoomName = window.prompt('What would you like to call your chat room?');

    if (newRoomName !== null) {
      App.currentRoom = newRoomName;
      RoomsView.renderRoom(newRoomName);
      RoomsView.render(newRoomName);
    }
  }

};