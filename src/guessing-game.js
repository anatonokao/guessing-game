class GuessingGame {
   #min = 0
   #max = 0
   #current = 0
   constructor() { }
   setRange(min, max) {
      this.#min = min
      this.#max = max
   }

   guess() {
      this.#current = Math.ceil((this.#max - this.#min) / 2 + this.#min)
      return this.#current
   }

   lower() {
      this.#max = this.#current
   }

   greater() {
      this.#min = this.#current
   }
}

module.exports = GuessingGame;
