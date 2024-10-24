import { useState } from 'react'
import reactLogo from '/src/assets/react.svg'
import viteLogo from '/vite.svg'
import { ArrowFunction } from '/src/components/learn/MyComponent'
import MySecondComponent from '/src/components/learn/MySecondComponent';
import '/src/components/todo/todo.css'
import TodoNew from './todoNew';
import TodoData from './todoData';
function App() {
  // cú pháp hàm có 2 hàm


  const [todoList, setTodoList] = useState([])

  const addNewTodo = (name) => {
    // alert('call me' + name )
    const newTodo = {
      id: guidGenerator(),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }
  function guidGenerator() {
    var S4 = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
  }

  const deleteTodo = (id) => {
    const newTodo = todoList.filter((item) => item.id !== id);
    console.log("delete id = " + id);
    setTodoList([...newTodo])
  }

  

  // const hoidanit = 'eric'
  // const age = 25
  // const data = {
  //   address : 'ha noi',
  //   country : 'viet nam'
  // }

  return (
    <div className='todo-container'>
      <div className='todo-title'>Todo list</div>
      <TodoNew
        addNewTodo={addNewTodo} />
      {
        todoList.length === 0 ?
          todoList.length === 0 && <div className='logo'>
            <img src={reactLogo} alt="" />
          </div> : <TodoData
            // name={hoidanit}
            // data = {data}
            todoList={todoList}
            deleteTodo = {deleteTodo}
          />
      }

      {/*
      c1:
      <TodoData
        // name={hoidanit}
        // data = {data}
        todoList={todoList}
      />
      {todoList.length === 0 && <div className='logo'>
        <img src={reactLogo} alt="" />
      </div>} */}

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
      <ArrowFunction />
      <MySecondComponent />
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


/*
- giới thiệu về hooks- usestate
- giới thiệu nhập text
- nhập text thay đổi text
- nhập vào input và thay đổi khi nhấn
- truyền list dữ liệu data
*/
/*
- giới thiệu cách thêm obj vào list
- tự động thêm 1 cái id
*/