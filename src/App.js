import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ProfileView from "./components/ProfileView";
import ProfileEdit from "./components/ProfileEdit";
import GoalsView from "./components/GoalsView";
import GoalsDetail from "./components/GoalDetail";
import Footer from "./components/Footer";
import Milestone from "./components/Milestone";

class App extends Component {
  state = {
    completed: [],
    incomplete: [
      {
        "id": 8,
        "name": "Take 100$ from each paycheck and put towards debt",
        "frequency": "Weekly",
        "dueDate": "2019-08-10",
        "completed": false,
        "notes": null,
        "goalId": 8,
        "userId": 3
      },
      {
        "id": 9,
        "name": "Take 50$ from each paycheck and put it in savings",
        "frequency": "Weekly",
        "dueDate": "2020-07-10",
        "completed": false,
        "notes": null,
        "goalId": 17,
        "userId": 3
      },
      {
        "id": 10,
        "name": "Plan a trip itinerary for Australia trip",
        "frequency": "Never",
        "dueDate": "2020-07-15",
        "completed": false,
        "notes": null,
        "goalId": 17,
        "userId": 3
      }
    ]
  }


  render() {
    return (
      <div>
        <Navbar />
        <hr />
        {/* <ProfileView />
      <ProfileEdit /> */}
        <GoalsView>
          <GoalsDetail name="Example Goal" due="01/01/2019" desc="Here is a description of your goal">
            {this.state.incomplete.map(milestone => (
              <Milestone
                id={milestone.id}
                key={milestone.id}
                name={milestone.name}
                frequency={milestone.frequency}
                due={milestone.dueDate}
              />
            ))}
          </GoalsDetail>
        </GoalsView>
        <Footer />
      </div>
    )
  }
};

export default App;
