import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './text-area.routes';

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TextAreaModule {}
