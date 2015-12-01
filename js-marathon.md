# The Final Frontier

It's time to explore space! But first, we've got to work together and build a spaceship that will get us there!

We've provided a `shipyard.js` file that we're going to use to build our ship, our rockets, our crew, and blast off.

#### Step 0

Create a function called `launchpad`, and then call that function (using parenthesis) at the end of the file. This will be the function that executes when we run the file.

Inside of that function, write a short message announcing the initiation of preflight procedures - any string of text that you and your group agree on!

We can print to the console by using `console.log`.

So this code:

```
console.log("Initiating Launchpad Procedures");
```

...will output `Initiating Launchpad Procedures`!

We can run the code by going to the terminal and typing `node shipyard.js`. You should see your preflight message!

After each step, we should run `node shipyard.js` to make sure our code works, and is printing what we expect.

#### Step 1

First, we're going to build a spaceship. Create a Javascript object and name it `ship`, and then give it a `name` property. Discuss with your group what an appropriate name for this ship might be.

#### Step 2

Let's add another preflight message, announcing the name of our ship. We'll need to add an argument to the `launchpad` so we can pass in the `ship`. Be sure to pass our specific `ship` object where we call `launchpad` at the end of the file!

Javascript doesn't have the same kind of string interpolation magic that ruby has. We'll need to call our function in-line, like this:

```
console.log("Don't forget to add an extra space " + foo().property);
```

Add a line like that in the `launchpad` function, accessing the ship's name through its `name` property!

#### Step 3

We're going to work on adding a crew - but first we need to train them up!

We're going to create a function that returns a Javascript object, and that object is going to represent members of our crew!

The Javascript object should have a `name` property, and the function that _constructs_ the object should take a name as an argument.

We're going to build an array of names of our crewmates. Create an array named "crewNames", and fill it with the name of all the members in your mentor group!

*Discussion* : In ruby, the last thing defined in a method is what gets returned out of the method. This is called _implicit returns_, and it is a feature of Ruby, but not of all programming languages. In fact, most languages require _explicit returns_, and will return `nil` unless explicitly told otherwise.

#### Step 4

We're going to write a function to assemble the crew into an array of crew objects to load into the ship.

First, lets create a `loadCrew` function, and lets have it take an array as the argument. We're going to iterate over the array of names, construct a Javascript object for that crewmate. We'll load that newly constructed crewmate into a `crew` array, and explicitly return that array at the end of the function.

Iterating in Javascript is not nearly as easy as it is in Ruby, but it's easy to see what's going on if you look at the code.

```
var loadCrew = function(array){
  crew = []
  for(var i = 0; i < array.length; i++){
    crewmate = trainCrewmate(array[i])
    crew.push(crewmate)
  }
  return crew
};
```

Let's take a closer look at that `for` statement.

`for(var i = 0; i < array.length; i++)`

This for statement has three distinct parts inside of the parenthesis.

First, it creates a variable scoped to this `for` block, `i`. It sets the value of `i` to `0`.

Then, it compares the value of `i` with the length of the `array` we passed in to the function. If `i` is less than the length of the array, then it stops the loop - we've gone through all the items!

If it hasn't, it takes one more moment to bump the value of `i` by one. `i++` is no different than `i = i + 1`, just requires less typing.

This happens at the end of the loop - `i` will be `0` the first time through, then `1`, `2`, etc. We can use the value of `i` to call the indices of the `array` - thereby looping over each item in the array, one at a time!

#### Step 5

In the previous step, we accessed the `trainCrewmate` function inside of the `loadCrew` function. If we didn't order these correctly, we might run into an error when we try to execute this code.

Let's hoist some of these variables by adding them to the top of the file. So, instead of...

```
var ship = {
  name: "YOUR SHIP NAME HERE"
};
```

... We should see ...

```
var ship;

// Other code

ship = {
  name: "YOUR SHIP NAME HERE"
};
```

Repeat this process for `crewNames` and `launchpad`. Be sure to hoist all globally scoped variables we define from this point out!

#### Step 6
Let's make loading the crew part of the `launchpad` function. We're going to add another argument to `launchpad` to accept the `crewNames` array.

Let's edit the `loadCrew` function and the `ship` object. We can add a `crew` property to the ship with a default value of an empty array.

Next, edit `loadCrew` to accept the ship as an argument, and edit it to fill the `ship`'s `crew` property instead of an empty array!

Finally, lets call `loadCrew` in `launchpad` function. It's in this function that we will list the appropriate steps required for takeoff!

#### Step 7

The crew decided to take turns playing the role of captain of the ship. Every time we ask the ship who the `captain` is, we're going to get a random crewmate!

Start by defining the `captain` property on the `ship` object, and assign an anonymous function as a value.

But, how do we make it random?

"Random" is a dubious concept in programming, and Javascript does not make it easy to make something random. Check out the following code to see how you can use `Math.random()` to choose a random element from an array!

```
//Random Example

var array = ["a", "b", "c", "d"];

var randomElementOfTheArray = array[Math.floor(Math.random()*array.length)];

console.log(randomElementOfTheArray)
// Puts either "a", "b", "c", or "d"
```

Let's break that down a little bit more to understand what is going on.

```
// Random Breakdown

var lengthOfArray = array.length;
// Get the amount of elements in the array

var randomFloat = Math.random() * lengthOfArray;
// Get a random *decimal* value from 0 - lengthOfArray

var = calcIndex = Math.floor(randomFloat);
//Turn that decimal value into a whole integer using Math.floor()

var randomElementOfTheArray = array[calcIndex]
// We use the calculated index to get a value from the given array
```

So now, lets fill in that captain function!

Inside of the anonymous `captain` function, we can use the `this` keyword to gain access to the `crew` property on the `ship` object. In this scope, `this` refers to `ship`!

#### Step 8

Now, let's print to the console in the launchpad, so that we can announce the captain of this particular launch. Be sure to access the `name` property of the `captain`.

Be sure to check how the code looks by running `node shipyard.js`, then give our first captain a high-five.

#### Step 9

Earth's gravity well is no small task to overcome. We're going to need some sturdy rockets to take us to the stars.

Create a `rocket` object, and assign it two properties - `fuel`, and `fire`. `fuel` is going to start as an integer - `0`. `fire` is going to be a function.

Now, we're going to write some code to fire the engines!

We want to make sure there is fuel in the tank, and if there is, we want to print that the rockets fired and remove some fuel.

Our `fire` function needs to:
* Check and see if there is fuel in the `fuel` property.
* If there is, subtract 1 from the `fuel` property and print the remaining fuel count.
* If there is not, print that the engines failed to fire.

We're almost there!

#### Step 10

We're going to write some cool functions on the `ship` to attach our rocket.

Let's add a property to the `ship` called `mountPropulsion`. It's going to take an argument and assign that argument to another property on itself - `propulsion`. `mountPropulsion` is the *setter*, and `propulsion` is the *getter*!

#### Step 11

Add another property to ship, `fuelShip`, and make it a function.

`fuelShip` should:
* accept an argument representing the amount of fuel we're adding,
* print that it is adding a set amount of fuel to its tanks,
* add the fuel amount to the `propulsion.fuel` property!

After you are done, add both of these functions to the launchpad!

Now run `node shipyard.js` and watch everything run! Be sure to check out any bugs that crop up! We're almost to the stars!

#### Step 12

We've got all of our pieces together. Now we've got to blastoff!

Let's add a `takeoff` function on the ship that:
* `fire`s the propulsion drives, and
* prints a really convincing takeoff noise to the terminal.

When you write that, add it to the launchpad function!

Congrats! Our ship works. But... I feel like it's missing something...

...Of course! We need a countdown!

#### Step 13

There's a special function in Javascript, `setTimeout`, that allows you to run Javascript on a _delay_, measured in milliseconds.

What we can do is create a countdown that calls on itself *recursively* - each time it runs, it can tick itself down another tick. When it hits zero, it stops calling itself, and we get blastoff!

```
var countdown;

//Other code

countdown = function(num){
  if( num > 0){
    setTimeout(function(){
      console.log(num);
      countdown(num - 1);
    }, 1000);
  }else{
    console.log("Blastoff!!");
  };
}
```

Take a moment to consider what arguments we pass to `setTimeout`. The second argument is an integer, `1000`, meant to represent the number of milliseconds to wait for. The first argument is an anonymous function that prints the countdown, then runs itself again, ticked down.

Now, just add it to `launchpad`, and give it a run with `node shipyard.js`!

Congrats, everyone! It looks like a successful... wait, why did the rockets fire before the countdown was finished?

#### Step 14

Javascript executes its code in a very particular way. It goes line by line, scheduling the execution of each line of code. However, some functions - like `setTimeout` - are _asynchronous_, and Javascript schedules them for the future. This means that `ship.takeoff()` is firing before the countdown finishes.

How do we fix this? Well, we could use a popular pattern in Javascript called the `callback` pattern to register a `callback` for the asynchronous code to call when it was done.

Let's edit the countdown function to accept something we can run as a callback, and then update the launchpad accordingly.

```
countdown = function(num, ship){
  if( num > 0){
    setTimeout(function(){
      console.log(num);
      countdown(num - 1);
    }, 1000);
  }else{
    console.log("Blastoff!!");
    ship.takeoff();
  };
}
```

```
launchpad = function(ship, crew, rocket){
  // Other Functions
  countdown(10, ship);
};

launchpad(ship, crewNames, rocket);
```

We define the function on `takeoff`, then pass the `ship` object's `takeoff` function to countdown. After the asynchronous actions are finished, the callback fires!

Run `node shipyard.js`, and get ready for takeoff, Launchers!
