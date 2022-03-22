import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";


const App = () => {
  const [showAddTask , setShowAddTask] = useState(false)
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
    
   //Add Task
   const addTask= (task) => {
     const id = Math.floor(Math.random() * 10000) + 1
     const newTask = { id, ...task }
     setTasks([...tasks, newTask])
   }


    //Delete Task
   const deleteTask = (id) => {
     setTasks(tasks.filter((task) => task.id !==id)) //show only those whose id are not equal //we dont wanna show task with the id coz we are deleting it
   } 

   //toggle reminder
   const toggleReminder = (id) => {
     setTasks(tasks.map((task) => task.id === id ? { ...task, reminder:!task.reminder} : task))
   }

  return (
    <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
    {showAddTask && <AddTask onAdd = {addTask} />}
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder} />) :(
      'No tasks to display....' 
    )}
    </div>
  );
}

export default App;
