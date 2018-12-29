var config = {
    apiKey: "AIzaSyAZHCLuovX2oNhccuxjetkHNgAcrWcZLGo",
    authDomain: "dhisna-ac7e0.firebaseapp.com",
    databaseURL: "https://dhisna-ac7e0.firebaseio.com",
    projectId: "dhisna-ac7e0",
    storageBucket: "dhisna-ac7e0.appspot.com",
    messagingSenderId: "1079389260336"
};
firebase.initializeApp(config);

var database = firebase.database();

function SwapDivsWithClick(div1,div2)
{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }
}



function register(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var name = document.getElementById("name").value;
  var college = document.getElementById("college").value;
  var phone = document.getElementById("phone").value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;

  if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
}else{
  var userId = firebase.auth().currentUser.uid;
  firebase.database().ref('users/' + userId).set({
    name: name,
    email: email,
    college: college,
    phone: phone
  });
});

function login(){
  var email = document.getElementById("emailin").value;
  var password = document.getElementById("passwordin").value;
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {

  var errorCode = error.code;
  var errorMessage = error.message;

});
}


}