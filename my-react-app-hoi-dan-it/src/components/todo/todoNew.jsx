import { useState } from "react";

const TodoNew = (props) => {
    const {addNewTodo} = props;
    // const valueInput = "Eric"
    const [valueInput, setValueInput] = useState()
    const handleClick = () => {
        console.log('click', valueInput)
        addNewTodo(valueInput);
        setValueInput("")
    }

    const handleOnChange = (name) => {
        console.log('handleOnChanges input', name)
        setValueInput(name)
    }
    
    return (
        <div className='todo-new'><input type="text" value={valueInput} onChange={(event) => handleOnChange(event.target.value)}/>
         <button onClick={ () => handleClick()}>Add</button>
         <div>My text input is = {valueInput}</div>
         </div>
    
    )
}

export default TodoNew

// khi xử lí thằng cha sang con :
 
// dữ liệu cần sửa <= hàm thằng cha <= hàm thằng con