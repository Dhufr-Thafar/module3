const basketballGame = {
    score: 0,
    fouls: 0,
    freeThrow() {
    this.score++;
    return this;
    },
    basket() {
    this.score += 2;
    return this;
    },
    threePointer() {
    this.score += 3;
    return this;
    },
    commitFoul() {
        this.fouls++;
        return this;
      },
    halfTime() {
    console.log('Halftime score is '+this.score);
    return this;
    },
    finalScore() {
        console.log('Final score is ' + this.score+ 
        ' with ' + this.fouls + ' fouls.');
        return this;
    }
}
    //modify each of the above object methods to enable function chaining as below:
    basketballGame
    .basket()
    .freeThrow()
    .commitFoul()
    .freeThrow()
    .basket()
    .commitFoul()
    .threePointer()
    .halfTime()

    .basket()
    .commitFoul()
    .threePointer()
    .finalScore();