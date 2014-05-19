var random=function(){
var choice = document.choice; //simplify the code
var randcs=Math.floor((Math.random() * choice.callsign.length));
var randst=Math.floor((Math.random() * choice.station.length));
var randre=Math.floor((Math.random() * choice.request.length));
var randdu=Math.floor((Math.random() * choice.rules.length));
choice.callsign[randcs].checked=true;
choice.station[randst].checked=true;
choice.request[randre].checked=true;
choice.rules[randru].checked=true;

};