import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {CardModule} from "primeng/card";
import { ButtonModule } from 'primeng/button';

@Component({
    standalone: true,
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    imports: [CommonModule, CardModule, ButtonModule]
})
export class DashboardComponent {
}
