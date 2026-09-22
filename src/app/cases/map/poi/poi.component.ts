import {
  AX_MAP_POI_PROVIDER,
  AXMapComponent,
  AXPoiMarker,
  AXPoiProvider,
  AXPoiProviderService,
} from '@acorex/components/map';
import { Component, Injectable, signal } from '@angular/core';

@Injectable()
class TehranPoiProvider implements AXPoiProvider {
  get key(): string {
    return 'tehran-landmarks';
  }

  provide(): Promise<AXPoiMarker[]> {
    return Promise.resolve([
      {
        latitude: 35.7448,
        longitude: 51.3753,
        title: 'Milad Tower',
        popup: 'Milad Tower — loaded from AX_MAP_POI_PROVIDER',
        minZoom: 10,
      },
    ]);
  }
}

@Component({
  selector: 'app-poi-demo',
  templateUrl: './poi.component.html',
  imports: [AXMapComponent],
  providers: [
    TehranPoiProvider,
    {
      provide: AX_MAP_POI_PROVIDER,
      useExisting: TehranPoiProvider,
      multi: true,
    },
    AXPoiProviderService,
  ],
})
export class PoiDemoComponent {
  pois = signal<AXPoiMarker[]>([
    {
      latitude: 35.6892,
      longitude: 51.389,
      popup: 'Restaurant - Great Food!',
      minZoom: 10,
    },
    {
      latitude: 35.6892 + 0.01,
      longitude: 51.389 + 0.01,
      popup: 'Gas Station - 24/7',
      minZoom: 12,
    },
    {
      latitude: 35.6892 - 0.01,
      longitude: 51.389 - 0.01,
      popup: 'Hospital - Emergency Services',
      minZoom: 8,
    },
  ]);

  latitude = signal(35.6892);
  longitude = signal(51.389);
  zoomLevel = signal(10);
  poiMinZoom = signal(8);

  onPoiAdded(poi: AXPoiMarker) {
    console.log('POI added:', poi);
  }

  onPoiChanged(pois: AXPoiMarker[]) {
    console.log('POIs changed:', pois);
  }

  onMapReady() {
    console.log('Map is ready for POIs');
  }
}
