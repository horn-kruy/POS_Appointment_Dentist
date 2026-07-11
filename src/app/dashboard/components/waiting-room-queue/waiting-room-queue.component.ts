import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-waiting-room-queue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './waiting-room-queue.component.html',
  styleUrl: './waiting-room-queue.component.css',
})
export class WaitingRoomQueueComponent {
  readonly dashboardService = inject(DashboardService);
}
