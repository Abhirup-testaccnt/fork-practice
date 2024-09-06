const clock = document.querySelector('#clock');

// background color changer.
const theme = document.querySelector('#theme');
const body = document.body

theme.addEventListener('click',function(e){
    const currentBackgroundColor = window.getComputedStyle(body).backgroundColor;
    if(currentBackgroundColor==='rgb(33, 33, 33)'){
        body.style.backgroundColor = '#fff'
        body.style.color = '#212121'
    }
    else if(currentBackgroundColor==='rgb(255, 255, 255)'){
        body.style.backgroundColor = '#212121'
        body.style.color = '#fff'
    }
})


//setInterval method calls a function at specified intervals (in milliseconds).
// it continues to call a function untill the window is closed or clearInterval() is called.
setInterval(function(){
  let date = new Date(); //new data method gets the date and time of the location
  clock.innerHTML = date.toLocaleTimeString() //localetimestring method changes the date to the current time of the locality.
},1000) //1000 miliseconds = 1sec
