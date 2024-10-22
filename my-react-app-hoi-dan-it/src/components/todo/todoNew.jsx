const TodoNew = (props) => {
    const {todoName} = props;

    return (
        <div className='todo-new'><input type="text"/> <button onClick={ () => todoName()}>Add</button></div>
    
    )
}

export default TodoNew