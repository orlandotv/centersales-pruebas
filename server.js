const path = require('path');
const faye = require('faye');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const errorHandlers = require('./handlers/error.handler');
const socketHandler = require('./handlers/sockets.handler');
const routes = require('./routes/index');
const salesforceController = require('./controllers/salesforce.controller');
const sessionMidleware = session({
	secret: 'mySecret',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 720 * 60 * 1000 //12 hours
	}
});
const bayeux = new faye.NodeAdapter({mount: '/faye', timeout: 45});
let clients = require('./handlers/clients.handler');

bayeux.attach(server);
bayeux.on('disconnect', function(clientId) {
    console.log('Bayeux server disconnect');
});

// view engine setup
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'pug'); 

app.set('socketio', io);

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(sessionMidleware);

app.use('/', routes);

io.use((socket, next) => { sessionMidleware(socket.request, {}, next); });
io.on('connection', (socket) => {
	if(socket.request.session.userID) {
		clients.set(socket.request.session.userID, socket.id);
	}
	socket.on('disconnect', () => {
		clients.delete(socket.request.session.userID);
	});

	socket.on('server-onLogin', socketHandler.onLogin.bind(null, socket, socket.request.session));

	socket.on('server-onLogout', socketHandler.onLogout.bind(null, socket, socket.request.session));
});

app.use(errorHandlers.developmentErrors);

app.set('port', (process.env.PORT || 8080));

server.listen(app.get('port'), () => {
	console.log(`Express running on port ${server.address().port}`);
	salesforceController.subscribePlatformEvents(io);
});
