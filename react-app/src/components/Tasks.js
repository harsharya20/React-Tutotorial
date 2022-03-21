import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {     //catch props
  return (
    <>
        {tasks.map((task) => (
            //outputting a component 
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>   //passing the task as props
        ))}
    </>
  )
}

export default Tasks