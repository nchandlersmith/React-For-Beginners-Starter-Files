import React from "react";
import PropTypes from "prop-types";
import firebase from "firebase";
import AddFishForm from "./AddFishForm";
import EditFishForm from "./EditFishForm";
import Login from "./Login";
import base, { firebaseApp } from "../base";

class Inventory extends React.Component {
  static propTypes = {
    deleteFish: PropTypes.func,
    updateFish: PropTypes.func,
    loadSampleFishes: PropTypes.func,
    fishes: PropTypes.object
  };

  state = {
    uid: null,
    owner: null
  };

  authHandler = async authData => {
    console.log("-----> AuthData <-----");
    console.log(authData);
    console.log("-----> uid <-----");
    console.log(authData.user.uid);
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log("-----> Store <-----");
    console.log(store);
    console.log("-----> Store Owner <-----");
    console.log(store.owner);
    if (!store.owner) {
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  };

  authenticate = provider => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
  };

  render() {
    if (!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    }

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
