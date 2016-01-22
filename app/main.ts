import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';
import {StatusSelector} from './todo/components/status-selector';
import {TodoService} from './todo/services/todo-service';
import {SearchBox} from './search/components/search-box'
import {TodoInput} from './todo/components/todo-input'
import {TodoList} from './todo/components/todo-list';

@Component({
    selector: 'app',
    directives: [SearchBox, TodoInput, TodoList, StatusSelector],
    template: `<div>
        <search-box (update)="term = $event"></search-box>
        <todo-input></todo-input>
        <status-selector (select)="status = $event"></status-selector>
        <todo-list [status]="status" [term]="term"></todo-list>
    </div>`
})
class App {

};

bootstrap(App, [TodoService]);
