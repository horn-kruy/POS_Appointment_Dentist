import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TopbarComponent } from './layout/topbar/topbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorsRosterComponent } from './views/doctors-roster/doctors-roster.component';
import { PatientDirectoryComponent } from './views/patient-directory/patient-directory.component';
import { DentalServicesComponent } from './views/dental-services/dental-services.component';
import { MedicinesInventoryComponent } from './views/medicines-inventory/medicines-inventory.component';
import { AppointmentsViewComponent } from './views/appointments-view/appointments-view.component';
import { PaymentsViewComponent } from './views/payments-view/payments-view.component';
import { DashboardService } from './services/dashboard.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    TopbarComponent,
    DashboardComponent,
    AppointmentsViewComponent,
    PaymentsViewComponent,
    DoctorsRosterComponent,
    PatientDirectoryComponent,
    DentalServicesComponent,
    MedicinesInventoryComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  readonly dashboardService = inject(DashboardService);
}

