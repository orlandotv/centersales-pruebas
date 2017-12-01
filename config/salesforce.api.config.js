module.exports = {
    accion: 'Accion__c', //Texto(100)   
    calificacion: 'Calificacion__c', //Número(2, 0) 
    callKey: 'Call_Key__c', //Texto(250)  
    campana: 'Campana__c', //Texto(200) 
    detalle: 'Detalle__c', //Texto(250)  
    status: 'Estatus__c', //Texto(200)   
    contactoID: 'Id_Contacto__c', //Texto(200)  
    usuarioLogID: 'Id_Usuario_Log__c', //Texto(200) 
    nombreCliente: 'Nombre_Cliente__c', //Texto(250)
    telefono: 'Numero_Telefono__c', //Texto(200),
    callID: 'Id_call__c',
    origen: 'Origen__c', //0 Salesforce - 1 Centerware //Texto(100)  
    passwordCenterware: 'Pass_Centerware__c', //Texto(200)  
    usuarioCenterware: 'Usuario_Centerware__c', //Texto(250)
    descripcionAccion: {
        logout: '0',
        login: '1',
        startCall: '2',
        noPickUpCall: '3',
        pickUpCall: '4',
        endCall: '5',
        scoreCall: '6',
        changeStatus: '7',
        wrongNumber: '8'
    },
    origen: {
        salesforce: '0',
        centerware: '1'
    }
};