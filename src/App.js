import React from "react";
import Navbar from "./components/Navbar";
import ProfileView from "./components/ProfileView";
import ProfileEdit from "./components/ProfileEdit";
import GoalsView from "./components/GoalsView";
import GoalsDetail from "./components/GoalDetail";
import Footer from "./components/Footer";
import Milestone from "./components/Milestone";

function App() {
  return (
    <div>
      <Navbar />
      <hr />
      {/* <ProfileView />
      <ProfileEdit /> */}
      <GoalsView>
        <GoalsDetail name="Example Goal" due="01/01/2019" desc="Here is a description of your goal">
          <Milestone name="Save $100 from each paycheck" frequency="14 days" due="01/01/2020" />
        </GoalsDetail>
      </GoalsView>
      <Footer />
    </div>
  )
}

export default App;
