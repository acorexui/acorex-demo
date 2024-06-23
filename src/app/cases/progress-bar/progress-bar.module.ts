import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './progress-bar.routes';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ProgressBarModule {}
