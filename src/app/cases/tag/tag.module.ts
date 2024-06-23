import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './tag.routes';

@NgModule({
    imports: [NgModule, CommonModule, RouterModule.forChild(routes)],
})
export class TagModule {}
