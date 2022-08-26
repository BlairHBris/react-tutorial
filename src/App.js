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

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask}/> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
