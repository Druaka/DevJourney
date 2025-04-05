import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CardModule} from "primeng/card";

@Component({
    standalone: true,
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [CommonModule, CardModule]
})
export class DashboardComponent {
}
