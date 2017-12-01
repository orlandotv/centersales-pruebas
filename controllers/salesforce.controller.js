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
                if(data.payload.Origen__c === '0') {
                    socket.emit('client-makeCall', { number: data.payload.Numero_Telefono__c , campaignID: data.payload.Campana__c, clientName: data.payload.Nombre_Cliente__c, callKey: data.payload.Call_Key__c });
                }
                break;
            }
            //Didnt pick call
            case salesforceAPI.descripcionAccion.noPickUpCall: {
                if(data.payload.Origen__c === '0') {
                    socket.emit('client-noPickupCall', { });
                }
                break;
            }
            //Pick call
            case salesforceAPI.descripcionAccion.pickUpCall: {
                if(data.payload.Origen__c === '0') {
                    socket.emit('client-pickCall', { });
                }
                break;
            }
            //End call
            case salesforceAPI.descripcionAccion.endCall: {
                if(data.payload.Origen__c === '0') {
                    socket.emit('client-endCall');
                }
                break;
            }
            //Score call
            case salesforceAPI.descripcionAccion.scoreCall: {
                if(data.payload.Origen__c === '0') {
                    socket.emit('client-scoreCall', { dispositionID: data.payload.Calificacion__c, callID: data.payload.Id_call__c });
                }
                break;
            }
            case salesforceAPI.descripcionAccion.changeStatus: {
                if(data.payload.Origen__c === '0') {
                    socket.emit('client-changeStatus', { status: data.payload.Estatus__c });
                }
                break;
            }
            default: {
                break;
            }
        }
    }
}

module.exports = salesforceController;