var socket = io.connect();

socket.on('client-logout', function() {
    logout();
    alert('Logout ejecutado');
});

socket.on('client-login', function (data) {
    login(data.user, data.password);
    alert('Login ejecutado');
});