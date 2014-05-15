var fast=function(mOrder){

var selected=true;
var choice = document.choice; //simplify the code
var sign=false;
var station=false;
var request=false;
var rules=false;
var emergency=false;
var out=[];
var din="";
var order=mOrder;

//order
/*  0 = callsign
	1 = station
	2 = request
	3 = flight rules
	4 = nature of emergency
	5 = Mayday Mayday Mayday
*/
	

for(var i=0;i<choice.callsign.length; i++){
    if(choice.callsign[i].checked){
		out.push(choice.callsign[i].value);
		sign=true;
		}
	}if(!sign) alert("You need a callsign!");

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
	}if(!request) out.push("");


for(var i=0;i<choice.rules.length; i++){
	if(choice.rules[i].checked){
		out.push(choice.rules[i].value);
		rules=true;
		}
	}if(!rules) out.push("");

for(var i=0;i<choice.emergency.length; i++){
    if(choice.emergency[i].checked){
		out.push(choice.emergency[i].value);
		emergency=true;
		request = true; // emergencies count as requests
		order = [5,1,0,4];
		}
	}if(!emergency) out.push("");

out.push("SOS"); 	
				
if(sign && station && request){
	for(j=0;j<order.length;j++){
		switch(out[order[j]].toUpperCase()){
		// emergencies
			case "SOS":
				din+="mayday mayday mayday ";
				break;
			case "ENGINE":
				din+="Engine failure commencing forced landing ";
				break;
			case "RADIOFAIL":
				din+="Radio failure returning to November 8 7";
				break;
					
		// callsigns
			case "N410T":
				din+="November Four One Zero Tango ";
				break;
			case "GBYFA":
				din+="Golf Bravo Yankee Foxtrot Alpha ";
				break;
				
		// stations
			case "TOWER":
				din+="Allentown Tower ";
				break;
			case "APPROACH":
				din+="Allentown Approach ";
				break;
			case "UNICOM":
				din+="Allentown Unicom ";
				break;
			case "RADIO":
				din+="Allentown Radio   ";
				break;
			case "FLIGHTWATCH":
				din+="Allentown Flight Watch   ";
				break;
			case "CLEARANCEDELIVERY":
				din+="Allentown Clearance Delivery   ";
				break;
			case "GROUND":
				din+="Allentown Ground   ";
				break;
			case "CENTER":
				din+="Allentown Center   ";
				break;
			case "DEPARTURESTATION":
				din+="Allentown Departure   ";
				break;
				
		// requests 
			case "TAXI":
				din+="Request Taxi   ";
				break;
			case "DEPARTUREREQUEST":
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
				din+="Finals for Runway two four left ";
				break;
			case "BASE":
				din+="Base for Runway three four right  ";
				break;
			case "DOWNWIND":
				din+="Down Wind to land runway zero niner ";
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

// What if we want ATCs response?

/*var ATC=function(){

var selected=true;
var choice = document.choice; //simplify the code
var sign=false;
var station=false;
var request=false;
var rules=false;
var emergency=false;
var out=[];
var din="";
var order=[0,1,2,3];

//order
  0 = callsign
	1 = station
	2 = request
	3 = flight rules
	4 = nature of emergency
	5 = Mayday Mayday Mayday
*/
	

for(var i=0;i<choice.callsign.length; i++){
    if(choice.callsign[i].checked){
		out.push(choice.callsign[i].value);
		sign=true;
		}
	}if(!sign) alert("You need a callsign!");

for(var i=0;i<choice.station.length; i++){
	if(choice.station[i].checked){
		out.push(choice.station[i].value);
		station=true;
		}
	};

for(var i=0;i<choice.request.length; i++){
	if(choice.request[i].checked){
		out.push(choice.request[i].value);
		request=true;
		}
	}if(!request) out.push("");


for(var i=0;i<choice.rules.length; i++){
	if(choice.rules[i].checked){
		out.push(choice.rules[i].value);
		rules=true;
		}
	}if(!rules) out.push("");

for(var i=0;i<choice.emergency.length; i++){
    if(choice.emergency[i].checked){
		out.push(choice.emergency[i].value);
		emergency=true;
		request = true; // emergencies count as requests
		order = [5,0,1,4];
		}
	}if(!emergency) out.push("");

out.push("SOS"); 	
				
if(sign && station && request){
	for(j=0;j<order.length;j++){
		switch(out[order[j]].toUpperCase()){
		// emergencies
			case "SOS":
				din+="All other stations stand by ";
				break;
			case "ENGINE":
				din+="Forced landing acknowledged";
				break;
			case "RADIOFAIL":
				din+="Return to November 8 7 acknowledged";
				break;
					
		// callsigns
			case "N410T":
				din+="November Four One Zero Tango ";
				break;
			case "GBYFA":
				din+="Golf Bravo Yankee Foxtrot Alpha ";
				break;
				
		// stations
			case "TOWER":
				din+="Allentown Tower ";
				break;
			case "APPROACH":
				din+="Allentown Approach ";
				break;
			case "UNICOM":
				din+="Allentown Unicom ";
				break;
			case "RADIO":
				din+="Allentown Radio   ";
				break;
			case "FLIGHTWATCH":
				din+="Allentown Flight Watch  ";
				break;
			case "CLEARANCEDELIVERY":
				din+="Allentown Clearance Delivery   ";
				break;
			case "GROUND":
				din+="Allentown Ground   ";
				break;
			case "CENTER":
				din+="Allentown Center   ";
				break;
			case "DEPARTURESTATION":
				din+="Allentown Departure   ";
				break;
				
		// requests 
			case "TAXI":
				din+="Taxi to Alpha 1 via Bravo ";
				break;
			case "DEPARTUREREQUEST":
				din+="Cleared to takeoff Runway 2 4 ";
				break;
			case "FREQUENCYCHANGE":
				din+="Frequency change approved ";
				break;
			case "FIRSTCONTACT":
				din+="Pass your message ";
				break;
			case "EMERGENCY":
				din+="mayday mayday mayday";
				break;
			case "REJOIN":
				din+=" is using runway 2 4 left hand circuit\
				There is one Sky hawk in the circuit currently short finals\
				Join overhead."; // the newlines are just for formatting the code
				break;
			case "FINALS":
				din+="Finals for Runway two four left ";
				break;
			case "BASE":
				din+="Base for Runway three four right  ";
				break;
			case "DOWNWIND":
				din+="Report finals ";
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
