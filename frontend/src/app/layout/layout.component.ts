import {Component} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MenuItem} from "primeng/api";
import {Avatar} from "primeng/avatar";
import {Menubar} from "primeng/menubar";

@Component({
    standalone: true,
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    imports: [CommonModule, RouterModule, Avatar, Menubar]
})
export class LayoutComponent {
    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard'},
            {label: 'Journal', icon: 'pi pi-book', routerLink: '/journal'},
            {label: 'Sets', icon: 'pi pi-book', routerLink: '/sets'},
            {label: 'Cards', icon: 'pi pi-book', routerLink: '/cards'},
            // Add more menu items as needed
        ];
    }
}
