import React from 'react';

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
      { label: 'Drink Coffee', important: false, id: 1, done: false, important: false },
      { label: 'Make Awesome App', important: true, id: 2, done: false, important: false  },
      { label: 'Have a lunch', important: false, id: 3, done: false, important: false  }
    ],
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

  onMarkDone = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newData = todoData.slice();
      newData[idx].done = !newData[idx].done;

      return {
        todoData: newData
      }
    });
  }

  onMarkImportant = (id) =>{
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id === id);
      const newData = todoData.slice();
      newData[idx].important = !newData[idx].important;
      console.log(newData);
      return {
        todoData: todoData
      }
    })
  }
  
  addItem = (label) => {
    this.setState(({todoData}) => {

      const newData = [
        ...this.state.todoData, 
        {label: label, important: false, id: this.maxId++, done: false}
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
  
        <TodoList 
          todos={todoData}  
          onDeleted={this.deleteItem} 
          onMarkDone={this.onMarkDone}
          onMarkImportant={this.onMarkImportant}
        />

        <ItemAddForm addItem = {this.addItem}/>
      </div>
    );
  } 
};