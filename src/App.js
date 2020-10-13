import React, {Component} from 'react';
import './App.css';
import TodoList2 from './todo/TodoList2';
import HeaderApp from './todo/HeaderApp';
import Container from '@material-ui/core/Container';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: { id: "ruroo@naver.com", 
              name: "손기섭"
            },
    };
  }
  
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
