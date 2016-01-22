export class TodoModel {
    constructor(public title: string = "", public status: string = "iniciado") {

    }

    getToggle(): string {
        if (this.status = "iniciado") {
            return "completado";
        }

        return "iniciado";
    }
}
