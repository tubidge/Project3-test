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
      <ProfileView />
      {/* <ProfileEdit /> */}
      {/* <GoalsView>
        <GoalsDetail name="Example Goal" due="01/01/2019" desc="Here is a description of your goal" />
      </GoalsView> */}
      <Footer />
    </div>
  )
}

export default App;
