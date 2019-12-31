import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getArchive } from "../../actions/archive";

export class Archive extends Component {
  static propTypes = {
    archives: PropTypes.array.isRequired,
    getArchive: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getArchive();
  }

  render() {
    return (
      <div>
        <Fragment>
          <h1 className="text">
            <strong>Archive reservations</strong>
          </h1>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Car</th>
                <th>Start date</th>
                <th>End date</th>
                <th>Purpose</th>
                <th>User</th>
                <th>Comment</th>
                <th>Gas state</th>
                <th>Fuel state</th>
              </tr>
            </thead>
            <tbody>
              {this.props.archives.map(archives => (
                <tr key={archives.id}>
                  <td>{archives.id}</td>
                  <td>{archives.car}</td>
                  <td>{archives.start_date}</td>
                  <td>{archives.end_date}</td>
                  <td>{archives.purpose}</td>
                  <td>{archives.user}</td>
                  <td>{archives.comment}</td>
                  <td>{archives.gas_state}</td>
                  <td>{archives.fuel_state}</td>
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
  archives: state.archives.archives
});

export default connect(mapStateToProps, {
  getArchive
})(Archive);
