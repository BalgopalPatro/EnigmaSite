// Get references to the Firebase Auth and Firestore services
const auth = firebase.auth();
const firestore = firebase.firestore();

// Check if a user is already signed in
auth.onAuthStateChanged((user) => {
  if (user) {
    // User is signed in
    const uid = user.uid;
    console.log("User is signed in with UID:", uid);
    // You can perform actions for authenticated users here.
  } else {
    // No user is signed in
    console.log("No user is signed in.");
  }
});

// Sign up a new user
function signUp(email, password) {
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed up successfully
      const user = userCredential.user;
      console.log("User signed up:", user);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error signing up:", error);
    });
}

// Sign in an existing user
function signIn(email, password) {
  auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User signed in successfully
      const user = userCredential.user;
      console.log("User signed in:", user);
    })
    .catch((error) => {
      // Handle errors here
      console.error("Error signing in:", error);
    });
}

// Sign out the current user
function signOut() {
  auth
    .signOut()
    .then(() => {
      console.log("User signed out");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
}

// Additional functions for password reset, email verification, etc.
