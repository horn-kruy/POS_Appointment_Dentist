import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { PatientRecord } from '../../models/dashboard.model';

@Component({
  selector: 'app-patient-directory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-directory.component.html',
  styleUrl: './patient-directory.component.css',
})
export class PatientDirectoryComponent {
  readonly dashboardService = inject(DashboardService);

  readonly showModal = signal<boolean>(false);
  readonly isEditing = signal<boolean>(false);

  // Form fields
  id = 'P007';
  firstName = '';
  lastName = '';
  gender: 'Male' | 'Female' = 'Female';
  phoneNumber = '';
  email = '';
  address = 'Phnom Penh';

  openCreateModal() {
    this.id = `P00${this.dashboardService.patientsList().length + 1}`;
    this.firstName = '';
    this.lastName = '';
    this.gender = 'Female';
    this.phoneNumber = '012-000-000';
    this.email = '';
    this.address = 'Phnom Penh';

    this.isEditing.set(false);
    this.showModal.set(true);
  }

  openEditModal(pat: PatientRecord) {
    this.id = pat.id;
    this.firstName = pat.firstName;
    this.lastName = pat.lastName;
    this.gender = (pat.gender as 'Male' | 'Female') || 'Female';
    this.phoneNumber = pat.phoneNumber;
    this.email = pat.email;
    this.address = pat.address;

    this.isEditing.set(true);
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  savePatient() {
    const patData: PatientRecord = {
      id: this.id,
      firstName: this.firstName || 'Patient',
      lastName: this.lastName || 'Name',
      gender: this.gender,
      phoneNumber: this.phoneNumber,
      email: this.email || 'patient@example.com',
      address: this.address,
      createdAt: new Date().toISOString().split('T')[0],
    };

    if (this.isEditing()) {
      this.dashboardService.updatePatient(patData);
    } else {
      this.dashboardService.addPatient(patData);
    }
    this.closeModal();
  }

  deletePatient(id: string) {
    this.dashboardService.deletePatient(id);
  }
}
