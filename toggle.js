var fast=function(){

var selected=true;
var choice = document.choice; //simplify the code
var sign=false;
var station=false;
var request=false;
var rules=false;
var emergency=false;
var out=[];
var din="";
var order=[1,0,2,3,0];

//order
/*  0 = callsign
	1 = station
	2 = request
	3 = flight rules
	4 = nature of emergency
*/
	

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


for(var i=0;i<choice.rules.length; i++){
	if(choice.rules[i].checked){
		out.push(choice.rules[i].value);
		rules=true;
		}
	}if(!rules) out.push("");

for(var i=0;i<choice.emergency.length; i++){
    if(choice.callsign[i].checked){
		out.push(choice.emergency[i].value);
		emergency=true;
		}
	}if(!emergency) out.push("");
					
if(sign && station && request){
	for(j=0;j<order.length;j++){
		switch(out[order[j]].toUpperCase()){
			case "N410T":
				din+="November Four One Zero Tango ";
				break;
			case "GBYFA":
				din+="Golf Bravo Yankee Foxtrot Alpha ";
				break;
			case "TOWER":
				din+="Seattle Tower ";
				break;
			case "APPROACH":
				din+="Seattle Approach ";
				break;
			case "UNICOM":
				din+="Seattle Unicom   ";
				break;
			case "RADIO":
				din+="Seattle Radio   ";
				break;
			case "FLIGHTWATCH":
				din+="Seattle Flight Watch   ";
				break;
			case "CLEARANCEDELIVERY":
				din+="Seattle Clearance Delivery   ";
				break;
			case "GROUND":
				din+="Seattle Ground   ";
				break;
			case "CENTER":
				din+="Seattle Center   ";
				break;
			case "DEPARTURE":
				din+="Seattle Departure   ";
				break;
			case "TAXI":
				din+="Request Taxi   ";
				break;
			case "DEPARTURE":
				din+="Request Departure   ";
				break;
			case "FREQUENCYCHANGE":
				din+="Request Frequency Change   ";
				break;
			case "FIRSTCONTACT":
				din+="";
				order = []; // this stops anything else from being said
				break;
			case "EMERGENCY":
				din+="mayday mayday mayday";
				break;
			case "REJOIN":
				din+="Request Rejoin   ";
				break;
			case "FINALS":
				din+="Request Finals   ";
				break;
			case "BASE":
				din+="Request Base   ";
				break;
			case "DOWNWIND":
				din+="Request Down Wind   ";
				break;
			case "VFR":
				din+="VFR flight to Kilo Sierra Bravo Delta "; // we want to in the end
				// replace this with a changing name such as another staton
				break;
			case "IFR":
				din+="IFR flight to Kilo Sierra Bravo Delta ";
				break;
			case "LOCAL":
				din+="local flight ";
				break;
			}
		}
		
//alert(din); // this is for debugging to see what will get said

var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[0]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = din;
msg.lang = 'en-US';

speechSynthesis.speak(msg);}
else {alert("You didn't select them all");}

};
