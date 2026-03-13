import { Component, signal } from '@angular/core';
import { FlashCard } from './flash-card/flash-card';

@Component({
  selector: 'app-root',
  imports: [FlashCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front-end-app');
}
