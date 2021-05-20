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

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

    var user_name=localStorage.getItem("user_name");
    var room_name=localStorage.getItem("room_name");

    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").innerHTML="";
          document.getElementById("msg").value="";
    }

    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
