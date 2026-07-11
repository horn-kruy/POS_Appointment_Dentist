import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../../services/dashboard.service';
import { PaymentMethod } from '../../../models/dashboard.model';

@Component({
  selector: 'app-pos-quick-checkout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pos-quick-checkout.component.html',
  styleUrl: './pos-quick-checkout.component.css',
})
export class PosQuickCheckoutComponent {
  readonly dashboardService = inject(DashboardService);

  readonly paymentMethods: PaymentMethod[] = ['ABA Bank', 'KHQR', 'Cash', 'ACELEDA'];

  readonly isProcessing = signal<boolean>(false);
  readonly paymentSuccess = signal<boolean>(false);

  selectPaymentMethod(method: PaymentMethod) {
    this.dashboardService.setPaymentMethod(method);
    this.paymentSuccess.set(false);
  }

  onProcessPayment() {
    this.isProcessing.set(true);
    setTimeout(() => {
      this.isProcessing.set(false);
      this.paymentSuccess.set(true);
      this.dashboardService.processPayment();
    }, 600);
  }
}
