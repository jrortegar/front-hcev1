import { Component, OnInit } from '@angular/core';

export interface InactivePatient {
  documento: string;
  contrato: string;
}

const ELEMENT_DATA: InactivePatient[] = [
  {documento:'111111', contrato:'0x1FA234ABC123'}

];

@Component({
  selector: 'app-medical-search-patient',
  templateUrl: './medical-search-patient.component.html',
  styleUrls: ['./medical-search-patient.component.css']
})
export class MedicalSearchPatientComponent implements OnInit {

  displayedColumns: string[] = ['documento', 'contrato' ,'acciones'];
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
