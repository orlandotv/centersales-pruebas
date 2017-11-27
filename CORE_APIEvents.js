// JavaScript CORE API Detect Functions
var TestOn = 1 //1-Use Test

function onLogin(){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='onLogin' + '\n'
	}
} 

function onLogOut(){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='onLogOut' + '\n'
	}
} 

function onSecondCallConected(){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='onSecondCallConected' + '\n'
	}
} 

function onSecondCall(phone){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='onSecondCall:' + phone + '\n'
	}
} 

function onUnavailableTypes(UnavailableStatus){
	//Array -- Elementos de tipo : UnavailableStatus
	//id:uint            //Example: UnavailableStatus[i].id
	//statusName:String
	//nAvaiable:String
	
	if(TestOn==1){ //Utiliza TestWindow
		for (i=0;i<UnavailableStatus.length;i++)
		{
			document.getElementById("myTextArea").value += 'id:' + UnavailableStatus[i].id + '\n'
			document.getElementById("notReadyList").options[i] = new Option( UnavailableStatus[i].statusName, UnavailableStatus[i].id)
		}
		document.getElementById("notReadyList").options[0].selected = true
		GetDataTest(1, UnavailableStatus, 0)
	}
}

function onUnavailableHistory(UnavailableStatusHistory){
	//Array -- Elementos de tipo : UnavailableStatusHistory
	//count:uint		//Example: UnavailableStatusHistory[i].count
	//total:String
	//accumulatedTime:String
	//maxTime:String
	//statusName:String
	
	//statusLog:Array
	UnavailableStatusHistory.statusLog
	//time:String		//Example: UnavailableStatusHistory[i].statusLog[j].type
	//hour:String      
	
	
	if(TestOn==1){ //Utiliza TestWindow
		GetDataTest(2, UnavailableStatusHistory)
	}
}

function onCallHistory(HistoryDataCall){
	//Array -- Elementos de tipo : HistoryDataCall
	//type:String			//Example: HistoryDataCall[i].type
	//hour:String			
	//telephone:String
	//campaignName:String
	//duration:String

	if(TestOn==1){ //Utiliza TestWindow
		GetDataTest(3, HistoryDataCall, 0)
	}
}

function onAdministrators(Administrators){
	//Array -- Elementos de tipo : String
	//Example: Administrators[i]
	
	if(TestOn==1)
	{ //Utiliza TestWindow
		/*for (i=0;i<Administrators.length;i++)
		{
			document.getElementById("myTextArea").value += 'id:' + Administrators[i] + '\n'
			document.getElementById("adminsCBox").options[i] = new Option( Administrators[i], Administrators[i])
		}*/
		document.getElementById("adminsCBox").options[0].selected = true
		GetDataTest(4, Administrators, 0)
	}
}

function onCampaigns(Campaigns){

	//Array -- Elementos de tipo : Campaign
	//id:uint      //Example: Campaigns[i].id
	//name:String 
	
	if(TestOn==1){ //Utiliza TestWindow
	for (i=0;i<Campaigns.length;i++)
		{
			document.getElementById("myTextArea").value += 'id:' + Campaigns[i].id + '\n'
			document.getElementById("camRelated").options[i] = new Option( Campaigns[i].name, Campaigns[i].id)
		}
		document.getElementById("camRelated").options[0].selected = true
		GetDataTest(5, Campaigns, 0)
	}
}

function onTransferOptions(transfersOptions){
	//Array -- Elementos de tipo : TransferAgent
	transfersOptions.agent
	//id:Number     //Example: transfersOptions.agent[i].id
	//name:String   
	if(TestOn==1)
	{ //Utiliza TestWindow
		if(transfersOptions.agent != null)
		{
			for (i=0;i<transfersOptions.agent.length.;i++)
			{
				document.getElementById("myTextArea").value += 'id:' + transfersOptions.agent[i].id + '\n'
				document.getElementById("agentOptions").options[i] = new Option( transfersOptions.agent[i].name, transfersOptions.agent[i].id)
			}
		}
		document.getElementById("agentOptions").options[0].selected = true
		if(transfersOptions.acds != null)
		{
			for (i=0;i<transfersOptions.acds.length.;i++)
			{
				document.getElementById("myTextArea").value += 'id:' + transfersOptions.acds[i].id + '\n'
				document.getElementById("acdOptions").options[i] = new Option( transfersOptions.acds[i].name, transfersOptions.acds[i].id)
			}
		}
		document.getElementById("acdOptions").options[0].selected = true
		if(transfersOptions.phones != null)
		{
			for (i=0;i<transfersOptions.phones.length.;i++)
			{
				document.getElementById("myTextArea").value += 'id:' + transfersOptions.phones[i].id + '\n'
				document.getElementById("phoneOptions").options[i] = new Option( transfersOptions.phones[i].name, transfersOptions.phones[i].id)
			}
		}
		document.getElementById("phoneOptions").options[0].selected = true
		GetDataTest(6, transfersOptions.agent, 0)
	}
	 
	//Array -- Elementos de tipo : TransferPhone
	transfersOptions.phones
	//id:Number      //Example: transfersOptions.phones[i].id
	//name:String    
	//phone:String  
	
	if(TestOn==1){ //Utiliza TestWindow
		if(transfersOptions.phones != null){
			GetDataTest(7, transfersOptions.phones, 0)
		}
	}
	
	
	//Array -- Elementos de tipo : TransferACD
	transfersOptions.acds
	//id:Number      //Example: transfersOptions.acds[i].id
	//name:String  
	
	if(TestOn==1){ //Utiliza TestWindow
		if(transfersOptions.acds != null){
			GetDataTest(8, transfersOptions.acds, 0)
		}
	}
	
}

function onDispositions(CallDisposition){
	//Array -- Elementos de tipo : Disposition
	CallDisposition.dispositions
	//id:uint       //Example: CallDisposition.dispositions[i].id
	//name:String

	if(TestOn==1)
	{ //Utiliza TestWindow
		for (i=0;i<CallDisposition.dispositions.length;i++)
		{
			document.getElementById("myTextArea").value += 'id:' + CallDisposition.dispositions[i].id + '\n'
			document.getElementById("outDisp").options[i] = new Option( CallDisposition.dispositions[i].name, CallDisposition.dispositions[i].id)
			document.getElementById("inDisp").options[i] = new Option( CallDisposition.dispositions[i].name, CallDisposition.dispositions[i].id)
		}
		document.getElementById("outDisp").options[0].selected = true
		document.getElementById("inDisp").options[i] = new Option( CallDisposition.dispositions[i].name, CallDisposition.dispositions[i].id)
		GetDataTest(9, CallDisposition.dispositions, 0)
	}
	
	if(TestOn==1)
	{ //Utiliza TestWindow
		for (i=0;i<CallDisposition.phoneNumbers.length;i++)
		{
			document.getElementById("myTextArea").value += 'id:' + CallDisposition.phoneNumbers[i].id + '\n'
			document.getElementById("phoneNmbrs").options[i] = new Option( CallDisposition.phoneNumbers[i], CallDisposition.phoneNumbers[i])
		}
		document.getElementById("phoneNmbrs").options[0].selected = true
		GetDataTest(10, CallDisposition.phoneNumbers, 0)
	}
}

function onCallRecieved(callData){
	//Number	
	callData.call_id
	//Number
	callData.cam_id
	//String
	callData.cal_key
	//Number
	callData.callOut_id
	//String
	callData.DNIS
	//uint
	callData.typeCall
	//uint
	callData.IsQueueCall
	//Number
	callData.holdTime
	//String
	callData.phoneNumber
	//int
	callData.port
	//int
	callData.wrapUpTime
	//Array
	//callData.contactData
	
	var IDOutIn
	if(callData.typeCall == 1){
		//IN
		IDOutIn = '- DNIS ' + callData.DNIS
	}else{
		//OUT
		IDOutIn = '- callOut_id ' + callData.callOut_id
	}
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onCallRecieved: call_id ' + callData.call_id + '- cam_id ' + callData.cam_id + '- cal_key ' + callData.cal_key + IDOutIn + '- typeCall ' + callData.typeCall + '- IsQueueCall ' + callData.IsQueueCall + '- holdTime ' + callData.holdTime + '- phoneNumber ' +callData.phoneNumber + '- port ' + callData.port + '- wrapUpTime ' + callData.wrapUpTime + '\n'
		
		GetDataTest(12, callData.contactData, 0)
	}
}

function onCallEnds(callData){
	//Number	
	callData.dialogTime
	//Number
	callData.callKey
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='onCallEnds: dialogTime' + callData.dialogTime + '- callKey ' + callData.callKey + '\n'
	}
}

function onDataCallUpdated(){
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='onDataCallUpdated' + '\n'
	}
}

function onPasswordUpdated(){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='onPasswordUpdated' + '\n'
	}
}

// MARCANDO NUMERO
function onDialingNumber (callOutData){
	//callout_id:uint
	callOutData.callout_id
	//call_id:int
	callOutData.call_id
	//phoneNumber:String
	callOutData.phoneNumber
	//camID:uint
	callOutData.camID
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onDialingNumber - Out: callou_id ' + callOutData.callout_id + '- call_id ' + callOutData.call_id + '- phoneNumber ' + callOutData.phoneNumber + '- camID ' + callOutData.camID + '\n'
	}
	
}

// Numero en lista negra
function numberOnDoNotCallList(){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'numberOnDoNotCallList' + '\n'
	}
}

// Numero incorrecto
function wrongNumber(phone){
//-- Si se vuelve a invocar makeManualCall con el mismo numero se marcara si pasar por el proceso de verificacion
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'wrongNumber: ' + phone + '\n'
	}
}

// Numero aplica Time Zone
function timeZoneNumber(phone){
//-- Si se vuelve a invocar makeManualCall con el mismo numero se marcara si pasar por el proceso de verificacion
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'numberRestrictedbyTimeZone: ' + phone + '\n'
	}
}

function onReprogramCall(DispositionResult){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onReprogramCall: ' + 'hasReprogram:' + DispositionResult.hasReprogram + ' startDate:' + DispositionResult.startDate + ' endDate:' + DispositionResult.endDate + ' defaultDate:' + DispositionResult.defaultDate + '\n'
		GetDataTest(11, DispositionResult.callBacks, 0)
	}
}

function onDisposeApplied(){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onDisposeApplied: ' + '\n'
	}
}

function onAgentStatusChange(agentStatus){
	var state = agentStatus.status
	
	if(TestOn==1){ //Utiliza TestWindow
		descripStatus = "" + state + ""
		descripStatusUnavailable = ""
		switch(state){
			case 2:  //Unavailable:uint
				descripStatus = "UNAVAILABLE"
				descripStatusUnavailable = agentStatus.unavailableID
			break;
			
			case 3:  //READY:uint
				descripStatus = "READY"
			break;
			
			case 4:  //DIALOG:uint
				descripStatus = "DIALOG"
			break;
			
			case 5:	 //XFER:uint
				descripStatus = "XFER"
			break;
			
			case 6:	 //WRAPUP:uint
				descripStatus = "WRAPUP"
			break;
			
			case 7:	 //OTHER:uint
				descripStatus = "OTHER"
			break;
			
			case 9:	 //RINGING:uint
				descripStatus = "RINGING"
			break;
			
			case 11: //PROBLEM:uint
				descripStatus = "PROBLEM"
			break;
			
			case 21: //CALLOUT:uint
				descripStatus = "CALLOUT"
			break;
			
		}
		document.getElementById("myTextArea").value +='onAgentStatusChange: StatusAgent: ' + descripStatus + ' ' + descripStatusUnavailable + '\n'
	}

}

function onCallsOnQueue(CallOnQueue){
	
	//Array -- Elementos de tipo : CallOnQueue
	            
	//acdID - ID del ACD		//Example: CallOnQueue.acdID
	//nQueue - Numero de personas en QUEUE
	//secondsOnQueue - Segundos maximos en espera
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='onCallsOnQueue: acdID:' + CallOnQueue.acdID + '- nQueue ' + CallOnQueue.nQueue + '- secondsOnQueue ' +CallOnQueue.secondsOnQueue  + '\n'
	}

}

function onChatMessage(chatMessage){
	
	chatMessage.administrator // Nombre del Administrador que envio el mensaje
	chatMessage.message // Texto del mensaje
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='onChatMessage:  administrator' + chatMessage.administrator + ' dice-  ' + chatMessage.message  		+ '\n'
	}
}

function onIVRList(IVRList){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onIVRList';
		GetDataTest(12, IVRList, 0);
	}
}

function onIdleStart(IVRId){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onIdleStart: agent app started idle for ivr >' + IVRId;
	}
}

function onIdleEnd(IVRInput){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onIdleEnd: agent app finished idle with user input >' + IVRInput;
	}
}

function onClientChatConnected(data){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onClientChatConnected: chatId:' + data.chatId + ", acdId:" + data.acdId + ", clientName:" + data.clientName + "\n";
	}
}

function onClientChatMessageReceived(data){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onClientChatMessageReceived: chatId:' + data.chatId + ", admId:" + data.admId + ", message:" + data.message + "\n";
	}
}

function onClientChatFinished(data){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onClientChatFinished: chatId:' + data.chatId + "\n";
	}
}

function onClientChatWrapUpStarted(data){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onClientChatWrapUpStarted: chatId:' + data.chatId + ", expiration:" + data.expiration + "\n";
	}
}

function onClientChatWrapUpFinished(data){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onClientChatWrapUpFinished: chatId:' + data.chatId + "\n";
	}
}

function onClientChatTakeOver(data){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onClientChatTakeOver: chatId:' + data.chatId + ", start:" + data.message + "\n";
	}
}

function onChatAnswerTemplates(data){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'onChatAnswerTemplates: \n' + data.toString() + "\n";
	}
}

function remoteLoginError(data){
	data.code
	data.message

	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='remoteLoginError: code' + data.code + '- message ' + data.message + '\n'
	}
} 

function errorOnUpdateDataCall(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnUpdateDataCall: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnPasswordUpdate(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnPasswordUpdate: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnCallHistory(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnCallHistory: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnCampaignsRelated(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnCampaignsRelated: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnChatAdministratorsList(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnChatAdministratorsList: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnDialProcess(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnDialProcess: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnDispose(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnDispose: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnDispositionList(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnDispositionList: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnDispositionSelected(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnDispositionSelected: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnDTMFJS(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnDTMFJS: code' + data.code + '- message ' + data.message + '\n'
	}
}

function onError(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='onError: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnTransferOptions(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnTransferOptions: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnUnavailableStatus(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnUnavailableStatus: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnUnavailableStatusHistory(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnUnavailableStatusHistory: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnDialProcess(data){
	data.code 
	data.message
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'errorOnDialProcess:  code' + data.code + '- message ' + data.message
	}
}

function errorOnDispositionList(data){
	data.code
	data.message
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'errorOnDispositionList:  code' + data.code + '- message ' + data.message
	}
}

function errorOnDispositionSelected(data){
	data.code 
	data.message
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value += 'errorOnDispositionSelected:  code' + data.code + '- message ' + data.message
	}
}

function errorOnIVRTransfer(data){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnIVRTransfer: code ' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnPasswordChange(data)
{
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnPasswordChange: code ' + data.code + '- message ' + data.message + '\n'
	}
}

function onOperationCompleted(){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='Operation Completed' + '\n'
	}
} 

function onSecondCallHangUp(){
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='onSecondCallHangUp' + '\n'
	}
} 

function onDispositionsAndNumbers(CallDisposition){
	//Array -- Elementos de tipo : Disposition
	CallDisposition.dispositions
	//id:uint       //Example: CallDisposition.dispositions[i].id
	//name:String
	
	if(TestOn==1)
	{ //Utiliza TestWindow
		for (i=0;i<CallDisposition.dispositions.length;i++)
		{
			document.getElementById("myTextArea").value += 'id:' + CallDisposition.dispositions[i].id + '\n'
			document.getElementById("outDisp").options[i] = new Option( CallDisposition.dispositions[i].name, CallDisposition.dispositions[i].id)
			document.getElementById("inDisp").options[i] = new Option( CallDisposition.dispositions[i].name, CallDisposition.dispositions[i].id)
		}
		document.getElementById("outDisp").options[0].selected = true
		document.getElementById("inDisp").options[0].selected = true
		GetDataTest(9, CallDisposition.dispositions, 0)
	}
	
	if(TestOn==1)
	{ //Utiliza TestWindow
		for (i=0;i<CallDisposition.phoneNumbers.length;i++)
		{
			document.getElementById("myTextArea").value += 'id:' + CallDisposition.phoneNumbers[i].id + '\n'
			document.getElementById("phoneNmbrs").options[i] = new Option( CallDisposition.phoneNumbers[i], CallDisposition.phoneNumbers[i])
		}
		document.getElementById("phoneNmbrs").options[0].selected = true
		GetDataTest(10, CallDisposition.phoneNumbers, 0)
	}
	
	if(TestOn==1){ //Utiliza TestWindow
		GetDataTest(9, CallDisposition.dispositions, 0)
	}
	
	//Array -- Elementos de tipo : Disposition
	CallDisposition.phoneNumbers    //Example:CallDisposition.phoneNumbers[i]
	
	if(TestOn==1){ //Utiliza TestWindow
		GetDataTest(10, CallDisposition.phoneNumbers, 0)
	}
}

function onPhoneNumbers(phoneNumbers){
	//Array -- Elementos de tipo : String
	//phoneNumbers    //Example:phoneNumbers[i]
	
	if(TestOn==1){ //Utiliza TestWindow
		GetDataTest(10, phoneNumbers, 0)
	}
}

function onDialResult(callResult){
	//callResult.dialResult // entero >> contiene el resultado de la marcacion manual realizada por el agente.
	//2 ---NUMERO OCUPADO
	//3 --- NUMERO MARCADO NO CONSTESTA
	//4 --- EL NUMERO QUE SE MARCO FUE EL DE UN FAX
	//5 --- NO HAY TONO  DE MARCADO
	//8 --- EL AGENTE ESTA EN OTRO ESTADO
	//10 --- NO HAY SERVICIO DE TELEFONIA
	//11 --- CONTESTO UNA CONSTADORA AUTOMATICA
	//12 --- EL AGENTE ESTA RECIBIENDO UNA TRANSFERENCIA
	//1 -- SE CONTESTO LA LLAMADA 
	
	if(TestOn==1){ //Utiliza TestWindow
		switch(callResult.dialResult){
			
			case 1:  //SE CONTESTO LA LLAMADA 
				descripResult = "SE CONTESTO LA LLAMADA"
			break;
			
			case 2:  //NUMERO OCUPADO
				descripResult = "NUMERO OCUPADO"
			break;
			
			case 3:  //NUMERO MARCADO NO CONSTESTA
				descripResult = "NUMERO MARCADO NO CONSTESTA"
			break;
			
			case 4:  //EL NUMERO QUE SE MARCO FUE EL DE UN FAX
				descripResult = "EL NUMERO QUE SE MARCO FUE EL DE UN FAX"
			break;
			
			case 5:	 //NO HAY TONO  DE MARCADO
				descripResult = "NO HAY TONO  DE MARCADO"
			break;
			
			case 8:	 //EL AGENTE ESTA EN OTRO ESTADO
				descripResult = "EL AGENTE ESTA EN OTRO ESTADO"
			break;
			
			case 10: //NO HAY SERVICIO DE TELEFONIA
				descripResult = "NO HAY SERVICIO DE TELEFONIA"
			break;
			
			case 11: //CONTESTO UNA CONSTADORA AUTOMATICA
				descripResult = "CONTESTO UNA CONSTADORA AUTOMATICA"
			break;
			
			case 12: //EL AGENTE ESTA RECIBIENDO UNA TRANSFERENCIA
				descripResult = "EL AGENTE ESTA RECIBIENDO UNA TRANSFERENCIA"
			break;
		}
		document.getElementById("myTextArea").value +='onDialResult: ' + descripResult + '\n'

	}
}

function errorOnDispositionsPhonesList(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnDispositionsPhonesList: code' + data.code + '- message ' + data.message + '\n'
	}
}

function errorOnPhoneNumbersList(data){
	data.code
	data.message
	
	if(TestOn==1){ //Utiliza TestWindow
		document.getElementById("myTextArea").value +='errorOnPhoneNumbersList: code' + data.code + '- message ' + data.message + '\n'
	}
}
