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

    }
    
  });