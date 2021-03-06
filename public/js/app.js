/**
 * @jsx React.DOM
 */
var socket = io.connect();

var Messages = [];

var MessagePicture = React.createClass({
  render: function() {
    return (
      <img src={this.props.picture} class="img-responsive img-inside"/>
    )
  }
});

var Message = React.createClass({
    render: function () {
        return (
            <div class="message">
                <div class="row">
                    <div class="col-xs-1">
                        <img src={this.props.picture} class="img-responsive"/>
                    </div>
                    <div class="col-xs-11">
                        {this.props.messageImage ? <MessagePicture picture={this.props.messageImage}/> : null}
                        <strong class="username">{this.props.user}</strong>
                        :
                        <div dangerouslySetInnerHTML={{__html: this.props.text}}></div>
                    </div>
                </div>
                <div class="clearfix"></div>
            </div>
        )
    }
});

var UsersOnline = React.createClass({
  render: function() {
    return (
      <div class="online-users">
        <strong>{this.props.count}</strong><br/> usuários ativos
      </div>
    )
  }
});

var MessageList = React.createClass({
    render: function () {
        var renderMessage = function (message) {
            return <Message user={message.user} text={message.text} picture={message.picture} messageImage={message.messageImage} />
        }
        return (
            <div class='messages step1' id='msgcontainer'>
				{ this.props.messages.map(renderMessage)}
            </div>
        );
    }
});

var MessageForm = React.createClass({

    getInitialState: function () {
        return {text: ''};
    },

    handleSubmit: function (e) {
        e.preventDefault();
        var message = {
            user: this.props.user,
            text: this.state.text,
            picture: this.props.picture
        }
        this.props.onMessageSubmit(message);
        this.setState({text: ''});
    },

    changeHandler: function (e) {
        this.setState({text: e.target.value});
    },

    render: function () {
        return (
            <div class='message_form' id="msgform">
                <form onSubmit={this.handleSubmit}>
                    <input autoFocus type="text" onChange={this.changeHandler} value={this.state.text} placeholder="Qual sua dúvida, jovem?" />
                </form>
            </div>
        );
    }
});

var ChatApp = React.createClass({

    getInitialState: function () {

        socket.on('init', this.initialize);
        socket.on('server:answer', this.serverResponse);
        socket.on('send:message', this.messageRecieve);
        socket.on('user:join', this.userJoined);
        socket.on('user:left', this.userLeft);

        return {
            users: [],
            messages: [],
            text: '',
            maxMessages: 2,
            robotPicture: '/img/robot.jpg',
            robotName: 'Mocha',
            picture: '/img/user.png'
        };
    },

    initialize: function (data) {
        this.appendMessage(
          this.state.robotName,
          'Olá ' + data.name + ', digite sua dúvida no campo abaixo!',
          this.state.robotPicture);

        this.setState({users: data.users, user: data.name});
    },

    serverResponse: function (message) {
        this.appendMessage(this.state.robotName, message, this.state.robotPicture);

        this.setState();
    },

    messageRecieve: function (message) {
        this.appendMessage(message.user, message.text, this.state.picture);

        this.setState();
    },

    userJoined: function (data) {
        this.state.users.push(data.name);

        var msg = data.name + ' Entrou na sala';

        this.appendMessage(this.state.robotName, msg, this.state.robotPicture);

        this.setState();
    },

    userLeft: function (data) {
        // Atualiza lista de usuarios
        this.state.users = data.users;

        var msg = data.name + ' Saiu';

        this.appendMessage(this.state.robotName, msg, this.state.robotPicture);

        this.setState();
    },

    handleMessageSubmit: function (message) {
        this.appendMessage(message.user, message.text, message.picture);

        this.setState();

        socket.emit('send:message', message);
    },

    removeOldMessages: function () {
        if (this.state.messages.length > this.state.maxMessages) {
            this.state.messages.shift();
        }
    },

    appendMessage: function (username, message, picture) {
        var response = message.response ? message.response : message;
        var messageImg = message.image ? message.image : null;

        this.state.messages.push({
            user: username,
            text: response,
            picture: picture,
            messageImage: messageImg
        });

        this.removeOldMessages();
    },

    render: function () {
        return (
            <div class="main">
              <UsersOnline count={this.state.users.length} />
              <div class="container">
                  <div class="row">
                      <div class="col-md-12">
                          <MessageList messages={this.state.messages} />
                      </div>
                  </div>
                  <nav class="navbar navbar-default navbar-fixed-bottom">
                      <div class="container">
                          <MessageForm onMessageSubmit={this.handleMessageSubmit} user={this.state.user} picture={this.state.picture} />
                      </div>
                  </nav>

              </div>
            </div>
        );
    }
});

React.renderComponent(<ChatApp/>, document.body);
