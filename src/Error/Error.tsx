import * as React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { History } from "history";
import { resetApplication } from "../redux/actions";
import { IError } from "../typings";

interface IErrorProps {
  resetApplication: () => void;
  error: IError;
  history: History;
}

class Error extends React.Component<IErrorProps, void> {
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
