

window.setInterval(function(){
    var time = new Date();
time.getHours(); //returns value 0-23 for the current hour
time.getMinutes(); //returns value 0-59 for the current minute of the hour
time.getSeconds(); 


const hour =document.getElementById('hours');
const minute =document.getElementById('minutes');
const second =document.getElementById('seconds');
const green =document.getElementById('green');

    hour.textContent =time.getHours();
minute.textContent =time.getMinutes();
second.textContent =time.getSeconds();

if(hour.textContent >12){
    hour.textContent=hour.textContent-12;
    green.textContent='PM';
}
}, 1000);


