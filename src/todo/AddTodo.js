import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import TextField from "@material-ui/core/TextField";
import { post } from 'axios';
import axios from 'axios'; 

class AddTodo extends Component {

  constructor(props) {
      super(props);
      this.state = {
        task: ""
      };

      this.onHandleChange = this.onHandleChange.bind(this);
      this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  onHandleChange(e) {
    this.setState({
      task: e.target.value
    });
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const task = this.state.task;
    this.props.onSubmit(task);

    //서버로 등록
    const formData = new URLSearchParams();
    formData.append('task',task);
    formData.append('done',false);

    axios.post('http://3.35.89.32:5000/api/create', formData)
    .then((response) => {
    // console.log(response.data);
    this.setState({
      task: ""
    })
    // this.props.stateRefresh();
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
            // onChange={this.onHandleChange}
            onSubmit = {this.onHandleSubmit}
            // onSubmit={function (e) {
            //      e.preventDefault();
            //      this.props.onSubmit(e.target.task.value);
            // }.bind(this)}
        >
          <IconButton color="primary" aria-label="add to shopping cart" type="submit">
            <AddCircleIcon fontSize="large" />
          </IconButton>
          <TextField 
            id="todoInput" 
            label="새로운 TODO 등록" 
            variant="outlined" 
            name="task" 
            value={this.state.task}
            onChange={this.onHandleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddTodo;
