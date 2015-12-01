//CODE GOES HERE
var ship;
var crewMembers;
var launchpad;
var loadCrew;
var rocket;
var countdown;
var trainCrewmate;

ship = {
  name: "Betty",
  crew: [],
  captain: function(){
    return this.crew[Math.floor(Math.random()*this.crew.length)];
  },
  mountPropulsion: function(propulsion){
    this.propulsion = propulsion
  },
  fuelShip: function(addedFuel){
    console.log(addedFuel + " of fuel has been added!");
    this.propulsion.fuel += addedFuel;
  },
  takeoff: function() {
    this.propulsion.fire();
    console.log("BRRRRRRRR!!!");
  }
};

crewMembers = ["Justin", "Will", "Tom", "David", "Brian", "Joe", "Julie", "Leon", "Nathan", "Kevin"];

loadCrew = function(array, ship) {
  for(var i =0; i < array.length; i++) {
    crewmate = trainCrewmate(array[i]);
    ship.crew.push(crewmate);
  }
};

trainCrewmate = function(name) {
  return { name: name };
};

rocket = {
  fuel: 0,
  fire: function() {
    if (this.fuel > 0) {
      this.fuel = this.fuel - 1;
      console.log("Fuel level: " + this.fuel);
      return true;
    } else {
      console.log("There is no fuel, engines failed to fire.");
      return false;
    }
  }
}

countdown = function(time, ship) { // we are passing in ship here so the takeoff method can properly call `this.propulsion.fire` (with `this` being the ship)
  if (time > 0) {
    setTimeout(function() {
      console.log(time);
      countdown(time - 1, ship); // we needed to pass in the correct arguments to the countdown method defined above (time, ship)
    }, 1000);
  } else {
    console.log("Blastoff!");
    ship.takeoff(); // we needed to call the ship's takeoff method after printing "Blastoff!"
  };
}

launchpad = function(ship, array, propulsion){
  console.log("Please buckle your seatbelts");
  console.log("You are flying on the good ship " + ship.name + "!");

  loadCrew(array, ship);
  console.log("Your captain is " + ship.captain().name);

  ship.mountPropulsion(propulsion);

  ship.fuelShip(5);
  countdown(10, ship);
};

launchpad(ship, crewMembers, rocket);
