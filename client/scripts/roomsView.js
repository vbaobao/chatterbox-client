var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
  },

  // room is object
  render: function(room) {

    var html = '';
    for (let roomName of Object.keys(room)) {
      html += `<option val="${roomName}">${roomName}</option>`;
    }

    RoomsView.$select.append(html);
  },

  // roomName is string
  renderRoom: function(roomName) {
    _.each(Rooms[roomName], function(message) {
      MessagesView.renderMessage(message);
    });

    RoomsView.$select.append(`<option val="${roomName}">${roomName}</option>`);
  }

};
