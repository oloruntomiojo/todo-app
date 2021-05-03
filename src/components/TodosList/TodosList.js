import {Todo} from "../Todo/";
import { TodosListContext } from "../../hooks/TodosListContext";
import { useContext } from "react";
import * as Styled from './styles';

const TodosList = () => {
    const { todosList, setTodosList } = useContext(TodosListContext);

    const handleClick = () => {
        const options = ["pressing", "inBetween", "unImportant"];
        const arrangedTodos = [];
        options.forEach(item => {
            todosList.forEach(todoItem => {
                if(todoItem.urgencyType === item) {
                    arrangedTodos.push(todoItem);
                }
            })
        })
        setTodosList(arrangedTodos);
    }

    return ( 
        <div>
            { todosList.length === 0 ? (
                <Styled.EmptyTodo>Yayy!!! <br />You have nothing to do. Or do you?</Styled.EmptyTodo> 
            ) : (
                <Styled.TodosWrapper>
                    <Styled.Heading2>All</Styled.Heading2>
                    <Styled.ArrangeButton onClick={handleClick}>Arrange</Styled.ArrangeButton>
                    { todosList.map(todo => (
                        <Todo key={todo.id}
                            todo={todo}
                        />
                    ))}
                </Styled.TodosWrapper>
            )
            }
        </div>
     );
}
 
export default TodosList;