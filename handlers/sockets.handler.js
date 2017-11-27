const faye = require('faye');
const jsforce = require('jsforce');
const salesforceAPI = require('../config/salesforce.api.config');

const socketHandler = {
    onLogin: (socket, session) => {
        const event = getEventObject(session);
        event.create({
            Id_Usuario_Log__c: session.userID,
            Estatus__c: salesforceAPI.descripcionStatus.login,
            Origen__c: 1
        }, eventCallback);
    },
    onLogout:(socket, session) => {
        const event = getEventObject(session);
        event.create({
            Id_Usuario_Log__c: session.userID,
            Estatus__c: salesforceAPI.descripcionStatus.logout,
            Origen__c: 2
        }, eventCallback);
    }
};

function getEventObject(session) {
    let conn = new jsforce.Connection({ accessToken: session.accessToken, instanceUrl: session.instanceUrl });
    return conn.sobject('Info_llamada__e');
}

function eventCallback(err, ret) {
    console.log(ret);
}

module.exports = socketHandler;