import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getRentals } from "../../actions/rentals";

export class Rentals extends Component {
  static propTypes = {
    rentals: PropTypes.array.isRequired,
    getRentals: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getRentals();
  }

  render() {
    return (
      <div>
        <Fragment>
          <table class="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Reservation</th>
                <th>Start date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.rentals.map(rentals => (
                <tr key={rentals.id}>
                  <td>{rentals.id}</td>
                  <td>{rentals.reservation}</td>
                  <td>{rentals.start_date}</td>
                  <td>
                    <button className="btn-danger btn-sm btn">
                      Oddaj samochód
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
  rentals: state.rentals.rentals
});

export default connect(mapStateToProps, {
  getRentals
})(Rentals);
