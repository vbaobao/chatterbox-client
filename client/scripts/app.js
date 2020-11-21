var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',
  currentRoom: '',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {

    $('select').empty();

    Parse.readAll((data) => {

      Messages.results = [...data.results];
      for (var element of Messages.results) {
        if (Rooms[element.roomname] === undefined) {
          Rooms[element.roomname] = [];
          Rooms[element.roomname].push(element);
        } else {
          if (!Rooms[element.roomname].includes(element)) {
            Rooms[element.roomname].push(element);
          }

        }
      }

      for (let roomName of Object.keys(Rooms)) {
        RoomsView.renderRoom(roomName);
      }

      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
