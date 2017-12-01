var socket = io.connect();

socket.on('client-logout', function() {
    console.log('Logout ejecutado');
    logout();
});

socket.on('client-login', function (data) {
    console.log('Login ejecutado');
    login(data.user, data.password);
});

socket.on('client-changeStatus', function(data) {
    console.log('Change Status to: ' + data.status);
    changeAgentStatus(data.status);
});

socket.on('client-makeCall', function(data) {
    console.log('Calling to: ' + data.number);
    makeManualCall(data.number, data.campaignID, data.clientName, data.callKey);
});

socket.on('client-endCall', function() {
    console.log('Client End Call');
    endCall();
});

socket.on('client-scoreCall', function(data) {
    console.log('Client Score call ' + data.callID);
    scoreCall(data.dispositionID, data.callID);
});