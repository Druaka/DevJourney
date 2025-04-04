import { Component, OnInit } from '@angular/core';
import { PingService } from '@app/services/ping.service';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
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
