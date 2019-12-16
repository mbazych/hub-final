import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getReservations,
  deleteReservations
} from "../../actions/reservations";
import { addRentals } from "../../actions/rentals";

export class Reservations extends Component {
  static propTypes = {
    reservations: PropTypes.array.isRequired,
    getReservations: PropTypes.func.isRequired,
    deleteReservations: PropTypes.func.isRequired,
    addRental: PropTypes.func.isRequired
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
                <th>Samochód</th>
                <th>Data początkowa</th>
                <th>Data końcowa</th>
                <th>Cel podróży</th>
                <th>Osoba rezerwująca</th>
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
                  <td>{reservations.user}</td>
                  <td>
                    <button
                      onClick={this.props.addRentals.bind(
                        this,
                        reservations.id
                      )}
                      className="btn-success btn-sm btn"
                    >
                      Wypożycz
                    </button>
                  </td>
                </tr>
              ))}
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

export default connect(mapStateToProps, {
  getReservations,
  deleteReservations,
  addRentals
})(Reservations);
