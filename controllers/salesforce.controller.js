const faye = require('faye');
const jsforce = require('jsforce');
const salesforceAPI = require('../config/salesforce.api.config');
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
        switch(data.payload.Accion__c) {
            //Logout
            case salesforceAPI.descripcionAccion.logout: {
                // console.log(data.event.replayId);
                // console.log(socket.id);
                if(data.payload.Origen__c === '0') {
                    socket.emit('client-logout');
                }
                break;
            }
            //Login
            case salesforceAPI.descripcionAccion.login: {
                // console.log(data.event.replayId);
                // console.log(socket.id);
                if(data.payload.Origen__c === '0') {
                    socket.emit('client-login', {user: data.payload.Usuario_Centerware__c, password: data.payload.Pass_Centerware__c });
                }
                break;
            }
            //Start Call
            case salesforceAPI.descripcionAccion.startCall: {
                socket.emit('client-call', { });
                break;
            }
            //Didnt pick call
            case salesforceAPI.descripcionAccion.noPickUpCall: {
                socket.emit('client-nopickupcall', { });
                break;
            }
            //Pick call
            case salesforceAPI.descripcionAccion.pickUpCall: {
                socket.emit('client-pickcall', { });
                break;
            }
            //End call
            case salesforceAPI.descripcionAccion.endCall: {
                socket.emit('client-endcall', { });
                break;
            }
            //Score call
            case salesforceAPI.descripcionAccion.scoreCall: {
                socket.emit('client-scorecall', { });
                break;
            }
            case salesforceAPI.descripcionAccion.changeStatus : {
                socket.emit('client-changeStatus', { status: data.payload.Estatus__c });
                break;
            }
            default: {
                break;
            }
        }
    }
}

module.exports = salesforceController;