var hero = {
  name: "Yoko",
  health: 50,
  favFood: "dime",
  talk: function() {
    return "Yo, I'm " + this.name;
  },
  eat: function(food) {
    if (food.type == this.favFood) {
      this.health += food.nutrition * 1.5;
    } else {
      this.health += food.nutrition;
    }
  },
  cash: 200,
  rent: 100,
  isBankrupt: false,
  payRent: function() {
    this.cash -= this.rent;
    this.cash < 0 ? this.isBankrupt = true : this.isBankrupt = false; 
  }  
}
module.exports = hero;

