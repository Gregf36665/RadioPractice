var random=function(){
var choice = document.choice; //simplify the code
var emer=Math.random();

if(emer<0.1){
randomcs();
randomst();
randomre();
randomru();
randomem();
}
else{
randomcs();
randomst();
randomre();
randomru();
for(var x in choice.emergency){
choice.emergency[x].checked=false}}
};

var randomcs=function(){
var randcs=Math.floor((Math.random() * choice.callsign.length-1));
choice.callsign[randcs].checked=true;
};

var randomst=function(){
var randst=Math.floor((Math.random() * choice.station.length));
choice.station[randst].checked=true;
};

var randomre=function(){
var randre=Math.floor((Math.random() * choice.request.length));
choice.request[randre].checked=true;
};

var randomru=function(){
var randru=Math.floor((Math.random() * choice.rules.length));
choice.rules[randru].checked=true;
};

var randomem=function(){
var emergen=Math.floor((Math.random() * choice.emergency.length));
choice.emergency[emergen].checked=true;
};

var reset=function(){
for(var i=0;i<choice.callsign.length; i++)choice.callsign[i].checked=false;
for(var i=0;i<choice.station.length; i++)choice.station[i].checked=false;
for(var i=0;i<choice.request.length; i++)choice.request[i].checked=false;
for(var i=0;i<choice.rules.length; i++)choice.rules[i].checked=false;
for(var i=0;i<choice.emergency.length; i++)choice.emergency[i].checked=false;
choice.customcs.value="";
}
