var firebaseConfig = {
    apiKey: "AIzaSyDHU-RRMlgtaBXf0lUJCgcojjE7bQUBbig",
    authDomain: "whatever-i-want-7a3c7.firebaseapp.com",
    databaseURL: "https://whatever-i-want-7a3c7.firebaseio.com",
    projectId: "whatever-i-want-7a3c7",
    storageBucket: "",
    messagingSenderId: "49463178977",
    appId: "1:49463178977:web:d955b967e6d43eae"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var dataRef = firebase.database();
  
  
  var tie = 0;
  var p1W = 0;
  var p1L = 0;
  var p2W = 0;
  var p2L = 0;

  $(".p1Button").on("click", function() {
    var p1Input = $(this).val()
    
    $(".p2Button").on("click", function() {
        var p2Input = $(this).val()

        if (p1Input === p2Input){
            tie++;
        }
        if ((p1Input == "rock" && p2Input == "paper")||(p1Input == "paper" && p2Input == "scissors")||(p1Input == "scissors" && p2Input == "rock")){
        p1L++;
        p2W++;
        }
        if ((p1Input == "rock" && p2Input == "scissors")||(p1Input == "paper" && p2Input == "rock")||(p1Input == "scissors" && p2Input == "paper")){
            p1W++;
            p2L++;
        }
console.log("p1L" + p1L);
console.log("tie" + tie);
console.log("p1W" + p1W);
console.log("p2L" + p2L);
console.log("p2W" + p2W);
$("#p1Score").html("<p>Player 1 Wins: " + p1W + "<br>" + "and Losses: " + p1L + "</p>");
$("#p2Score").html("<p>Player 2 Wins: " + p2W + "<br>" + "and Losses: " + p2L + "</p>");
$("#ties").html("<p>And ties: " + tie + "<br>" + "Gross.</p>");
/*dataRef.ref().push({

    p1L: p1L,
    p1W: p1W,
    p2L: p2L,
    p2W: p2W,
    tie: tie
  });*/
  dataRef.ref().on("child_added", function(childSnapshot) {

    // Log everything that's coming out of snapshot
    console.log(childSnapshot.val().p1W);
    console.log(childSnapshot.val().p1L);
    console.log(childSnapshot.val().p2L);
    console.log(childSnapshot.val().p2W);
    console.log(childSnapshot.val().tie);
/*var scoreRef = database.ref("Luigi").push({

    //
    //
    //

  });
  var key = scoreRef.push().key;
  var update = {};
  update[key] = {
    losses: p2L,
    ties: tie,
    wins: p2W,
  };
  var result = scoreRef.update(update);*/


})
})
  })
