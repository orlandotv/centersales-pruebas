var socket = io.connect();

socket.on('client-logout', function() {
    logout();
    //alert('Logout ejecutado');
});

socket.on('client-login', function (data) {
    login(data.user, data.password);
    //alert('Login ejecutado');
});

socket.on('client-changeStatus', function(data) {
    changeAgentStatus(data.status);
    //alert('Change Status to: ' + data.status);
})