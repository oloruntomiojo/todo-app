import { useContext, useState } from 'react';
import { TodosListContext } from '../../hooks/TodosListContext';
import * as Styled from './styles';

const Todo = ({ todo }) => {
    const { todosList, setTodosList } = useContext(TodosListContext);
    
    const handleDelete = () => {
        setTodosList(todosList.filter(todos => {
            return todos.id !== todo.id
        }));
    }

    const [checked, setChecked] = useState(todo.completed);

    const handleChecked = (e) => {
        setChecked(e.target.checked)
    }

    const handleCompletedTodo = () => {
        setTodosList(todosList.map(todos => {
            if(todos.id === todo.id) {
                return {
                    ...todos,
                    completed: !todo.completed
                }
            }
            return todos;
        }))
    }
    
    return ( 
        <Styled.TodoItem>
            <Styled.TodoText urgencyType={todo.urgencyType}>
                {todo.todoTextInput}
            </Styled.TodoText>
            <Styled.ButtonGroup>
                <Styled.InputLabel>
                    <Styled.Checkbox type="checkbox"
                        checked={checked}
                        onChange={(e) => handleChecked(e)}
                        onClick={handleCompletedTodo}
                    />
                    { checked && 
                        <i className="fas fa-check"></i>
                     }
                </Styled.InputLabel>
                
                <Styled.DeleteButton onClick={handleDelete}>
                    <Styled.DeleteIcon className='fas fa-trash'>delete</Styled.DeleteIcon>
                </Styled.DeleteButton>
            </Styled.ButtonGroup>
        </Styled.TodoItem>
       
     );
}
 
export default Todo;