import { Component, OnInit } from '@angular/core';
import { PingService } from '@app/services/ping.service';
import { environment } from '@env/environment';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  backendApiUrl: string = `${environment.apiUrl}/ping`;
  backendMessage: string = 'Loading...';

  constructor(private pingService: PingService) {}

  ngOnInit(): void {
    this.pingService.ping().subscribe({
      next: (res) => {
        this.backendMessage = res.message;
      },
      error: (err) => {
        this.backendMessage = 'Error contacting backend.';
        console.error(err);
      }
    });
  }
}
