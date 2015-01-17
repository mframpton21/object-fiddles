// Once you complete a problem, open up Chrome and check the answer in the console.


// PROBLEM 1
// Create an object called me. Give it a key of name with the value being your name, 
// and another key of age with the value being your age. Then alert your name using dot notation.

  //Code here
var me = {
  name: "Michael",
  age: 50
};

alert(me.name);


// PROBLEM 2
// Make a 'favoriteThings' object that contains the following keys: band, food, 
// person, book, movie, holiday. Have the values to those keys be your favorite thing in that category.

  //Code here
var favoriteThings = {
  band: "The Band",
  food: "Itailian",
  person: "Jennifer",
  book: "The Book",
  movie: "The Movie",
  holiday: "Thanksgiving" 
};

// After you've made your object, add another key named 'car' with the value being your 
// favorite car and then another key named 'brand' with the value being your favorite brand.

  //Code here
favoriteThings.car = "Fast";
favoriteThings.brand = "Chevrolet"; 

// Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key 
// in your favoriteThings object to be '50 Shades of Gray'.

  //Code here
favoriteThings.food = "Lettuce";


// PROBLEM 3
// Create an empty Object called backPack. Now, create a variable called 'item'
// and set it equal to the string 'firstPocket'. Using bracket notation,
// add a 'firstPocket' key (or property) to backPack, using 'item'.
// Set the value of that key to 'chapstick'.

// Using dot notation, add another key (or property) to your backPack object
// that is named color, with the value being the color of your backpack. */

  //Code here
var backPack = {};

var item = "firstPocket";

backPack[item] = "chapstick";

// After you do the above, alert your entire backPack object.

  //Code here
//alert(JSON.stringify(myObj));
alert(backPack);

// You probably noticed that it just alerted [object Object].
// Alerting to see the data in your Object doesn't work so well.
// Instead, console.log your whole backPack object and then check out the console.

  //Code here
console.log(backPack);


// PROBLEM 4
// Create another 'me' object with the following properties name, age, height, gender, 
// married, eyeColor, hairColor. Fill those properties in with the appropriate values.

  //Code Here
var me = {
  name: "Michael", 
  age: 50, 
  height: "5'8", 
  gender: "male",
  married: true,
  eyeColor: "brown", 
  hairColor: "brown"
};
// Now, loop through your object and alert every value. *Tyler --> 24 --> 6'0 --> Male, etc etc

  //Code Here
for (prop in me) {
  alert(prop + ": " + me[prop]);
}


// PROBLEM 5
//Create an Object called 'album' with 5 keys named different song titles that you make 
// up, with the values being the length of each song.

  //Code Here
var album = {
  song1: 5,
  song22: 6,
  song333: 7,
  song4444: 8,
  song55555: 9
};

// Now, loop through your album object alerting every song title individually.

  //Code Here
for (prop in album) {
  alert(prop);
}


// PROBLEM 6
// Create an object called states that has 5 US states as properties with the values 
// being their population (doesn't have to be accurate).

  //Code Here
var states = {
  Utah: 20000,
  California: 32000,
  Washington: 25000,
  Idaho: 10000,
  Montana: 15000
};
// Now, loop through your states object and if the states population is greater 
// than 30K, alert that state.

  //Code Here
for (prop in states) {
  //alert(prop);  // prop
  //alert(states[prop]);  // value of the prop
  if (states[prop] > 30000) {
    alert(prop);
  }
}


// PROBLEM 7
// Above you're given a user object. Loop through the user object checking to make sure
// that each value is truthy. If it's not truthy, remove it from the object. */
var user = {
    name: 'Tyler McGinnis',
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}


  //Code Here

// Once you get your truthy Object, Change the remaining values in the object to be specific to 
// you (name: 'your name', username: 'your username'), rather than my information.

  //Code Here




// PROBLEM 8
// Let's say I, the user, decided to change my name and email address to the following
// name -> 'Tyler S. McGinnis', email -> 'tyler.mcginnis@devmounta.in'. Make that change.
var user = {
        name: 'Tyler McGinnis',
        age: 24,
        pwHash: 'U+Ldlngx2BYQk',
        email: 'tylermcginnis33@gmail.com',
        birthday: '05/02/1990',
        username: 'tylermcginnis33',
        sayName: function(){
            alert('Email is : ' + this.email);
        }
};


  //Code Here

// Now call the sayName method that's on the user object which will alert the users email

  //Code Here




// PROBLEM 9
// Create an empty object called methodCollection.

  //Code Here

// Now add two methods (functions that are properties on objects) to your methodCollection
// object. One called 'alertHello' which alerts 'hello' and another method called logHello
// which logs 'hello' to the console. 

  //Code Here

// Now call your alertHello and logHello methods.

  //Code Here




// PROBLEM 10
// Above you're given an empty array with four objects. Fill the devMountainEmployees
// array with those four objects. After that console.log the length of the Array and make
// sure that it's equal to 4.
var devMountainEmployees = [];

var tyler = {
    name: 'Tyler',
    position: 'Lead Instructor/Engineer',
    spiritAnimal: 'Honey Badger'
};

var cahlan = {
    name: 'Cahlan',
    position: 'CEO',
    spiritAnimal: 'butterfly'
};

var ryan = {
    name: 'Ryan',
    position: 'Marketing',
    spiritAnimal: 'fox'
};

var colt = {
    name: 'Colt',
    position: 'Everything really',
    spiritAnimal: 'Young Male Horse'
}



  //Code Here

// Now let's say Cahlan has a mental breakdown and has to take a leave of absense to 'find himself'.
// Loop through your devMountainEmployees until you find cahlan, then remove him from the array.

  //Code Here




// PROBLEM 11
// Now we're going to combine what we've learned today (objects) with what we learned
// yesterday (arrays). Yeah, take a deep breathe. You're ready for this, promise.
// Let's think back to our itunes example (tylermcginnis.com/itunes).
// Notice that when you type in an artist name, iTunes gives us back a LOT of data.
// What they're really giving us is an Array full of Objects. It probably looks something
// like this.
var data = [
    {
        artist: 'shakira',
        album: 'hips don\'t lie',
        tracks: 16,
    },
    {
        artist: 'shakira',
        album: 'mariposa',
        tracks: 12,
    },
    {
        artist: 'shakira',
        album: 'greatest hits',
        tracks: 19
    }
];



// A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects)
// of Data is to have an Array full of objects. 

//Create an empty array called users.

  //Code Here

// Now add three user objects to your users array. Each user object should contain the
// following properties. name, email, password, username.
// include this as one of the objects in your array.
var user1 = {
    name: 'Tyler McGinnis',
    email: 'tylermcginnis33@gmail.com',
    password: 'iLoveJavaScript',
    username: 'infiniateLoop'
}

//Your Code Here

// Now you have a very common data structure. Twitter is a good use case.
// It's easy to imagine that your followers list on Twitter is an Array full or objects
// and those objects contain properties about the specific person you follow.*/

// Now let's say that Tyler decided to delete his account. Loop through your array of
// objects until you find Tyler's account (use tylermcginnis33@gmail.com to find him).
// Once you find the particular indice he's located in, delete him from the array.

  //Code Here

// The activity we just did is very much how data works in 'the real world'.



