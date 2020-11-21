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
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      Messages.results = [...data.results];
      for (var element of Messages.results) {
        if (Rooms[element.roomname] === undefined) {
          Rooms[element.roomname] = [];
          Rooms[element.roomname].push(element);
        } else {
          Rooms[element.roomname].push(element);
        }
      }
      // MessagesView.render(Messages.results);
      _.each(Messages.results, function(message) {
        MessagesView.renderMessage(message);
      });

      for ( let roomName of Object.keys(Rooms)) {
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
