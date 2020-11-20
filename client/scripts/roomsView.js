var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.change(function() {
      RoomsView.renderRoom($(this).val());
    });

    RoomsView.$button.on();
  },

  // room is object
  render: function(room) {
    //Switch to renderrooms
    var html = '';
    for (let roomName of Object.keys(room)) {
      html += `<option val="${roomName}">${roomName}</option>`;
    }

    RoomsView.$select.append(html);
  },

  // roomName is string
  renderRoom: function(roomName) {
    //switch to render
    // _.each(Rooms[roomName], function(message) {
    //   MessagesView.renderMessage(message);
    // });

    RoomsView.$select.append(`<option val="${roomName}">${roomName}</option>`);
  }

};
