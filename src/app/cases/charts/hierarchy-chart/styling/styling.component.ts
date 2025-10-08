import { Component, signal } from '@angular/core';
import {
  AXHierarchyChartComponent,
  AXHierarchyChartClickEvent,
  AXHierarchyChartData,
  AXHierarchyChartOption,
} from '@acorex/charts/hierarchy-chart';

@Component({
  templateUrl: 'styling.component.html',
  imports: [AXHierarchyChartComponent],
})
export class StylingComponent {
  hierarchyChartData = signal<AXHierarchyChartData>({
    id: 'company',
    name: 'TechCorp Inc.',
    subtitle: 'Technology Company',
    icon: 'fa-building',
    tooltip: 'Leading technology company',
    color: '#2c3e50',
    isExpanded: true,
    children: [
      {
        id: 'engineering',
        name: 'Engineering',
        subtitle: 'Development Team',
        icon: 'fa-code',
        tooltip: 'Software development and engineering',
        color: '#3498db',
        isExpanded: true,
        children: [
          {
            id: 'frontend',
            name: 'Frontend Team',
            subtitle: 'User Interface',
            icon: 'fa-paint-brush',
            tooltip: 'Frontend development team',
            color: '#e74c3c',
            children: [
              {
                id: 'react-team',
                name: 'React Team',
                subtitle: 'React Specialists',
                icon: 'fa-atom',
                tooltip: 'React.js development team',
                color: '#f39c12',
              },
              {
                id: 'angular-team',
                name: 'Angular Team',
                subtitle: 'Angular Specialists',
                icon: 'fa-angular',
                tooltip: 'Angular development team',
                color: '#9b59b6',
              },
            ],
          },
          {
            id: 'backend',
            name: 'Backend Team',
            subtitle: 'Server Development',
            icon: 'fa-server',
            tooltip: 'Backend development team',
            color: '#1abc9c',
            children: [
              {
                id: 'api-team',
                name: 'API Team',
                subtitle: 'REST & GraphQL',
                icon: 'fa-plug',
                tooltip: 'API development team',
                color: '#34495e',
              },
              {
                id: 'microservices',
                name: 'Microservices',
                subtitle: 'Service Architecture',
                icon: 'fa-cubes',
                tooltip: 'Microservices architecture team',
                color: '#e67e22',
              },
            ],
          },
        ],
      },
      {
        id: 'design',
        name: 'Design Team',
        subtitle: 'Creative Department',
        icon: 'fa-palette',
        tooltip: 'UI/UX design and creative services',
        color: '#27ae60',
        children: [
          {
            id: 'ui-designers',
            name: 'UI Designers',
            subtitle: 'User Interface Design',
            icon: 'fa-paint-brush',
            tooltip: 'User interface designers',
            color: '#8e44ad',
          },
          {
            id: 'ux-researchers',
            name: 'UX Researchers',
            subtitle: 'User Experience',
            icon: 'fa-search',
            tooltip: 'User experience researchers',
            color: '#16a085',
          },
        ],
      },
    ],
  });

  // Demo: Styling options with custom colors and dimensions
  hierarchyChartOptions = signal<AXHierarchyChartOption>({
    direction: 'vertical',
    width: 1000,
    height: 800,
    nodeWidth: 200,
    nodeHeight: 80,
    nodeStrokeWidth: 3,
    linkWidth: 3,
    linkStyle: 'rounded',
    nodeSpacingX: 120,
    nodeSpacingY: 160,
    showTooltip: true,
    collapsible: true,
    expandAll: false,
    margin: { top: 60, right: 60, bottom: 60, left: 60 },
  });

  handleHierarchyChartNodeClick(event: AXHierarchyChartClickEvent): void {
    const node = event.item;
    console.log(
      `Styling demo node clicked | Name: ${node.name || node.label} | ID: ${
        node.id
      }`
    );
  }
}
