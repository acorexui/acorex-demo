import { Component } from '@angular/core';
import {
  AXCommandComponentEvent,
  AXCommandModule,
  CommandMenuItem,
} from '@acorex/components/command';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './template.component.html',
  imports: [AXCommandModule, FormsModule],
})
export class TemplateComponent {
  value: CommandMenuItem = {
    pinned: {
      title: 'Recent',
      items: [
        {
          id: 'menu-home-001',
          text: 'Home',
          icon: 'fa-solid fa-house',
          href: '/home',
          index: 1,
        },
        {
          id: 'menu-dashboard-002',
          text: 'Dashboard',
          icon: 'fa-solid fa-gauge',
          href: '/dashboard',
          index: 2,
        },
      ],
    },
    items: [
      {
        id: 'menu-home-001',
        text: 'Home',
        icon: 'fa-solid fa-house',
        href: '/home',
        index: 1,
      },
      {
        id: 'menu-dashboard-002',
        text: 'Dashboard',
        icon: 'fa-solid fa-gauge',
        href: '/dashboard',
        index: 2,
      },
      {
        id: 'menu-profile-003',
        text: 'Profile',
        icon: 'fa-solid fa-user',
        href: '/profile',
        index: 3,
      },
      {
        id: 'menu-settings-004',
        text: 'Settings',
        icon: 'fa-solid fa-gear',
        href: '/settings',
        index: 4,
      },
      {
        id: 'menu-messages-005',
        text: 'Messages',
        icon: 'fa-solid fa-envelope',
        href: '/messages',
        index: 5,
      },
      {
        id: 'menu-notifications-006',
        text: 'Notifications',
        icon: 'fa-solid fa-bell',
        href: '/notifications',
        index: 6,
      },
      {
        id: 'menu-tasks-007',
        text: 'Tasks',
        icon: 'fa-solid fa-list-check',
        href: '/tasks',
        index: 7,
      },
      {
        id: 'menu-projects-008',
        text: 'Projects',
        icon: 'fa-solid fa-diagram-project',
        href: '/projects',
        index: 8,
      },
      {
        id: 'menu-reports-009',
        text: 'Reports',
        icon: 'fa-solid fa-chart-bar',
        href: '/reports',
        index: 9,
        children: [
          {
            id: 'menu-reports-sales-009a',
            text: 'Sales Report',
            href: '/reports/sales',
            icon: 'fa-solid fa-chart-line',
          },
          {
            id: 'menu-reports-users-009b',
            text: 'User Report',
            href: '/reports/users',
            icon: 'fa-solid fa-users',
          },
        ],
      },
      {
        id: 'menu-calendar-010',
        text: 'Calendar',
        icon: 'fa-solid fa-calendar-days',
        href: '/calendar',
        index: 10,
      },
      {
        id: 'menu-contacts-011',
        text: 'Contacts',
        icon: 'fa-solid fa-address-book',
        href: '/contacts',
        index: 11,
      },
      {
        id: 'menu-files-012',
        text: 'Files',
        icon: 'fa-solid fa-folder',
        href: '/files',
        index: 12,
      },
      {
        id: 'menu-analytics-013',
        text: 'Analytics',
        icon: 'fa-solid fa-chart-pie',
        href: '/analytics',
        index: 13,
      },
      {
        id: 'menu-billing-014',
        text: 'Billing',
        icon: 'fa-solid fa-credit-card',
        href: '/billing',
        index: 14,
      },
      {
        id: 'menu-admin-015',
        text: 'Admin Panel',
        icon: 'fa-solid fa-shield-halved',
        href: '/admin',
        index: 15,
        children: [
          {
            id: 'menu-admin-users-015a',
            text: 'Users',
            href: '/admin/users',
            icon: 'fa-solid fa-user-group',
          },
          {
            id: 'menu-admin-roles-015b',
            text: 'Roles',
            href: '/admin/roles',
            icon: 'fa-solid fa-user-shield',
          },
          {
            id: 'menu-admin-permissions-015c',
            text: 'Permissions',
            href: '/admin/permissions',
            icon: 'fa-solid fa-lock',
            children: [
              {
                id: '1',
                text: 'Users',
                href: '/admin/users',
                icon: 'fa-solid fa-user-group',
              },
              {
                id: '2',
                text: 'Roles',
                href: '/admin/roles',
                icon: 'fa-solid fa-user-shield',
              },
              {
                id: '3',
                text: 'Permissions',
                href: '/admin/permissions',
                icon: 'fa-solid fa-lock',
              },
            ],
          },
        ],
      },
      {
        id: 'menu-support-016',
        text: 'Support',
        icon: 'fa-solid fa-headset',
        href: '/support',
        index: 16,
      },
      {
        id: 'menu-faq-017',
        text: 'FAQ',
        icon: 'fa-solid fa-circle-question',
        href: '/faq',
        index: 17,
      },
      {
        id: 'menu-about-018',
        text: 'About Us',
        icon: 'fa-solid fa-circle-info',
        href: '/about',
        index: 18,
      },
      {
        id: 'menu-privacy-019',
        text: 'Privacy Policy',
        icon: 'fa-solid fa-user-shield',
        href: '/privacy',
        index: 19,
      },
      {
        id: 'menu-logout-020',
        text: 'Logout',
        icon: 'fa-solid fa-right-from-bracket',
        href: '/logout',
        index: 20,
      },
    ],
  };

  submitHandler(e: AXCommandComponentEvent) {
    console.log(e.data);
  }
}
