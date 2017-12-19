import React, { Component } from 'react';
import TableRow from '../TableRow/TableRow.jsx';

class TableBody extends Component {

  render() {
    const users = this.props.users;
    const renderUsers = users.map((user, i) => {
      return <TableRow key={user.username}
                      number={i}
                      username={user.username}
                      userphoto={user.img}
                      pointsLast30Days={user.recent}
                      pointsAllTime={user.alltime} />
    })

    return (

      <div>
        {renderUsers}
      </div>
    );
  }
}

export default TableBody;
