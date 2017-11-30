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
// 'Origen__c' --> 0 Salesforce - 1 Centerware //Texto(100)  
// 'Pass_Centerware__c' --> Texto(200)  
// 'Usuario_Centerware__c' --> Texto(250)

const socketHandler = {
    onLogin: (socket, session) => {
        createEvent(session, {
            Accion__c: salesforceAPI.descripcionAccion.login,
            Calificacion__c: null,
            Call_Key__c: null,
            Campana__c: null,
            Detalle__c: 'Login Exitoso',
            Estatus__c: 3,
            Id_Contacto__c: null,
            Id_Usuario_Log__c: socket.request.session.userID,
            Nombre_Cliente__c: null,
            Numero_Telefono__c: null,
            Origen__c: salesforceAPI.origen.centerware
        });
    },
    onLogout:(socket, session) => {
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
            Origen__c: salesforceAPI.origen.centerware
        });
    },
    onAgentChangeStatus:(socket, session, status) => {
        createEvent(session, {
            Accion__c: salesforceAPI.descripcionAccion.changeStatus,
            Calificacion__c: null,
            Call_Key__c: null,
            Campana__c: null,
            Detalle__c: 'Cambio de Status',
            Estatus__c: status,
            Id_Contacto__c: null,
            Id_Usuario_Log__c: socket.request.session.userID,
            Nombre_Cliente__c: null,
            Numero_Telefono__c: null,
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