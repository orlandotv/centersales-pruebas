$(document).ready(function() {
    $('#login').on('click', function(e) {
        login('pruebastam2', 'pruebastam2');
    });
    $('#agentID').on('click', function(e) {
        getAgentID();
    });
    $('#changeStatus3').on('click', function(e) {
        changeAgentStatus(3);
    });
    $('#changeStatus2').on('click', function(e) {
        changeAgentStatus(2);
    });
    $('#makecall').on('click', function(e) {
        var numeroLex = '0452221045638';
        var numeroOT = '0458120690919'; 
        makeManualCall(numeroLex, 58, 'Orlando', '100');
    });
});