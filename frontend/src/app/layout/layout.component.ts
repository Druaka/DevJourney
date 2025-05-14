import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterModule} from '@angular/router';
import {CommonModule} from "@angular/common";
import {MenuItem} from "primeng/api";
import {Avatar} from "primeng/avatar";
import {Menubar} from "primeng/menubar";
import {filter} from 'rxjs/operators';

@Component({
    standalone: true,
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    imports: [CommonModule, RouterModule, Avatar, Menubar]
})
export class LayoutComponent implements OnInit {
    selectedItemLabel: string = 'Dashboard';
    items: MenuItem[] = [];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.items = [
            {label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard'},
            {label: 'Journal', icon: 'pi pi-book', routerLink: '/journal'},
            {label: 'ptcg-sets', icon: 'pi pi-book', routerLink: '/ptcg-sets'},
            {label: 'tcgp-sets', icon: 'pi pi-book', routerLink: '/tcgp-sets'},
            {label: 'Cards', icon: 'pi pi-book', routerLink: '/cards'},
            // Add more menu items as needed
        ];

        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(() => {
            this.updateSelectedItemLabel();
        });
    }

    onItemSelect(item: MenuItem) {
        this.selectedItemLabel = item.label ?? 'Dashboard';
    }

    updateSelectedItemLabel() {
        const currentRoute = this.router.url;
        const currentItem = this.items.find(item => item.routerLink === currentRoute);
        this.selectedItemLabel = currentItem?.label ?? 'Dashboard';
    }
}
