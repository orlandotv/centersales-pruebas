const faye = require('faye');
const jsforce = require('jsforce');
let clients = require('../handlers/clients.handler');

const salesforceController = {
    subscribePlatformEvents: (io, conn) => {
        const client = new faye.Client(conn.instanceUrl + '/cometd/40.0/');
        client.setHeader('Authorization', 'OAuth ' + conn.accessToken);
        client.subscribe('/event/Info_llamada__e', (data) => {
            eventsHandler(io, data);
        });
    },
    //Example: WIll be removed
    pushEvent: (req, res, next) => {
        try {
            let conn = new jsforce.Connection({ accessToken: req.session.accessToken, instanceUrl: req.session.instanceUrl});
            let infoLlamadaEvent = conn.sobject('Info_llamada__e');
            infoLlamadaEvent.create({
                "Id_Contacto__c" : "0012900000CztyfAAB"
            }, (err, ret) => {
                console.log(ret);
            });

            console.log(infoLlamadaEvent);
        } catch(err) {
            console.log(err);
            next(err);
        }
    }
};

function eventsHandler(io, data) {
    const clientID = clients.get(data.payload.Id_Usuario_Log__c);
    if(clientID) {
        const socket = io.sockets.connected[clientID];
        switch(data.payload.Estatus__c) {
            //Logout
            case '0': {
                console.log(data.event.replayId);
                console.log(socket.id);
                if(data.payload.Origen__c === 0) {
                    socket.emit('client-logout');
                }
                break;
            }
            //Login
            case '1': {
                console.log(data.event.replayId);
                console.log(socket.id);
                if(data.payload.Origen__c === 0) {
                    socket.emit('client-login', {user: data.payload.Usuario_Centerware__c, password: data.payload.Pass_Centerware__c });
                }
                break;
            }
            //Start Call
            case '2': {
                socket.emit('client-call', { });
                break;
            }
            //Didnt pick call
            case '3': {
                socket.emit('client-nopickupcall', { });
                break;
            }
            //Pick call
            case '4': {
                socket.emit('client-pickcall', { });
                break;
            }
            //End call
            case '5': {
                socket.emit('client-endcall', { });
                break;
            }
            //Score call
            case '6': {
                socket.emit('client-scorecall', { });
                break;
            }
            default: {
                break;
            }
        }
    }
}

module.exports = salesforceController;