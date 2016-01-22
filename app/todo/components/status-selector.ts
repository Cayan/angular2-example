import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'status-selector',
    template: `<div>
        Filtrar: <select (change)="select.emit($event.target.value)">
            <option *ngFor="#status of statuses">
                {{status}}
            </option>
        </select>
    </div>`
})
export class StatusSelector {
    @Output() select = new EventEmitter();
    statuses = ["iniciado", "completado"];

    ngOnInit() {
        this.select.emit(this.statuses[0])
    }
}
