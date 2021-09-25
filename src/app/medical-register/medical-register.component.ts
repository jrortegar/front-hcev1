import { Component, OnInit } from '@angular/core';

interface Document {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-medical-register',
  templateUrl: './medical-register.component.html',
  styleUrls: ['./medical-register.component.css']
})
export class MedicalRegisterComponent implements OnInit {
  selectedValue: string;
  checked: boolean = false;

  documents: Document[] = [
    {value: 'cc-0', viewValue: 'CC'},
    {value: 'ce-1', viewValue: 'CE'},
    {value: 'cn-2', viewValue: 'CN'},
    {value: 'pa-3', viewValue: 'PA'},
    {value: 'pe-4', viewValue: 'PE'},
    {value: 'rc-5', viewValue: 'RC'},
    {value: 'ti-6', viewValue: 'TI'}
  ];


  constructor() { 
    this.selectedValue=this.documents[0].viewValue
  }

  ngOnInit(): void {
  }

  checkMedicalExistance(){
    if(this.checked){
      this.checked=false;
    }
    else{
      this.checked=true;
    }
  }

}
