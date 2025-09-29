import { Component, signal } from '@angular/core';
import {
  AXHierarchyChartComponent,
  AXHierarchyChartClickEvent,
  AXHierarchyChartData,
  AXHierarchyChartOption,
} from '@acorex/charts/hierarchy-chart';

@Component({
  templateUrl: 'animation.component.html',
  imports: [AXHierarchyChartComponent],
})
export class AnimationComponent {
  hierarchyChartData = signal<AXHierarchyChartData>({
    id: 'startup',
    name: 'StartupFlow',
    subtitle: 'Innovation Hub',
    icon: 'fa-rocket',
    tooltip: 'Fast-growing startup company',
    color: '#e74c3c',
    isExpanded: true,
    children: [
      {
        id: 'product',
        name: 'Product Team',
        subtitle: 'Product Development',
        icon: 'fa-lightbulb',
        tooltip: 'Product strategy and development',
        color: '#3498db',
        isExpanded: true,
        children: [
          {
            id: 'product-managers',
            name: 'Product Managers',
            subtitle: 'Strategy & Planning',
            icon: 'fa-tasks',
            tooltip: 'Product management team',
            color: '#f39c12',
            children: [
              {
                id: 'senior-pm',
                name: 'Senior PM',
                subtitle: 'Senior Product Manager',
                icon: 'fa-user-tie',
                tooltip: 'Senior product management',
                color: '#9b59b6',
              },
              {
                id: 'junior-pm',
                name: 'Junior PM',
                subtitle: 'Product Manager',
                icon: 'fa-user',
                tooltip: 'Product management',
                color: '#1abc9c',
              },
            ],
          },
          {
            id: 'designers',
            name: 'Design Team',
            subtitle: 'UI/UX Design',
            icon: 'fa-palette',
            tooltip: 'Design and user experience',
            color: '#e67e22',
            children: [
              {
                id: 'ui-designer',
                name: 'UI Designer',
                subtitle: 'Interface Design',
                icon: 'fa-paint-brush',
                tooltip: 'User interface designer',
                color: '#34495e',
              },
              {
                id: 'ux-designer',
                name: 'UX Designer',
                subtitle: 'User Experience',
                icon: 'fa-heart',
                tooltip: 'User experience designer',
                color: '#8e44ad',
              },
            ],
          },
        ],
      },
      {
        id: 'engineering',
        name: 'Engineering',
        subtitle: 'Technical Team',
        icon: 'fa-code',
        tooltip: 'Engineering and development',
        color: '#27ae60',
        children: [
          {
            id: 'fullstack',
            name: 'Full Stack',
            subtitle: 'Full Stack Developers',
            icon: 'fa-laptop-code',
            tooltip: 'Full stack development team',
            color: '#16a085',
            children: [
              {
                id: 'senior-dev',
                name: 'Senior Developer',
                subtitle: 'Lead Developer',
                icon: 'fa-code',
                tooltip: 'Senior full stack developer',
                color: '#95a5a6',
              },
              {
                id: 'mid-dev',
                name: 'Mid Developer',
                subtitle: 'Developer',
                icon: 'fa-code',
                tooltip: 'Mid-level developer',
                color: '#7f8c8d',
              },
            ],
          },
        ],
      },
    ],
  });

  // Demo: Animation and smooth transitions
  hierarchyChartOptions = signal<AXHierarchyChartOption>({
    direction: 'vertical',
    width: 1000,
    height: 800,
    nodeWidth: 190,
    nodeHeight: 75,
    nodeStrokeWidth: 2,
    linkWidth: 2.5,
    linkStyle: 'curved',
    nodeSpacingX: 110,
    nodeSpacingY: 150,
    showTooltip: true,
    collapsible: true,
    expandAll: false,
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
  });

  handleHierarchyChartNodeClick(event: AXHierarchyChartClickEvent): void {
    const node = event.item;
    console.log(
      `Animation demo node clicked | Name: ${node.name || node.label} | ID: ${
        node.id
      }`
    );
  }
}
