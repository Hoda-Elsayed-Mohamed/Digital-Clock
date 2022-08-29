

window.setInterval(function(){
    var time = new Date();
var h =time.getHours(); 
var m =time.getMinutes(); 
var s =time.getSeconds(); 


const hour =document.getElementById('hours');
const minute =document.getElementById('minutes');
const second =document.getElementById('seconds');
const green =document.getElementById('green');

if(h >12){
    h=h-12;
    green.textContent='PM';
}

h = h < 10 ? "0" + h : h;
console.log(h)
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

hour.textContent =h;
minute.textContent =m;
second.textContent =s;


}, 1000);


