class Chronometer {
  constructor() {
    // ... your code goes here

    this.currentTime = 0;
    this.intervalId = null;
    this.counterId = 0;
  }

  start(printTimeCallback) {
    // ... your code goes here

    this.counterId = setInterval(() => {
      this.currentTime += 1;
      printTimeCallback && printTimeCallback();
    }, 1000);
  }

  getMinutes() {
    // ... your code goes here

    return Math.floor(this.currentTime / 60);
  }

  getSeconds() {
    // ... your code goes here
    return this.currentTime % 60;
  }

  computeTwoDigitNumber(value) {
    // ... your code goes here

    return value.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });
  }

  stop() {
    // ... your code goes here
    clearInterval(this.counterId);
  }

  reset() {
    // ... your code goes here
    this.currentTime = 0;
  }

  split() {
    // ... your code goes here
    return `${this.computeTwoDigitNumber(
      this.getMinutes()
    )}:${this.computeTwoDigitNumber(this.getSeconds())}`;
  }
}
