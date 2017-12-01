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

function makeManualCall(phoneNumber, campaignID, clientName, callKey) {
    let callKeyAux = parseInt(callKey, 10);
    let campaignIDAux = campaignID;
    //JavaScriptPackageRemote.makeManualCall(phoneNumber, parseInt(campaignID), clientName, callKey);
    JavaScriptPackageRemote.makeManualCall(phoneNumber, callKeyAux, clientName, campaignIDAux);
}

function endCall() {
    JavaScriptPackageRemote.hangUpCall();
    socket.emit('server-onEndCall');
}

function scoreCall(dispositionID, callID) {
    JavaScriptPackageRemote.disposeACDCall(dispositionID, callID);
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
    socket.emit('server-wrongNumber', { phone: phone });
}

function onDialingNumber(callOutData) {
    console.log('Dialing number: ' + JSON.stringify(callOutData));
    socket.emit('server-onDialingNumber', { callOutData: callOutData });
}

function onDialResult(callResult) {
    console.log('On Dial Result: ' + callResult.dialResult);
    socket.emit('server-onDialResult', { dialResult: callResult.dialResult });
}

function errorOnDialProcess(data) {
    console.log('errorOnDialProcess:' + data);
}

function onAgentStatusChange(agentStatus) {
    console.log('Agent Status: ' + agentStatus.status);
    socket.emit('server-onAgentChangeStatus', { status: agentStatus.status });
}

function onError(data) {
    console.log('Error: ' + JSON.stringify(data));
}

function onDisposeApplied() {
    console.log('On dispose applied');
    socket.emit('server-onDisposeApplied');
}