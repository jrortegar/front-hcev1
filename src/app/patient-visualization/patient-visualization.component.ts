import { Component, OnInit } from '@angular/core';

export interface MedicalRegister {
  tipo: string;
  position: number;
  fecha: string;
  medico: string;
}

const ELEMENT_DATA: MedicalRegister[] = [
  {position: 1, tipo: 'Inmunizacion', fecha: '2021/09/18', medico: 'Dr. Gregory House'},
  {position: 2, tipo: 'Traumatismo', fecha: '2021/09/18', medico: 'Dra. Allison Cameron'},
  {position: 3, tipo: 'Perdida de conocimiento', fecha: '2021/09/18', medico: 'Dr. Doug Ross'},
  {position: 4, tipo: 'Consulta', fecha: '2021/09/18', medico: 'Dr. Mark Greene'},
  {position: 5, tipo: 'Intolerancia a Medicamentos', fecha: '2021/09/18', medico: 'Dra. Natalie Manning'},
  {position: 6, tipo: 'Habitos Personales', fecha: '2021/09/18', medico: 'Dr. Will Halstead'},
  {position: 7, tipo: 'Creacion de hisotria clinica', fecha: '2021/09/18', medico: 'Dra. Meredith Grey'}
];

@Component({
  selector: 'app-patient-visualization',
  templateUrl: './patient-visualization.component.html',
  styleUrls: ['./patient-visualization.component.css']
})
export class PatientVisualizationComponent implements OnInit {

  displayedColumns: string[] = ['position', 'tipo', 'fecha', 'medico'];
  dataSource = ELEMENT_DATA;
  
  constructor() { }

  ngOnInit(): void {
  }

}
