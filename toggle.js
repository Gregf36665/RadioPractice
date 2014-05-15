var fast=function(){
var selected=true;
var choice = document.choice; //simplify the code
var sign=false;
var station=false;
var request=false;
var out=[];
var din="";

//find the callsign
var callsignOut = "";

for(var i=0;i<choice.callsign.length; i++){
	if(choice.callsign[i].checked){
		out.push(choice.callsign[i].value);
		sign=true;
		}
	}
		
//find the station
var stationOut = "";
for(var i=0;i<choice.station.length; i++){
	if(choice.station[i].checked){
		out.push(choice.station[i].value);
		station=true;
		}
	}
	
//find the request

var requestOut = "";
for(var i=0;i<choice.request.length; i++){
	if(choice.request[i].checked){
		out.push(choice.request[i].value);
		request=true;
		}
	}		
if(sign && station && request);
else alert("You didn't select them all");


for(j=0;j<out.length;j++){
din+=out[j];}

var msg = new SpeechSynthesisUtterance();
var voices = window.speechSynthesis.getVoices();
msg.voice = voices[0]; // Note: some voices don't support altering params
msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 2; // 0.1 to 10
msg.pitch = 2; //0 to 2
msg.text = din;
msg.lang = 'en-US';

speechSynthesis.speak(msg);


};