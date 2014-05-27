var random=function(){
var choice = document.choice; //simplify the code
var emer=Math.random();

if(emer<0.1){
randomst();
randomre();
randomru();
randomem();
}
else{
randomst();
randomre();
randomru();
for(var x in choice.emergency){
choice.emergency[x].selected=false}}
};

var randomst=function(){
var randst=Math.floor((Math.random() * choice.station.length));
choice.station[randst].selected=true;
};

var randomre=function(){
var randre=Math.floor((Math.random() * choice.request.length));
choice.request[randre].selected=true;
};

var randomru=function(){
var randru=Math.floor((Math.random() * choice.rules.length));
choice.rules[randru].selected=true;
};

var randomem=function(){
var emergen=Math.floor((Math.random() * choice.emergency.length));
choice.emergency[emergen].selected=true;
};

var reset=function(){
choice.customtn.value="";
choice.custommake.value="";
choice.station[0].selected=true;
choice.request[0].selected=true;
choice.rules[0].selected=true;
choice.emergency[0].selected=true;
}
