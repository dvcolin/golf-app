import React from "react";
import firebase from "firebase";
import { Button } from "@chakra-ui/react";

const Dashboard = () => {
  const logout = () => {
    firebase.auth().signOut().then(console.log);
  };

  return <Button onClick={logout}>Logout</Button>;
};

export default Dashboard;
