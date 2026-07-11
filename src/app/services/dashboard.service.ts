import { Injectable, signal, computed } from '@angular/core';
import {
  Appointment,
  DoctorChair,
  KpiMetric,
  PatientQueueItem,
  PaymentMethod,
  PosInvoice,
  TreatmentStat,
  DoctorRecord,
  PatientRecord,
  ServiceRecord,
  MedicineRecord,
} from '../models/dashboard.model';
import {
  MOCK_APPOINTMENTS,
  MOCK_CHAIRS,
  MOCK_INVOICES,
  MOCK_KPI_METRICS,
  MOCK_TREATMENT_STATS,
  MOCK_WAITING_QUEUE,
  MOCK_DOCTORS_LIST,
  MOCK_PATIENTS_LIST,
  MOCK_SERVICES_LIST,
  MOCK_MEDICINES_LIST,
} from '../data/mock-dashboard.data';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // Navigation View Signal
  readonly currentNavView = signal<string>('dashboard');

  // Static state signals
  readonly kpis = signal<KpiMetric[]>(MOCK_KPI_METRICS);
  readonly chairs = signal<DoctorChair[]>(MOCK_CHAIRS);
  readonly appointments = signal<Appointment[]>(MOCK_APPOINTMENTS);
  readonly queue = signal<PatientQueueItem[]>(MOCK_WAITING_QUEUE);
  readonly treatmentStats = signal<TreatmentStat[]>(MOCK_TREATMENT_STATS);

  readonly doctorsList = signal<DoctorRecord[]>(MOCK_DOCTORS_LIST);
  readonly patientsList = signal<PatientRecord[]>(MOCK_PATIENTS_LIST);
  readonly servicesList = signal<ServiceRecord[]>(MOCK_SERVICES_LIST);
  readonly medicinesList = signal<MedicineRecord[]>(MOCK_MEDICINES_LIST);

  // UI Interactive signals
  readonly selectedFilter = signal<'All' | 'In Progress' | 'Waiting' | 'Completed'>('All');
  readonly selectedAppointmentId = signal<string>('apt-101');
  readonly selectedPaymentMethod = signal<PaymentMethod>('ABA Bank');
  readonly searchQuery = signal<string>('');
  readonly activeClinic = signal<string>('Phnom Penh Dental Clinic');

  setNavView(viewId: string) {
    this.currentNavView.set(viewId);
  }

  // Computed: filtered appointments
  readonly filteredAppointments = computed(() => {
    const filter = this.selectedFilter();
    const query = this.searchQuery().toLowerCase().trim();
    return this.appointments().filter((apt) => {
      const matchFilter = filter === 'All' || apt.status === filter;
      const matchSearch =
        !query ||
        apt.patientName.toLowerCase().includes(query) ||
        apt.doctorName.toLowerCase().includes(query) ||
        apt.treatmentName.toLowerCase().includes(query);
      return matchFilter && matchSearch;
    });
  });

  // Computed: active POS invoice corresponding to selected appointment
  readonly activeInvoice = computed<PosInvoice | null>(() => {
    const aptId = this.selectedAppointmentId();
    const apt = this.appointments().find((a) => a.id === aptId);
    if (!apt) return null;
    return MOCK_INVOICES[apt.invoiceId] || null;
  });

  // Actions
  setFilter(filter: 'All' | 'In Progress' | 'Waiting' | 'Completed') {
    this.selectedFilter.set(filter);
  }

  selectAppointment(appointmentId: string) {
    this.selectedAppointmentId.set(appointmentId);
    const apt = this.appointments().find((a) => a.id === appointmentId);
    if (apt && MOCK_INVOICES[apt.invoiceId]) {
      this.selectedPaymentMethod.set(MOCK_INVOICES[apt.invoiceId].paymentMethod);
    }
  }

  setPaymentMethod(method: PaymentMethod) {
    this.selectedPaymentMethod.set(method);
  }

  setSearchQuery(query: string) {
    this.searchQuery.set(query);
  }

  // Quick demo action to simulate payment completion
  processPayment() {
    const aptId = this.selectedAppointmentId();
    this.appointments.update((list) =>
      list.map((a) => (a.id === aptId ? { ...a, status: 'Completed' } : a))
    );
  }

  // --- Collection CRUD Methods ---

  // Doctors CRUD
  addDoctor(doc: DoctorRecord) {
    this.doctorsList.update((list) => [doc, ...list]);
  }
  updateDoctor(updated: DoctorRecord) {
    this.doctorsList.update((list) =>
      list.map((d) => (d.id === updated.id ? updated : d))
    );
  }
  deleteDoctor(id: string) {
    this.doctorsList.update((list) => list.filter((d) => d.id !== id));
  }

  // Patients CRUD
  addPatient(pat: PatientRecord) {
    this.patientsList.update((list) => [pat, ...list]);
  }
  updatePatient(updated: PatientRecord) {
    this.patientsList.update((list) =>
      list.map((p) => (p.id === updated.id ? updated : p))
    );
  }
  deletePatient(id: string) {
    this.patientsList.update((list) => list.filter((p) => p.id !== id));
  }

  // Services CRUD
  addService(srv: ServiceRecord) {
    this.servicesList.update((list) => [srv, ...list]);
  }
  updateService(updated: ServiceRecord) {
    this.servicesList.update((list) =>
      list.map((s) => (s.id === updated.id ? updated : s))
    );
  }
  deleteService(id: string) {
    this.servicesList.update((list) => list.filter((s) => s.id !== id));
  }

  // Medicines CRUD
  addMedicine(med: MedicineRecord) {
    this.medicinesList.update((list) => [med, ...list]);
  }
  updateMedicine(updated: MedicineRecord) {
    this.medicinesList.update((list) =>
      list.map((m) => (m.id === updated.id ? updated : m))
    );
  }
  deleteMedicine(id: string) {
    this.medicinesList.update((list) => list.filter((m) => m.id !== id));
  }

  // Appointments CRUD
  addAppointment(apt: Appointment) {
    this.appointments.update((list) => [apt, ...list]);
  }
  updateAppointment(updated: Appointment) {
    this.appointments.update((list) =>
      list.map((a) => (a.id === updated.id ? updated : a))
    );
  }
  deleteAppointment(id: string) {
    this.appointments.update((list) => list.filter((a) => a.id !== id));
  }
}
