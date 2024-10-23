
const TodoData = (props) => {

  // const {name, data, todoList} = props
  // console.log("check props", props);
  const {todoList} = props;
  console.log(todoList);
  

    return (
        <div className='todo-data'>
          {
            todoList.map((item, index) => {
              return (<div style={{display:"flex", justifyContent:"space-between", margin:'12px'}}>{item.name}<button>Xóa</button></div>);
            })
          }
          {/* <div>data {JSON.stringify(props.todoList)}</div> */}
        </div>
    );
}

export default TodoData