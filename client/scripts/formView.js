var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    console.log('click!');

    let message = {
      username: App.username,
      text: $('#message').val(),
      roomname: App.currentRoom
    };

    let formSuccess = function() {
      $('#message').val('');
      App.fetch(function() { RoomsView.render(App.currentRoom); });
    };

    // Come back here to figure how to render for current room

    Parse.create(message, formSuccess);
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};