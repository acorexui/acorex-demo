import { CommonModule } from '@angular/common';
import { Component, computed, inject, OnDestroy, signal } from '@angular/core';
import {
  AXPlatform,
  AXPlatformEvent,
  AXScreenSizes,
  AXThemeMode,
} from '@acorex/core/platform';
import { AXButtonComponent } from '@acorex/components/button';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  standalone: true,
  imports: [CommonModule, AXButtonComponent, AXDecoratorGenericComponent],
})
export class UsageComponent implements OnDestroy {
  private platform = inject(AXPlatform);
  private resizeSubscription?: Subscription;

  // Platform detection signals
  platformInfo = signal<Record<string, boolean | string>>({});
  screenSize = signal<AXScreenSizes>('5XL');
  themeMode = signal<AXThemeMode>('system');
  isDarkMode = signal<boolean>(false);
  isRtl = signal<boolean>(false);
  isLandscape = signal<boolean>(true);

  // Window size tracking
  windowSize = signal({ width: 0, height: 0 });

  // Resize event log
  resizeLog = signal<
    Array<{
      timestamp: string;
      width: number;
      height: number;
      screenSize: AXScreenSizes;
    }>
  >([]);

  // Computed properties
  orientation = computed(() => (this.isLandscape() ? 'Landscape' : 'Portrait'));
  themeDisplay = computed(() => {
    const mode = this.themeMode();
    if (mode === 'system') {
      return `System (${this.isDarkMode() ? 'Dark' : 'Light'})`;
    }
    return mode.charAt(0).toUpperCase() + mode.slice(1);
  });

  constructor() {
    // Initialize platform information
    this.detectPlatformInfo();
    this.updateScreenInfo();

    // Subscribe to resize events
    this.resizeSubscription = this.platform.resize.subscribe(
      (event: AXPlatformEvent) => {
        this.updateScreenInfo();
        const timestamp = new Date().toLocaleTimeString();
        this.resizeLog.update((logs) => [
          {
            timestamp,
            width: this.windowSize().width,
            height: this.windowSize().height,
            screenSize: this.screenSize(),
          },
          ...logs.slice(0, 9), // Keep last 10 entries
        ]);
      }
    );

    // Subscribe to theme mode changes
    this.platform.themeMode$.subscribe((mode) => {
      this.themeMode.set(mode);
      this.isDarkMode.set(this.platform.isDark());
    });

    // Detect initial theme
    this.themeMode.set(this.platform.themeMode());
    this.isDarkMode.set(this.platform.isDark());
    this.screenSize.set(this.platform.screenSize);
  }

  ngOnDestroy(): void {
    this.resizeSubscription?.unsubscribe();
  }

  private detectPlatformInfo() {
    const info: Record<string, boolean | string> = {};

    // Browser detection
    info['Chrome'] = this.platform.is('Chrome');
    info['Firefox'] = this.platform.is('Firefox');
    info['Safari'] = this.platform.is('Safari');
    info['Edge'] = this.platform.is('Edge');
    info['Opera'] = this.platform.is('Opera');

    // Platform detection
    info['Desktop'] = this.platform.is('Desktop');
    info['Mobile'] = this.platform.is('Mobile');
    info['Android'] = this.platform.is('Android');
    info['iOS'] = this.platform.is('iOS');

    // Technology detection
    info['PWA'] = this.platform.is('PWA');
    info['Electron'] = this.platform.is('Electron');
    info['Hybrid'] = this.platform.is('Hybrid');

    this.platformInfo.set(info);
  }

  private updateScreenInfo() {
    if (typeof window !== 'undefined') {
      this.windowSize.set({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      this.screenSize.set(this.platform.screenSize);
      this.isLandscape.set(this.platform.isLandscape());
      this.isRtl.set(this.platform.isRtl());
    }
  }

  // Theme mode switching methods
  switchToLightMode() {
    this.platform.switchLightMode();
  }

  switchToDarkMode() {
    this.platform.switchDarkMode();
  }

  switchToSystemMode() {
    this.platform.switchSystemMode();
  }

  setThemeMode(mode: AXThemeMode) {
    this.platform.setThemeMode(mode);
  }

  // Utility methods
  clearResizeLog() {
    this.resizeLog.set([]);
  }

  refreshPlatformInfo() {
    this.detectPlatformInfo();
    this.updateScreenInfo();
  }
}
