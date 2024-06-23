import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.scss'],
  standalone: true,
  imports: [RouterOutlet],
})
export class MasterLayoutComponent {
  year = signal(new Date().getFullYear());
}
