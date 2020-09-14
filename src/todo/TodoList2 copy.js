import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import AddTodo from "./AddTodo";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TodoList2() {
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);
  const [max_content_id, setMaxContentId] = React.useState(3);
  // const [contents,setContents] = React.useState( [
  //   { id: 0, done: true, task: "공부하기" },
  //   { id: 1, done: false, task: "놀기" },
  //   { id: 2, done: false, task: "밥먹기" },
  // ]);

  const [contents,setContents] = React.useState([]);

 

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <div>
    <List className={classes.root}>
      {contents.map((value,i) => {
        const labelId = `checkbox-list-label-${i}`;

        console.log(value.task);


        return (
          <ListItem key={i} role={undefined} dense button onClick={handleToggle(i)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(i) !== -1}
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
          const maxId = max_content_id + 1
          setMaxContentId(maxId);
          var _contents = contents.concat(
            {id:max_content_id, done: false, task:_task}
          );
          console.log(max_content_id);
          console.log(_contents);
          setContents(_contents);
        }}></AddTodo>
    </div>
  );
}
