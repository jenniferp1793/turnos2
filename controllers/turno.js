class TurnoController {
    constructor(model) {
        this.model = model;
    }
    agregarTurno(nombre, fecha) {
        this.model.agregarTurno(nombre, fecha);
    }

    obtenerTurnos() {
        return this.model.obtenerTurnos();
    }
    tomarTurno(id, escritorio) {
        this.model.tomarTurno(id, escritorio);
    }
}