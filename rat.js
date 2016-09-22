var Rat = function(toxicity) {
  this.toxicity = toxicity;
}
Rat.prototype = {
  poison: function(food) {
    food.nutrition -= this.toxicity;
  }
}
module.exports = Rat;