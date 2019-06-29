import React from "react";
import Navbar from "./components/Navbar";
import ProfileView from "./components/ProfileView";
import ProfileEdit from "./components/ProfileEdit";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <ProfileEdit />
      <Footer />
    </div>
  )
}

export default App;
