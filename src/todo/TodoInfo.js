import React, { Component } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class TodoInfo extends Component {

  constructor(props) {
      super(props);
      this.state = {
        checked: true,
      };
  }



  render() {
    return (
      <li>
        {/* <FormControlLabel
          control={
            <Checkbox
              checked= {this.props.done}
              onChange={function(e) {
                e.preventDefault();
                this.props.onChanged(!this.props.done,this.props.task,this.props.id)
              }.bind(this)}
              name="checkedB"
              color="primary"
            />
          }
          label={this.props.task}
        /> */}
        <input 
          key={this.props.id} 
          onChange={this.props.onChanged} 
          type="checkbox" checked={this.props.done} 
          value={this.props.task} 
        /> {this.props.task}
      </li>
     );
  }
}

export default TodoInfo;
