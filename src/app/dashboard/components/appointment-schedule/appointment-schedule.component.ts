import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../services/dashboard.service';
import { AppointmentStatus } from '../../../models/dashboard.model';

@Component({
  selector: 'app-appointment-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-schedule.component.html',
  styleUrl: './appointment-schedule.component.css',
})
export class AppointmentScheduleComponent {
  readonly dashboardService = inject(DashboardService);

  readonly filterTabs: { label: string; value: 'All' | 'In Progress' | 'Waiting' | 'Completed' }[] = [
    { label: 'All Appointments', value: 'All' },
    { label: 'In Progress', value: 'In Progress' },
    { label: 'Waiting Lobby', value: 'Waiting' },
    { label: 'Completed', value: 'Completed' },
  ];

  selectFilter(filter: 'All' | 'In Progress' | 'Waiting' | 'Completed') {
    this.dashboardService.setFilter(filter);
  }

  onSelectAppointment(appointmentId: string) {
    this.dashboardService.selectAppointment(appointmentId);
  }

  getStatusBadgeClass(status: AppointmentStatus): string {
    switch (status) {
      case 'In Progress':
        return 'badge-in-progress';
      case 'Waiting':
        return 'badge-waiting';
      case 'Completed':
        return 'badge-completed';
      default:
        return 'badge-upcoming';
    }
  }
}
