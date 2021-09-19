import { Component, OnInit } from '@angular/core';

export interface Medical {
  nombre: string;
  position: number;
  apellido: string;
  vigencia: boolean;
  profesion: string;
  entidad: string;
}

const ELEMENT_DATA: Medical[] = [
  {position: 1, nombre: 'Gregory', apellido: 'House', vigencia: true, profesion:'Medicina', entidad:'Colegio Medico Colombiano'}

];

@Component({
  selector: 'app-patient-medical-search',
  templateUrl: './patient-medical-search.component.html',
  styleUrls: ['./patient-medical-search.component.css']
})
export class PatientMedicalSearchComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'apellido', 'vigencia', 'profesion', 'entidad'];
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
