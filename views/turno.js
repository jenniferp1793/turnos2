class TurnoView {
    constructor(controller) {
        this.controller = controller;
        this.nombreInput = document.getElementById('nombre');
        this.fechaInput = document.getElementById('fecha');
        this.agregarBtn = document.getElementById('agregar');
        this.listaTurnos = document.getElementById('lista-turnos');
        this.tomarTurnoBtn = document.getElementById('tomar-turno');
        this.escritorios = document.querySelectorAll('.escritorio-btn'); // Selecciona todos los botones de escritorios
        this.tomarTurnoBtn = document.getElementById('tomar-turno');

        this.agregarBtn.addEventListener('click', () => this.agregarTurno());
        this.tomarTurnoBtn.addEventListener('click', () => this.tomarTurno());
        this.escritorios.forEach(btn => {
            btn.addEventListener('click', () => this.seleccionarEscritorio(btn));
        });
    }

    seleccionarEscritorio(btn) {
        const escritorioNumero = btn.getAttribute('data-escritorio');
        this.escritorioSeleccionado = escritorioNumero;
    }
    agregarTurno() {
        const nombre = this.nombreInput.value;
        const fecha = this.fechaInput.value;
        this.controller.agregarTurno(nombre, fecha);
        this.actualizarListaTurnos();
    }

    tomarTurno() {
        const primerTurno = this.controller.obtenerTurnos()[0];
        if (primerTurno) {
            this.controller.tomarTurno(primerTurno.id);
            this.actualizarListaTurnos(); 
            this.actualizarEscritorio(); 
        }
    }

    actualizarListaTurnos() {
        const turnos = this.controller.obtenerTurnos();
        this.listaTurnos.innerHTML = '';
        turnos.forEach(turno => {
            const item = document.createElement('li');
            item.textContent = `ID: ${turno.id}, Nombre: ${turno.nombre}, Fecha: ${turno.fecha}`;
            this.listaTurnos.appendChild(item);
        });
    }

    actualizarEscritorio() {
        const turnos = this.controller.obtenerTurnos();
        const escritorioLista = document.getElementById('escritorio-lista');
        escritorioLista.innerHTML = '';
        const turnoTomado = turnos.find(turno => turno.escritorio === this.escritorioSeleccionado);
    
        if (turnoTomado) {
            const item = document.createElement('li');
            item.textContent = `ID: ${turnoTomado.id}, Nombre: ${turnoTomado.nombre}, Fecha: ${turnoTomado.fecha}`;
            escritorioLista.appendChild(item);
        }
    }    
}

