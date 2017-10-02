class GuessingGame {
    constructor() {
    	this.low = 0;
    	this.middle = 0;
    	this.high = 0;
    }

    setRange(min, max) {
    	this.low= min;
    	this.high = max;
    }

    guess() {
    	this.middle = Math.ceil((this.low + this.high)/2);
    	return this.middle;
    }

    lower() {
    	this.high = this.middle;
    }

    greater() {
    	this.low =this.middle;
    }
}

module.exports = GuessingGame;
