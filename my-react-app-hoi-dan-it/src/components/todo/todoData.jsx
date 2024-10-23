
const TodoData = (props) => {

  // [nameID, ageID, dataID] = props.dataTest
  // const {name, data, todoList} = props
  console.log("check props", props);

    return (
        <div className='todo-data'>
          <div>Learning React</div>
          <div>Learning React </div>
          <div>data {JSON.stringify(props.todoList)}</div>
        </div>
    );
}

export default TodoData