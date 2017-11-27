$(document).ready(function() {
    $('#login').on('click', function(e) {
        login('pruebastam2', 'pruebastam2');
    });
    $('#status').on('click', function(e) {
        getAgentStatus('pruebastam2', 'pruebastam2');
    });
    $('#changeStatus').on('click', function(e) {
        changeAgentStatus(1);
    });
    $('#changeStatus2').on('click', function(e) {
        changeAgentStatus(2);
    });
});