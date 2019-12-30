import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  getReservations,
  deleteReservations
} from "../../actions/reservations";

export class Reservations extends Component {
  static propTypes = {
    reservations: PropTypes.array.isRequired,
    getReservations: PropTypes.func.isRequired,
    deleteReservations: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getReservations();
  }

  render() {
    return (
      <div>
        <Fragment>
          <h1 className="text">
            <strong>Active reservations</strong>
          </h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Samochód</th>
                <th>Data początkowa</th>
                <th>Data końcowa</th>
                <th>Cel podróży</th>
                <th>Osoba rezerwująca</th>
                <th>Oddaj samochód</th>
              </tr>
            </thead>
            <tbody>
              {this.props.reservations.map(reservations =>
                reservations.active == true ? (
                  <tr key={reservations.id}>
                    <td>{reservations.id}</td>
                    <td>{reservations.car}</td>
                    <td>{reservations.start_date}</td>
                    <td>{reservations.end_date}</td>
                    <td>{reservations.purpose}</td>
                    <td>{reservations.user}</td>
                    <td>
                      <button
                        onClick={this.props.deleteReservations.bind(
                          this,
                          reservations.id
                        )}
                        className="btn-success btn-sm btn"
                      >
                        Oddaj samochód
                      </button>
                    </td>
                  </tr>
                ) : null
              )}
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
  deleteReservations
})(Reservations);
