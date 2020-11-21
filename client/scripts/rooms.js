var Rooms = {

  add: function(newRoomName) {
    console.log('inside of Rooms.add, you are a function');
    if (newRoomName !== null) {
      App.currentRoom = newRoomName;
      RoomsView.renderRoom(newRoomName);
      RoomsView.render(newRoomName);
    }
  }

};

