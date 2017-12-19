import React, { Component } from 'react';

class TableRow extends Component {
  render() {
    const { username, userphoto, number, pointsLast30Days, pointsAllTime } = this.props;
    return (
      <div className="table__row">
        <div className="table__cell table__cell_small">{number+1}</div>
        <div className="table__cell table__cell_userphoto">
            <img src={userphoto} className="userphoto" alt={`${username} user`} width="100px" height="100px" />
            <p className="username">{username}</p>
        </div>
        <div className="table__cell">{pointsLast30Days}</div>
        <div className="table__cell">{pointsAllTime}</div>
      </div>
    );
  }
}

export default TableRow;
