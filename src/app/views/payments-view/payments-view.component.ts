import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';
import { PosQuickCheckoutComponent } from '../../dashboard/components/pos-quick-checkout/pos-quick-checkout.component';

@Component({
  selector: 'app-payments-view',
  standalone: true,
  imports: [CommonModule, PosQuickCheckoutComponent],
  templateUrl: './payments-view.component.html',
  styleUrl: './payments-view.component.css',
})
export class PaymentsViewComponent {
  readonly dashboardService = inject(DashboardService);
}
