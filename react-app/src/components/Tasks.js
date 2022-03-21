import Task from "./Task"

const Tasks = ({ tasks, onDelete }) => {
  return (
    <>
        {tasks.map((task) => (
            //outputting a component 
            <Task key={task.id} task={task} onDelete={onDelete} />   //passing the task as props
        ))}
    </>
  )
}

export default Tasks