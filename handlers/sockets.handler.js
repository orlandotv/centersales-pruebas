const faye = require('faye');
const jsforce = require('jsforce');
const salesforceAPI = require('../config/salesforce.api.config');

// 'Accion__c' --> Texto(100)   
// 'Calificacion__c' --> Número(2, 0) 
// 'Call_Key__c' --> Texto(250)  
// 'Campana__c' --> Texto(200) 
// 'Detalle__c' --> Texto(250)  
// 'Estatus__c' --> Texto(200)   
// 'Id_Contacto__c' --> Texto(200)  
// 'Id_Usuario_Log__c' --> Texto(200) 
// 'Nombre_Cliente__c' --> Texto(250)
// 'Numero_Telefono__c' --> Texto(200)
// 'Id_Call__c' --> Texto(250)
// 'Origen__c' --> 0 Salesforce - 1 Centerware //Texto(100)  
// 'Pass_Centerware__c' --> Texto(200)  
// 'Usuario_Centerware__c' --> Texto(250)

const socketHandler = {
    onLogin: (socket, session) => {
        console.log('onLogin');
        createEvent(session, {
            Accion__c: salesforceAPI.descripcionAccion.login,
            Calificacion__c: null,
            Call_Key__c: null,
            Campana__c: null,
            Detalle__c: 'Login Exitoso',
            Estatus__c: null,
            Id_Contacto__c: null,
            Id_Usuario_Log__c: socket.request.session.userID,
            Nombre_Cliente__c: null,
            Numero_Telefono__c: null,
            Id_Call__c: null,
            Origen__c: salesforceAPI.origen.centerware
        });
    },
    onLogout:(socket, session) => {
        console.log('onLogout');
        createEvent(session, {
            Accion__c: salesforceAPI.descripcionAccion.logout,
            Calificacion__c: null,
            Call_Key__c: null,
            Campana__c: null,
            Detalle__c: 'Logout Exitoso',
            Estatus__c: null,
            Id_Contacto__c: null,
            Id_Usuario_Log__c: socket.request.session.userID,
            Nombre_Cliente__c: null,
            Numero_Telefono__c: null,
            Id_Call__c: null,
            Origen__c: salesforceAPI.origen.centerware
        });
    },
    onAgentChangeStatus:(socket, session, data) => {
        console.log('onAgentChangeStatus: ' + data.status);
        createEvent(session, {
            Accion__c: salesforceAPI.descripcionAccion.changeStatus,
            Calificacion__c: null,
            Call_Key__c: null,
            Campana__c: null,
            Detalle__c: 'Cambio de Status',
            Estatus__c: data.status,
            Id_Contacto__c: null,
            Id_Usuario_Log__c: socket.request.session.userID,
            Nombre_Cliente__c: null,
            Numero_Telefono__c: null,
            Id_Call__c: null,
            Origen__c: salesforceAPI.origen.centerware
        });
    },
    onWrongNumber:(socket, session, data) => {
        console.log('onWrongNumber: ' + data.phone);
        createEvent(session, {
            Accion__c: salesforceAPI.descripcionAccion.wrongNumber,
            Calificacion__c: null,
            Call_Key__c: null,
            Campana__c: null,
            Detalle__c: 'Numero equivocado',
            Estatus__c: null,
            Id_Contacto__c: null,
            Id_Usuario_Log__c: socket.request.session.userID,
            Nombre_Cliente__c: null,
            Numero_Telefono__c: data.phone,
            Id_Call__c: null,
            Origen__c: salesforceAPI.origen.centerware
        });
    },
    onDialingNumber:(socket, session, callOutData) => {
        console.log('onDialingNumber: ' + JSON.stringify(callOutData));
        createEvent(session, {
            Accion__c: salesforceAPI.descripcionAccion.startCall,
            Calificacion__c: null,
            Call_Key__c: null,
            Campana__c: callOutData.camID,
            Detalle__c: 'Marcando...',
            Estatus__c: null,
            Id_Contacto__c: null,
            Id_Usuario_Log__c: socket.request.session.userID,
            Nombre_Cliente__c: null,
            Numero_Telefono__c: callOutData.phoneNumber,
            Id_Call__c: callOutData.call_id,
            Origen__c: salesforceAPI.origen.centerware
        });
    },
    onDialResult:(socket, session, data) => {
        console.log('onDialResult: ' + data.result);
        let accion;
        switch(data.result) {
            //Se contesto la llamada
            case '1': {
                accion = salesforceAPI.descripcionAccion.pickUpCall;
                break;
            }
            //Numero ocupado
            case '2': {
                break;
            }
            //Numero marcado no contesta
            case '3': {
                accion = salesforceAPI.descripcionAccion.noPickUpCall;
                break;
            }
            //El numero que se marco fue el de un Fax
            case '4': {
                break;
            }
            //No hay tono de marcado
            case '5': {
                break;
            }
            //El agente esta en otro estado
            case '8': {
                break;
            }
            //No hay servicio de telefonia
            case '10': {
                break;
            }
            //Contesto una contestadora automatica
            case '11': {
                break;
            }
            //El agente esta recibiendo una transferencia
            case '12': {
                break;
            }
            default: {
                break;
            }
        }
        createEvent(session, {
            Accion__c: accion,
            Calificacion__c: null,
            Call_Key__c: null,
            Campana__c: null,
            Detalle__c: 'Resultado de dialogo',
            Estatus__c: null,
            Id_Contacto__c: null,
            Id_Usuario_Log__c: socket.request.session.userID,
            Nombre_Cliente__c: null,
            Numero_Telefono__c: null,
            Id_Call__c: null,
            Origen__c: salesforceAPI.origen.centerware
        });
    },
    onEndCall:(socket, session) => {
        console.log('onEndCall');
        createEvent(session, {
            Accion__c: salesforceAPI.descripcionAccion.endCall,
            Calificacion__c: null,
            Call_Key__c: null,
            Campana__c: null,
            Detalle__c: 'Llamada finalizada',
            Estatus__c: null,
            Id_Contacto__c: null,
            Id_Usuario_Log__c: socket.request.session.userID,
            Nombre_Cliente__c: null,
            Numero_Telefono__c: null,
            Id_Call__c: null,
            Origen__c: salesforceAPI.origen.centerware
        });
    },
    onDisposeApplied:(socket, session) => {
        console.log('onDisposeApplied');
        createEvent(session, {
            Accion__c: salesforceAPI.descripcionAccion.scoreCall,
            Calificacion__c: null,
            Call_Key__c: null,
            Campana__c: null,
            Detalle__c: 'Calificar llamada',
            Estatus__c: null,
            Id_Contacto__c: null,
            Id_Usuario_Log__c: socket.request.session.userID,
            Nombre_Cliente__c: null,
            Numero_Telefono__c: null,
            Id_Call__c: null,
            Origen__c: salesforceAPI.origen.centerware
        });
    }
};

function createEvent(session, values) {
    let event = getEventObject(session);
    event.create(values, eventCallback);
}

function getEventObject(session) {
    let conn = new jsforce.Connection({ accessToken: session.accessToken, instanceUrl: session.instanceUrl });
    return conn.sobject('Info_llamada__e');
}

function eventCallback(err, ret) {
    console.log(ret);
}

module.exports = socketHandler;