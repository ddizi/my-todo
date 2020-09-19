import React,{ Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from '@material-ui/core/Checkbox';
import AddTodo from "./AddTodo";
import axios from 'axios'; 

class TodoList2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked : [],
      max_content_id : 0,
      contents: [],
    };
  }
    
  loadingData = async () => { 
    try { const response = await axios.get( 
     //  'https://jsonplaceholder.typicode.com/todos/1' 
      'http://3.35.89.32:5000/api/todo' 
      ); 
      this.setState({ 
         contents: response.data, 
       }); 
      } catch (e) { 
       console.log(e);
      } 
  }; 
      
   //마운트 될때 실행 
  componentDidMount() { 
     const { loadingData } = this; 
     loadingData(); 
  }

  deleteTodo(_id) {
    //서버로 등록
    const formData = new URLSearchParams();
    formData.append('id',_id);

    axios.post('http://3.35.89.32:5000/api/delete', formData)
    .then((response) => {
    // console.log(response.data);
    // this.setState({
    //   task: ""
    // })
    // this.props.stateRefresh();
    });
  }

  render() {

    const handleToggle = (value) => () => {
      const currentIndex = this.state.checked.indexOf(value);
      const newChecked = this.state.checked;
  
      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }
  
      this.setState({checked : newChecked});
    };

    const handleDelete = (value) => () => {
      var _contents = Array.from(this.state.contents);
      var i=0;
      while(i<_contents.length)
      {
        if(_contents[i].id === value)
        {
          _contents.splice(i,1);
          break;
        }
        i = i + 1;
      }
      this.deleteTodo(value)
      this.setState({
        contents:_contents
      });
    };   

    return (
      <div>
        <List>
          {this.state.contents.map((value,i) => {
            const labelId = `checkbox-list-label-${i}`;
       
            return (
              <ListItem key={value.id} role={undefined} dense button onClick={handleToggle(i)}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={this.state.checked.indexOf(i) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value.task} />
                <ListItemSecondaryAction>
                    <IconButton 
                      color="primary" 
                      edge="end" 
                      aria-label="delete" 
                      onClick={handleDelete(value.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            );
          })}
        </List>
        <AddTodo onSubmit={function(_task){
              const maxId = this.state.max_content_id + 1
              this.setState( {max_content_id: maxId} );
              var _contents = this.state.contents.concat(
                {id:maxId, done: false, task:_task}
              );
              console.log(maxId);
              console.log(_contents);
              this.setState({contents:_contents});
            }.bind(this)}>
        </AddTodo>
      </div>
    );
  }
}

export default TodoList2;