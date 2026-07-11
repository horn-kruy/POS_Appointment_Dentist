import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardService } from '../../services/dashboard.service';

interface NavItem {
  id: string;
  label: string;
  icon: string;
  badge?: string;
  badgeColor?: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  readonly dashboardService = inject(DashboardService);

  readonly navItems: NavItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'schedule', label: 'Appointments', icon: 'calendar_month', badge: '2', badgeColor: 'blue' },
    { id: 'pos', label: 'Payments', icon: 'point_of_sale', badge: 'ABA/KHQR', badgeColor: 'green' },
    { id: 'doctors', label: 'Doctors', icon: 'badge' },
    { id: 'patients', label: 'Patients', icon: 'group' },
    { id: 'services', label: 'Services', icon: 'dentistry' },
    { id: 'medicines', label: 'Medicines', icon: 'medication', badge: '8 Items', badgeColor: 'blue' },
  ];

  selectNav(id: string) {
    this.dashboardService.setNavView(id);
  }
}

