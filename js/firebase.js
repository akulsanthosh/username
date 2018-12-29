var config = {
    apiKey: "AIzaSyAZHCLuovX2oNhccuxjetkHNgAcrWcZLGo",
    authDomain: "dhisna-ac7e0.firebaseapp.com",
    databaseURL: "https://dhisna-ac7e0.firebaseio.com",
    projectId: "dhisna-ac7e0",
    storageBucket: "dhisna-ac7e0.appspot.com",
    messagingSenderId: "1079389260336"
};
firebase.initializeApp(config);

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



function login(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  var errorCode = error.code;
  var errorMessage = error.message;

  if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
});
}
