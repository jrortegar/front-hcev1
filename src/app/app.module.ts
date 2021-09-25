import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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
import { MatRadioModule } from '@angular/material/radio';
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
import { MedicalVisualMedicalRecordComponent } from './medical-visual-medical-record/medical-visual-medical-record.component';
import { MedicalRecordEditionBarComponent } from './medical-record-edition-bar/medical-record-edition-bar.component';
import { HcVisualizationComponent } from './hc-visualization/hc-visualization.component';
import { HcConsultationComponent } from './hc-consultation/hc-consultation.component';
import { HcEmergencyComponent } from './hc-emergency/hc-emergency.component';
import { HcInmunizationComponent } from './hc-inmunization/hc-inmunization.component';
import { HcTraumaComponent } from './hc-trauma/hc-trauma.component';
import { HcHospitalizationComponent } from './hc-hospitalization/hc-hospitalization.component';
import { HcBornInformationComponent } from './hc-born-information/hc-born-information.component';
import { HcPathologicalComponent } from './hc-pathological/hc-pathological.component';
import { HcSurgicalComponent } from './hc-surgical/hc-surgical.component';
import { HcOccupationalComponent } from './hc-occupational/hc-occupational.component';
import { HcTransfusionComponent } from './hc-transfusion/hc-transfusion.component';
import { HcDrugIntoleranceComponent } from './hc-drug-intolerance/hc-drug-intolerance.component';
import { HcAllergiesComponent } from './hc-allergies/hc-allergies.component';
import { HcPersonalHabitsComponent } from './hc-personal-habits/hc-personal-habits.component';
import { HcObstetricComponent } from './hc-obstetric/hc-obstetric.component';
import { MedicalMenuComponent } from './medical-menu/medical-menu.component';
import { PatientMenuComponent } from './patient-menu/patient-menu.component';



const routes: Routes = [
  { path: 'home', component: InitialComponent},
  { path: 'patient-register', component: PatientRegisterComponent},
  { path: 'medical-register', component: MedicalRegisterComponent},
  { path: 'patient-page', component: PatientPageComponent},
  { path: 'medical-page', component: MedicalPageComponent},
  { path: 'medical-request-access', component: MedicalRequestAccessComponent},
  { path: 'patient-visualization', component: PatientVisualizationComponent},
  { path: 'patient-notification', component: PatientNotificationComponent},
  { path: 'activate', component: MedicalSearchPatientComponent},
  { path: 'medical-visualization', component: MedicalVisualMedicalRecordComponent},
];

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
    MedicalSearchPatientTestsComponent,
    MedicalVisualMedicalRecordComponent,
    MedicalRecordEditionBarComponent,
    HcVisualizationComponent,
    HcConsultationComponent,
    HcEmergencyComponent,
    HcInmunizationComponent,
    HcTraumaComponent,
    HcHospitalizationComponent,
    HcBornInformationComponent,
    HcPathologicalComponent,
    HcSurgicalComponent,
    HcOccupationalComponent,
    HcTransfusionComponent,
    HcDrugIntoleranceComponent,
    HcAllergiesComponent,
    HcPersonalHabitsComponent,
    HcObstetricComponent,
    MedicalMenuComponent,
    PatientMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
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
    FormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
