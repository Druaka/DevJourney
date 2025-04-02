import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DevJourney';
  currentYear: number = new Date().getFullYear();
}
