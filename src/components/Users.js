import React from 'react';
import './Users.css';
import pa from '../img/user1.png';
import ag from '../img/user2.png';
import rm from '../img/user3.png';

const Users = (props) => {
  return(
    <div className="Users" id="Users">
      <h2>Users</h2>
      <div>
        <a href="#paddy" id="paddy">
          <img src={pa} alt="Paddy" width="100px" onClick={props.switchPA} /></a>
      </div>
      <div>
        <img src={ag} alt="Andy Green" width="100px" onClick={props.switchAG} />
      </div>
      <div>
        <img src={rm} alt="Robert Marsh" width="100px" onClick={props.switchRM} />
      </div>
    </div>
    )
  }

export default Users;
