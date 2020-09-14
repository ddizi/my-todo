import React,{ Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import AddTodo from "./AddTodo";
import axios from 'axios'; 
import { makeStyles } from '@material-ui/core/styles';

class TodoList2 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked : [],
      max_content_id : 0,
      contents: [],
    };
  }
  //const [checked, setChecked] = React.useState([0]);
  // const [max_content_id, setMaxContentId] = React.useState(3);
  // const [contents,setContents] = React.useState( [
  //   { id: 0, done: true, task: "공부하기" },
  //   { id: 1, done: false, task: "놀기" },
  //   { id: 2, done: false, task: "밥먹기" },
  // ]);

  // const [contents,setContents] = React.useState([]);

  
  loadingData = async () => { 
    try { const response = await axios.get( 
     //  'https://jsonplaceholder.typicode.com/todos/1' 
      'http://13.124.83.214:5000/api/todo' 
      ); 
      this.setState({ 
        // boards: 'test' 
        contents: response.data, 
       }); 
       console.log(this.state.contents[0]._id);
     } catch (e) { 
       console.log(e);
      } }; 
      
   //마운트 될때 실행 
   componentDidMount() { 
     const { loadingData } = this; 
     loadingData(); 
   }  

  render() {

    // const useStyles = makeStyles((theme) => ({
    //   root: {
    //     width: '100%',
    //     maxWidth: 360,
    //     backgroundColor: theme.palette.background.paper,
    //   },
    // }));
  
    // const classes = useStyles();

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

    return (
      <div>
        {/* <List className={classes.root}> */}
        <List>
          {this.state.contents.map((value,i) => {
            const labelId = `checkbox-list-label-${i}`;
    
            console.log(value.task);
    
    
            return (
              <ListItem key={i} role={undefined} dense button onClick={handleToggle(i)}>
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
