
const TodoData = (props) => {
  console.log(props.name);
  // [nameID, ageID, dataID] = props.dataTest
  const {name, data} = props
  console.log(data.address);
    return (
        <div className='todo-data'>
          <div>Learning React {name}</div>
          <div>Learning React {data.address}</div>
        </div>
    );
}

export default TodoData