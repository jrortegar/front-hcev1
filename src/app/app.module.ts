import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { InitialComponent } from './initial/initial.component';
import { HeaderComponent } from './header/header.component';

import { FormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge'; 
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientRegisterComponent } from './patient-register/patient-register.component';
import { PatientPageComponent } from './patient-page/patient-page.component';
import { PatientVisualizationComponent } from './patient-visualization/patient-visualization.component';
import { PatientNotificationComponent } from './patient-notification/patient-notification.component';
import { PatientMedicalSearchComponent } from './patient-medical-search/patient-medical-search.component';
import { MedicalRegisterComponent } from './medical-register/medical-register.component';
import { MedicalPageComponent } from './medical-page/medical-page.component';
import { MedicalRequestAccessComponent } from './medical-request-access/medical-request-access.component';
import { MedicalAddRegisterComponent } from './medical-add-register/medical-add-register.component';
import { MedicalVisualizationComponent } from './medical-visualization/medical-visualization.component';
import { MedicalSearchPatientComponent } from './medical-search-patient/medical-search-patient.component';
import { MedicalSearchPatientTestsComponent } from './medical-search-patient-tests/medical-search-patient-tests.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    InitialComponent,
    HeaderComponent,
    PatientRegisterComponent,
    PatientPageComponent,
    PatientVisualizationComponent,
    PatientNotificationComponent,
    PatientMedicalSearchComponent,
    MedicalRegisterComponent,
    MedicalPageComponent,
    MedicalRequestAccessComponent,
    MedicalAddRegisterComponent,
    MedicalVisualizationComponent,
    MedicalSearchPatientComponent,
    MedicalSearchPatientTestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule,
    MatSelectModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
