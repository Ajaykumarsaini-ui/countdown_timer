
//    // Calculate days, hours, minutes, and seconds
//    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//    const seconds = Math.floor((distance % (1000 * 60)) / 1000);


// arrow function 
window.onload = ()=>{
document.querySelector('#calculate').onclick = calculate;
document.querySelector('#reset').onclick = reset;
}


function reset(){
  document.querySelector('#countdown-days').innerText = 0;
  document.querySelector('#countdown-hours').innerText = 0;
  document.querySelector('#countdown-minutes').innerText = 0;
  document.querySelector('#countdown-seconds').innerText = 0;


}




// calculate function 
function calculate() {
  console.log("clicked")
  // date.value pics added value 
  const date = document.querySelector('#date').value;
  const time = document.querySelector('#time').value;
  console.log(date)
  console.log(time)


  // for stop button we have to clear intervel 
  const stop = document.querySelector('#stop');
  const reset = document.querySelector('#reset');

  // last time when stoped timer 
  const endTime = new Date(date + " " + time);
  console.log(endTime)

 const interval = setInterval(() => {
    // endTime is to be calculated and calculateTime is a function 
    calculateTime(endTime)
  }, 1000);

  // adding event lostner for stop 
  stop.addEventListener('click',()=>{
    clearInterval(interval);
  })
  
  reset.addEventListener('click',()=>{
    clearInterval(interval);
  })
  
}

// we will make calculateTime function 
function calculateTime(endTime) {
  const currentTime = new Date();
  console.log(currentTime);

  const days = document.querySelector('#countdown-days')
  const hours = document.querySelector('#countdown-hours')
  const minutes = document.querySelector('#countdown-minutes')
  const seconds = document.querySelector('#countdown-seconds')

  if (endTime>currentTime) {
    // remaining time will be in mili seconds 
    const timeLeft = (endTime - currentTime)/1000;
    console.log(timeLeft);

    // to set any text inside html 
    // in math "M" will be capital and math.floor will provide us integer value
    // very important lines  
    days.innerText = Math.floor(timeLeft/(24*60*60));
    hours.innerText = Math.floor((timeLeft/(60*60))%24);
    minutes.innerText = Math.floor((timeLeft/60)%60);
    seconds.innerText = Math.floor(timeLeft%60);
    
  } else {
    days.innerText = 0;
    hours.innerText = 0;
    minutes.innerText = 0;
    seconds.innerText = 0;
    
  }
}

