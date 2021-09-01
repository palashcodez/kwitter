// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBkmSbTiMXtELktRs-96ne7jEoV0TkVnng",
      authDomain: "kwitter-5cbe6.firebaseapp.com",
      databaseURL: "https://kwitter-5cbe6-default-rtdb.firebaseio.com",
      projectId: "kwitter-5cbe6",
      storageBucket: "kwitter-5cbe6.appspot.com",
      messagingSenderId: "144059221380",
      appId: "1:144059221380:web:4be24d40ffd373d916c9d1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name= localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

    function logout(){
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location="index.html";
    }

    function addroom(){
          room_name=document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
          localStorage.setItem("room_name", room_name);
          window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      console.log(name); 
      localStorage.setItem("room_name", name); 
      window.location = "kwitter_page.html";
}