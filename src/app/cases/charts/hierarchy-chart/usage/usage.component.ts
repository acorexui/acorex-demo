import { Component, signal } from '@angular/core';
import {
  AXHierarchyChartComponent,
  AXHierarchyChartClickEvent,
  AXHierarchyChartData,
  AXHierarchyChartOption,
} from '@acorex/charts/hierarchy-chart';

@Component({
  templateUrl: 'usage.component.html',
  imports: [AXHierarchyChartComponent],
})
export class UsageComponent {
  hierarchyChartData = signal<AXHierarchyChartData>({
    id: 'ceo',
    name: 'Alex Thompson',
    subtitle: 'Chief Executive Officer',
    icon: 'fa-user-tie',
    tooltip: 'CEO with 15+ years experience in tech leadership',
    color: '#2c3e50',
    isExpanded: true,
    children: [
      {
        id: 'cto',
        name: 'Maria Rodriguez',
        subtitle: 'Chief Technology Officer',
        icon: 'fa-laptop-code',
        tooltip: 'CTO leading technology strategy and innovation',
        color: '#3498db',
        isExpanded: true,
        children: [
          {
            id: 'eng-manager',
            name: 'James Wilson',
            subtitle: 'Engineering Manager',
            icon: 'fa-users-cog',
            tooltip: 'Manages development teams and technical roadmap',
            color: '#e74c3c',
            children: [
              {
                id: 'frontend-lead',
                name: 'Sarah Chen',
                subtitle: 'Frontend Lead',
                icon: 'fa-paint-brush',
                tooltip: 'Leads frontend development and UI/UX',
                color: '#f39c12',
                children: [
                  {
                    id: 'frontend-dev1',
                    name: 'Mike Johnson',
                    subtitle: 'Frontend Developer',
                    icon: 'fa-code',
                    tooltip: 'React and Angular specialist',
                    color: '#9b59b6',
                  },
                  {
                    id: 'frontend-dev2',
                    name: 'Lisa Park',
                    subtitle: 'Frontend Developer',
                    icon: 'fa-code',
                    tooltip: 'Vue.js and TypeScript expert',
                    color: '#9b59b6',
                  },
                ],
              },
              {
                id: 'backend-lead',
                name: 'David Kim',
                subtitle: 'Backend Lead',
                icon: 'fa-server',
                tooltip: 'Leads backend architecture and APIs',
                color: '#1abc9c',
                children: [
                  {
                    id: 'backend-dev1',
                    name: 'Anna Smith',
                    subtitle: 'Backend Developer',
                    icon: 'fa-database',
                    tooltip: 'Node.js and Python specialist',
                    color: '#34495e',
                  },
                  {
                    id: 'backend-dev2',
                    name: 'Tom Wilson',
                    subtitle: 'Backend Developer',
                    icon: 'fa-database',
                    tooltip: 'Java and Spring Boot expert',
                    color: '#34495e',
                  },
                ],
              },
            ],
          },
          {
            id: 'devops-lead',
            name: 'Chris Taylor',
            subtitle: 'DevOps Lead',
            icon: 'fa-cloud',
            tooltip: 'Manages infrastructure and deployment',
            color: '#e67e22',
            children: [
              {
                id: 'devops-engineer',
                name: 'Rachel Green',
                subtitle: 'DevOps Engineer',
                icon: 'fa-tools',
                tooltip: 'AWS and Kubernetes specialist',
                color: '#95a5a6',
              },
            ],
          },
        ],
      },
      {
        id: 'cfo',
        name: 'Jennifer Davis',
        subtitle: 'Chief Financial Officer',
        icon: 'fa-chart-line',
        tooltip: 'CFO managing financial strategy and operations',
        color: '#27ae60',
        children: [
          {
            id: 'finance-manager',
            name: 'Robert Brown',
            subtitle: 'Finance Manager',
            icon: 'fa-calculator',
            tooltip: 'Financial planning and analysis',
            color: '#8e44ad',
            children: [
              {
                id: 'accountant',
                name: 'Emily White',
                subtitle: 'Senior Accountant',
                icon: 'fa-file-invoice',
                tooltip: 'Financial reporting and compliance',
                color: '#16a085',
              },
            ],
          },
        ],
      },
    ],
  });

  hierarchyChartOptions = signal<AXHierarchyChartOption>({
    direction: 'vertical',
    width: 1000,
    height: 800,
    nodeWidth: 180,
    nodeHeight: 70,
    nodeStrokeWidth: 2,
    linkWidth: 2,
    linkStyle: 'curved',
    nodeSpacingX: 100,
    nodeSpacingY: 140,
    showTooltip: true,
    collapsible: true,
    expandAll: false,
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
  });
  handleHierarchyChartNodeClick(event: AXHierarchyChartClickEvent): void {
    const node = event.item;
    console.log(
      `Node clicked | Name: ${node.name || node.label} | ID: ${node.id} `
    );
  }
}
