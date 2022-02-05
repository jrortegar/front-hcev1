import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { PatientMedicalSearchComponent } from '../patient-medical-search/patient-medical-search.component';

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

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void{
    const dialogRef = this.dialog.open(
      PatientMedicalSearchComponent, {
        width:'450px',
        data: {document: this.dataSource[0].medico}
      });
      dialogRef.afterClosed().subscribe(result=>{
        console.log('dialog closed');
      });
  }

}
