import {Component, Input, Output, EventEmitter, ViewEncapsulation} from 'angular2/core';

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'todo-item-renderer',
    templateUrl: `
    <style>
        .completado {
            text-decoration: line-through;
        }
    </style>
    <div>
        <span [ngClass]="todo.status">{{todo.title}}</span>
        <button (click)="toggle.emit(todo)">Toggle</button>
    </div>`
})
export class TodoItemRenderer {
    @Input() todo;
    @Output() toggle = new EventEmitter();
}
