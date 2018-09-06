import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { resetApplication } from "../redux/actions";

class Error extends React.Component {
  resetApp = () => {
    this.props.resetApplication();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="error-card-header error">
        <div>
          <h3>{this.props.error.error}</h3>
          <button onClick={() => this.resetApp()}>Reload</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetApplication: () => dispatch(resetApplication())
  };
};

const mapStateToProps = ({ error }) => {
  return { error };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Error)
);