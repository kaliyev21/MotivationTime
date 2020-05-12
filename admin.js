var firebaseConfig = {
  apiKey: "AIzaSyAx3Nzz5QfdWa3FVthji25_I6cLIh5grY8",
  authDomain: "four-ee70e.firebaseapp.com",
  databaseURL: "https://four-ee70e.firebaseio.com",
  projectId: "four-ee70e",
  storageBucket: "four-ee70e.appspot.com",
  messagingSenderId: "408060784563",
  appId: "1:408060784563:web:d19738db564b9bd76be5c6",
  measurementId: "G-41V340PVBL"
};

firebase.initializeApp(firebaseConfig);


const database = firebase.database();
let words = [];

var ref = firebase.database().ref();

ref.on("value", function (snapshot) {
  let value = snapshot.val()
  Object.entries(value).map(([key, v]) => {
    words.push(v);
  });
});

let random;
function start() {
  document.getElementById("game").style.display = "block";
  if (words.length > 0) {
    random = Math.floor(Math.random() * words.length) + 1;
  }
}

function check() {
  let player = document.getElementById("awnser").value.split("");
  let count = 0;
  let computer = []
  if (words[random]) {
    computer = words[random].split("")
  }
  console.log(computer, player)
  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      if (player[i] == computer[j]) {
        console.log("player[i]: ", player[i], "  computer[j]: ", computer[j])
        player[i] = "";
        computer[i] = "";
        count++;
      }
    }
  }
  if (count == 4) {
    document.getElementById("win").style.display = "block";
  } else {
    document.getElementById("correctWords").innerHTML = count;
  }
  console.log(computer, player)
  console.log(4 - computer.length)
}
