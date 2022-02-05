import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { HcActivateComponent } from '../hc-activate/hc-activate.component';



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
  document: string="";

  constructor(public dialog: MatDialog) {
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

  openDialog(): void{
    const dialogRef = this.dialog.open(
      HcActivateComponent, {
        width:'450px',
        data: {document: this.dataSource[0].documento}
      });
      dialogRef.afterClosed().subscribe(result=>{
        console.log('dialog closed');
      });
  }

}
