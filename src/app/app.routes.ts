import { Route } from '@angular/router';
import { MasterLayoutComponent } from './shared/layout/master-layout/master-layout.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'action-sheet/list-item', pathMatch: 'full' },
  {
    path: 'action-sheet',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/action-sheet/action-sheet.routes').then((c) => c.routes),
  },
  {
    path: 'alert',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/alert/alert.routes').then((c) => c.routes),
  },
  {
    path: 'avatar',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/avatar/avatar.routes').then((c) => c.routes),
  },
  {
    path: 'badge',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/badge/badge.routes').then((c) => c.routes),
  },
  {
    path: 'bottom-navigation',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/bottom-navigation/bottom-navigation.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'breadcrumb',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/breadcrumb/breadcrumb.routes').then((c) => c.routes),
  },
  {
    path: 'button',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/button/button.routes').then((c) => c.routes),
  },
  {
    path: 'button-group',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/button-group/button-group.routes').then((c) => c.routes),
  },
  {
    path: 'calendar',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/calendar/calendar.routes').then((c) => c.routes),
  },
  {
    path: 'check-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/check-box/check-box.routes').then((c) => c.routes),
  },
  {
    path: 'chips',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/chips/chips.routes').then((c) => c.routes),
  },
  {
    path: 'circular-progress',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/circular-progress/circular-progress.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'collapse',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/collapse/collapse.routes').then((c) => c.routes),
  },
  {
    path: 'color-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/color-box/color-box.routes').then((c) => c.routes),
  },
  {
    path: 'color-palette',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/color-palette/color-palette.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'comment',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/comment/comment.routes').then((c) => c.routes),
  },
  {
    path: 'conversation',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/conversation/conversation.routes').then((c) => c.routes),
  },
  {
    path: 'data-pager',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/data-pager/data-pager.routes').then((c) => c.routes),
  },
  {
    path: 'data-table',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/data-table/data-table.routes').then((c) => c.routes),
  },
  {
    path: 'date-time-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/date-time-box/date-time-box.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'date-time-picker',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/date-time-picker/date-time-picker.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'dialog',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/dialog/dialog.routes').then((c) => c.routes),
  },
  {
    path: 'drawer',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/drawer/drawer.routes').then((c) => c.routes),
  },
  {
    path: 'dropdown-button',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/dropdown-button/dropdown-button.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'form',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/form/form.routes').then((c) => c.routes),
  },
  {
    path: 'image',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/image/image.routes').then((c) => c.routes),
  },
  {
    path: 'list',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/list/list.routes').then((c) => c.routes),
  },
  {
    path: 'loading',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/loading/loading.routes').then((c) => c.routes),
  },
  {
    path: 'loading-dialog',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/loading-dialog/loading-dialog.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'menu',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/menu/menu.routes').then((c) => c.routes),
  },
  {
    path: 'media-viewer',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/media-viewer/media-viewer.routes').then((c) => c.routes),
  },
  {
    path: 'nav',
    component: MasterLayoutComponent,
    loadChildren: () => import('./cases/nav/nav.routes').then((c) => c.routes),
  },
  {
    path: 'navbar',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/navbar/navbar.routes').then((c) => c.routes),
  },
  {
    path: 'notification',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/notification/notification.routes').then((c) => c.routes),
  },
  {
    path: 'number-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/number-box/number-box.routes').then((c) => c.routes),
  },
  {
    path: 'otp',
    component: MasterLayoutComponent,
    loadChildren: () => import('./cases/otp/otp.routes').then((c) => c.routes),
  },
  {
    path: 'paint',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/paint/paint.routes').then((c) => c.routes),
  },
  {
    path: 'password-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/password-box/password-box.routes').then((c) => c.routes),
  },
  {
    path: 'phone-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/phone-box/phone-box.routes').then((c) => c.routes),
  },
  {
    path: 'popover',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/popover/popover.routes').then((c) => c.routes),
  },
  {
    path: 'popup',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/popup/popup.routes').then((c) => c.routes),
  },
  {
    path: 'progress-bar',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/progress-bar/progress-bar.routes').then((c) => c.routes),
  },
  {
    path: 'qrcode',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/qrcode/qrcode.routes').then((c) => c.routes),
  },
  {
    path: 'result',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/result/result.routes').then((c) => c.routes),
  },
  {
    path: 'search-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/search-box/search-box.routes').then((c) => c.routes),
  },
  {
    path: 'select-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/select-box/select-box.routes').then((c) => c.routes),
  },
  {
    path: 'selection-list',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/selection-list/selection-list.routes').then(
        (c) => c.routes
      ),
  },
  {
    path: 'side-menu',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/side-menu/side-menu.routes').then((c) => c.routes),
  },
  {
    path: 'skeleton',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/skeleton/skeleton.routes').then((c) => c.routes),
  },
  {
    path: 'range-slider',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/range-slider/range-slider.routes').then((c) => c.routes),
  },
  {
    path: 'step-wizard',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/step-wizard/step-wizard.routes').then((c) => c.routes),
  },
  {
    path: 'switch',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/switch/switch.routes').then((c) => c.routes),
  },
  {
    path: 'tabs',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/tabs/tabs.routes').then((c) => c.routes),
  },
  {
    path: 'tag',
    component: MasterLayoutComponent,
    loadChildren: () => import('./cases/tag/tag.routes').then((c) => c.routes),
  },
  {
    path: 'text-area',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/text-area/text-area.routes').then((c) => c.routes),
  },
  {
    path: 'text-box',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/text-box/text-box.routes').then((c) => c.routes),
  },
  {
    path: 'toast',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/toast/toast.routes').then((c) => c.routes),
  },
  {
    path: 'tooltip',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/tooltip/tooltip.routes').then((c) => c.routes),
  },
  {
    path: 'uploader',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/uploader/uploader.routes').then((c) => c.routes),
  },
  {
    path: 'wysiwyg',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./cases/wysiwyg/wysiwyg.routes').then((c) => c.routes),
  },
  {
    path: '**',
    component: MasterLayoutComponent,
    loadChildren: () =>
      import('./shared/layout/not-found.component.html/not-found.routes').then(
        (c) => c.routes
      ),
  },
];
