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
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make Awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        search: '',
        filter: 'all'
    };

    createTodoItem(label) {
        return {
            label: label,
            important: false,
            done: false,
            id: this.maxId++
        }
    }

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);
         
        const oldItem = arr[idx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    onToggleImportant = (id) => {
        this.setState (({todoData}) => {   
            return {
                todoData: this.toggleProperty(todoData, id, 'important')
            }
          });
    };

    onToggleDone = (id) => {
      this.setState (({todoData}) => {   
        return {
            todoData: this.toggleProperty(todoData, id, 'done')
        }
      });
    };

    searchChange = (e) => {
       this.setState ({ search: e.target.value});
    };

    filterChange = (e) => {
        this.setState({filter: e.target.id});
    }

    addItem = (label) => {
        const newItem = this.createTodoItem(label)
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

    filter = (item, search, filter) => {
        if(filter === 'done'){
            item = item.filter((el) => el.done === true)
        } else if (filter === 'active'){
            item = item.filter((el) => el.done === false)
        }

        return item.filter((el) =>
            el.label.toLowerCase()
            .includes(search.toLowerCase()));
    }

    render() {
        const {todoData, search, filter} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        const filteredTodoData = this.filter(todoData, search, filter);
        return (
        <div className="todo-app">
            <AppHeader toDo={todoCount} done={doneCount} />
            <div className="top-panel d-flex">
            <SearchPanel searchChange={this.searchChange} />
            <ItemStatusFilter filterChange = {this.filterChange} filter = {filter}/>
            </div>

            <TodoList todos={filteredTodoData}
                onDeleted={(id) => this.deleteItem(id)}
                onToggleImportant = {this.onToggleImportant}
                onToggleDone = {this.onToggleDone}/>
                <ItemAddForm addItem = {this.addItem}/>
        </div>
        );
    }
};