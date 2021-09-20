import { Component, OnInit } from '@angular/core';

export interface Patient {
  nombre: string;
  position: number;
  apellido: string;
  documento: string;
}

const ELEMENT_DATA: Patient[] = [
  {position: 1, nombre: 'Pedro', apellido: 'Perez', documento:'111111'}

];


@Component({
  selector: 'app-medical-request-access',
  templateUrl: './medical-request-access.component.html',
  styleUrls: ['./medical-request-access.component.css']
})
export class MedicalRequestAccessComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'documento', 'acciones'];
  dataSource = ELEMENT_DATA;
  showContent:boolean;

  constructor() { 
    this.showContent=false;
  }

  ngOnInit(): void {
  }

  mostrarContenido(){
    if(this.showContent){
      this.showContent=false;
    }
    else{
      this.showContent=true;
    }
  }

}
