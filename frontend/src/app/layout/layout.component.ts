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
    label: string = 'Dashboard';
    selectedItemLabel: string = this.label;
    items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {label: this.label, icon: 'pi pi-home', routerLink: '/dashboard'},
            {label: 'Journal', icon: 'pi pi-book', routerLink: '/journal'},
            {label: 'ptcg-sets', icon: 'pi pi-book', routerLink: '/ptcg-sets'},
            {label: 'tcgp-sets', icon: 'pi pi-book', routerLink: '/tcgp-sets'},
            {label: 'Cards', icon: 'pi pi-book', routerLink: '/cards'},
            // Add more menu items as needed
        ];
    }

    onItemSelect(item: MenuItem) {
        this.selectedItemLabel = item.label ?? this.label;
    }
}
