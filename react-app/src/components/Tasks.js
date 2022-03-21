import Task from "./Task"

const Tasks = ({ tasks }) => {
  return (
    <>
        {tasks.map((task) => (
            //outputting a component 
            <Task key={task.id} task={task}/>   //passing the task as props
        ))}
    </>
  )
}

export default Tasks