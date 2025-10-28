import { AXValueChangedEvent } from '@acorex/cdk/common';
import { AXAutocompleteComponent } from '@acorex/components/autocomplete';
import {
  AXDecoratorGenericComponent,
  AXDecoratorIconComponent,
} from '@acorex/components/decorators';
import { AXTagComponent } from '@acorex/components/tag';
import { AXTagBoxComponent } from '@acorex/components/tag-box';
import { NgClass } from '@angular/common';
import { Component, signal, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface TagItem {
  id: string;
  text: string;
  category: 'technology' | 'design' | 'business' | 'science';
  description: string;
  color: string;
}

@Component({
  templateUrl: 'custom-templates.component.html',
  styleUrl: 'custom-templates.component.css',
  imports: [
    NgClass,
    FormsModule,
    AXTagComponent,
    AXTagBoxComponent,
    AXAutocompleteComponent,
    AXDecoratorIconComponent,
    AXDecoratorGenericComponent,
  ],
})
export class CustomTemplatesComponent {
  tagBoxValue = signal<TagItem[]>([]);

  tagBoxComponent = viewChild<AXTagBoxComponent>('tagBox');

  data = signal<TagItem[]>([
    // Technology
    {
      id: 'react',
      text: 'React',
      category: 'technology',
      description: 'A JavaScript library for building user interfaces',
      color: 'primary',
    },
    {
      id: 'angular',
      text: 'Angular',
      category: 'technology',
      description:
        'A platform for building mobile and desktop web applications',
      color: 'primary',
    },
    {
      id: 'vue',
      text: 'Vue.js',
      category: 'technology',
      description: 'A progressive JavaScript framework',
      color: 'primary',
    },
    {
      id: 'typescript',
      text: 'TypeScript',
      category: 'technology',
      description: 'A typed superset of JavaScript',
      color: 'primary',
    },
    {
      id: 'nodejs',
      text: 'Node.js',
      category: 'technology',
      description: "A JavaScript runtime built on Chrome's V8 engine",
      color: 'primary',
    },

    // Design
    {
      id: 'figma',
      text: 'Figma',
      category: 'design',
      description: 'A collaborative interface design tool',
      color: 'success',
    },
    {
      id: 'sketch',
      text: 'Sketch',
      category: 'design',
      description: 'A digital design toolkit',
      color: 'success',
    },
    {
      id: 'adobe-xd',
      text: 'Adobe XD',
      category: 'design',
      description: 'A vector-based user experience design tool',
      color: 'success',
    },
    {
      id: 'invision',
      text: 'InVision',
      category: 'design',
      description: 'A digital product design platform',
      color: 'success',
    },
    {
      id: 'principle',
      text: 'Principle',
      category: 'design',
      description: 'A tool for creating interactive designs',
      color: 'success',
    },

    // Business
    {
      id: 'strategy',
      text: 'Strategy',
      category: 'business',
      description: 'A plan of action designed to achieve a major goal',
      color: 'warning',
    },
    {
      id: 'marketing',
      text: 'Marketing',
      category: 'business',
      description: 'The action of promoting and selling products',
      color: 'warning',
    },
    {
      id: 'finance',
      text: 'Finance',
      category: 'business',
      description: 'The management of money and investments',
      color: 'warning',
    },
    {
      id: 'operations',
      text: 'Operations',
      category: 'business',
      description: 'The day-to-day activities of a business',
      color: 'warning',
    },
    {
      id: 'hr',
      text: 'Human Resources',
      category: 'business',
      description: 'The department responsible for managing people',
      color: 'warning',
    },

    // Science
    {
      id: 'physics',
      text: 'Physics',
      category: 'science',
      description: 'The study of matter, energy, and their interactions',
      color: 'danger',
    },
    {
      id: 'chemistry',
      text: 'Chemistry',
      category: 'science',
      description: 'The study of matter and its properties',
      color: 'danger',
    },
    {
      id: 'biology',
      text: 'Biology',
      category: 'science',
      description: 'The study of living organisms',
      color: 'danger',
    },
    {
      id: 'mathematics',
      text: 'Mathematics',
      category: 'science',
      description: 'The study of numbers, structures, and patterns',
      color: 'danger',
    },
    {
      id: 'astronomy',
      text: 'Astronomy',
      category: 'science',
      description: 'The study of celestial objects and space',
      color: 'danger',
    },
  ]);

  handleValueChange(tags: AXValueChangedEvent<TagItem[]>) {
    console.log('Tag box value changed:', tags);
  }

  onTagClick(event: any) {
    console.log('Tag clicked:', event);
  }

  onTagDblClick(event: any) {
    console.log('Tag double-clicked:', event);
  }

  onTagContextMenu(event: any) {
    console.log('Tag right-clicked:', event);
  }

  getCategoryIcon(category: string): string {
    switch (category) {
      case 'technology':
        return 'fa-light fa-code';
      case 'design':
        return 'fa-light fa-palette';
      case 'business':
        return 'fa-light fa-briefcase';
      case 'science':
        return 'fa-light fa-flask';
      default:
        return 'fa-light fa-tag';
    }
  }

  getCategoryLabel(category: string): string {
    switch (category) {
      case 'technology':
        return 'Technology';
      case 'design':
        return 'Design';
      case 'business':
        return 'Business';
      case 'science':
        return 'Science';
      default:
        return 'Other';
    }
  }
}
