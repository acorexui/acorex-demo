import { Component, ElementRef, ViewChild, inject } from '@angular/core';

import { AXButtonModule } from '@acorex/components/button';

import { AXLoadingModule, AXLoadingService } from '@acorex/components/loading';

@Component({
    standalone: true,
    templateUrl: 'region.component.html',
    imports: [AXLoadingModule, AXButtonModule],
})
export class RegionComponent {
    protected _options = {
        timeOut: 2000,
        region: 'container',
    };

    @ViewChild('demo1')
    demo1!: ElementRef<HTMLDivElement>;

    protected _isLoading = false;

    private _loadingService = inject(AXLoadingService);

    @ViewChild('container')
    container!: ElementRef<HTMLDivElement>;

    buttonLoading = false;

    onScreenRegionClick() {
        const loadingRef = this._loadingService.show();
        setTimeout(() => {
            this._loadingService.hide(loadingRef);
        }, this._options.timeOut);
    }

    onContainerRegionClick() {
        const loadingRef = this._loadingService.show({
            location: this.container.nativeElement,
        });
        setTimeout(() => {
            this._loadingService.hide(loadingRef);
        }, this._options.timeOut);
    }

    onButtonRegionClick() {
        this.buttonLoading = true;
        setTimeout(() => {
            this.buttonLoading = false;
        }, 5000);
    }
}
