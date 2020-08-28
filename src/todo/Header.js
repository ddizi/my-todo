import React, {Component} from 'react';
import Avatar from '@material-ui/core/Avatar';

class Header extends Component {

  constructor(props) {
    super(props);
    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      curDate : date,
    }
  }
  
  render() {
    return (
    <div>
      <h1>My TODO LIST</h1>
      <Avatar alt="Remy Sharp" src="https://scontent-gmp1-1.xx.fbcdn.net/v/t31.0-8/339245_2147412053950_963463718_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=VSbqQqSH1t8AX-e-QaT&_nc_ht=scontent-gmp1-1.xx&oh=b6523a0d8254a6f652c44c9440aa61aa&oe=5F6E9401" />
    <h3>{this.state.curDate}</h3>
    </div>
    );
  }
}


export default Header;
