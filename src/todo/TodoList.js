import React, { Component } from "react";
import TodoInfo from "./TodoInfo";
import AddTodo from "./AddTodo";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.max_content_id = 3;
    this.state = {
      contents: [
        { id: 1, done: true, task: "공부하기" },
        { id: 2, done: false, task: "놀기" },
        { id: 3, done: false, task: "밥먹기" },
      ],
    };
  }

  handleCheckChieldElement = (event) => {
    let contents = this.state.contents
    contents.forEach(contents => {
       if (contents.task === event.target.value)
       contents.done =  event.target.checked
    })
    this.setState({contents: contents})
  }

  render() {
    const mapToComponent = (data) => {
      return data.map((todo, i) => {
        return <TodoInfo 
                  done={todo.done} 
                  task={todo.task} 
                  key={i} 
                  id={todo.id}
                  onChanged = {this.handleCheckChieldElement}
                >
                </TodoInfo>;
      });
    };

    return (
      <nav>
        <ul>
          {mapToComponent(this.state.contents)}
        </ul>
        <AddTodo onSubmit={function(_task){
          this.max_content_id = this.max_content_id + 1;
          var _contents = this.state.contents.concat(
            {id:this.max_content_id, done: false, task:_task}
          );
          this.setState({
            contents:_contents,
          })
        }.bind(this)}></AddTodo>
      </nav>
    );
  }
}

export default TodoList;
