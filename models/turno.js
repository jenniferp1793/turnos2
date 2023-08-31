class TurnoModel {
    constructor() {
        this.turnos = [];
    }
    agregarTurno(nombre, fecha) {
        const nuevoTurno = {
            id: this.turnos.length + 1,
            nombre: nombre,
            fecha: fecha
        };
        this.turnos.push(nuevoTurno);
    }
    obtenerTurnos() {
        return this.turnos;
    }
    tomarTurno(id, escritorio) {
        const turnoTomado = this.turnos.find(turno => turno.id === id);
        if (turnoTomado) {
            turnoTomado.escritorio = escritorio;
            this.turnos = this.turnos.filter(turno => turno.id !== id);
        }
    }    
}

