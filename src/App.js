import React from "react";
import Navbar from "./components/Navbar";
import ProfileView from "./components/ProfileView";
import ProfileEdit from "./components/ProfileEdit";
import GoalsView from "./components/GoalsView";
import GoalsDetail from "./components/GoalDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      {/* <ProfileView /> */}
      {/* <ProfileEdit /> */}
      <GoalsView>
        <GoalsDetail />
      </GoalsView>
      <Footer />
    </div>
  )
}

export default App;
