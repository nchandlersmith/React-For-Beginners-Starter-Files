import React from "react";
import PropTypes from "prop-types";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";

class Inventory extends React.Component {
  static propTypes = {
    deleteFish: PropTypes.func,
    updateFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    fishes: PropTypes.object
  };

  authenticate = () => {
    alert("Authenticate");
  };

  render() {
    return <Login authenticate={this.authenticate} />;
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm
            deleteFish={this.props.deleteFish}
            fishKey={key}
            fish={this.props.fishes[key]}
            key={key}
            updateFish={this.props.updateFish}
          />
        ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>
          Load Sample Fishes
        </button>
      </div>
    );
  }
}

export default Inventory;
