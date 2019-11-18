import React from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  storePickerInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    const storeName = this.storePickerInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          ref={this.storePickerInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Vist Store >></button>
      </form>
    );
  }
}

export default StorePicker;
