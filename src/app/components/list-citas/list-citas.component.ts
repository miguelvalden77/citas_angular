import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cita } from 'src/classes/Cita';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {

  @Input() listadoCitas: Cita[] = []
  @Output() citaRemove = new EventEmitter<Cita>()

  giveCitaRemove(cita: Cita) {
    this.citaRemove.emit(cita)
  }

}
