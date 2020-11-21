var Friends = {
  friendsList: [],

  initialize: function() {
    // $('#chats').on('click', '.username', Friends.toggleStatus);
    $('.username').on('click', Friends.toggleStatus);
  },

  toggleStatus: function() {
    console.log('IS CALLED');
    let newFriendUsername = this.outerText;
    Friends.friendsList.push(newFriendUsername);
    Friends.render(newFriendUsername);
  },

  render: function(newFriendUsername) {
    console.log($(`.username:contains('${newFriendUsername}')`));
    let isMyFriend = $(`.username:contains('${newFriendUsername}')`);
    for ( let message of isMyFriend) {
      message.style.backgroundColor = '#85C1E9';
      message.style.border = 'solid 3px #1A5276 ';
    }
  }

};