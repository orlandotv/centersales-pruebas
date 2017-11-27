// JavaScript CORE API Methods

//username:String, password:String 
function login(username, password){
	document.getElementById("myTextArea").value += 'Begin - login: ' + username + '-' + password +'\n'
	JavaScriptPackageRemote.login(username, password)
	document.getElementById("myTextArea").value += 'End - login' +'\n'
}

//id:uint
function SetOnUnavailableStatus(unavailable){
	try{
		if( typeof null != unavailable ){
			document.getElementById("myTextArea").value += 'Begin - SetOnUnavailableStatus: ' + unavailable.text + '\n'
			JavaScriptPackageRemote.SetOnUnavailableStatus(unavailable)
			document.getElementById("myTextArea").value += 'End - SetOnUnavailableStatus' +'\n'
		}
	}
	catch(err){
		//alert(err.message)
	}
	
}
				
function SetReady(){
		//alert('SetReady')
		document.getElementById("myTextArea").value += 'Begin - SetReady' +'\n'
		JavaScriptPackageRemote.SetReady()	
		document.getElementById("myTextArea").value += 'End - SetReady' +'\n'	
}
	
//Id:uint
function transferCallToAgent(Id){		
	//alert('transferCallToAgent: ' + Id)
	document.getElementById("myTextArea").value += 'Begin - transferCallToAgent: ' + Id +'\n'
	JavaScriptPackageRemote.transferCallToAgent(Id)		
	document.getElementById("myTextArea").value += 'End - transferCallToAgent' +'\n'
}	

//Id:uint
function transferCallToACD(Id){
	//alert('transferCallToACD: ' + Id)
	document.getElementById("myTextArea").value += 'Begin - transferCallToACD: ' + Id +'\n'
	JavaScriptPackageRemote.transferCallToACD(Id)
	document.getElementById("myTextArea").value += 'End - transferCallToACD' +'\n'
}

function assistedDialNumber(Phone){	
	//alert('assistedDialNumber' + Phone)
	document.getElementById("myTextArea").value += 'Begin - assistedDialNumber: ' + Phone +'\n'
	JavaScriptPackageRemote.assistedDialNumber(Phone)
	document.getElementById("myTextArea").value += 'End - assistedDialNumber' +'\n'
}
function assistedXFerHangUP(){	
	//alert('assistedXFerHangUP')
	document.getElementById("myTextArea").value += 'Begin - assistedXFerHangUP: ' + '\n'
	JavaScriptPackageRemote.assistedXFerHangUP()
	document.getElementById("myTextArea").value += 'End - assistedXFerHangUP' +'\n'
}
function assistedXFerTransferCalls(){		
	document.getElementById("myTextArea").value += 'Begin - assistedXFerTransferCalls: ' +'\n'
	JavaScriptPackageRemote.assistedXFerTransferCalls()
	document.getElementById("myTextArea").value += 'End - assistedXFerTransferCalls' +'\n'
}
function assistedXFerUseMainCall(){		
	//alert('assistedXFerTransferCalls')
	document.getElementById("myTextArea").value += 'Begin - assistedXFerUseMainCall: ' +'\n'
	JavaScriptPackageRemote.assistedXFerUseMainCall()
	document.getElementById("myTextArea").value += 'End - assistedXFerUseMainCall' +'\n'
}
function assistedXFerUseSecondCall(){
	//alert('assistedDialNumber')
	document.getElementById("myTextArea").value += 'Begin - assistedXFerUseSecondCall: '+'\n'
	JavaScriptPackageRemote.assistedXFerUseSecondCall()
	document.getElementById("myTextArea").value += 'End - assistedXFerUseSecondCall' +'\n'
}
function assistedXFerMakeConference(){
	document.getElementById("myTextArea").value += 'Begin - assistedXFerMakeConference: '+'\n'
	JavaScriptPackageRemote.assistedXFerMakeConference()
	document.getElementById("myTextArea").value += 'End - assistedXFerMakeConference' +'\n'
}
function assistedXFerLeaveConference(){
	document.getElementById("myTextArea").value += 'Begin - assistedXFerLeaveConference: '+'\n'
	JavaScriptPackageRemote.assistedXFerLeaveConference()
	document.getElementById("myTextArea").value += 'End - assistedXFerLeaveConference' +'\n'
}
function assistedXFerDropFirstCall(){
	document.getElementById("myTextArea").value += 'Begin - assistedXFerDropFirstCall: '+'\n'
	JavaScriptPackageRemote.assistedXFerDropFirstCall()
	document.getElementById("myTextArea").value += 'End - assistedXFerDropFirstCall' +'\n'
}
function assistedXFerDropSecondCall(){
	document.getElementById("myTextArea").value += 'Begin - assistedXFerDropSecondCall: '+'\n'
	JavaScriptPackageRemote.assistedXFerDropSecondCall()
	document.getElementById("myTextArea").value += 'End - assistedXFerDropSecondCall' +'\n'
}
function secondCall(takeCall){	
	//alert('secondCall' + takeCall)
	document.getElementById("myTextArea").value += 'Begin - secondCall: ' + takeCall +'\n'
	JavaScriptPackageRemote.secondCall(takeCall)
	document.getElementById("myTextArea").value += 'End - secondCall' +'\n'
}

//Number:String
function transferCallToPhoneNumber(Number){
	//alert('transferCallToPhoneNumber: ' + Number)
	document.getElementById("myTextArea").value += 'Begin - transferCallToPhoneNumber: ' + Number +'\n'
	JavaScriptPackageRemote.transferCallToPhoneNumber(Number)	
	document.getElementById("myTextArea").value += 'End - transferCallToPhoneNumber' +'\n'
}

//callOutID:int, CallID:int, phoneNumber:String, campID:uint
//phoneNum:String, camID:Number, clientName:String, callKey:String
function makeManualCall(phoneNum,campID,clientName,callKey){
	//alert('makeManualCall: ' + callOutID + ' - ' + CallID + ' - ' + phoneNumber + ' - ' + campID)
	document.getElementById("myTextArea").value += 'Begin - makeManualCall: ' + phoneNum + ' - ' + campID + ' - ' + clientName + callKey + '\n'
	//JavaScriptPackageRemote.makeManualCall(callOutID, CallID, phoneNumber, campID)
	JavaScriptPackageRemote.makeManualCall(phoneNum, campID, clientName, callKey)
	document.getElementById("myTextArea").value += 'End - makeManualCall' +'\n'
}

function hangUpManualDial(){
	document.getElementById("myTextArea").value += 'Begin - hangUpManualDial\n';
	JavaScriptPackageRemote.hangUpManualDial();
	document.getElementById("myTextArea").value += 'End - hangUpManualDial\n';
}		

//aToAdministrator:String, aMessage:String
function sendChatMessage(administrator, message){
	//alert('SendChatMessage: ' + Administrator + ' - ' + Message)
	document.getElementById("myTextArea").value += 'Begin - sendChatMessage: ' + administrator + ' - ' + message +'\n'
	JavaScriptPackageRemote.sendChatMessage(administrator, message)
	document.getElementById("myTextArea").value += 'End - sendChatMessage' +'\n'
}	

function getChatAnswerTemplates(acdId){
	document.getElementById("myTextArea").value += 'Begin - getChatAnswerTemplates: ' + acdId + '\n';
	JavaScriptPackageRemote.getChatAnswerTemplates(acdId);
	document.getElementById("myTextArea").value += 'End - getChatAnswerTemplates' +'\n'
}

function GetLastCallData(){ //CenterwareCallData
	//alert('GetLastCallData')
	document.getElementById("myTextArea").value += 'Begin - GetLastCallData' +'\n'
	var arrayx = JavaScriptPackageRemote.GetLastCallData();
	document.getElementById("callIdTxt").value = arrayx.call_id
	document.getElementById("camIdTxt").value = arrayx.cam_id
	document.getElementById("dnisTxt").value = arrayx.
	document.getElementById("calKeyTxt").value = arrayx.cal_key
	document.getElementById("callTypeTxt").value = arrayx.typeCall
	document.getElementById("holdTxt").value = arrayx.holdTime
	document.getElementById("phoneTxt").value = arrayx.phoneNumber
	document.getElementById("queuedTxt").value = arrayx.IsQueueCall
	document.getElementById("portTxt").value = arrayx.port
	document.getElementById("calloutTxt").value = arrayx.callOut_id
	document.getElementById("wrapupTimeTxt").value = arrayx.wrapUpTime
	document.getElementById("myTextArea").value += 'End - GetLastCallData' +'\n'
}	

function getAgentID(){ //uint	
	document.getElementById("myTextArea").value += 'Begin - getAgentID' +'\n'	
	var agentId = JavaScriptPackageRemote.getAgentID();
	document.getElementById("agentIDTxt").value = agentId;
	document.getElementById("myTextArea").value += 'End - getAgentID - Out: ' + agentId +'\n'	
}

function getUsername(){ //String	
	document.getElementById("myTextArea").value += 'Begin - getUsername' +'\n'
	var username = JavaScriptPackageRemote.getUsername()
	document.getElementById("usernameTxt").value = username;
	document.getElementById("myTextArea").value += 'End - getUsername - Out: ' + username +'\n'
}

function getExtenstion(){ //String	
	document.getElementById("myTextArea").value += 'Begin - getExtenstion' +'\n';
	var ext = JavaScriptPackageRemote.getExtenstion();
	document.getElementById("extTxt").value = ext;
	document.getElementById("myTextArea").value += 'End - getExtenstion - Out: ' + ext +'\n';		
}
		
function holdCall(){
	//alert('holdCall')
	document.getElementById("myTextArea").value += 'Begin - holdCall' +'\n'
	JavaScriptPackageRemote.holdCall()
	document.getElementById("myTextArea").value += 'End - holdCall' +'\n'
	
	//Pongo en la caja de Texto Llamada "ponerHoldCall" el valor que trae la funcion JavaScriptPackageRemote.holdCall()
	document.getElementById("ponerHoldCall").value = 'Hold Call: ' + JavaScriptPackageRemote.holdCall();
}

function addMark(){
	//alert('holdCall')
	document.getElementById("myTextArea").value += 'Begin - addMark' +'\n';
	JavaScriptPackageRemote.recordingAddMark();
	document.getElementById("myTextArea").value += 'End - addMark' +'\n';
}

function setMute(enable){
	document.getElementById("myTextArea").value += 'Begin - setMute: ' + enable +'\n';
	JavaScriptPackageRemote.setMute(enable);
	document.getElementById("myTextArea").value += 'End - setMute\n';
}

//aDigit:String
function DTMFDigit(aDigit){
	//alert('DTMFDigit: ' + aDigit)
	document.getElementById("myTextArea").value += 'Begin - DTMFDigit: ' + aDigit +'\n'
	JavaScriptPackageRemote.DTMFDigit(aDigit)
	document.getElementById("myTextArea").value += 'End - DTMFDigit: ' +'\n'
	
	//Pongo en la caja de Texto Llamada "numeros" el numero que se tecleo
	document.getElementById("numeros").value = aDigit;
}	

function hangUpCall(option){
	//alert('hangUpCall')
	document.getElementById("myTextArea").value += 'Begin - hangUpCall' +'\n'
	JavaScriptPackageRemote.hangUpCall(option)
	document.getElementById("myTextArea").value += 'End - hangUpCall' +'\n'
	
	//Pongo en la caja de Texto Llamada "ponerHangUpCall" un texto de que se ejecuto el hangUpCall
	document.getElementById("ponerHangUpCall").value = 'Se Ejecuto hangUpCall';
}

function idleStart(IVRId){
	document.getElementById("myTextArea").value += 'Begin - idleStart: ' + IVRId +'\n';
	JavaScriptPackageRemote.idleStart(IVRId);
	document.getElementById("myTextArea").value += 'End - idleStart\n';
}

function CloseSession(){
	//alert('CloseSession')
	document.getElementById("myTextArea").value += 'Begin - CloseSession' +'\n'
	JavaScriptPackageRemote.CloseSession()
	document.getElementById("myTextArea").value += 'End - CloseSession' +'\n'

}

/* **********************************************************************
			REQUESTS 
********************************************************************** */


function getCallHistory(){
	//alert('CallHistory')
	document.getElementById("myTextArea").value += 'Begin - CallHistory' +'\n'
	JavaScriptPackageRemote.getCallHistory()
	document.getElementById("myTextArea").value += 'End - CallHistory' +'\n'
	
	//Pongo en la Caja de Texto Llamada "ponerGetCallHistory" 
	document.getElementById("ponerGetCallHistory").value ='Comenzo Call History';
}

function getUnavailables(){
	//alert('Unavailables')
	document.getElementById("myTextArea").value += 'Begin - Unavailables' +'\n'
	JavaScriptPackageRemote.getUnavailables()
	document.getElementById("myTextArea").value += 'End - Unavailables' +'\n'
}

function getunavalibaleHistory(){
	//alert('UnavailableHistory')
	document.getElementById("myTextArea").value += 'Begin - UnavailableHistory' +'\n'
	JavaScriptPackageRemote.getunavalibaleHistory()
	document.getElementById("myTextArea").value += 'End - UnavailableHistory' +'\n'
	
	//Poner En la Caja de Texto Llamada "ponerUnavailableHistory" 
	document.getElementById("ponerUnavailableHistory").value = 'Comenzo UnavailableHistory';
}

//outboundType:Boolean, idACD:uint = 0
function getTransfersOptions(outboundType, idACD){
	//alert('TransfersOptions: ' + outboundType + ' - ' + idACD)
	//alert(outboundType)
	document.getElementById("myTextArea").value += 'Begin - TransfersOptions: ' + outboundType + ' - ' + idACD +'\n'
	JavaScriptPackageRemote.getTransfersOptions(outboundType, idACD)
	document.getElementById("myTextArea").value += 'End - TransfersOptions' +'\n'
}

function getSupervisorsToChat(){
	//alert('SupervisorsToChat')
	document.getElementById("myTextArea").value += 'Begin - SupervisorsToChat' +'\n'
	JavaScriptPackageRemote.getSupervisorsToChat()
	document.getElementById("myTextArea").value += 'End - SupervisorsToChat' +'\n'
	
	//Pongo en la Caja de Texto Llamada "getAdministrator"
	document.getElementById("ponerGetAdministrator").value = 'Comenzo getSupervisorsToChat';
}

function getCampaignsRelated(){
	//alert('CampaignsRelated')
	document.getElementById("myTextArea").value += 'Begin - CampaignsRelated' +'\n'
	JavaScriptPackageRemote.getCampaignsRelated()
	document.getElementById("myTextArea").value += 'End - CampaignsRelated' +'\n'
}

//idACD:uint
function getACDDispositions(idACD){
	//alert('ACDDispositions: ' + idACD)
	document.getElementById("myTextArea").value += 'Begin - ACDDispositions: ' + idACD +'\n'
	JavaScriptPackageRemote.getACDDispositions(idACD)
	document.getElementById("myTextArea").value += 'End - ACDDispositions' +'\n'
}

//idDisposition:uint, callID:uint
function disposeACDCall(idDisposition, callID, subId){
	document.getElementById("myTextArea").value += 'Begin - disposeACDCall: ' + idDisposition + ' - ' + callID +'\n'
	JavaScriptPackageRemote.disposeACDCall(idDisposition, callID, subId);
	document.getElementById("myTextArea").value += 'End - disposeACDCall: ' +'\n'
}
/**Method that controls de volume of the internal sipphone
 * @param {Number} deviceType Audio device to be used (0 : Bocinas/Speakers | 1 : Microfono/Microphone)
 * @param {Number} xVol New volume value to be set in the device
 */
function controlVolume(deviceType,xVol){
    JavaScriptPackageRemote.controlVolume(deviceType,xVol) ;
}

//idDisposition:uint, callID:uint
function reprogramAcdCall(idACD, idDisposition, callID, dateCallBack, telephone, callKey, data1, data2, data3, data4, data5, existNum, subId){
	document.getElementById("myTextArea").value += 'Begin - disposeACDCall: ' + idDisposition + ' - ' + callID +'\n'
	JavaScriptPackageRemote.disposeACDCall(idDisposition, callID, subId);
	document.getElementById("myTextArea").value += 'End - disposeACDCall: ' +'\n'
}

//idCampaign:uint
function getCampaignDispositions(idCampaign){
	//alert('CampaignDispositions: ' + idCampaign)
	document.getElementById("myTextArea").value += 'Begin - CampaignDispositions: ' + idCampaign +'\n'
	JavaScriptPackageRemote.getCampaignDispositions(idCampaign)
	document.getElementById("myTextArea").value += 'End - CampaignDispositions' +'\n'
	
}

//idCampaign:uint, callOutID:Number
function getCampaignDispositionsAndNumbers(idCampaign,callOutID){
	//alert('CampaignDispositions: ' + idCampaign + ' - ' + callOutID)
	document.getElementById("myTextArea").value += 'Begin - CampaignDispositions: ' + idCampaign + ',' + callOutID + '\n'
	JavaScriptPackageRemote.getCampaignDispositionsAndNumbers(idCampaign,callOutID)
	document.getElementById("myTextArea").value += 'End - CampaignDispositions' +'\n'
}

//callOutID:Number
function getPhoneNumbers(callOutID){
	//alert('PhonesCall: ' + callOutID)
	document.getElementById("myTextArea").value += 'Begin - PhonesCall: ' + callOutID +'\n'
	JavaScriptPackageRemote.getPhoneNumbers(callOutID)
	document.getElementById("myTextArea").value += 'End - PhonesCall' +'\n'
}

function getIVRList(){
	document.getElementById("myTextArea").value += 'Begin - getIVRList' +'\n'
	JavaScriptPackageRemote.getIVRList();
	document.getElementById("myTextArea").value += 'End - getIVRList' +'\n'
}

//idDiposition:uint, idCampaign:uint, callID:uint
function disposeCampaingCall(idDiposition, idCampaign, callID, subId){
	document.getElementById("myTextArea").value += 'Begin - disposeCampaingCall: ' + idDiposition + ' - ' + idCampaign + ' - ' + callID +'\n'
	JavaScriptPackageRemote.disposeCampaingCall(idDiposition, idCampaign, callID, subId);
	document.getElementById("myTextArea").value += 'End - disposeCampaingCall' +'\n'
}

//idCampaign:uint, idDisposition:uint, callID:uint, dateCallBack:String, callOutID:int, telephone:String, customNumber:Boolean 
function reprogramCampaignCall(idCampaign, idDisposition, callID, dateCallBack, telephone, existingNumber, subId){
	document.getElementById("myTextArea").value += 'Begin - reprogramCampaignCall: ' + idCampaign + ' - '+ idDisposition +' - ' + callID + ' - ' + dateCallBack + ' - ' + telephone + ' - ' + existingNumber +'\n'
	JavaScriptPackageRemote.reprogramCampaignCall(idCampaign, idDisposition, callID, dateCallBack, telephone, existingNumber, subId);
	document.getElementById("myTextArea").value += 'End - reprogramCampaignCall' +'\n'
}

// chatId:uint, message:String
function sendClientChatMessage(chatId, message){
	document.getElementById("myTextArea").value += 'Begin - sendClientChatMessage: ' + chatId + ' - '+ message + '\n';
	JavaScriptPackageRemote.sendClientChatMessage(chatId, message);
	document.getElementById("myTextArea").value += 'End - sendClientChatMessage' +'\n';
}

// chatId:uint
function finishClientChatConversation(chatId){
	document.getElementById("myTextArea").value += 'Begin - finishClientChatConversation: ' + chatId + '\n';
	JavaScriptPackageRemote.finishClientChatConversation(chatId);
	document.getElementById("myTextArea").value += 'End - finishClientChatConversation' + '\n';
}

// chatId:uint, dispId:uint, subDispId:uint
function disposeClientChat(chatId, dispId, subDispId){
	document.getElementById("myTextArea").value += 'Begin - disposeClientChat: ' + chatId + ' - '+ dispId + ' - ' + subDispId + '\n';
	JavaScriptPackageRemote.disposeClientChat(chatId, dispId, subDispId);
	document.getElementById("myTextArea").value += 'End - disposeClientChat' + '\n';
}

/// ******** AFFECT BD ************

//callOutID:int, data1:String, data2:String, data3:String, data4:String, data5:String
function UpdateDataCall(callOutID, data1, data2, data3, data4, data5){
	//alert(callOutID)
	document.getElementById("myTextArea").value += 'Begin - UpdateDataCall: ' + callOutID + ' - ' + data1 + ' - ' + data2 + ' - ' + data3 + ' - ' + data4 + ' - ' + data5 +'\n'
	JavaScriptPackageRemote.UpdateDataCall(callOutID, data1, data2, data3, data4, data5)
	document.getElementById("myTextArea").value += 'End - UpdateDataCall' +'\n'
}

//aCurrentPassword:String, aNewPassword:String
function ChangePassword(aCurrentPassword, aNewPassword){	
	document.getElementById("myTextArea").value += 'Begin - ChangePassword: ' + aCurrentPassword + ' - ' + aNewPassword +'\n'
	JavaScriptPackageRemote.ChangePassword(aCurrentPassword, aNewPassword)
	document.getElementById("myTextArea").value += 'End - ChangePassword' +'\n'
}

//idACD:uint, idDisposition:uint, callID:uint, dateCallBack:String, telephone:String, callKey:String, data1:String, data2:String, data3:String, data4:String, data5:String, existNum:Boolean, subId:uint
function CallBackAcd(idCampaign, idDisposition, callID, dateCallBack, telephone, callKey, data1, data2, data3, data4, data5, existNum, subDis){
	document.getElementById("myTextArea").value += 'Begin - reprogramAcdCall: '+idCampaign+'-'+ idDisposition+'-'+callID+'-'+dateCallBack+'-'+telephone+'-'+callKey+'-'+data1+'-'+data2+'-'+data3+'-'+data4+'-'+data5+'-'+existNum+'-'+subDis+'\n'
	JavaScriptPackageRemote.reprogramAcdCall(idCampaign, idDisposition, callID, dateCallBack, telephone, callKey, data1, data2, data3, data4, data5, existNum, subDis)
	document.getElementById("myTextArea").value += 'End - reprogramAcdCall' +'\n'
}

//bStop:boolean
function recordingStopStart(bStart)
{
	document.getElementById("myTextArea").value += 'Begin - Stop: ' + bStart + '\n'
	JavaScriptPackageRemote.recordingStopStart(bStart)
	document.getElementById("myTextArea").value += 'End - Stop: \n'
}