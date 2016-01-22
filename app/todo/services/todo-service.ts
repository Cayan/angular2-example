import {Injectable} from 'angular2/core';
import {TodoModel} from '../todo-model'

@Injectable()
export class TodoService {
    todos: TodoModel[] = [
        new TodoModel('comer'),
        new TodoModel('dormir'),
        new TodoModel('programar')
    ];

    add(todo: TodoModel) {
        this.todos = [...this.todos, todo];
    }

    toggle(todo: TodoModel) {
        // avoid mutating properties
        //todo.toggle();

        let i = this.todos.indexOf(todo);
        let status = todo.status == "iniciado" ? "completado" : "iniciado";
        let toggledTodo = Object.assign({}, todo, {status});

        this.todos = [
            ...this.todos.slice(0, i),
            toggledTodo,
            ...this.todos.slice(i + 1)
        ]
    }
}
