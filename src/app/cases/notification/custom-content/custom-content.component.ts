import { AXButtonComponent } from '@acorex/components/button';
import {
  AXNotificationContentType,
  AXNotificationModule,
  AXNotificationService,
} from '@acorex/components/notification';
import { Component, inject } from '@angular/core';

@Component({
  templateUrl: './custom-content.component.html',
  imports: [AXButtonComponent, AXNotificationModule],
})
export class CustomContentComponent {
  private notificationService = inject(AXNotificationService);

  showTemplateNotification() {
    this.notificationService.show({
      title: 'Custom Template',
      content: this.getCustomTemplate(),
      color: 'primary',
      location: 'top-center',
      closeButton: true,
    });
  }

  showComponentNotification() {
    this.notificationService.show({
      title: 'Custom Component',
      content: this.getCustomComponent(),
      color: 'success',
      location: 'bottom-center',
      closeButton: true,
    });
  }

  showRichContentNotification() {
    this.notificationService.show({
      title: 'Rich Content',
      content: `
        <div style="padding: 8px;">
          <h4 style="margin: 0 0 8px 0; color: #333;">Important Information</h4>
          <p style="margin: 0 0 8px 0; line-height: 1.4;">
            This notification contains <strong>rich HTML content</strong> with formatting.
          </p>
          <ul style="margin: 0; padding-left: 16px;">
            <li>Custom styling</li>
            <li>Multiple elements</li>
            <li>Interactive content</li>
          </ul>
        </div>
      `,
      color: 'warning',
      location: 'top-end',
      closeButton: true,
    });
  }

  private getCustomTemplate(): AXNotificationContentType {
    return `
      <div style="display: flex; align-items: center; gap: 12px; padding: 8px;">
        <div style="width: 40px; height: 40px; background: linear-gradient(45deg, #667eea, #764ba2); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold;">
          🎨
        </div>
        <div>
          <div style="font-weight: 600; margin-bottom: 4px;">Custom Template</div>
          <div style="font-size: 0.875rem; color: #666;">This is a custom template with styling</div>
        </div>
      </div>
    `;
  }

  private getCustomComponent(): AXNotificationContentType {
    return CustomNotificationContentComponent;
  }
}

@Component({
  template: `
    <div
      style="padding: 12px; background: #f8f9fa; border-radius: 6px; border-left: 4px solid #28a745;"
    >
      <div
        style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;"
      >
        <span style="font-size: 1.2em;">✅</span>
        <span style="font-weight: 600; color: #28a745;">Component Content</span>
      </div>
      <p style="margin: 0; font-size: 0.875rem; color: #495057;">
        This content is rendered from a separate Angular component with full
        functionality.
      </p>
      <div style="margin-top: 8px;">
        <button
          style="background: #28a745; color: white; border: none; padding: 4px 8px; border-radius: 4px; font-size: 0.75rem; cursor: pointer;"
          (click)="handleClick()"
        >
          Click me!
        </button>
      </div>
    </div>
  `,
  standalone: true,
})
class CustomNotificationContentComponent {
  handleClick() {
    alert('Button clicked from notification component!');
  }
}
