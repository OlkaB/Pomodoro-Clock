// ----------------- decrease timer by 1 minute
var minusBttns = document.getElementsByClassName('minus');
for (i = 0; i < minusBttns.length; i++) {
  minusBttns[i].addEventListener('click', minusFunc);
}

function minusFunc() {
  var currentTime = Number(document.getElementById(this.id).nextSibling.nextSibling.innerText);
  if (currentTime !== 0) {
    currentTime -= 1;
  } else {
    currentTime = 0;
  }
  document.getElementById(document.getElementById(this.id).nextSibling.nextSibling.id).textContent = currentTime;
}

// ----------------- increase timer by 1 minute
var plusBttns = document.getElementsByClassName('plus');
for (i = 0; i < plusBttns.length; i++) {
  plusBttns[i].addEventListener('click', plusFunc);
}

function plusFunc() {
  var currentTime = Number(document.getElementById(this.id).previousSibling.previousSibling.innerText);
  if (currentTime < 60) {
    currentTime += 1;
  } else {
    currentTime = 60;
  }
  document.getElementById(document.getElementById(this.id).previousSibling.previousSibling.id).textContent = currentTime;
}


// -------------- timer countdown
// 1 minuta = 60 000 milisekund
// 1 sekunda = 1000 milisekund
//var intervalID = window.setInterval(function, 1000)
var clockCount = document.getElementById('wholeClock').addEventListener('click', timerOn);

function timeCounter(arg1, arg2) {
  var sessionTime = arg1;
  var breakTime = arg2;
  var interval = setInterval(function() {
    arg1 -= 1000;
    var getDate = new Date();
    getDate.setTime(arg1);
    var timer = document.getElementById("timer");
    timer.textContent = ('0' + getDate.getMinutes()).slice(-2) + ":" + ('0' + getDate.getSeconds()).slice(-2);

    if (arg1 === 0) {
      var snd = new Audio("FreesoundOrgSynthesizedHornByDarkadders.mp3");
      snd.play();
      var whatIsCounted = document.getElementById("ele");
      whatIsCounted.textContent = whatIsCounted.textContent == "session" ? whatIsCounted.textContent = "break" : whatIsCounted.textContent = "session";
      clearInterval(interval);
      timeCounter(breakTime, sessionTime);
    }
  }, 1000);

  // ------ reset button 
  var resetBttn = document.getElementById('resetBttn').addEventListener('click', resetTimer);
  function resetTimer() {
    window.clearInterval(interval);
    document.getElementById("ele").textContent = "click";
    document.getElementById("timer").textContent = "to start";
  }
}

function timerOn() {
  var userBreakTime = Number(document.getElementById('breakTime').innerText) * 60000;
  var userSessionTime = Number(document.getElementById('sessionTime').innerText) * 60000;
  document.getElementById("ele").textContent = "session";
  timeCounter(userSessionTime, userBreakTime);
}



