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
    id: 'org-1',
    name: 'John Smith',
    subtitle: 'CEO',
    icon: 'fa-user-tie',
    tooltip: 'Chief Executive Officer',
    isExpanded: true,
    children: [
      {
        id: 'org-2',
        name: 'Michael Johnson',
        subtitle: 'CTO',
        icon: 'fa-code',
        tooltip: 'Chief Technology Officer',
        isExpanded: true,
        children: [
          {
            id: 'org-3',
            name: 'Jennifer Lee',
            subtitle: 'Lead Developer',
            icon: 'fa-code',
            tooltip: 'Frontend Tech Lead',
            children: [
              {
                id: 'org-7',
                name: 'Robert Chen',
                subtitle: 'Frontend Developer',
                icon: 'fa-code',
                tooltip: 'Frontend Engineer',
              },
              {
                id: 'org-8',
                name: 'Lisa Wong',
                subtitle: 'Frontend Developer',
                icon: 'fa-code',
                tooltip: 'Frontend Engineer',
              },
            ],
          },
          {
            id: 'org-4',
            name: 'David Kim',
            subtitle: 'Backend Developer',
            icon: 'fa-server',
            tooltip: 'Backend Engineer',
          },
        ],
      },
      {
        id: 'org-5',
        name: 'Sarah Wilson',
        subtitle: 'CFO',
        icon: 'fa-chart-line',
        tooltip: 'Chief Financial Officer',
        children: [
          {
            id: 'org-6',
            name: 'James Brown',
            subtitle: 'Financial Analyst',
            icon: 'fa-calculator',
            tooltip: 'Financial Planning & Analysis',
          },
        ],
      },
    ],
  });
  hierarchyChartOptions = signal<AXHierarchyChartOption>({
    direction: 'vertical',
    width: 700,
    height: 600,
    nodeWidth: 200,
    nodeHeight: 80,
    nodeStrokeWidth: 1.5,
    linkWidth: 1.5,
    linkStyle: 'step',
    nodeSpacingX: 80,
    nodeSpacingY: 120,
    showTooltip: true,
    collapsible: true,
    expandAll: false,
  });
  handleHierarchyChartNodeClick(event: AXHierarchyChartClickEvent): void {
    const node = event.item;
    console.log(
      `Node clicked | Name: ${node.name || node.label} | ID: ${node.id} `
    );
  }
}
