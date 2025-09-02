import {
  AXContextMenuComponent,
  AXContextMenuOpeningEvent,
  AXMenuItem,
} from '@acorex/components/menu';
import {
  AXSchedulerAppointment,
  AXSchedulerAppointmentMouseEvent,
  AXSchedulerComponent,
} from '@acorex/components/scheduler';
import { Component, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  imports: [AXSchedulerComponent, AXContextMenuComponent],
  styles: `ax-scheduler{
    --ax-comp-scheduler-width:100%;
  }`,
})
export class ActionsComponent {
  contextMenu = viewChild<AXContextMenuComponent>('contextMenu');

  startingDate = signal(new Date());
  hasActions = signal(true);
  actionLog = signal<string[]>([]);

  contextMenuItems = signal([
    { id: 'edit', text: 'Edit Appointment', icon: 'edit' },
    { id: 'delete', text: 'Delete Appointment', icon: 'delete' },
    { id: 'duplicate', text: 'Duplicate Appointment', icon: 'copy' },
    { id: 'move', text: 'Move to Another Date', icon: 'move' },
  ]);

  appointmentsData = signal<AXSchedulerAppointment[]>([
    {
      id: '1',
      title: 'Product Demo',
      startDate: new Date(),
      endDate: new Date(Date.now() + 2 * 60 * 60 * 1000), // 2 hours from now
      description: 'Demo new product features',
    },
    {
      id: '2',
      title: 'Project Discussion',
      startDate: new Date(Date.now() + 24 * 60 * 60 * 1000), // Tomorrow
      endDate: new Date(Date.now() + 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000), // Tomorrow + 3 hours
      description: 'Discuss project requirements',
    },
    {
      id: '3',
      title: 'Team Retrospective',
      startDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000), // Day after tomorrow
      endDate: new Date(
        Date.now() + 2 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000
      ), // Day after tomorrow + 2 hours
      description: 'Sprint retrospective meeting',
    },
  ]);

  protected items: AXMenuItem[] = [
    { text: 'Edit', icon: 'fa-solid fa-pen' },
    { text: 'Delete', icon: 'fa-solid fa-trash', color: 'danger' },
  ];

  protected handleOpening(e: AXContextMenuOpeningEvent) {
    e.items.push(...this.items);
  }

  onActionClick(event: AXSchedulerAppointmentMouseEvent) {
    // Show the context menu at the click position
    this.contextMenu()?.showAt(
      { x: event.nativeEvent.clientX, y: event.nativeEvent.clientY },
      event.nativeEvent.target as HTMLElement
    );
  }

  onContextMenuItemClick(event: any) {
    const timestamp = new Date().toLocaleTimeString();
    this.actionLog.update((log) => [
      `[${timestamp}] ${event.item.text} clicked`,
      ...log.slice(0, 9),
    ]);

    console.log('Context menu item clicked:', event);
    // Handle different actions based on the clicked item
    switch (event.item.id) {
      case 'edit':
        console.log('Edit appointment');
        break;
      case 'delete':
        console.log('Delete appointment');
        break;
      case 'duplicate':
        console.log('Duplicate appointment');
        break;
      case 'move':
        console.log('Move appointment');
        break;
    }
  }

  clearLog() {
    this.actionLog.set([]);
  }
}
