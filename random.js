var random=function(){
var choice = document.choice; //simplify the code
var randcs=Math.floor((Math.random() * choice.callsign.length));
var randst=Math.floor((Math.random() * choice.station.length));
var randre=Math.floor((Math.random() * choice.request.length));
var randru=Math.floor((Math.random() * choice.rules.length));
var emergen=Math.floor((Math.random() * choice.emergency.length));
var emer=Math.random();
if(emer<0.1){
choice.callsign[randcs].checked=true;
choice.station[randst].checked=true;
choice.request[randre].checked=true;
choice.rules[randru].checked=true;
choice.emergency[emergen].checked=true;
}
else{
choice.callsign[randcs].checked=true;
choice.station[randst].checked=true;
choice.request[randre].checked=true;
choice.rules[randru].checked=true;
for(var x in choice.emergency){
choice.emergency[x].checked=false}}
};
var randomcs=function(){
var randcs=Math.floor((Math.random() * choice.callsign.length));
var emer=Math.random();
choice.callsign[randcs].checked=true;
};

var randomst=function(){
var randst=Math.floor((Math.random() * choice.station.length));
var emer=Math.random();
choice.station[randst].checked=true;
};

var randomre=function(){
var randre=Math.floor((Math.random() * choice.request.length));
var emer=Math.random();
choice.request[randre].checked=true;
};

var randomru=function(){
var randru=Math.floor((Math.random() * choice.rules.length));
var emer=Math.random();
choice.rules[randru].checked=true;
};

var randomem=function(){
var emergen=Math.floor((Math.random() * choice.emergency.length));
var emer=Math.random();
choice.emergency[emergen].checked=true;
};
