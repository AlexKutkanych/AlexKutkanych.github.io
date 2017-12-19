import React, { Component } from 'react';
import TableBody from '../TableBody/TableBody.jsx';
import axios from 'axios';
import { topCampersLast30Days } from '../constants/backend-url.js';
import './table.css';

class Table extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [],
      allTimeSort: false,
      last30DaysSort: true
    }
  }

componentDidMount(){
  this.getTopCampersLast30days(topCampersLast30Days);
}

getTopCampersLast30days = (url) => {
  axios.get(url)
  .then(res => {
    console.log(res.data);
    this.setState({
      users: res.data
    })
  });
}

sortDescending = (sortBy, sortedAppearance, otherAppearance) => {
  const users = this.state.users;
  const sortUsersAllTimePoints = (a, b) => {
    if(a[sortBy] < b[sortBy]){
      return 1;
    } else if (a[sortBy] > b[sortBy]){
      return -1;
    }
    return 0;
  }
  const sortedUsers = users.sort(sortUsersAllTimePoints);
  this.setState({
    users: sortedUsers,
    [sortedAppearance]: true,
    [otherAppearance]: false
  });
}

  render() {
    return (
      <div className="table__block">
        <div className="table">
          <div className="table__heading">
              <div className="table__cell table__cell_heading table__cell_small">&#35;</div>
              <div className="table__cell table__cell_heading">Camper Name</div>
              <div className={"table__cell table__cell_heading table__cell_sortable " + (this.state.last30DaysSort ? 'users__sorted' : null)}
                onClick={() => this.sortDescending('recent', 'last30DaysSort', 'allTimeSort')}
                >Points in last 30 days</div>
              <div className={"table__cell table__cell_heading table__cell_sortable " + (this.state.allTimeSort ? 'users__sorted' : null)}
                onClick={() => this.sortDescending('alltime', 'allTimeSort', 'last30DaysSort')}>Points all time</div>
            </div>
          <TableBody users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default Table;
