import { AXDialogModule } from '@acorex/components/dialog';
import { Component, signal, viewChild } from '@angular/core';
import { AXDecoratorModule } from '@acorex/components/decorators';
import {
  AXFlowChartComponent,
  AXFlowChartEdges,
  AXFlowChartModule,
  AXFlowChartNodes,
  AXLineClickEvent,
  AXNodeClickEvent,
} from '@acorex/components/flow-chart';
import { AXButtonModule } from '@acorex/components/button';

@Component({
  templateUrl: 'usage.component.html',
  imports: [
    AXButtonModule,
    AXDialogModule,
    AXDecoratorModule,
    AXFlowChartModule,
  ],
})
export class UsageComponent {
  protected flowChartRef = viewChild<AXFlowChartComponent>('ref');

  protected flowDataNode = signal([
    { id: '100', type: 'rectangle', label: 'Start', x: 100, y: 100 },
    { id: '200', type: 'rectangle', label: 'Condition', x: 300, y: 100 },
    { id: '300', type: 'diamond', label: 'Action', x: 500, y: 100 },
    { id: '400', type: 'circle', label: 'End', x: 700, y: 100 },
  ]);

  protected flowDataEdge = signal<AXFlowChartEdges[]>([
    {
      id: 'edge-0.15326669889877675',
      source: {
        id: '100',
        anchor: 'right',
      },
      target: {
        id: '200',
        anchor: 'left',
      },
    },
  ]);

  protected onLineClick(event: AXLineClickEvent) {
    console.log(event);
  }

  protected onLineDbClick(event: AXLineClickEvent) {
    this.flowChartRef()!.removeEdge(event.target);
  }

  protected onNodeClick(event: AXNodeClickEvent) {
    console.log(event.target, event.event);
  }

  protected onNodeDbClick(event: AXNodeClickEvent) {
    const nodeId = (event.target as HTMLElement).dataset['id'];
    this.flowChartRef()!.removeNode(nodeId as string);
  }

  protected onEdgeUpdate(newEdge: AXFlowChartEdges) {
    this.flowDataEdge.update((edges) => [...edges, newEdge]);
  }

  protected onNodeUpdate(newNode: AXFlowChartNodes) {
    this.flowDataNode.update((nodes) => [...nodes, newNode]);
  }
}
