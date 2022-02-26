playersList = ["Arihant", "Sai", "Abhirup", "Aryan", "Ishaan"];

// Get the players and results divs
var players = document.getElementById("players");
var results = document.getElementById("results");

// Shuffle the list
function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

shuffle(playersList);

// Create player cards
for (var i = 0; i < playersList.length; i++) {
  var node = document.createElement("div");
  node.className = "card";
  node.setAttribute("style", "height: 2rem; margin: 0.5rem;");
  node.appendChild(document.createTextNode(playersList[i]));
  players.appendChild(node);
}
// Control the Progress Bar function
var i = 0;
var bar = document.querySelector(".progress-bar");
ready = false;
function makeProgress(ready) {
  bar.style.display = "block";
  if (i < 100) {
    i = i + Math.random() * 10;
    bar.style.width = i + "%";
    bar.innerText = i > 100 ? "100%" : Math.round(i) + "%";
  } else {
    i = 100;
  }
  // Wait for sometime before running this script again
  setTimeout("makeProgress()", Math.random() * 750);
  ready = true;
}

//  Get the Make Teams button
var makeTeamsBtn = document.getElementById("makeTeams");
makeTeamsBtn.onclick = () => {
  makeProgress();
  setTimeout(makeTeams, 10000);
};

function makeTeams() {
  // Disable this button
  makeTeamsBtn.disabled = true;

  var team1 = [];
  var team2 = [];

  // Choose 3 random players
  for (var i = 0; i < 3; i++) {
    var random = Math.floor(Math.random() * playersList.length);
    team1.push(playersList[random]);
    playersList.splice(random, 1);
  }

  team2 = playersList;

  players.appendChild(document.createElement("br"));

  var node = document.createElement("div");
  node.className = "card text-center";
  node.setAttribute("style", "height: 2rem; margin: 0.5rem;");
  node.appendChild(document.createTextNode("Team 1: " + team1.join(", ")));
  results.appendChild(node);

  node = document.createElement("div");
  node.className = "text-center ";
  node.appendChild(document.createTextNode("Vs."));
  results.appendChild(node);

  var node = document.createElement("div");
  node.className = "card text-center";
  node.setAttribute("style", "height: 2rem; margin: 0.5rem;");
  node.appendChild(document.createTextNode("Team 2: " + team2.join(", ")));
  results.appendChild(node);
}
