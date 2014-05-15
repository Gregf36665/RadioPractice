var fast=function(){
var selected=true;
var choice = document.choice; //simplify the code
var sign=false;
var station=false;
var request=false;
var out=[];
var din="";
var order=[1,0,2,0];

for(var i=0;i<choice.callsign.length; i++){
    if(choice.callsign[i].checked){
		out.push(choice.callsign[i].value);
		sign=true;
		}
	}

for(var i=0;i<choice.station.length; i++){
	if(choice.station[i].checked){
		out.push(choice.station[i].value);
		station=true;
		}
	}

for(var i=0;i<choice.request.length; i++){
	if(choice.request[i].checked){
		out.push(choice.request[i].value);
		request=true;
		}
	}
			
if(sign && station && request){
for(j=0;j<order.length;j++){
switch(out[order[j]].toUpperCase()){
case "N410T":
	din+="November Four One Zero Tango ";
	break;
case "GBFYA":
	din+="Golf Bravo Foxtrot Yankee Alpha ";
	break;
case "TOWER":
	din+="Seattle Tower ";
	break;
case "APPROACH":
	din+="Seattle Approach ";
	break;
case "UNICOM":
	din+="Seattle Unicom for ";
	break;
case "RADIO":
	din+="Seattle Radio for ";
	break;
case "FLIGHTWATCH":
	din+="Seattle Flight Watch for ";
	break;
case "CLEARANCEDELIVERY":
	din+="Seattle Clearance Delivery for ";
	break;
case "GROUND":
	din+="Seattle Ground for ";
	break;
case "CENTER":
	din+="Seattle Center for ";
	break;
case "DEPARTURE":
	din+="Seattle Departure for ";
	break;
case "TAXI":
	din+="Request Taxi for ";
	break;
case "DEPARTURE":
	din+="Request Departure for ";
	break;
case "FREQUENCYCHANGE":
	din+="Request Frequency Change for ";
	break;
case "FIRSTCONTACT":
	din+="Request First Contact for ";
	break;
case "EMERGENCY":
	din+="Request Emergency for ";
	break;
case "REJOIN":
	din+="Request Rejoin for ";
	break;
case "FINALS":
	din+="Request Finals for ";
	break;
case "BASE":
	din+="Request Base for ";
	break;
case "DOWNWIND":
	din+="Request Downwind for ";
	break;
}}
var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[0]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 2; // 0.1 to 10
msg.pitch = 2; //0 to 2
msg.text = din;
msg.lang = 'en-US';

speechSynthesis.speak(msg);}
else {alert("You didn't select them all");}

};
