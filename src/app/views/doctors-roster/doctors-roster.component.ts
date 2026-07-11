import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { DoctorRecord } from '../../models/dashboard.model';

@Component({
  selector: 'app-doctors-roster',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './doctors-roster.component.html',
  styleUrl: './doctors-roster.component.css',
})
export class DoctorsRosterComponent {
  readonly dashboardService = inject(DashboardService);

  readonly showModal = signal<boolean>(false);
  readonly isEditing = signal<boolean>(false);

  // Form fields
  id = 'D006';
  firstName = '';
  lastName = '';
  gender = 'Female';
  phoneNumber = '';
  email = '';
  address = 'Phnom Penh';
  position = 'General Dentist';
  status: 'Active' | 'On Leave' = 'Active';
  avatarUrl = 'Ch01.jpg';

  openCreateModal() {
    this.id = `D00${this.dashboardService.doctorsList().length + 1}`;
    this.firstName = '';
    this.lastName = '';
    this.gender = 'Female';
    this.phoneNumber = '012-000-000';
    this.email = '';
    this.address = 'Phnom Penh';
    this.position = 'General Dentist';
    this.status = 'Active';
    this.avatarUrl = 'Ch01.jpg';

    this.isEditing.set(false);
    this.showModal.set(true);
  }

  openEditModal(doc: DoctorRecord) {
    this.id = doc.id;
    this.firstName = doc.firstName;
    this.lastName = doc.lastName;
    this.gender = doc.gender;
    this.phoneNumber = doc.phoneNumber;
    this.email = doc.email;
    this.address = doc.address;
    this.position = doc.position;
    this.status = doc.status;
    this.avatarUrl = doc.avatarUrl || 'Ch01.jpg';

    this.isEditing.set(true);
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  saveDoctor() {
    const docData: DoctorRecord = {
      id: this.id,
      firstName: this.firstName || 'Doctor',
      lastName: this.lastName || 'Name',
      gender: this.gender,
      phoneNumber: this.phoneNumber,
      email: this.email || 'doctor@clinic.com',
      address: this.address,
      position: this.position,
      dayoff: ['Sunday'],
      status: this.status,
      avatarUrl: this.avatarUrl,
    };

    if (this.isEditing()) {
      this.dashboardService.updateDoctor(docData);
    } else {
      this.dashboardService.addDoctor(docData);
    }
    this.closeModal();
  }

  deleteDoctor(id: string) {
    this.dashboardService.deleteDoctor(id);
  }
}
