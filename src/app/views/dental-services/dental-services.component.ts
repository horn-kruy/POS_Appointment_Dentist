import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { ServiceRecord } from '../../models/dashboard.model';

@Component({
  selector: 'app-dental-services',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dental-services.component.html',
  styleUrl: './dental-services.component.css',
})
export class DentalServicesComponent {
  readonly dashboardService = inject(DashboardService);

  readonly showModal = signal<boolean>(false);
  readonly isEditing = signal<boolean>(false);

  // Form fields
  id = 'SV008';
  serviceName = '';
  description = '';
  price = 50.0;

  openCreateModal() {
    this.id = `SV00${this.dashboardService.servicesList().length + 1}`;
    this.serviceName = '';
    this.description = '';
    this.price = 50.0;

    this.isEditing.set(false);
    this.showModal.set(true);
  }

  openEditModal(srv: ServiceRecord) {
    this.id = srv.id;
    this.serviceName = srv.serviceName;
    this.description = srv.description;
    this.price = srv.price;

    this.isEditing.set(true);
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  saveService() {
    const srvData: ServiceRecord = {
      id: this.id,
      serviceName: this.serviceName || 'Procedure Name',
      description: this.description || 'Clinical dental procedure description',
      price: Number(this.price) || 0,
    };

    if (this.isEditing()) {
      this.dashboardService.updateService(srvData);
    } else {
      this.dashboardService.addService(srvData);
    }
    this.closeModal();
  }

  deleteService(id: string) {
    this.dashboardService.deleteService(id);
  }
}
