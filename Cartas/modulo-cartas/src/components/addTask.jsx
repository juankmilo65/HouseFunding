import React, { Component } from "react";

class AddTask extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.props.onAddTask(this.titleInput.value, this.descriptionInput.value);
    this.titleInput.value = "";
    this.descriptionInput.value = "";
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h2>Agregar Tarea</h2>
        <input
          placeholder="Titulo"
          ref={titleInput => (this.titleInput = titleInput)}
        />
        <input
          placeholder="Descripción"
          ref={descriptionInput => (this.descriptionInput = descriptionInput)}
        />
        <button>Agregar</button>
        <hr />
      </form>
    );
  }
}

export default AddTask;
