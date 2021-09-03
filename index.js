//red
//https://i.imgur.com/xSIK4M8.png
// purple
// https://i.imgur.com/xSIK4M8.png

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// document.getElementById("currentTime").innerHTML = time;

var timebtn = document.getElementById("time-btn");
timebtn.addEventListener("click", function(){
document.getElementById("currentTime").innerHTML = time;
document.getElementById("heart-img").setAttribute("src","");
document.getElementById("heart-rate").innerHTML = "";
});

var heartbtn = document.getElementById("heart-btn");
heartbtn.addEventListener("click", function(){
  document.getElementById("heart-img").setAttribute("src","https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com");
  document.getElementById("heart-rate").innerHTML = 78;
  document.getElementById("currentTime").innerHTML = "";
})

var watchImg = document.querySelector("#watch-img")
var blackbtn = document.querySelector(".black");
blackbtn.addEventListener("click", function(){
  watchImg.setAttribute("src","https://i.imgur.com/iOeUBV7.png");
});
var orangebtn = document.querySelector(".orange");
orangebtn.addEventListener("click", function(){
  watchImg.setAttribute("src","https://i.imgur.com/PTgQlim.png");
});
var bluebtn = document.querySelector(".blue");
bluebtn.addEventListener("click", function(){
  watchImg.setAttribute("src","https://i.imgur.com/Mplj1YR.png");
});
var purplebtn = document.querySelector(".purple");
purplebtn.addEventListener("click", function(){
  watchImg.setAttribute("src","https://i.imgur.com/xSIK4M8.png");
});
