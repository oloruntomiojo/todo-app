import styled from 'styled-components';
import AddTodo from './components/AddTodo';
import TodosList from './components/TodosList';
import { GlobalStyles } from './styles/GlobalStyles';
import useLocalStorage from './hooks/useLocalStorage';

// Styled Components
const AppContainer = styled.div`
  max-width: 600px;
  margin: 10vh auto;
  padding: 0 1.5rem;
`

const Header1 = styled.h1`
  text-align: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`

// component
function App() {
  const [ todosList, setTodosList ] = useLocalStorage("todosList", []);

  // to set todo id from local storage
  const [ localID, setLocalID ] = useLocalStorage("localID", 1);

  // reset local storage when it gets to 100;
  localID === 100 && setLocalID(1);

  return (
      <AppContainer>
        <GlobalStyles />
        <Header1>My Organizer</Header1>

        <AddTodo setTodosList={setTodosList} todosList={todosList} localID={localID} setLocalID={setLocalID} />

        <TodosList todosList={todosList} setTodosList={setTodosList}/>
      </AppContainer>
  );
}

export default App;