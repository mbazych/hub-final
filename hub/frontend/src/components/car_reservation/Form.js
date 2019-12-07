import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addReservations } from "../../actions/reservations";

export class Form extends Component {
  state = {
    car: "",
    start_date: "",
    end_date: "",
    purpose: ""
  };

  static propTypes = {
    addReservations: PropTypes.func.isRequired
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    const { car, start_date, end_date, purpose } = this.state;
    const reservation = { car, start_date, end_date, purpose };
    this.props.addReservations(reservation);
  };

  render() {
    const { car, start_date, end_date, purpose, user } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Reservation</h2>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Car</label>
            <input
              className="form-control"
              type="radio"
              name="car"
              onChange={this.onChange}
              value={car}
            />
          </div>
          <div className="form-group">
            <label>Start date</label>
            <input
              className="form-control"
              type="datetime-local"
              name="start_date"
              onChange={this.onChange}
              value={start_date}
            />
          </div>
          <div className="form-group">
            <label>End date</label>
            <input
              className="form-control"
              type="datetime-local"
              name="end_date"
              onChange={this.onChange}
              value={end_date}
            />
          </div>
          <div className="form-group">
            <label>Purpose</label>
            <textarea
              className="form-control"
              type="text"
              name="purpose"
              onChange={this.onChange}
              value={purpose}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, { addReservations })(Form);
