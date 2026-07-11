export type AppointmentStatus = 'In Progress' | 'Waiting' | 'Completed' | 'Upcoming';

export type PaymentMethod = 'ABA Bank' | 'KHQR' | 'Cash' | 'ACELEDA';

export interface KpiMetric {
  id: string;
  label: string;
  value: string;
  subtext: string;
  trendDirection: 'up' | 'down' | 'neutral';
  trendValue: string;
  icon: string;
  colorClass: string;
}

export interface DoctorChair {
  id: string;
  chairName: string;
  doctorName: string;
  specialty: string;
  avatarUrl: string;
  status: 'Available' | 'In Use' | 'Cleaning';
  currentPatient?: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  patientAge: number;
  patientAvatar: string;
  patientPhone: string;
  chairId: string;
  chairName: string;
  doctorName: string;
  treatmentName: string;
  treatmentCategory: 'Surgery' | 'Preventive' | 'Restorative' | 'Orthodontics' | 'Cosmetic';
  timeSlot: string;
  startTime: string;
  durationMinutes: number;
  status: AppointmentStatus;
  notes?: string;
  invoiceId: string;
}

export interface PosBillItem {
  id: string;
  code: string;
  description: string;
  category: string;
  unitPrice: number;
  quantity: number;
  coveredByInsurance: boolean;
  insuranceCoveragePercent: number;
}

export interface PosInvoice {
  invoiceId: string;
  patientName: string;
  patientPhone: string;
  doctorName: string;
  appointmentDate: string;
  items: PosBillItem[];
  subtotal: number;
  insuranceCoverageAmount: number;
  discountAmount: number;
  totalPatientCopay: number;
  paymentMethod: PaymentMethod;
  paymentStatus: 'Paid' | 'Pending' | 'Claim Processing';
}

export interface PatientQueueItem {
  id: string;
  patientName: string;
  patientAvatar: string;
  appointmentTime: string;
  checkInTime: string;
  waitingMinutes: number;
  assignedDoctor: string;
  chairName: string;
  status: 'Waiting in Lobby' | 'Called to Chair' | 'Ready for Checkout';
  treatmentName: string;
}

export interface TreatmentStat {
  name: string;
  category: string;
  countToday: number;
  revenueGenerated: number;
  percentageOfTotal: number;
  color: string;
}

export interface DoctorRecord {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  email: string;
  address: string;
  position: string;
  dayoff: string[];
  status: 'Active' | 'On Leave';
  avatarUrl?: string;
}

export interface PatientRecord {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  phoneNumber: string;
  email: string;
  address: string;
  createdAt: string;
}

export interface ServiceRecord {
  id: string;
  serviceName: string;
  description: string;
  price: number;
}

export interface MedicineRecord {
  id: string;
  medicineName: string;
  description: string;
  stock: number;
  typeof: 'box' | 'bottle';
  unitPrice: number;
  expireDate: string;
}

