var firebaseConfig = {
    apiKey: "AIzaSyCQPeuWL4fdzdg9QrDNvjhvX9oz7MFlWFY",
    authDomain: "project-94-e03aa.firebaseapp.com",
    databaseURL: "https://project-94-e03aa-default-rtdb.firebaseio.com",
    projectId: "project-94-e03aa",
    storageBucket: "project-94-e03aa.appspot.com",
    messagingSenderId: "76235472650",
    appId: "1:76235472650:web:ea1341d52b3ae8b1c9c4f3",
    measurementId: "G-QL13CML75L"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var user_name=localStorage.getItem("Username");
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room"
      });
      localStorage.setItem("Room_name",room_name);
      window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Roomnames : "+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("Room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}