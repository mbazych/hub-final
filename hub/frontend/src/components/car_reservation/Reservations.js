import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getReservations } from "../../actions/reservations";

export class Reservations extends Component {
  static propTypes = {
    reservations: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.getReservations();
  }

  render() {
    return (
      <div>
        <Fragment>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Car</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Purpose</th>
                <th>Active</th>
                <th>User</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.reservations.map(reservations => (
                <tr key={reservations.id}>
                  <td>{reservations.id}</td>
                  <td>{reservations.car}</td>
                  <td>{reservations.start_date}</td>
                  <td>{reservations.end_date}</td>
                  <td>{reservations.purpose}</td>
                  <td>{reservations.active}</td>
                  <td>{reservations.user}</td>
                  <td>
                    <button className="btn-danger btn-sm btn">Delete</button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Fragment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reservations: state.reservations.reservations
});

export default connect(
  mapStateToProps,
  { getReservations }
)(Reservations);
