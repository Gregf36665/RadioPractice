var pilot=function(){

var selected=true;
var choice = document.choice; //simplify the code
var sign=false;
var station=false;
var request=false;
var rules=false;
var emergency=false;
var out=[];
var din="";
var order=[1,0,2,3];

//order
/*  0 = callsign
	1 = station
	2 = request
	3 = flight rules
	4 = nature of emergency
	5 = Mayday Mayday Mayday
*/


for(var i=0;i<choice.callsign.length-1; i++){
    if(choice.callsign[i].checked){
		out.push(choice.callsign[i].value);
		alert("chosen");
		sign=true;}
	}
	if(choice.callsign[choice.callsign.length-1].checked){
		var mycs=choice.customcs.value.toUpperCase()
		out.push("CUSTOM");
		sign=true;}

if(!sign) alert("You need a callsign!");
	

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
		
		
var phon=function(phonetics){
var io=0;
var i=1;
var letters=[];
for(i=i;i<=phonetics.length;i++){
        letters.push(phonetics.substring(io,i));
        io=i;};
for(k=0;k<letters.length;k++){
switch(letters[k]){
    case "A":
        din+="Alpha ";
        break;
    case "B":
        din+="Bravo ";
        break;
    case "C":
        din+="Charlie ";
        break;
    case "D":
        din+="Delta ";
        break;
    case "E":
        din+="Echo ";
        break;
    case "F":
        din+="Foxtrot ";
        break;
    case "G":
        din+="Golf ";
        break;
    case "H":
        din+="Hotel ";
        break;
    case "I":
        din+="India ";
        break;
    case "J":
        din+="Juliet ";
        break;
    case "K":
        din+="Kilo ";
        break;
    case "L":
        din+="Lee mah ";
        break;
    case "M":
        din+="Mike ";
        break;
    case "N":
        din+="November ";
        break;
    case "O":
        din+="Oscar ";
        break;
    case "P":
        din+="Papa ";
        break;
    case "Q":
        din+="Quebec ";
        break;
    case "R":
        din+="Romeo ";
        break;
    case "S":
        din+="Sierra ";
        break;
    case "T":
        din+="Tango ";
        break;
    case "U":
        din+="Uniform ";
        break;
    case "V":
        din+="Victor ";
        break;
    case "W":
        din+="Whiskey ";
        break;
    case "X":
        din+="X-ray ";
        break;
    case "Y":
        din+="Yankee ";
        break;
    case "Z":
        din+="Zulu ";
        break;
    case " ":
        din+=".. ";
        break;
    case "0":
        din+="Zero ";
        break;
    case "1":
        din+="One ";
        break;
    case "2":
        din+="Two ";
        break;
    case "3":
        din+="Three ";
        break;
    case "4":
        din+="Four ";
        break;
    case "5":
        din+="Five ";
        break;
    case "6":
        din+="Six ";
        break;
    case "7":
        din+="Seven ";
        break;
    case "8":
        din+="Eight ";
        break;
    case "9":
        din+="Niner ";
        break;
    case ".":
    	din+="Point "
    default:
    break;
    }};
};			
switch(out[order[j]].toUpperCase()){
		// emergencies
			case "SOS":
				din+="mayday mayday mayday ";
				break;
			case "ENGINE":
				din+="Engine failure commencing forced landing ";
				break;
			case "RADIOFAIL":
				din+="Radio failure returning to"; 
				phon('N87');
				break;

		// callsigns
			case "CUSTOM":
				phon(mycs);
				break;
			case "N410T":
				phon('N410T');
				break;
			case "GBYFA":
				phon('GBYFA');
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
				din+="Request Frequency Change to Approach"; 
				phon("119.275");// 1 1 niner point 2 7 5";
				order = []; // this stops anything else from being said
				break;
			case "FIRSTCONTACT":
				din+="";
				order = []; // this stops anything else from being said
				break;
			case "PASSMESSAGE":
				din+="is a Cessna Sky Hawk from Allentown to" 
				phon('N87');
				din+="currently 1500 feet altimeter"; 
				phon('2992');
				din+="squawking"; 
				phon("1200");
				break;
			case "REJOIN":
				din+="Request Rejoin   ";
				order = []; // this stops anything else from being said
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
				din+="for VFR flight to" 
				phon("KSBD"); // we want to in the end
				// replace this with a changing name such as another staton
				break;
			case "IFR":
				din+="for IFR flight to" 
				phon("KSBD");
				break;
			case "LOCAL":
				din+="for local flight ";
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
