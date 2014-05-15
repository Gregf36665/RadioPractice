var fast=function(){

var choice = document.choice; //simplify the code

//find the callsign
var callsignOut = "";
var callsignDone = false;

for(var i=0;i<choice.callsign.length; i++){
	if(choice.callsign[i].checked){
		callsignOut = (choice.callsign[i].value);
		callsignDone = true;
		break;
		
		}
	}
		
//find the station
var stationOut = "";
for(var i=0;i<choice.station.length; i++){
	if(choice.station[i].checked){
		stationOut  = (choice.station[i].value);
		}
	}
	
//find the request

var requestOut = "";

for(var i=0;i<choice.request.length; i++){
	if(choice.request[i].checked){
		requestOut = (choice.request[i].value);
		}
	}		




alert(callsignOut + stationOut + requestOut);
}