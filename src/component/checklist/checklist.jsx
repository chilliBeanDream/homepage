import React from 'react';
import * as firebase from 'firebase/app';

import './checklist.css';

import TodoItem from './todoItem';
import AddTodo from './addTodo';

export default class Checklist extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    createTodo = (text) => {
        const todo = {
            text,
            done: false,
            timeChanged: Date.now()
        }
        firebase.database().ref('todos').push(todo);
    }

    getTodos = () => {
        firebase.database().ref('todos').on('value', snapshot => {
            const todos = snapshot.val();
            if (todos) {
                const ids = Object.keys(todos);
                const todosWithIds = ids.map(id => {
                    return {
                        ...todos[id],
                        id
                    }
                });
                this.setState({
                    todos: todosWithIds.filter(todo => !todo.done)
                });
            }
        })
    }

    completeTodo = (todo) => {
        firebase.database().ref(`todos/${todo.id}`).set({
            text: todo.text,
            timeChanged: Date.now(),
            done: true
        });
    }

    componentDidMount() {
        this.getTodos();
    }

    render() {
        const todos = this.state.todos.map(todo => {
            return (
                <TodoItem onChecked={() => this.completeTodo(todo)} key={todo.id} text={todo.text} />
            );
        });
        return (
            <ul>
                {todos}
                <AddTodo onSubmit={this.createTodo} />
            </ul>
        );
    }
}