import React from 'react'
import Modal from './Modal'


class ListDisplay extends React.Component {
  constructor(props) {
    super()
    this.state ={
      task: props.task
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ task: nextProps.task });
  }

  render() {
    return (
      <div className="todo-box">
        <div className="list-item">
          <label>
            <input type="checkbox" checked={this.props.complete} onChange={()=> this.props.handleClick(this.props.id)}/>
          </label>
          <p className={this.props.complete? 'completed':'incomplete'}>
            {this.state.task}
          </p>
          </div>
          <div className="buttons">
            <button onClick={() => this.props.delete(this.props.id)}>Delete</button>
            <Modal
              task={this.state.task}
              handleChange={this.props.handleChange}
              updateState={this.props.updateState}
              delete={this.props.delete}
              id={this.props.id}
            />
        </div>
        </div>
    )
  }
}

export default ListDisplay
