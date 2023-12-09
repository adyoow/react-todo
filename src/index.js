import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
const onClick = function (id) {
  console.log(id)
}
const DATA = [
  { id: 'todo-0', name: 'Eat', completed: true, onClick },
  { id: 'todo-1', name: 'Sleep', completed: false, onClick },
  { id: 'todo-2', name: 'Repeat', completed: false, onClick }
]

root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
)
