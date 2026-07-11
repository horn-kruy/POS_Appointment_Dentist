import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-treatment-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './treatment-stats.component.html',
  styleUrl: './treatment-stats.component.css',
})
export class TreatmentStatsComponent {
  readonly dashboardService = inject(DashboardService);
}
