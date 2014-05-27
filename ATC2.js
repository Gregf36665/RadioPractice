var ATC=function(){

var selected=true;
var choice = document.choice; //simplify the code
var tail=false;
var emergency=false;
var out=[];
var din="";
var order=[0,1,2,3,4];//[0,1,2,3];

//order
/*  0 = make
	1 = tailnumber
	2 = station
	3 = request
	4 = flight rules
	5 = nature of emergency
	6 = Mayday Mayday Maydays
*/

if(choice.custommake.value!=""){
		var mypm=choice.custommake.value.toLowerCase();
		out.push("CUSTOMPM");
		make=true;}
else
{alert("You need a Plane Make!");
return;}

if(choice.customtn.value!=""){
		var mycs=choice.customtn.value.toUpperCase()
		out.push("CUSTOM");
		tail=true;}
else
{alert("You need a tailnumber!");
return;}	

var stationChoice = choice.station.options[choice.station.selectedIndex].value.toUpperCase();
out.push(stationChoice);

var requestChoice = choice.request.options[choice.request.selectedIndex].value.toUpperCase();
out.push(requestChoice);

var rulesChoice = choice.rules.options[choice.rules.selectedIndex].value.toUpperCase();
if(rulesChoice==="NORULES") out.push("");
else out.push(rulesChoice)

var emergencyChoice=choice.emergency.options[choice.emergency.selectedIndex].value.toUpperCase();
if(emergencyChoice==="NOEMERGENCY") out.push("");
else {
out.push(emergencyChoice);
emergency=true;
order = [6,2,0,1,5];
}

out.push("SOS"); 

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
				din+="All other stations stand by ";
				break;
			case "ENGINE":
				din+="Forced landing acknowledged";
				break;
			case "RADIOFAIL":
				din+="Return to";
				phon("N87");
				din+="acknowledged";
				break;
		
		//makes
			case "CUSTOMPM":
				din+=mypm + " ";
				break;
		// tailnumbers
			case "CUSTOM":
				phon(mycs);
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
			case "DEPARTURES":
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
				din+="mayday mayday mayday ";
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
msg.voice = voices[2]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = din;
msg.lang = 'en-US';

speechSynthesis.speak(msg);
};
