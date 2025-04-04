import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PingService } from '@app/services/ping.service';
import { environment } from '@env/environment';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
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
