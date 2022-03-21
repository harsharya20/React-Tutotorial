import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
const App = () => {
  const [tasks, setTasks] = useState(
    [
        {
            id: 1,
            text: 'Doctors Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: true
        },
        {
            id: 2,
            text: 'Meeting',
            day: 'Feb 6th at 1:30pm',
            reminder: true
        },
        {
            id: 3,
            text: 'Shopping',
            day: 'Feb 7th at 6:30pm',
            reminder: false
        }
    ])

    //Delete Task
   const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !==id))  //we dont wanna show task with the id coz we are deleting it
   } 
  return (
    <div className="container">
    <Header />
    <Tasks tasks={tasks} onDelete = {deleteTask} />
    </div>
  );
}

export default App;
