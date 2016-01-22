import {Component} from 'angular2/core';
import {TodoService} from '../services/todo-service';
import {TodoModel}  from '../todo-model';

@Component({
    selector: 'todo-input',
    template `<div>
        <form (submit)="onSubmit()">
            Adicionar: <input type="text" [(ngModel)]="todoModel.title">
        </form>
    </div>`
})
export class TodoInput {
    todoModel: TodoModel = new TodoModel();

    constructor(public todoService: TodoService) {

    }

    onSubmit() {
        this.todoService.add(this.todoModel);
        this.todoModel = new TodoModel();
    }
}
