import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react"

function App() {

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Sign house contract",
        day: "August 26th",
        reminder: false
    },
    {
        id: 2,
        text: "House inspection",
        day: "August 30th",
        reminder: true
    },
    {
        id: 3,
        text: "Closing",
        day: "September 29th",
        reminder: false
    }
])

  return (
    <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
