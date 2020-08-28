import React, {Component} from 'react';
import './App.css';
import TodoList2 from './todo/TodoList2';
import HeaderApp from './todo/HeaderApp';
import Container from '@material-ui/core/Container';

class App extends Component {
  render() {
    return (
    <Container maxWidth="sm">
      <HeaderApp></HeaderApp>
      <TodoList2></TodoList2>
    </Container>
    );
  }
}


export default App;
