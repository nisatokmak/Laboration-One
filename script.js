// function startGame() {
//   function enter() {
//     var enterApartment = document.getElementById("gameText").innerHTML;
//     var txt = str.replace(
//       "You come home from a party and as soon as you open your apartment door, a giant monster is running towards you! Click OK if you want to be a hero and beat the monster. Otherwise leave the apartment by clicking cancel."
//     );
//     document.getElementById("gameText").innerHTML = txt;
//   }

//   function leave() {
//     // The other logic
//   }
// }

function playGame() {
  var enterApartment = confirm(
    "You come home from a party and as soon as you open your apartment door, a giant monster is running towards you! Click OK if you want to be a hero and beat the monster. Otherwise leave the apartment by clicking cancel."
  );

  if (enterApartment == true) {
    // We enter the apartment
    alert(
      "So brave! Now, in order to slay this monster we need a gun and of course an ammo box. Since you came home drunk you have no clue where you put them. Click OK to go to game rules."
    );
    alert(
      "You have 2 rooms that you will go through. One room has the ammo box and one another room has the gun. Click OK to learn more about the rooms."
    );
    alert(
      "You start with looking at the living room. Each room has 3 different possible locations where the items might be. If you can't find the items after passing the rooms, the monster throws you out from the window."
    );

    var livingRoom = prompt(
      "Welcome to the living room! The gun is hidden somewhere in one of these three locations: under the couch, behind the TV, bookcase. Which location do you choose?"
    );
    if (livingRoom == "bookcase") {
      alert(
        "Congratulations! You found the gun! Now it is time to move on to the bedroom and find the ammo box."
      );
      var bedroom = prompt(
        "The ammo box is hidden in one of these locations: under the bed, wardrobe, dresser. Which one do you choose? "
      );
      if (bedroom == "dresser") {
        alert("Congrats! You found a box full of ammo!");
      }
    } else if (livingRoom == "under the couch" || "behind the TV") {
      alert("Hurry to the bedroom!");
      alert(" Current place: bedroom.");
      var bedroom = prompt(
        "The ammo box is hidden in one of these locations: under the bed, wardrobe, dresser. Which one do you choose? "
      );
      if (bedroom == "dresser") {
        alert("Congrats! You found a box full of ammo!");

        confirm("Click OK to see what happens next!");
      } else if (bedroom == "under the bed" || "wardrobe") {
        confirm("Click OK to see what happens next!");
      }
    } else {
      alert("Please write a valid location.");
    }
  } else {
    alert(" Well, goodbye then...");
  }

  if (bedroom == "dresser" && livingRoom == "bookcase") {
    alert(
      " Congratulations! You managed to gather the gun and the ammo and beat the moster! And now you can rest freely in your apartment!"
    );
  } else {
    var startOver = confirm(
      "So sad...You couldn't bring together the gun and the ammo. But don't worry! You can start over! What do you say?"
    );
    if (startOver == true) {
      playGame();
    } else {
      alert("Goodbye then...");
    }
  }
}

playGame();
