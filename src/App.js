import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ProfileView from "./components/ProfileView";
import ProfileEdit from "./components/ProfileEdit";
import GoalsView from "./components/GoalsView";
import GoalCard from "./components/GoalCard";
import Footer from "./components/Footer";
import Milestone from "./components/Milestone";
import Buddy from "./components/Buddy";
import MilestoneColumn from "./components/MilestoneColumn";
import BuddyColumn from "./components/BuddyColumn";
import NoGoalsView from "./components/NoGoalsView";

class App extends Component {
  state = {
    // completed: [],
    // incomplete: [
    //   {
    //     "id": 8,
    //     "name": "Take 100$ from each paycheck and put towards debt",
    //     "frequency": "Weekly",
    //     "dueDate": "2019-08-10",
    //     "completed": false,
    //     "notes": null,
    //     "goalId": 8,
    //     "userId": 3
    //   },
    //   {
    //     "id": 9,
    //     "name": "Take 50$ from each paycheck and put it in savings",
    //     "frequency": "Weekly",
    //     "dueDate": "2020-07-10",
    //     "completed": false,
    //     "notes": null,
    //     "goalId": 17,
    //     "userId": 3
    //   },
    //   {
    //     "id": 10,
    //     "name": "Plan a trip itinerary for Australia trip",
    //     "frequency": "Never",
    //     "dueDate": "2020-07-15",
    //     "completed": false,
    //     "notes": null,
    //     "goalId": 17,
    //     "userId": 3
    //   }
    // ],
    currentGoals: {
      "complete": [],
      "incomplete": [
        {
          "id": 57,
          "name": "Lose 25 lbs",
          "category": "Fitness",
          "dueDate": "2019-07-25",
          "description": null,
          "private": false,
          "complete": false,
          "milestones": {
            "completed": [],
            "incomplete": [
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
          },
          "buddy": {
            "current": ["JoeShmoe88", "Bunsofsteel", "Goalcrusher5000"],
            "past": []
          }
        },
        {
          "id": 59,
          "name": "Finish a book every week",
          "category": "Education",
          "dueDate": "2019-09-01",
          "description": null,
          "private": false,
          "complete": false,
          "milestones": {
            "completed": [],
            "incomplete": []
          },
          "buddy": {
            "current": [],
            "past": []
          }
        },
        {
          "id": 62,
          "name": "Learn Muay Thai",
          "category": "Fitness",
          "dueDate": "2020-01-01",
          "description": null,
          "private": false,
          "complete": false,
          "milestones": {
            "completed": [],
            "incomplete": []
          },
          "buddy": {
            "current": [],
            "past": []
          }
        },
        {
          "id": 115,
          "name": "Lose 25 lbs",
          "category": "Fitness",
          "dueDate": "2019-07-25",
          "description": null,
          "private": false,
          "complete": false,
          "milestones": {
            "completed": [],
            "incomplete": []
          },
          "buddy": {
            "current": [],
            "past": []
          }
        },
        {
          "id": 117,
          "name": "Finish a book every week",
          "category": "Education",
          "dueDate": "2019-09-01",
          "description": null,
          "private": false,
          "complete": false,
          "milestones": {
            "completed": [],
            "incomplete": []
          },
          "buddy": {
            "current": [],
            "past": []
          }
        },
        {
          "id": 120,
          "name": "Learn Muay Thai",
          "category": "Fitness",
          "dueDate": "2020-01-01",
          "description": null,
          "private": false,
          "complete": false,
          "milestones": {
            "completed": [],
            "incomplete": []
          },
          "buddy": {
            "current": [],
            "past": []
          }
        }
      ]
    },
    "pastGoals": {
      "complete": [],
      "incomplete": []
    }
  }


  createCatArray = () => {
    const catArray = [];
    for (let i = 0; i < this.state.currentGoals.incomplete.length; i++) {
      let currentCat = this.state.currentGoals.incomplete[i].category;
      if (!catArray.includes(currentCat)) {
        catArray.push(currentCat)
      }
    }
    console.log(catArray);
    return catArray;
  }

  render() {
    if (this.state.currentGoals.incomplete) {
      return (
        <>
          <Navbar />
          <hr />
          {/* <ProfileView />
          <ProfileEdit /> */}
          <GoalsView>
            <GoalCard name="Example Goal" due="01/01/2019" desc="Here is a description of your goal">
              <MilestoneColumn>
                {/* {this.state.incomplete.map(milestone => ( */}
                {/* {this.state.currentGoals.incomplete[0].milestones.incomplete.map(milestone => (
                  <Milestone
                    id={milestone.id}
                    key={milestone.id}
                    name={milestone.name}
                    frequency={milestone.frequency}
                    due={milestone.dueDate}
                  />
                ))} */}
                {this.state.currentGoals.incomplete.map(goal => (
                  goal.milestones.incomplete.map(milestone => (
                    <Milestone
                      id={milestone.id}
                      key={milestone.id}
                      name={milestone.name}
                      frequency={milestone.frequency}
                      due={milestone.dueDate}
                    />
                  ))
                ))}
              </MilestoneColumn>
              <BuddyColumn>
                {this.state.currentGoals.incomplete.map(goal =>
                  goal.buddy.current.map(buddy => (
                    <Buddy
                      name={buddy}
                    />
                  )))}
              </BuddyColumn>
            </GoalCard>
          </GoalsView>
          <Footer />
        </>
      )
    }
    return (
      <>
        <Navbar />
        <NoGoalsView />
        <Footer />
      </>
    )
  }
};

export default App;
