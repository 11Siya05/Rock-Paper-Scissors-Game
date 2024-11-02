 // Grabbing HTML elements
 const playerScoreEl = document.getElementById('player-score');
 const computerScoreEl = document.getElementById('computer-score');
 const playerChoiceEl = document.getElementById('player-choice');
 const computerChoiceEl = document.getElementById('computer-choice');
 const resultMessageEl = document.getElementById('result-message');
 const resetBtn = document.getElementById('reset-btn');
 const choiceButtons = document.querySelectorAll('.choice-btn');

 // Game state
 let playerScore = 0;
 let computerScore = 0;

 // Possible choices
 const choices = ['rock', 'paper', 'scissors'];

 // Function to get the computer's random choice
 function getComputerChoice() {
   const randomIndex = Math.floor(Math.random() * choices.length);
   return choices[randomIndex];
 }

 // Function to determine the winner of a round
 function getWinner(playerChoice, computerChoice) {
   if (playerChoice === computerChoice) return 'Draw';
   if (
     (playerChoice === 'rock' && computerChoice === 'scissors') ||
     (playerChoice === 'paper' && computerChoice === 'rock') ||
     (playerChoice === 'scissors' && computerChoice === 'paper')
   ) {
     playerScore++;
     return 'Player Wins!';
   } else {
     computerScore++;
     return 'Computer Wins!';
   }
 }

 // Event listener for choice buttons
 choiceButtons.forEach(button => {
   button.addEventListener('click', () => {
     const playerChoice = button.getAttribute('data-choice');
     const computerChoice = getComputerChoice();

     // Update choices display
     playerChoiceEl.textContent = playerChoice;
     computerChoiceEl.textContent = computerChoice;

     // Determine winner and update result message
     const result = getWinner(playerChoice, computerChoice);
     resultMessageEl.textContent = result;

     // Update scoreboard
     playerScoreEl.textContent = playerScore;
     computerScoreEl.textContent = computerScore;
   });
 });

 // Event listener for reset button
 resetBtn.addEventListener('click', () => {
   playerScore = 0;
   computerScore = 0;
   playerScoreEl.textContent = playerScore;
   computerScoreEl.textContent = computerScore;
   playerChoiceEl.textContent = '-';
   computerChoiceEl.textContent = '-';
   resultMessageEl.textContent = 'Make your move!';
 });