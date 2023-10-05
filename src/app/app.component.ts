import { Component, EventEmitter, Output } from '@angular/core';
import { Cita } from 'src/classes/Cita';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'citasApp';
  citasList: Cita[] = []

  addCita(cita: Cita) {

    this.citasList.push(cita)
    console.log(cita)
  }

  eliminarCita(cita: Cita) {

    this.citasList = this.citasList.filter(e => e != cita)
  }
}
