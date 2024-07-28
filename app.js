 
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";

  import { getAuth ,
     onAuthStateChanged,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword,
   } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
  
  const firebaseConfig = {
    apiKey: "AIzaSyCLkh9ochH7ljzdld78TG9UMytB0WZzG-k",
    authDomain: "ecommerse-store-1454a.firebaseapp.com",
    projectId: "ecommerse-store-1454a",
    storageBucket: "ecommerse-store-1454a.appspot.com",
    messagingSenderId: "838725390012",
    appId: "1:838725390012:web:f5fdbbbbf87506ffa4cab9",
    measurementId: "G-DKRZ35YXE6"
  };



  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth();





  
// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object


// // consts






const signin_email = document.getElementById("signin_email");
const signin_password = document.getElementById("signin_password");
const login_btn = document.getElementById("login_btn");
const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const createacc_btn = document.getElementById("createacc_btn");

// action buttons














// firebase funcitons



createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
    console.log("signed up")
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
   
  });

  
  signInWithEmailAndPassword(auth, signin_email.value, signin_password.value)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      
      // ...
      console.log("user");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('signin error')
      
    });



    
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        
        console.log("user login")

      } else {
        // User is signed out
        // ...


        console.log("user not")
      }
    });


// custom functions 

function createAccount(){
  console.log( 'email == >', signup_email.value)
  console.log('password == >',signup_password.value)
  
  createUserWithEmailAndPassword(auth, signup_email.value, signup_password.value);
  };
  function logintoaccount(){
    console.log( 'email == >', signin_email.value)
    console.log('password == >',signin_password.value)

    signInWithEmailAndPassword(auth, signin_email.value, signin_password.value);

};




















// action buttons


createacc_btn.addEventListener("click",   createAccount )
login_btn.addEventListener("click",  logintoaccount )



//   const signin_conatiner = document.getElementsById("signin_container")
//   const sigup_container = document.getElementsById("signup_container")
 
// const createacc_btn = document.getElementsById("createacc_btn")
// createacc_btn.addEventlisner("click", windowchange ) 
// function windowchange (){
// signin_conatiner.style.dispaly = "none"
// sigup_container.style.display = "block"
// console.log("fnction workiing")

// }



















