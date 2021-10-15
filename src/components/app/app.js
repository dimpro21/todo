import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

export default class App extends React.Component {
  maxId = 100;
  state = {
    todoData : [
      { label: 'Drink Coffee', important: false, id: 1 },
      { label: 'Make Awesome App', important: true, id: 2 },
      { label: 'Have a lunch', important: false, id: 3 }
    ]
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newData = todoData.slice();
      newData.splice(idx,1);

      return{
        todoData: newData
      }
    });
  };

  
  addItem = (label) => {
    this.setState(({todoData}) => {

      const newData = [
        ...this.state.todoData, 
        {label: label, important: false, id: this.maxId++}
      ];
      
      return {
        todoData: newData
      }

    })
  }
  
  render (){
    const {todoData} = this.state;
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList todos={todoData}  onDeleted={this.deleteItem}/>
        <ItemAddForm addItem = {this.addItem}/>
      </div>
    );
  } 
};