import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import Todo from './components/Todo'
import Form from './components/Form'
import FilterButton from './components/FilterButton'

function App(props) {
  const [tasks, setTasks] = useState(props.tasks || [])
  const toggleTaskCompleted = function (id) {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed }
      }
      return task
    })
    setTasks(updatedTasks)
  }
  const deleteTask = function (id) {
    const remainingTasks = tasks.filter((task) => id !== task.id)
    setTasks(remainingTasks)
  }
  const taskList = tasks.map((task) => {
    return (
      <Todo
        key={task.id}
        id={task.id}
        name={task.name}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
      />
    )
  })
  const addTask = (name) => {
    const newTask = { id: `todo-${nanoid()}`, name, completed: false }
    setTasks([...tasks, newTask])
  }
  const tasksNoun = tasks.length > 1 ? 'tasks' : 'task'
  const headingText = `${tasks.length} ${tasksNoun} remaining`

  return (
    <div className="todo-app stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>
      <h2 id="list-heading">{headingText}</h2>
      <ul className="todo-list stack-large stack-exception" aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  )
}

export default App
