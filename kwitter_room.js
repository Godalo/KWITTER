
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAjqvfVTJ6v-nu_0CuJUcDdeC7MkaYbcAU",
    authDomain: "kwitter-web-app-ce39b.firebaseapp.com",
    databaseURL: "https://kwitter-web-app-ce39b-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-app-ce39b",
    storageBucket: "kwitter-web-app-ce39b.appspot.com",
    messagingSenderId: "206477779608",
    appId: "1:206477779608:web:ccd11b8e8d3286820466ed",
    measurementId: "G-W2VTZ4J0B8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addroom(){

room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose:"adding room name"
});

localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot)
{document.getElementById("output").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
Room_names = childKey;

  //Start code

console.log("room name" + Room_names);
row = "<div class='room_name' id="+ Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output"),innerHTML +=  row ;

  //End code

  });});}

  function redirectToRoomName(name){

    console.log(name);
    localStorage.setItem("room_name" , name);
    window.location = "kwitter_page.html";
    
    }

getData()


function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}

