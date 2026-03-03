import { Component, signal } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HoliComponent } from './holi-component/holi-component';

@Component({
  selector: 'app-root',
  imports: [HoliComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Dhananjay');
}
