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
    allItems: (MenuItem & { show?: boolean })[] = [];
    items: MenuItem[] = [];

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.allItems = [
            {label: 'Dashboard', icon: 'pi pi-home', routerLink: '/dashboard', show: true},
            {label: 'Journal', icon: 'pi pi-book', routerLink: '/journal', show: true},
            {label: 'PTCG Sets', icon: 'pi pi-book', routerLink: '/ptcg-sets', show: true},
            {label: 'TCGP Sets', icon: 'pi pi-book', routerLink: '/tcgp-sets', show: true},
            {label: 'Cards', icon: 'pi pi-id-card', routerLink: '/cards', show: false},
            // Add more menu items as needed
        ];

        this.items = this.allItems.filter(item => item.show);

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
        const currentItem = this.allItems.find(item => item.routerLink === currentRoute);
        this.selectedItemLabel = currentItem?.label ?? 'Dashboard';
    }
}
