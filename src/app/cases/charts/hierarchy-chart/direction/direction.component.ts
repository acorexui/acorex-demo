import { Component, signal } from '@angular/core';
import {
  AXHierarchyChartComponent,
  AXHierarchyChartClickEvent,
  AXHierarchyChartData,
  AXHierarchyChartOption,
} from '@acorex/charts/hierarchy-chart';

@Component({
  templateUrl: 'direction.component.html',
  imports: [AXHierarchyChartComponent],
})
export class DirectionComponent {
  hierarchyChartData = signal<AXHierarchyChartData>({
    id: 'project',
    name: 'Software Project',
    subtitle: 'Development Project',
    icon: 'fa-project-diagram',
    tooltip: 'Main software development project',
    color: '#2c3e50',
    isExpanded: true,
    children: [
      {
        id: 'frontend',
        name: 'Frontend',
        subtitle: 'User Interface',
        icon: 'fa-paint-brush',
        tooltip: 'Frontend development team',
        color: '#3498db',
        isExpanded: true,
        children: [
          {
            id: 'react',
            name: 'React App',
            subtitle: 'React Application',
            icon: 'fa-atom',
            tooltip: 'React.js application',
            color: '#e74c3c',
            children: [
              {
                id: 'components',
                name: 'Components',
                subtitle: 'React Components',
                icon: 'fa-puzzle-piece',
                tooltip: 'Reusable React components',
                color: '#f39c12',
              },
              {
                id: 'hooks',
                name: 'Hooks',
                subtitle: 'Custom Hooks',
                icon: 'fa-link',
                tooltip: 'Custom React hooks',
                color: '#9b59b6',
              },
            ],
          },
          {
            id: 'angular',
            name: 'Angular App',
            subtitle: 'Angular Application',
            icon: 'fa-angular',
            tooltip: 'Angular application',
            color: '#1abc9c',
            children: [
              {
                id: 'services',
                name: 'Services',
                subtitle: 'Angular Services',
                icon: 'fa-cogs',
                tooltip: 'Angular services',
                color: '#34495e',
              },
              {
                id: 'directives',
                name: 'Directives',
                subtitle: 'Custom Directives',
                icon: 'fa-magic',
                tooltip: 'Custom Angular directives',
                color: '#8e44ad',
              },
            ],
          },
        ],
      },
      {
        id: 'backend',
        name: 'Backend',
        subtitle: 'Server Side',
        icon: 'fa-server',
        tooltip: 'Backend development',
        color: '#27ae60',
        children: [
          {
            id: 'api',
            name: 'REST API',
            subtitle: 'RESTful Services',
            icon: 'fa-plug',
            tooltip: 'REST API endpoints',
            color: '#16a085',
          },
          {
            id: 'database',
            name: 'Database',
            subtitle: 'Data Layer',
            icon: 'fa-database',
            tooltip: 'Database layer',
            color: '#e67e22',
          },
        ],
      },
    ],
  });

  // Demo: Vertical direction (default)
  verticalOptions = signal<AXHierarchyChartOption>({
    direction: 'vertical',
    width: 1000,
    height: 800,
    nodeWidth: 180,
    nodeHeight: 70,
    nodeStrokeWidth: 2,
    linkWidth: 2,
    linkStyle: 'curved',
    nodeSpacingX: 100,
    nodeSpacingY: 120,
    showTooltip: true,
    collapsible: true,
    expandAll: false,
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
  });

  // Demo: Horizontal direction
  horizontalOptions = signal<AXHierarchyChartOption>({
    direction: 'horizontal',
    width: 1000,
    height: 600,
    nodeWidth: 180,
    nodeHeight: 70,
    nodeStrokeWidth: 2,
    linkWidth: 2,
    linkStyle: 'curved',
    nodeSpacingX: 120,
    nodeSpacingY: 100,
    showTooltip: true,
    collapsible: true,
    expandAll: false,
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
  });

  handleHierarchyChartNodeClick(event: AXHierarchyChartClickEvent): void {
    const node = event.item;
    console.log(
      `Direction demo node clicked | Name: ${node.name || node.label} | ID: ${
        node.id
      }`
    );
  }
}
