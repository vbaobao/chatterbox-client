var Rooms = {

  /**
   * @param {string} newRoomName
   */
  add: function(newRoomName) {
    if (newRoomName !== null) {
      App.currentRoom = newRoomName;
      RoomsView.renderRoom(newRoomName);
      RoomsView.render(newRoomName);
    }
  }

};