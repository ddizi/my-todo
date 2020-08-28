import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";

class AddTodo extends Component {

  constructor(props) {
      super(props);
      this.state = {
        task: ""
      };

      this.onHandleChange = this.onHandleChange.bind(this);
      this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const task = this.state.task;
    this.props.onSubmit(task);
    this.setState({
        task: ""
      })

  }

  onHandleChange(e) {
    this.setState({
      task: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form 
            noValidate 
            autoComplete="off"
            action="/create_todo"
            method="post"
            onChange={this.onHandleChange}
            onSubmit = {this.onHandleSubmit}
            // onSubmit={function (e) {
            //      e.preventDefault();
            //      this.props.onSubmit(e.target.task.value);
            // }.bind(this)}
        >
          <IconButton color="primary" aria-label="add to shopping cart" type="submit">
            <AddCircleIcon fontSize="large" />
          </IconButton>
          <TextField id="todoInput" label="TODO 등록" variant="outlined" name="task" value={this.state.task}/>
        </form>
      </div>
    );
  }
}

export default AddTodo;
