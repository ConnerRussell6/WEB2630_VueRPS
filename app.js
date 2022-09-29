new Vue({
  el: '#app',
  data: {
      start: true, 
      computerChoice: -1,
      playerChoice: -1,
      computerScore: 0,
      playerScore: 0,
      output: [
        {message: ''},
        {player: false},
        {computer: false},
        {tie: false}
      ],
      playerBar: 0,
      computerBar: 0
      
  },
  methods: {
    selectChoice (player) {
      this.playerChoice = player,
      this.computerChoice = Math.floor(Math.random() * 3 + 1)
    },

    reset () {
      this.playerScore = 0;
      this.computerScore = 0;
      this.playerChoice = -1;
      this.computerChoice = -1;
      this.playerBar = 0;
      this.computerBar = 0;
      this.start = true;
      this.output = [
        {message: ''},
        {player: false},
        {computer: false},
        {tie: false}
      ]
    },

  },

  computed: {

    updatePlayerScore() {
      if(this.playerScore > 0) {
        this.playerBar = 10 * this.playerScore; 
      }
    },

    updateComputerScore() {
      if(this.computerScore > 0) {
        this.computerBar = 10 * this.computerScore; 
      }
    },

    showResult() {
      if (this.playerChoice == 1 && this.computerChoice == 3) {
        this.playerScore++
        this.output.push({message: 'COMPUTER CHOSE SCISSORS | ROCK BEATS SCISSORS | PLAYER WINS!', player: true})
      }
      else if (this.playerChoice == 1 && this.computerChoice == 2) {  
        this.computerScore++
        this.output.push({message: 'COMPUTER CHOSE PAPER | PAPER BEATS ROCK | COMPUTER WINS!', computer: true},)
      }
      else if (this.playerChoice == 1 && this.computerChoice == 1) {  
        this.output.push({message: 'COMPUTER CHOSE ROCK | YOU HAVE TIED!', tie: true})
      }
      else if (this.playerChoice == 2 && this.computerChoice == 1) {
        this.playerScore++
        this.output.push({message: 'COMPUTER CHOSE ROCK | PAPER BEATS ROCK | PLAYER WINS!', player: true})
      }
      else if (this.playerChoice == 2 && this.computerChoice == 3) {  
        this.computerScore++
        this.output.push({message: 'COMPUTER CHOSE SCISSORS | SCISSORS BEATS PAPER | COMPUTER WINS!', computer: true})
      }
      else if (this.playerChoice == 2 && this.computerChoice == 2) {  
        this.output.push({message: 'COMPUTER CHOSE PAPER | YOU HAVE TIED!',tie:true})
      }
      else if (this.playerChoice == 3 && this.computerChoice == 2) {
        this.playerScore++
        this.output.push({message: 'COMPUTER CHOSE PAPER | SCISSORS BEATS PAPER | PLAYER WINS!', player: true})
      }
      else if (this.playerChoice == 3 && this.computerChoice == 1) {  
        this.computerScore++
        this.output.push({message: 'COMPUTER CHOSE ROCK | ROCK BEATS SCISSORS | COMPUTER WINS!', computer: true})
      }
      else if (this.playerChoice == 3 && this.computerChoice == 3) {  
        this.output.push({message: 'COMPUTER CHOSE SCISSORS | YOU HAVE TIED!', tie: true})
      }
    },

    endGame() {
      if (this.playerScore == 10) {
        alert('Player Wins! Play Again?')
        this.reset()
      }
      else if (this.computerScore == 10) {
        alert('Computer Wins! Play Again?')
        this.reset()
      }
    }
    }
    
  });