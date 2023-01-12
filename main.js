let game_values = ['paper','rock','scissors'];


const showPlayerScore = 
document.querySelector('.currentScore .player p')
const activeRobot = 
document.querySelector('.currentScore .computer span')

const activeHuman = 
document.querySelector('.currentScore .player span')

const showComputerScore = 
document.querySelector('.currentScore .computer p')

let playerScore = localStorage.getItem('playerScore',0)

let computerScore = localStorage.getItem('computerScore',0)


let playerRoundScore = localStorage.getItem('playerRoundScore',0)

let computerRoundScore = localStorage.getItem('computerRoundScore',0)

let index = 0
const play_button = document.getElementById("play");

const playAgain = 
document.querySelector('#playAgain')

  play_button.disabled = true
  playAgain.disabled = true
  playAgain.style.display = 'none'
  function showScore()
{
  
  if (!localStorage.getItem('computerScore')) {
    document.querySelector('#computerScore').innerHTML = `Computer : 0`
  } else {
    document.querySelector('#computerScore').innerHTML = `Computer : ${localStorage.getItem('computerScore')}`
  }
  
  
if (!localStorage.getItem('playerScore')) {
  
  document.querySelector('#playerScore').innerHTML = `Me : 0`
  
  } else {
      
  document.querySelector('#playerScore').innerHTML = `Me : ${localStorage.getItem('playerScore')}`
  
  }
  
  if (!localStorage.getItem('playerRoundScore')) {
   showPlayerScore.innerHTML = '0'
  } else {
    showPlayerScore.innerHTML = `${localStorage.getItem('playerRoundScore')}`

  }
  
  if (!localStorage.getItem('computerRoundScore')) {
   showComputerScore.innerHTML = '0'
  } else {
    showComputerScore.innerHTML = `${localStorage.getItem('computerRoundScore')}`

  }
  
  
  
}


window.addEventListener('load',()=>{
  showScore()
})
  
  

const cho__ = document.querySelector('#cho__')

const allbtns = 
Array.from(document.querySelectorAll('.choose_sign div'))

const whoWin =
document.querySelector('#whoWin')

const feedback = 
document.querySelector('#feedback')

let player = ''


allbtns.forEach(btn =>{
  btn.addEventListener('click',function(){
    player = this.getAttribute('data-value')
     play_button.disabled = false
     play_button.classList.add('active')
     allbtns[index].classList.remove('choosen')
     index = allbtns.indexOf(this)
     allbtns[index].classList.add('choosen')
     
  })
})


play_button.addEventListener("click", function() {

  const randomIndex = Math.floor(Math.random() * game_values.length);
  const computer = game_values[randomIndex];
 if(player == computer) {
   
  feedback.innerHTML = `
   You have chosen ${player} and Computer has chosen ${computer}
`
cho__.innerHTML = ''
 whoWin.innerHTML = 'It\'s a tie'
 return;
 } 
 
 if (player == 'paper' && computer == 'rock'){
    playerRoundScore++
    showPlayerScore.innerHTML = playerRoundScore
    checkWinner(playerRoundScore,computer)
    
    localStorage.setItem('playerRoundScore',Number(playerRoundScore))
    
    
    cho__.innerHTML = 'Paper covers Rock'
    feedback.innerHTML = `
   You have chosen ${player} and Computer has chosen ${computer}
`
   return whoWin.innerHTML = 'You win'
 }
 if (player == 'rock' && computer == 'paper'){
   computerRoundScore++
   showComputerScore.innerHTML = computerRoundScore
 localStorage.setItem('computerRoundScore',Number(computerRoundScore))
checkWinner(player,computerRoundScore)

   
   cho__.innerHTML = 'Paper covers Rock'
   feedback.innerHTML = `
      You have chosen ${player} and Computer has chosen ${computer}
   `
   return whoWin.innerHTML = 'Computer wins'
 }
 if (player == 'scissors' && computer == 'paper'){
   playerRoundScore++
   showPlayerScore.innerHTML = playerRoundScore
    checkWinner(playerRoundScore,computer)
    
    localStorage.setItem('playerRoundScore',Number(playerRoundScore))
     
   checkWinner(playerRoundScore,computer)

   
    cho__.innerHTML = 'Scissors cuts Paper'
    feedback.innerHTML = `
       You have chosen ${player} and Computer has chosen ${computer}
    `
   return whoWin.innerHTML = 'You win'
 }if (player == 'paper' && computer == 'scissors'){
   computerRoundScore++
    showComputerScore.innerHTML = computerRoundScore

 localStorage.setItem('computerRoundScore',Number(computerRoundScore))
checkWinner(player,computerRoundScore)

 
   
   cho__.innerHTML = 'Scissors cuts Paper'
   feedback.innerHTML = `
      You have chosen ${player} and Computer has chosen ${computer}
   `
   return whoWin.innerHTML = 'Computer wins'
 }
 if (player == 'rock' && computer == 'scissors'){

   playerRoundScore++
    showPlayerScore.innerHTML = playerRoundScore
    
    localStorage.setItem('playerRoundScore',Number(playerRoundScore))

   checkWinner(playerRoundScore,computer)


cho__.innerHTML = 'Rock crushes Scissors'

feedback.innerHTML = `
   You have chosen ${player} and Computer has chosen ${computer}
`
return whoWin.innerHTML = 'You win'
}
if (player == 'scissors' && computer == 'rock'){

   computerRoundScore++
    showComputerScore.innerHTML = computerRoundScore

 localStorage.setItem('computerRoundScore',Number(computerRoundScore))
 
checkWinner(player,computerRoundScore)


cho__.innerHTML = 'Rock crushes Scissors'

feedback.innerHTML = `
   You have chosen ${player} and Computer has chosen ${computer}
`
return whoWin.innerHTML = 'Computer wins'
}



});


function checkWinner(player,computer)
{
  
  if (player == 5) {
    activeHuman.classList.add('active')
    
    playerRoundScore = 0
    localStorage.setItem('playerRoundScore', playerRoundScore)
    
    play_button.style.display = 'none'
    playAgain.disabled = false
    playAgain.style.display = 'inline-block'
    playAgain.classList.add('active')
    playAgain.addEventListener('click', function() {
      window.location.reload(true);
    })
    
    computerRoundScore = 0
   localStorage.setItem('computerRoundScore',computerRoundScore)
   
    document.querySelector('.computer').style.display = 'none'
    
    playerScore++ 
  localStorage.setItem('playerScore',playerScore)
  
  document.querySelector('#playerScore').innerHTML = `Me : ${playerScore}`

  }
  if (computer == 5){
   activeRobot.classList.add('active')
   computerRoundScore = 0
   localStorage.setItem('computerRoundScore', computerRoundScore)
      
     play_button.style.display = 'none'
    playAgain.disabled = false
    playAgain.style.display = 'inline-block'
    playAgain.classList.add('active')
    playAgain.addEventListener('click', function() {
      window.location.reload(true);
    })
    
   
   playerRoundScore = 0
    localStorage.setItem('playerRoundScore',playerRoundScore)
    
   document.querySelector('.player').style.display = 'none'
   
    computerScore++
    localStorage.setItem('computerScore',computerScore)
    
      document.querySelector('#computerScore').innerHTML = `Computer : ${computerScore}`


  }
}
