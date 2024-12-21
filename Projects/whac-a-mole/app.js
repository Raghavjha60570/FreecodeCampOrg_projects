const squares = document.querySelectorAll('.square');
const  mole = document.querySelectorAll('.mole');
const timeleft= document.querySelector('#time');
 const score = document.querySelector('#score');
 
  let  result =0 ;
   let currentTime=60;
   let hitPostion;
   let timerId= null;
  function randomSquare(){
    squares.forEach(square=>{
       square.classList.remove('mole');
   
    })
    let randomSquare = squares[Math.floor(Math.random()*squares.length)];
     randomSquare.classList.add('mole');
    
     hitPostion= randomSquare.id;
  }

  squares.forEach(square=>{
    square.addEventListener('mousedown',function () {
       if(this.id===hitPostion){
         result++;
         score.textContent=result;
         hitPostion=0;
       }
    })
  })

  function moveMole(){
    
    timerId= setInterval(randomSquare,800);
  }

  moveMole();

  function countDown(){
        currentTime--;
        timeleft.textContent=currentTime;
        
       if (currentTime==0){
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('Game Over! Your final score is '+result); 
    
       } 
  }

  let countDownTimerId =  setInterval( countDown, 1000);

  