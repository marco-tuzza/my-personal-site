import { Component } from '@angular/core';
import { EffectsComponent } from './effects/effects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    EffectsComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title: string = 'my-personal-site';
}
