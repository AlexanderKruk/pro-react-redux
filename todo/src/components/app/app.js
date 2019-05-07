import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';


export default class App extends Component {
    
    maxId = 100;

    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make Awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3}
        ],
        lastid: 3
    };

    onToggleImportant = (id) => {
      console.log('Toggle Important');
    };

    onToggleDone = (id) => {
      console.log('Toggle Done');
    };

    AddItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }
        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            };
        });
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const idx = todoData.findIndex((el) => el.id === id);

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    render() {
        const {todoData} = this.state;
        return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
            <SearchPanel />
            <ItemStatusFilter />
            </div>

            <TodoList todos={todoData}
                onDeleted={(id) => this.deleteItem(id)}
                onToggleImportant = {this.onToggleImportant}
                onToggleDone = {this.onToggleDone}/>
                <ItemAddForm AddItem = {this.AddItem}/>
        </div>
        );
    }
};