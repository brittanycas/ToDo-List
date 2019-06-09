import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root')

class ModalPopup extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modalIsOpen: false,
      task: props.task,
      id: props.id
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.update = this.update.bind(this);
  }

  handleChange(event){
      let {name, value} = event.target
      this.setState({[name]: value})
    }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  update(event) {
    event.preventDefault();
    //Check that the input field is not empty
    if (this.state.task !== "") {
      this.props.updateState(this.state.task, this.state.id)
      this.closeModal()
    } else {
      this.props.delete(this.state.id)
    }
  }

  render(props) {

    return (
      <div>
        <button onClick={this.openModal}>Edit</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="modal"
          contentLabel="Example Modal"
        >

          <h2>Edit task below</h2>
          <div className="modal-content">
            <form onSubmit={this.update}>
            <textarea name="task" type="text" onChange={this.handleChange} rows="6" cols="30">{this.state.task}</textarea>
            <div className="buttons">
              <button onClick={this.closeModal}>Cancel</button>
              <button>Submit</button>
            </div>
          </form>
          </div>
        </Modal>

      </div>
    );
  }
}

export default ModalPopup
