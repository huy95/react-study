import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {ArrowFunction} from './components/learn/MyComponent'
import MySecondComponent from './components/learn/MySecondComponent';
import './components/todo/todo.css'
import TodoData from './components/todo/todoData';
import TodoNew from './components/todo/todoNew';

function App() {
  // cú pháp hàm có 2 hàm
  const todoName = (name) => {
    alert(`to do ` + name)
  }
  var dataTest = {
    'name' : 'eric',
    "age" : 25,
    'data' : {
      'address' : 'ha noi',
      'country' : 'viet nam'
    }
  }
  const hoidanit = 'eric'
  const age = 25
  const data = {
    address : 'ha noi',
    country : 'viet nam'
  }

  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo list</div>
      <TodoNew 
      todoName={todoName}/>
      <TodoData 
      name={hoidanit}
      data = {data}/>
      <div className='logo'>
        <img src={reactLogo} alt="" />
      </div>
    </div>
  );
  return (
      <div className='todo-container'>
        <div className='todo-title'>Todo list</div>
        <div className='todo-new'><input type="text" /> <button>Add</button></div>
        <div className='todo-data'>
          <div>Learning React</div>
          <div>Learning React</div>
        </div>
      </div>
  )
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ArrowFunction/>
      <MySecondComponent/>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
