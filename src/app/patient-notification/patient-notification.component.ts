import { Component, OnInit } from '@angular/core';

export interface Notification {
  peticion: string;
  position: number;
  tiempoRestante: string;
  medico: string;
}

const ELEMENT_DATA: Notification[] = [
  {position: 1, peticion: 'Agregar consulta', tiempoRestante: '29:55', medico: 'Dr. Gregory House'}

];

@Component({
  selector: 'app-patient-notification',
  templateUrl: './patient-notification.component.html',
  styleUrls: ['./patient-notification.component.css']
})
export class PatientNotificationComponent implements OnInit {

  displayedColumns: string[] = ['position', 'peticion', 'medico', 'tiempoRestante', 'buscar'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
