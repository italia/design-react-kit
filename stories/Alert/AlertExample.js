import React from "react";
import { Alert } from "../../src";

class AlertExample extends React.Component {
  state = {
    visible: true
  };

  onDismiss = () => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <Alert
        color="warning"
        isOpen={this.state.visible}
        toggle={this.onDismiss}
      >
        <strong>Attenzione</strong> Alcuni campi inseriti sono da controllare.
      </Alert>
    );
  }
}

export default AlertExample;
