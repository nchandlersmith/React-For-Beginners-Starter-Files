import React from "react";

class EditFishForm extends React.Component {
  handleChange = event => {
    const { name, value } = event.currentTarget;
    const updatedFish = {
      ...this.props.fish,
      [name]: value
    };
    this.props.updateFish(this.props.fishKey, updatedFish);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="text"
          name="price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option onChange={this.handleChange} value="available">
            Fresh!
          </option>
          <option onChange={this.handleChange} value="unavailable">
            Sold Out!
          </option>
        </select>
        <textarea
          type="text"
          name="desc"
          onChange={this.handleChange}
          value={this.props.fish.desc}
        />
        <input
          type="text"
          name="image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={() => this.props.deleteFish(this.props.fishKey)}>
          Remove Fish
        </button>
      </div>
    );
  }
}

export default EditFishForm;
