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
                <th>Reservated car</th>
                <th>Start date</th>
                <th>Person</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.rentals.map(rentals => (
                <tr key={rentals.id}>
                  <td>{rentals.id}</td>
                  <td>{rentals.car}</td>
                  <td>{rentals.start_date_formatted}</td>
                  <td>{rentals.user}</td>
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
