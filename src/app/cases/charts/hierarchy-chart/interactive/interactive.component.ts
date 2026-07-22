import { Component, signal } from '@angular/core';
import {
  AXHierarchyChartComponent,
  AXHierarchyChartClickEvent,
  AXHierarchyChartData,
  AXHierarchyChartOption,
  AXHierarchyChartToggleEvent,
} from '@acorex/charts/hierarchy-chart';

@Component({
  templateUrl: 'interactive.component.html',
  imports: [AXHierarchyChartComponent],
})
export class InteractiveComponent {
  hierarchyChartData = signal<AXHierarchyChartData>({
    id: 'university',
    name: 'Tech University',
    subtitle: 'Educational Institution',
    icon: 'fa-university',
    tooltip: 'Leading technology university',
    color: '#2c3e50',
    isExpanded: true,
    children: [
      {
        id: 'cs-dept',
        name: 'Computer Science',
        subtitle: 'CS Department',
        icon: 'fa-laptop-code',
        tooltip: 'Computer Science Department',
        color: '#3498db',
        isExpanded: true,
        children: [
          {
            id: 'undergrad',
            name: 'Undergraduate',
            subtitle: 'Bachelor Programs',
            icon: 'fa-graduation-cap',
            tooltip: 'Undergraduate computer science programs',
            color: '#e74c3c',
            children: [
              {
                id: 'cs-bachelor',
                name: 'CS Bachelor',
                subtitle: 'Bachelor of Science',
                icon: 'fa-certificate',
                tooltip: 'Bachelor of Science in Computer Science',
                color: '#f39c12',
              },
              {
                id: 'se-bachelor',
                name: 'SE Bachelor',
                subtitle: 'Software Engineering',
                icon: 'fa-code',
                tooltip: 'Bachelor of Science in Software Engineering',
                color: '#9b59b6',
              },
            ],
          },
          {
            id: 'grad',
            name: 'Graduate',
            subtitle: 'Master & PhD',
            icon: 'fa-user-graduate',
            tooltip: 'Graduate programs',
            color: '#1abc9c',
            children: [
              {
                id: 'ms-cs',
                name: 'MS Computer Science',
                subtitle: 'Master Program',
                icon: 'fa-master',
                tooltip: 'Master of Science in Computer Science',
                color: '#34495e',
              },
              {
                id: 'phd-cs',
                name: 'PhD Computer Science',
                subtitle: 'Doctoral Program',
                icon: 'fa-phd',
                tooltip: 'Doctor of Philosophy in Computer Science',
                color: '#8e44ad',
              },
            ],
          },
        ],
      },
      {
        id: 'engineering',
        name: 'Engineering',
        subtitle: 'Engineering Department',
        icon: 'fa-cogs',
        tooltip: 'Engineering Department',
        color: '#27ae60',
        children: [
          {
            id: 'mechanical',
            name: 'Mechanical Engineering',
            subtitle: 'ME Department',
            icon: 'fa-tools',
            tooltip: 'Mechanical Engineering Department',
            color: '#16a085',
          },
          {
            id: 'electrical',
            name: 'Electrical Engineering',
            subtitle: 'EE Department',
            icon: 'fa-bolt',
            tooltip: 'Electrical Engineering Department',
            color: '#e67e22',
          },
        ],
      },
    ],
  });

  // Demo: Interactive features with click and toggle events
  hierarchyChartOptions = signal<AXHierarchyChartOption>({
    direction: 'vertical',
    width: 1000,
    height: 800,
    nodeWidth: 200,
    nodeHeight: 80,
    nodeStrokeWidth: 2,
    linkWidth: 2,
    linkStyle: 'step',
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
      `Interactive demo node clicked | Name: ${node.name || node.label} | ID: ${
        node.id
      }`
    );

    // Show alert for demonstration
    alert(
      `Clicked on: ${node.name || node.label}\nRole: ${node.subtitle}\nID: ${
        node.id
      }`
    );
  }

  handleHierarchyChartNodeToggle(event: AXHierarchyChartToggleEvent): void {
    const node = event.node;
    const expanded = event.expanded;
    console.log(
      `Interactive demo node toggled | Name: ${
        node.name || node.label
      } | Expanded: ${expanded}`
    );

    // Show toggle feedback
    const status = expanded ? 'expanded' : 'collapsed';
    console.log(`Node "${node.name || node.label}" has been ${status}`);
  }
}
