import { AXValueChangedEvent } from '@acorex/cdk/common';
import { AXAutocompleteComponent } from '@acorex/components/autocomplete';
import { AXDecoratorGenericComponent } from '@acorex/components/decorators';
import { AXTagComponent } from '@acorex/components/tag';
import { AXTagBoxComponent } from '@acorex/components/tag-box';
import { Component, signal, TemplateRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Skill {
  id: string;
  text: string;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
}

@Component({
  templateUrl: 'header-footer-templates.component.html',
  imports: [
    FormsModule,
    AXTagBoxComponent,
    AXAutocompleteComponent,
    AXDecoratorGenericComponent,
    AXTagComponent,
  ],
})
export class HeaderFooterTemplatesComponent {
  tagBoxValue = signal<Skill[]>([]);

  listHeaderTemplate = viewChild<TemplateRef<unknown>>('listHeaderTemplate');
  listFooterTemplate = viewChild<TemplateRef<unknown>>('listFooterTemplate');

  data = signal<Skill[]>([
    {
      id: 'react',
      text: 'React',
      category: 'Frontend',
      level: 'advanced',
      description: 'A JavaScript library for building user interfaces',
    },
    {
      id: 'angular',
      text: 'Angular',
      category: 'Frontend',
      level: 'advanced',
      description:
        'A platform for building mobile and desktop web applications',
    },
    {
      id: 'vue',
      text: 'Vue.js',
      category: 'Frontend',
      level: 'intermediate',
      description: 'A progressive JavaScript framework',
    },
    {
      id: 'typescript',
      text: 'TypeScript',
      category: 'Language',
      level: 'advanced',
      description: 'A typed superset of JavaScript',
    },
    {
      id: 'nodejs',
      text: 'Node.js',
      category: 'Backend',
      level: 'intermediate',
      description: "A JavaScript runtime built on Chrome's V8 engine",
    },
    {
      id: 'python',
      text: 'Python',
      category: 'Language',
      level: 'advanced',
      description: 'A high-level programming language',
    },
    {
      id: 'java',
      text: 'Java',
      category: 'Language',
      level: 'intermediate',
      description: 'A class-based, object-oriented programming language',
    },
    {
      id: 'docker',
      text: 'Docker',
      category: 'DevOps',
      level: 'intermediate',
      description: 'A platform for containerization',
    },
    {
      id: 'kubernetes',
      text: 'Kubernetes',
      category: 'DevOps',
      level: 'beginner',
      description: 'An open-source container orchestration platform',
    },
    {
      id: 'aws',
      text: 'AWS',
      category: 'Cloud',
      level: 'intermediate',
      description: 'Amazon Web Services cloud platform',
    },
  ]);

  handleValueChange(tags: AXValueChangedEvent<string[]>) {
    console.log('Tag box value changed:', tags);
  }

  getLevelColor(level: string): string {
    switch (level) {
      case 'beginner':
        return 'success';
      case 'intermediate':
        return 'warning';
      case 'advanced':
        return 'danger';
      default:
        return 'muted';
    }
  }

  getLevelLabel(level: string): string {
    switch (level) {
      case 'beginner':
        return 'Beginner';
      case 'intermediate':
        return 'Intermediate';
      case 'advanced':
        return 'Advanced';
      default:
        return 'Unknown';
    }
  }

  getUniqueCategories(): string[] {
    const categories = new Set(this.data().map((item) => item.category));
    return Array.from(categories).sort();
  }
}
