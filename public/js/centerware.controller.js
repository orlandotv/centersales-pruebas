//Actions
function login(user, password) {
    JavaScriptPackageRemote.login(user, password);
}

function logout() {
    JavaScriptPackageRemote.CloseSession();
}

function getAgentID() {
    var agentId = JavaScriptPackageRemote.getAgentID();
    console.log(agentId);
}

function changeAgentStatus(status) {
    if(status === 3) {
        JavaScriptPackageRemote.SetReady();
    } else {
        JavaScriptPackageRemote.SetOnUnavailableStatus(2);
    }
}

function makeManualCall(number, campaignID, clientName, callKey) {
    JavaScriptPackageRemote.makeManualCall(number, campaignID, clientName, callKey);
}

//Return fuctions actions
function onLogin() {
    socket.emit('server-onLogin');
}

function onLogOut() {
    socket.emit('server-onLogout');
}

function wrongNumber(phone) {
    console.log('Wrong number: ' + phone);
}

function onDialingNumber(callOutData) {
    console.log('Dialing number: '  + callOutData.call_id);
}

function onDialResult(callResult) {
    console.log('On Dial Result: ' + callResult.dialResult);
}

function onAgentStatusChange(agentStatus) {
    console.log('Agent Status: ' + agentStatus.status);
    socket.emit('server-onAgentChangeStatus', { status: agentStatus.status });
}

function onError(data) {
    console.log('Error: ' + JSON.stringify(data));
}