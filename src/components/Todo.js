import { useState } from 'react';
import styled, { css } from "styled-components";

// Styled Components
const TodoItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 1rem;
`

const TodoText = styled.p`
    flex: 0 1 65%;
    margin: 0;
    margin-right: 2rem;
    padding-left: .5rem;

    ${props => {
        switch(props.urgencyType) {
            case "inBetween":
                return  css`
                    color: ${props => props.theme.colors.urgencyText2};
                    border-left: 2px solid ${props => props.theme.colors.urgencyText2};
                `;    

            case "unImportant":
                return css`
                    color: ${props => props.theme.colors.urgencyText3};
                    border-left: 2px solid ${props => props.theme.colors.urgencyText3};
                `;  

            default: 
                return css`
                    color: ${props => props.theme.colors.urgencyText1};
                    border-left: 2px solid ${props => props.theme.colors.urgencyText1};
                `;
        }
    }}
`

const ButtonGroup = styled.div`
    flex: 0 1 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const InputLabel = styled.label`
  position: relative;
  display: flex;

  & i {
    position: absolute;
    color: ${props => props.theme.colors.light};
    top: 2px;
    left: 2px;
    font-size: 12px;
  }
`

const Checkbox = styled.input`
    appearance: none;
    padding: .5rem;
    background-color: ${props => props.theme.colors.light};
    border-radius: 2px;

    &:checked {
        background-color: ${props => props.theme.colors.primary};
    }
`

const DeleteButton = styled.button`
    background-color: transparent;
    border: 0;
    cursor: pointer;
    padding: 0;
`

const DeleteIcon = styled.i`
    color: ${props => props.theme.colors.urgencyText1};
    font-size: 16px;
`

// component
const Todo = ({ todosList, setTodosList, todo }) => {
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
        <TodoItem>
            <TodoText urgencyType={todo.urgencyType}>
                {todo.todoTextInput}
            </TodoText>
            <ButtonGroup>
                <InputLabel>
                    <Checkbox type="checkbox"
                        checked={checked}
                        onChange={(e) => handleChecked(e)}
                        onClick={handleCompletedTodo}
                    />
                    { checked && 
                        <i className="fas fa-check"></i>
                     }
                </InputLabel>
                
                <DeleteButton onClick={handleDelete}>
                    <DeleteIcon className='fas fa-trash'></DeleteIcon>
                </DeleteButton>
            </ButtonGroup>
        </TodoItem>
       
     );
}
 
export default Todo;