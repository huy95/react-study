
const TodoData = (props) => {

  // const {name, data, todoList} = props
  // console.log("check props", props);
  const {todoList, deleteTodo} = props;
  console.log(todoList);
  const handleClick = (id) => {
    console.log("!23123", id);
    deleteTodo(id);
  }
  

    return (
        <div className='todo-data'>
          {
            todoList.map((item, index) => {
              return (<div key={item.id} style={{display:"flex", justifyContent:"space-between", margin:'12px'}}>{item.name}
              <button onClick={() => handleClick(item.id)}>Xóa</button></div>);
            })
          }
          {/* <div>data {JSON.stringify(props.todoList)}</div> */}
        </div>
    );
}

export default TodoData