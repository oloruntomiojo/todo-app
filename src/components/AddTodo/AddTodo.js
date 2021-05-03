import { useContext, useState } from "react";
import { TodosListContext } from "../../hooks/TodosListContext";
import * as Styled from './styles';

const AddTodo = ({ localID, setLocalID }) => {
  const { todosList, setTodosList} = useContext(TodosListContext);

  const [ todoTextInput, setTodoTextInput ] = useState('');
  const [ urgencyType, setUrgencyType ] = useState('pressing')
    
  const handleSubmit = (e) => {
    e.preventDefault();
    
    todoTextInput.length > 0 && setTodosList([
      ...todosList,
      {
        id: localID,
        todoTextInput, 
        urgencyType, 
        completed: false,
      }
    ])
    
    // increament the value of localID to prevent duplicates ID
    setLocalID(localID + 1);

    // set states back to default values
    setTodoTextInput('');
    setUrgencyType('pressing');
    
    // set input field back to default values
    document.querySelector('input').value = '';
  }

  const handleChange = (setFunction) => {
    return (e) => setFunction(e.target.value)
  }

  return ( 
    <Styled.Form onSubmit={handleSubmit}>
      <Styled.FormGroup>
        <input type="text"
          placeholder="Todo"
          onChange={handleChange(setTodoTextInput)}
        />
        <label>Todo</label>
      </Styled.FormGroup>
      
      <Styled.FormGroup>
        <select
          value={urgencyType}
          onChange={handleChange(setUrgencyType)}>
          <option value="pressing">Pressing</option>
          <option value="inBetween">In-between</option>
          <option value="unImportant">Unimportant</option>
        </select>
        <label>Urgency</label>
        <Styled.InputIcon className="fas fa-caret-down" />
        <small>Select degree of urgency</small>
      </Styled.FormGroup>

      <Styled.ButtonWrapper>
        <Styled.SubmitButton type="submit">
          <i className="fas fa-plus"></i>
          Add
        </Styled.SubmitButton> 
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
}
 
export default AddTodo;