import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState, useEffect } from 'react'
import AddTask from "./components/AddTask";
import { Footer } from "./components/Footer";
import { About } from "./components/About";



const App = () => {
  const [showAddTask , setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
    
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

 //fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }


  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }
   //Add Task
   const addTask= async (task) => {
     const res = await fetch('http://localhost:5000/tasks',{
       method: 'POST',
       headers:{
         'Content-type': 'application/json',
       },
       body: JSON.stringify(task),
     })

     const data = await res.json()

     setTasks([...tasks, data])   //current tasks(...tasks) as tasks is entire array




    //  const id = Math.floor(Math.random() * 10000) + 1
    //  const newTask = { id, ...task }
    //  setTasks([...tasks, newTask])
   }


    //Delete Task
   const deleteTask = async (id) => {
     
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })

    setTasks(tasks.filter((task) => task.id !==id)) //show only those whose id are not equal //we dont wanna show task with the id coz we are deleting it
  }

   //toggle reminder
   const toggleReminder = async (id) => {
     const taskToToggle = await fetchTask(id)
     const updateTask = { ...taskToToggle,
      reminder: !taskToToggle.reminder 
    }

    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(updateTask)
    })

    const data = await res.json()
     setTasks(
       tasks.map((task) => task.id === id ? { ...task, reminder:data.reminder} : task))
   }
  
   
  return (
    <Router>
    <div className="container">
    <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd = {showAddTask} />
    <Routes>
    <Route path='/' exact element={ (
      <>
      {showAddTask && <AddTask onAdd = {addTask} />}
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder} />) :(
      'No Tasks to Display....' 
    )}
      </>
    )} />
    <Route path='/about' element={About()} />
    </Routes>
    <Footer />
    </div>
    </Router>
  )
}

export default App;
