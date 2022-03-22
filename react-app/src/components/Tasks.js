import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {     //catch props
  return (
    <>
        {tasks.map((task , index) => (
            //outputting a component 
            <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle}/>   //passing the task as props
        ))}
    </>
  )
}

export default Tasks