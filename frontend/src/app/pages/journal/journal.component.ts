import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CardModule} from "primeng/card";
import {PingService} from '@app/services/ping.service';

@Component({
    standalone: true,
    selector: 'app-dashboard',
    templateUrl: './journal.component.html',
    styleUrls: ['./journal.component.scss'],
    imports: [CommonModule, CardModule]
})
export class JournalComponent implements OnInit {
    backendMessage: string = 'Loading...';

    constructor(private pingService: PingService) {
    }

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
