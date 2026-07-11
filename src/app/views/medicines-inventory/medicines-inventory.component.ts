import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';
import { MedicineRecord } from '../../models/dashboard.model';

@Component({
  selector: 'app-medicines-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './medicines-inventory.component.html',
  styleUrl: './medicines-inventory.component.css',
})
export class MedicinesInventoryComponent {
  readonly dashboardService = inject(DashboardService);

  readonly showModal = signal<boolean>(false);
  readonly isEditing = signal<boolean>(false);

  // Form fields
  id = 'M009';
  medicineName = '';
  description = '';
  medicineType: 'box' | 'bottle' = 'box';
  stock = 100;
  unitPrice = 5.0;
  expireDate = '2027-12-31';

  openCreateModal() {
    this.id = `M00${this.dashboardService.medicinesList().length + 1}`;
    this.medicineName = '';
    this.description = '';
    this.medicineType = 'box';
    this.stock = 100;
    this.unitPrice = 5.0;
    this.expireDate = '2027-12-31';

    this.isEditing.set(false);
    this.showModal.set(true);
  }

  openEditModal(med: MedicineRecord) {
    this.id = med.id;
    this.medicineName = med.medicineName;
    this.description = med.description;
    this.medicineType = med.typeof;
    this.stock = med.stock;
    this.unitPrice = med.unitPrice;
    this.expireDate = med.expireDate;

    this.isEditing.set(true);
    this.showModal.set(true);
  }

  closeModal() {
    this.showModal.set(false);
  }

  saveMedicine() {
    const medData: MedicineRecord = {
      id: this.id,
      medicineName: this.medicineName || 'Medicine Name',
      description: this.description || 'Pharmacy prescription item',
      typeof: this.medicineType,
      stock: Number(this.stock) || 0,
      unitPrice: Number(this.unitPrice) || 0,
      expireDate: this.expireDate || '2027-12-31',
    };

    if (this.isEditing()) {
      this.dashboardService.updateMedicine(medData);
    } else {
      this.dashboardService.addMedicine(medData);
    }
    this.closeModal();
  }

  deleteMedicine(id: string) {
    this.dashboardService.deleteMedicine(id);
  }
}
