//Actions
function login(user, password) {
    JavaScriptPackageRemote.login(user, password);
}

function logout() {
    JavaScriptPackageRemote.CloseSession();
}

function getAgentStatus(agentStatus) {
    var agentId = JavaScriptPackageRemote.getAgentID();
    console.log(agentId);
}

function changeAgentStatus(id) {
    if(id === 1) {
        JavaScriptPackageRemote.SetReady();
    } else {
        JavaScriptPackageRemote.SetOnUnavailableStatus(id);
    }
}

//Return fuctions actions
function onLogin() {
    socket.emit('server-onLogin');
}

function onLogOut() {
    socket.emit('server-onLogout');
}