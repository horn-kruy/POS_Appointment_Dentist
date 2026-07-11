import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { Appointment, AppointmentStatus } from '../../models/dashboard.model';

@Component({
  selector: 'app-appointments-view',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointments-view.component.html',
  styleUrl: './appointments-view.component.css',
})
export class AppointmentsViewComponent {
  readonly dashboardService = inject(DashboardService);

  readonly showModal = signal<boolean>(false);
  readonly isEditing = signal<boolean>(false);

  // Form fields
  id = 'apt-103';
  patientName = '';
  patientPhone = '012-000-000';
  chairName = 'Operatory 01';
  doctorName = 'Dr. Sophea Chan';
  treatmentName = 'Dental Check-up';
  treatmentCategory: 'Surgery' | 'Preventive' | 'Restorative' | 'Orthodontics' | 'Cosmetic' = 'Restorative';
  timeSlot = '11:30 AM – 12:15 PM';
  status: AppointmentStatus = 'Waiting';
  notes = '';

  openCreateModal() {
    this.id = `apt-10${this.dashboardService.appointments().length + 1}`;
    this.patientName = '';
    this.patientPhone = '012-000-000';
    this.chairName = 'Operatory 01';
    this.doctorName = 'Dr. Sophea Chan';
    this.treatmentName = 'Dental Check-up';
    this.treatmentCategory = 'Restorative';
    this.timeSlot = '11:30 AM – 12:15 PM';
    this.status = 'Waiting';
    this.notes = '';

    this.isEditing.set(false);
    this.showModal.set(true);
  }

  openEditModal(apt: Appointment) {
    this.id = apt.id;
    this.patientName = apt.patientName;
    this.patientPhone = apt.patientPhone;
    this.chairName = apt.chairName;
    this.doctorName = apt.doctorName;
    this.treatmentName = apt.treatmentName;
    this.treatmentCategory = apt.treatmentCategory;
    this.timeSlot = apt.timeSlot;
    this.status = apt.status as any;
    this.notes = apt.notes || '';

    this.isEditing.set(true);
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  saveAppointment() {
    const aptData: Appointment = {
      id: this.id,
      patientId: 'P001',
      patientName: this.patientName || 'New Patient',
      patientAge: 30,
      patientAvatar: 'Ch01.jpg',
      patientPhone: this.patientPhone,
      chairId: 'chair-1',
      chairName: this.chairName,
      doctorName: this.doctorName,
      treatmentName: this.treatmentName,
      treatmentCategory: this.treatmentCategory,
      timeSlot: this.timeSlot,
      startTime: '11:30',
      durationMinutes: 45,
      status: this.status,
      notes: this.notes,
      invoiceId: 'inv-101',
    };

    if (this.isEditing()) {
      this.dashboardService.updateAppointment(aptData);
    } else {
      this.dashboardService.addAppointment(aptData);
    }
    this.closeModal();
  }

  deleteAppointment(id: string) {
    this.dashboardService.deleteAppointment(id);
  }
}
