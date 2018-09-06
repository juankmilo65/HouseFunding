import React, { Component } from "react";

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEdit: false
    };

    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  onEneblaEditTask() {
    this.setState({ isEdit: true });
  }

  onEditSubmit(event) {
    console.log(event);
    event.preventDefault();
    this.props.onEditTask(
      this.idUpdate,
      this.titleInput.value,
      this.descriptionInput.value
    );
    this.setState({ isEdit: false });
  }

  render() {
    const { _id, title, description, onDeleteTask } = this.props;
    return (
      <div>
        {this.state.isEdit ? (
          <form onSubmit={this.onEditSubmit}>
            <input id="idUpdate" hidden={true} ref={(this.idUpdate = _id)} />
            <input
              placeholder="Titulo"
              ref={titleInput => (this.titleInput = titleInput)}
              defaultValue={title}
            />
            <input
              placeholder="Descripción"
              ref={descriptionInput =>
                (this.descriptionInput = descriptionInput)
              }
              defaultValue={description}
            />
            <button>Guardar</button>
            {" | "}
          </form>
        ) : (
          <div>
            {title} {" | "}
            {description}
            {" | "}
            <button onClick={() => this.onEneblaEditTask()}>Editar</button>{" "}
            {" | "}
            <button onClick={() => onDeleteTask(_id)}>Eliminar</button>
          </div>
        )}
      </div>
    );
  }
}

export default Task;
