import { Component, Output, EventEmitter } from '@angular/core';
import { Cita } from 'src/classes/Cita';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.css']
})
export class CrearCitaComponent {

  sintomas = ""
  nombre = ""
  fecha = ""
  hora = ""

  @Output() newCita = new EventEmitter<Cita>()

  createCita() {

    if (!this.sintomas || !this.nombre || !this.fecha || !this.hora) return

    const cita = new Cita(this.nombre, this.fecha, this.hora, this.sintomas)

    this.newCita.emit(cita)
    this.resetForm()
  }

  resetForm() {
    this.sintomas = ""
    this.nombre = ""
    this.fecha = ""
    this.hora = ""
  }

}
