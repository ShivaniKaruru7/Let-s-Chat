
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyCPmLZoGIu7QtAfsgpHIb_o27g3ezS07ac",
      authDomain: "class-test-1-12e2d.firebaseapp.com",
      databaseURL: "https://class-test-1-12e2d-default-rtdb.firebaseio.com",
      projectId: "class-test-1-12e2d",
      storageBucket: "class-test-1-12e2d.appspot.com",
      messagingSenderId: "273101880146",
      appId: "1:273101880146:web:177fabe9ed30ddcad9588b",
      measurementId: "G-K2FWG48EM6"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class= 'room name' id="+room_name+" onclick='redirectToRoomName(this.id)' >#" +Room_names +"</div><hr";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}