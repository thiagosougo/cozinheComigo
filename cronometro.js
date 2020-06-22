let timer = null;
let time = 0;


let initTimer = () => {
  timer = document.getElementById('timer');

  document.getElementById('timeabacaxi').onclick = () => startTimer(1800);
  document.getElementById('timerStop').onclick = stopTimer;
  document.getElementById('timerPause').onclick = pauseTimer;
  document.getElementById('timerContinue').onclick = ContinueTimer;

  document.getElementById('timemacarrao').onclick = () => startTimer(1500);
  document.getElementById('timerStop').onclick = stopTimer;
  document.getElementById('timerPause').onclick = pauseTimer;
  document.getElementById('timerContinue').onclick = ContinueTimer;

  document.getElementById('timefricasse').onclick = () => startTimer(1800);
  document.getElementById('timerZerar').onclick = stopTimer;
  document.getElementById('timerPausar').onclick = pauseTimer;
  document.getElementById('timerContinuar').onclick = ContinueTimer;

}
let startTimer = (n) => {
  time = n;
  clearInterval(timer);
  timer = setInterval(showTime, 1000);

}

let pauseTimer = () => {


  clearInterval(timer);

}
let ContinueTimer = () => {

  clearInterval(timer);
  timer = setInterval(showTime, 1000);

}

let stopTimer = () => {
  clearInterval(timer);
  time = 1;
  showTime();
}

let showTime = () => {
  time--;
  let minutes = Math.trunc(time / 60);
  let seconds = time % 60;
  let hors = Math.trunc(minutes / 60);
  minutes = minutes % 60;

  let s =
    (hors < 10 ? '0' + hors : hors)
    + ':' +
    (minutes < 10 ? '0' : '') +
    minutes +
    ':' +
    (seconds < 10 ? '0' : '') +
    seconds;
  document.getElementById('timerClock').innerHTML = s;



  if (time <= 0)
    clearInterval(timer);
};
let listaContadores = [];

onload = () => {
  initTimer();

}








