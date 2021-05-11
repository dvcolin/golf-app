import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { Button } from "@chakra-ui/react";
import firebaseApp from "../firebase";
import { Redirect } from "@reach/router";

const Home = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userAuth) => {
      setCurrentUser(userAuth);
    });
  }, [currentUser]);

  const signInWithGoogle = () => {
    firebaseApp
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(() => {
        setCurrentUser(true);
      });
  };
  if (currentUser) {
    return <Redirect to="/dashboard" noThrow />;
  }
  return (
    <div>
      <Button>Sign Up</Button>
      <Button onClick={signInWithGoogle}>Login</Button>
    </div>
  );
};

export default Home;
