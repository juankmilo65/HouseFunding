import React, { Component } from "react";
import Dropzone from "react-dropzone";

class AddFile extends Component {
  constructor(props) {
    super(props);
    this.state = { files: [] };
  }

  handlerOnDrop = (file, rejectedFiles) => {
    this.setState({
      file
    });
    const currentFile = file[0];
    const myFileItemRead = new FileReader();
    myFileItemRead.addEventListener(
      "load",
      () => {
        this.props.onSendFile(myFileItemRead.result);
      },
      false
    );
    myFileItemRead.readAsDataURL(currentFile);
  };

  render() {
    return (
      <section>
        <div className="dropzone">
          <Dropzone accept=".pdf" onDrop={this.handlerOnDrop} type="file">
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
          </Dropzone>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {this.state.files.map(f => (
              <li key={f.name}>
                {f.name} - {f.size} bytes
              </li>
            ))}
          </ul>
        </aside>
      </section>
    );
  }
}

export default AddFile;
