var MessageView = {

  render: _.template(`
      
      <div class="chat">
        <div class="username">
          <%- typeof(username) === 'undefined' ? 'Anon' : username %>
        </div>
        <div><%- typeof(text) === 'undefined' ? '' : text %></div>
        <div><%-createdAt%></div>
      </div>
      
    `)

};