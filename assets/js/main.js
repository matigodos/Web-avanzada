/*****************************************/
/* Ignoramos esta parte por el momento */
/*****************************************/
let intervalId = window.setInterval(function () {
    //console.log("Clock isn't working yet!");
}, 10000);

function stopClock() { 
    clearInterval(intervalId);
}
/*****************************************/

window.onload = function () { 
    
const miReloj= document.getElementById('clock');
console.log(miReloj);
console.dir(miReloj);

miReloj.innerText = "Hola hola!";
const headers = document.getElementsByTagName('h1');
console.dir(headers[0]);

}

function randInt(min, max) {
return Math.floor(Math.random()*(max-min+1))+min

}

function changeEmojiColor(elem) {
const r=randInt(0,255);
const g=randInt(0,255);
const b=randInt(0,255);

elem.style.fill='rgb('+r+','+g+','+b+')'
}

function isFocused(elem){
elem.style.fill="#68c33f";
}

function isNotFocused(elem){
    elem.style.fill="white";
    }

function throwDie(elem){
        const rand=randInt(0,5);
        elem.children[0].setAttribute("d",dice[rand]);
        }
        
        function changeDadoColorIn(elem) {
            const r=randInt(0,255);
            const g=randInt(0,255);
            const b=randInt(0,255);
            
            elem.style.fill='rgb('+r+','+g+','+b+')'
            }
            
            function changeDadoColorOut(elem) {
                const r=randInt(0,255);
                const g=randInt(0,255);
                const b=randInt(0,255);
                
                elem.style.fill='rgb('+r+','+g+','+b+')'
                }

 

function Cambiodefondo(elem){
const miVar=document.getElementsByTagName("main");
miVar[0].style.backgroundImage = "url('paisajenocturno.jpg')";

const cabecera=document.getElementsByTagName("header");
cabecera[0].style.backgroundColor="black";

const titulo=document.getElementsByTagName("h1");
titulo[0].style.color="white";

const footer=document.getElementsByTagName("footer");
footer[0].style.backgroundColor="black";

const titulofooter=document.getElementsByTagName("h2");
titulofooter[0].style.color="white";

}