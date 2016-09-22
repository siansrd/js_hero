var hero = require('../hero.js');
var Food = require('../food.js');
var Rat = require('../rat.js');
var landlord = require('../landlord.js')
var assert = require('assert');


describe ( 'Hero', function() {

  beforeEach( function() {
      hero.health = 50;
    })


  it ('has a name', function() {
    assert.strictEqual( "Yoko", hero.name );
  })

  it ('has health', function() {
    assert.strictEqual( 50, hero.health );
  })

  it ('can say her name', function() {
    assert.strictEqual( "Yo, I'm Yoko", hero.talk() );
  })

  it ('can by poisoned', function() {
    var rat1 = new Rat(20);
    var grape = new Food("grape");
    rat1.poison(grape);
    hero.eat(grape);
    assert.equal( 40, hero.health );
  })

  it ('can be poisoned by favourite food', function() {
    var rat2 = new Rat(30);
    var chocolate = new Food("chocolate");
    rat2.poison(chocolate);
    hero.eat(chocolate);
    assert.equal( 30, hero.health );
  })

  it ('can pay rent', function() {
    hero.payRent();
    assert.strictEqual(100, hero.cash)
  })

  it ('can go bankrupt', function() {
    hero.payRent();
    hero.payRent();
    assert.strictEqual(true, hero.isBankrupt)
  })
})


describe ( 'Food', function() {

  beforeEach( function() {
      hero.health = 50;
    })

  it ('has a name', function() {
    var grape = new Food("grape");
    assert.strictEqual( "grape", grape.type );
  })

  it ('can eat food', function() {
    var grape = new Food("grape");
    hero.eat(grape);
    assert.strictEqual(60, hero.health);
  })

  it ('can eat favourite food', function() {
    var dime = new Food("dime");
    hero.eat(dime);
    assert.strictEqual(65, hero.health);
  })
  

})

describe ('Rat', function() {

  it ('has toxicity', function() {
    var rat1 = new Rat(20);
    assert.strictEqual(20, rat1.toxicity );
  })

  it ('can poison food', function() {
    var rat1 = new Rat(20);
    var grape = new Food("grape");
    rat1.poison(grape);
    assert.strictEqual( -10, grape.nutrition )
  })

})

describe ('Landlord', function() {

  it ('can ripoff', function() {
    landlord.ripoff(hero);
    assert.strictEqual(150, hero.rent);
  })

})