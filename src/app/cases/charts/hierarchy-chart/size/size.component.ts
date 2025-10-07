import { Component, signal } from '@angular/core';
import {
  AXHierarchyChartComponent,
  AXHierarchyChartClickEvent,
  AXHierarchyChartData,
  AXHierarchyChartOption,
} from '@acorex/charts/hierarchy-chart';

@Component({
  templateUrl: 'size.component.html',
  imports: [AXHierarchyChartComponent],
})
export class SizeComponent {
  hierarchyChartData = signal<AXHierarchyChartData>({
    id: 'company',
    name: 'Global Corp',
    subtitle: 'International Company',
    icon: 'fa-globe',
    tooltip: 'Global corporation with worldwide presence',
    color: '#2c3e50',
    isExpanded: true,
    children: [
      {
        id: 'americas',
        name: 'Americas',
        subtitle: 'North & South America',
        icon: 'fa-flag-usa',
        tooltip: 'Americas regional office',
        color: '#3498db',
        children: [
          {
            id: 'usa',
            name: 'USA',
            subtitle: 'United States',
            icon: 'fa-flag',
            tooltip: 'US operations',
            color: '#e74c3c',
          },
          {
            id: 'canada',
            name: 'Canada',
            subtitle: 'Canadian Operations',
            icon: 'fa-flag',
            tooltip: 'Canadian operations',
            color: '#f39c12',
          },
        ],
      },
      {
        id: 'europe',
        name: 'Europe',
        subtitle: 'European Operations',
        icon: 'fa-flag-europe',
        tooltip: 'European regional office',
        color: '#27ae60',
        children: [
          {
            id: 'uk',
            name: 'United Kingdom',
            subtitle: 'UK Operations',
            icon: 'fa-flag',
            tooltip: 'UK operations',
            color: '#9b59b6',
          },
          {
            id: 'germany',
            name: 'Germany',
            subtitle: 'German Operations',
            icon: 'fa-flag',
            tooltip: 'German operations',
            color: '#1abc9c',
          },
        ],
      },
      {
        id: 'asia',
        name: 'Asia Pacific',
        subtitle: 'APAC Region',
        icon: 'fa-flag-asia',
        tooltip: 'Asia Pacific regional office',
        color: '#e67e22',
        children: [
          {
            id: 'japan',
            name: 'Japan',
            subtitle: 'Japanese Operations',
            icon: 'fa-flag',
            tooltip: 'Japanese operations',
            color: '#34495e',
          },
          {
            id: 'singapore',
            name: 'Singapore',
            subtitle: 'Singapore Operations',
            icon: 'fa-flag',
            tooltip: 'Singapore operations',
            color: '#8e44ad',
          },
        ],
      },
    ],
  });

  // Demo: Small size chart
  smallChartOptions = signal<AXHierarchyChartOption>({
    direction: 'vertical',
    width: 500,
    height: 400,
    nodeWidth: 120,
    nodeHeight: 50,
    nodeStrokeWidth: 1.5,
    linkWidth: 1.5,
    linkStyle: 'straight',
    nodeSpacingX: 60,
    nodeSpacingY: 80,
    showTooltip: true,
    collapsible: true,
    expandAll: false,
    margin: { top: 30, right: 30, bottom: 30, left: 30 },
  });

  // Demo: Medium size chart
  mediumChartOptions = signal<AXHierarchyChartOption>({
    direction: 'vertical',
    width: 700,
    height: 600,
    nodeWidth: 160,
    nodeHeight: 65,
    nodeStrokeWidth: 2,
    linkWidth: 2,
    linkStyle: 'curved',
    nodeSpacingX: 80,
    nodeSpacingY: 100,
    showTooltip: true,
    collapsible: true,
    expandAll: false,
    margin: { top: 40, right: 40, bottom: 40, left: 40 },
  });

  // Demo: Large size chart
  largeChartOptions = signal<AXHierarchyChartOption>({
    direction: 'vertical',
    width: 1000,
    height: 800,
    nodeWidth: 200,
    nodeHeight: 80,
    nodeStrokeWidth: 2.5,
    linkWidth: 2.5,
    linkStyle: 'rounded',
    nodeSpacingX: 100,
    nodeSpacingY: 120,
    showTooltip: true,
    collapsible: true,
    expandAll: false,
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
  });

  handleHierarchyChartNodeClick(event: AXHierarchyChartClickEvent): void {
    const node = event.item;
    console.log(
      `Size demo node clicked | Name: ${node.name || node.label} | ID: ${
        node.id
      }`
    );
  }
}
