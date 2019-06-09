import React from 'react'
import ListDisplay from './ListDisplay'

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todoList: [
        {
          id: 1, complete: false, task: 'Mow the Lawn'
        }, {
          id: 2, complete: false, task: 'Go Shopping'
        }, {
          id: 3, complete: false, task: 'Wash the Dog'
        }
      ],
      newItem: "",
      count: 3
    };
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.delete = this.delete.bind(this)
    this.add = this.add.bind(this)
    this.updateState = this.updateState.bind(this)
  }

  handleClick(id){
      this.setState(prevState =>{
        let update = prevState.todoList.map(todo =>{
          if(todo.id === id) {
            todo.complete = !todo.complete
          } return todo
        })
        return update
      })
  }

  delete(id){
    this.setState({todoList: this.state.todoList.filter(function(todo){
        return todo.id !== id
    })})
  }

  add(event) {
    event.preventDefault()
    this.setState({todoList: this.state.todoList.concat({
      id: this.state.count + 1,
      complete: false,
      task: this.state.newItem,
      })
    })
    this.setState({newItem: "", count: this.state.count + 1})
  }

  handleChange(event){
    let {name, value} = event.target
    this.setState({[name]: value})

  }

  updateState(value, id) {
    this.setState(prevState =>{
      let update = prevState.todoList.map(todo =>{
        if(todo.id === id) {
          todo.task = value
        }console.log(todo)
         return todo
      })
      console.log(update)
      return update
    })
 }


  render() {
    let todoList = this.state.todoList.map(item =>
      <ListDisplay
        task={item.task}
        complete={item.complete}
        key={item.id} id={item.id}
        handleChange={this.handleChange}
        handleClick={this.handleClick}
        delete={this.delete}
        edit = {this.edit}
        updateState = {this.updateState}
      />)

    return(
      <div>
        {todoList}
        <form className="add-form" onSubmit={this.add}>
          <input name="newItem" type="text" placeholder="New Todo Item" value={this.state.newItem} onChange={this.handleChange}/>
          <button>Add</button>
        </form>
      </div>
    )
  }
}

export default TodoList
