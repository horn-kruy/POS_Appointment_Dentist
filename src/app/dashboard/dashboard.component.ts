import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KpiCardsComponent } from './components/kpi-cards/kpi-cards.component';
import { AppointmentScheduleComponent } from './components/appointment-schedule/appointment-schedule.component';
import { PosQuickCheckoutComponent } from './components/pos-quick-checkout/pos-quick-checkout.component';
import { WaitingRoomQueueComponent } from './components/waiting-room-queue/waiting-room-queue.component';
import { TreatmentStatsComponent } from './components/treatment-stats/treatment-stats.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    KpiCardsComponent,
    AppointmentScheduleComponent,
    PosQuickCheckoutComponent,
    WaitingRoomQueueComponent,
    TreatmentStatsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {}
