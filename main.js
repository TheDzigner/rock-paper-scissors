let game_values = ['paper','rock','scissors'];

let playerScore = localStorage.getItem('playerScore',0)

let computerScore = localStorage.getItem('computerScore',0)

let index = 0

const play_button = document.getElementById("play");

  play_button.disabled = true

  

  

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

 if (player == computer) {

   feedback.innerHTML = `

   You have chosen ${player} and Computer has chosen ${computer}

`

   return whoWin.innerHTML = 'It\'s a tie'

 } 

 if (player == 'paper' && computer == 'rock'){

    playerScore++

    localStorage.setItem('playerScore',Number(playerScore))

    document.querySelector('#playerScore').innerHTML = `Me : ${playerScore}`

    cho__.innerHTML = 'Paper covers Rock'

    feedback.innerHTML = `

   You have chosen ${player} and Computer has chosen ${computer}

`

   return whoWin.innerHTML = 'You wins'

 }

 if (player == 'rock' && computer == 'paper'){

   computerScore++

  localStorage.setItem('computerScore',Number(computerScore))

   document.querySelector('#computerScore').innerHTML = `Computer : ${computerScore}`

   cho__.innerHTML = 'Paper covers Rock'

   feedback.innerHTML = `

      You have chosen ${player} and Computer has chosen ${computer}

   `

   return whoWin.innerHTML = 'Computer wins'

 }

 if (player == 'scissors' && computer == 'paper'){

   playerScore++

   localStorage.setItem('playerScore',Number(playerScore))

   document.querySelector('#playerScore').innerHTML = `Me : ${playerScore}`

    cho__.innerHTML = 'Scissors cuts Paper'

    feedback.innerHTML = `

       You have chosen ${player} and Computer has chosen ${computer}

    `

   return whoWin.innerHTML = 'You wins'

 }if (player == 'paper' && computer == 'scissors'){

   computerScore++

 localStorage.setItem('computerScore',Number(computerScore))

 

   document.querySelector('#computerScore').innerHTML = `Computer : ${computerScore}`

   cho__.innerHTML = 'Scissors cuts Paper'

   feedback.innerHTML = `

      You have chosen ${player} and Computer has chosen ${computer}

   `

   return whoWin.innerHTML = 'Computer wins'

 }

 if (player == 'rock' && computer == 'scissors'){

playerScore++

localStorage.setItem('playerScore',Number(playerScore))

document.querySelector('#playerScore').innerHTML = `Me : ${playerScore}`

cho__.innerHTML = 'Rock crushes Scissors'

feedback.innerHTML = `

   You have chosen ${player} and Computer has chosen ${computer}

`

return whoWin.innerHTML = 'You wins'

}

if (player == 'scissors' && computer == 'rock'){

 computerScore++

localStorage.setItem('computerScore',Number(computerScore))

document.querySelector('#computerScore').innerHTML = `Computer : ${computerScore}`

cho__.innerHTML = 'Rock crushes Scissors'

feedback.innerHTML = `

   You have chosen ${player} and Computer has chosen ${computer}

`

return whoWin.innerHTML = 'Computer wins'

}

});

