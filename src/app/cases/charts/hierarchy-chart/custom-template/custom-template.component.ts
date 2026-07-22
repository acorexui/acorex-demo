import { Component, signal, TemplateRef } from '@angular/core';
import {
  AXHierarchyChartComponent,
  AXHierarchyChartClickEvent,
  AXHierarchyChartData,
  AXHierarchyChartOption,
  AXHierarchyChartNodeContext,
} from '@acorex/charts/hierarchy-chart';

@Component({
  templateUrl: 'custom-template.component.html',
  imports: [AXHierarchyChartComponent],
})
export class CustomTemplateComponent {
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

  // Demo: Custom template with enhanced styling
  hierarchyChartOptions = signal<AXHierarchyChartOption>({
    direction: 'vertical',
    width: 1000,
    height: 800,
    nodeWidth: 220,
    nodeHeight: 90,
    nodeStrokeWidth: 2,
    linkWidth: 2.5,
    linkStyle: 'rounded',
    nodeSpacingX: 120,
    nodeSpacingY: 140,
    showTooltip: true,
    collapsible: true,
    expandAll: false,
    margin: { top: 60, right: 60, bottom: 60, left: 60 },
  });

  handleHierarchyChartNodeClick(event: AXHierarchyChartClickEvent): void {
    const node = event.item;
    console.log(
      `Custom template demo node clicked | Name: ${
        node.name || node.label
      } | ID: ${node.id}`
    );
  }
}
