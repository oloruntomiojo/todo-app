import { useState } from "react";
import styled from 'styled-components';

// styled components
const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const FormGroup = styled.div`
  display: inline;
  position: relative;
  flex: 1 0 55%;
  color: ${props => props.theme.colors.gray};

  &:nth-of-type(2) {
    flex: 1 0 180px;
  }

  & label {
    position: absolute;
    top: -10px;
    left: 1rem;
    background-color: ${props => props.theme.colors.bgColor};
    padding: 2px 5px;
    font-size: 12px;
    transition:  color .3s;
  }

  & > select, input {
    background-color: ${props => props.theme.colors.bgColor};
    border: 1px solid ${props => props.theme.colors.gray};
    appearance: none;
    width: 100%;
    transition: box-shadow .3s;
    color: ${props => props.theme.colors.light};
    transition: border .3s;

    &:hover {
      border: 1px solid ${props => props.theme.colors.light};
    }

    &:focus {
      border: 1px solid ${props => props.theme.colors.light};
      box-shadow: 0 0 0 1px ${props => props.theme.colors.light};

      & + label {
        color: ${props => props.theme.colors.light};
      }
    }

    &::placeholder {
      color: ${props => props.theme.colors.light};
    }
  } 

  & > small {
    display: block;
    margin: .5rem 1rem;
    font-size: 12px;
  }
`;

const InputIcon = styled.i`
  position: absolute;
  width: auto;
  top: 1rem;
  right: 1rem;
  color: ${props => props.theme.colors.light};
`;

const ButtonWrapper = styled.div`
  flex: 1 0 100%;
  margin-top: .5rem;
`;

const SubmitButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  margin: 0 auto;

  & i {
    font-size: 12px;
    margin-right: 5px;  
    vertical-align: 2px;
  }
`;

// component
const AddTodo = ({ ...props }) => {
  const [ todoTextInput, setTodoTextInput ] = useState('');
  const [ urgencyType, setUrgencyType ] = useState('pressing')
    
  const handleSubmit = (e) => {
    e.preventDefault();
    
    todoTextInput.length > 0 && props.setTodosList([
      ...props.todosList,
      {
        id: props.localID,
        todoTextInput, 
        urgencyType, 
        completed: false,
      }
    ])
    
    // increament the value of localID to prevent duplicates ID
    props.setLocalID(props.localID + 1);

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
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <input type="text"
          placeholder="Todo"
          onChange={handleChange(setTodoTextInput)}
        />
        <label>Todo</label>
      </FormGroup>
      
      <FormGroup>
        <select
          value={urgencyType}
          onChange={handleChange(setUrgencyType)}>
          <option value="pressing">Pressing</option>
          <option value="inBetween">In-between</option>
          <option value="unImportant">Unimportant</option>
        </select>
        <label>Urgency</label>
        <InputIcon className="fas fa-caret-down" />
        <small>Select degree of urgency</small>
      </FormGroup>

      <ButtonWrapper>
        <SubmitButton type="submit">
          <i className="fas fa-plus"></i>
          Add
        </SubmitButton> 
      </ButtonWrapper>
    </Form>
  );
}
 
export default AddTodo;