import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData{
  document:string,
  identificationType: string,
  firstName: string,
  secondName: string,
  lastName: string,
  lastLastName: string,
  sex: string,
  maritalStatus: string,
  birthDay: string,
  age: number,
  ocupation: string,
  address: string,
  phone: number,
  city: string,
  secure: string,
  vinculation: string,
}

@Component({
  selector: 'app-hc-activate',
  templateUrl: './hc-activate.component.html',
  styleUrls: ['./hc-activate.component.css']
})
export class HcActivateComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<HcActivateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {
  }

}
