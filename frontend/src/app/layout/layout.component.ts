import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, DOCUMENT, ViewportScroller} from '@angular/common';
import {NavigationEnd, Router, RouterModule} from '@angular/router';
import {MenuItem} from "primeng/api";
import {Avatar} from "primeng/avatar";
import {Menubar} from "primeng/menubar";
import {filter} from 'rxjs/operators';
import {PingService} from "@app/services/ping.service";
import {Tag} from "primeng/tag";

@Component({
    standalone: true,
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    imports: [CommonModule, RouterModule, Menubar, Avatar, Tag]
})
export class LayoutComponent implements OnInit {
    document = inject(DOCUMENT);
    darkTheme = true;
    statusMsg: string = 'HIBERNATING';
    statusImg: string = 'loading.gif';
    statusIcon: string = 'pi-spin pi-spinner-dotted';
    selectedItemLabel: string = 'Dashboard';
    allItems: (MenuItem & { show?: boolean })[] = [];
    items: MenuItem[] = [];

    constructor(private router: Router, private viewportScroller: ViewportScroller, private pingService: PingService) {
    }

    ngOnInit() {
        const storedTheme = localStorage.getItem('darkTheme');
        this.darkTheme = storedTheme === 'true';
        this.document.documentElement.classList.toggle('p-dark', this.darkTheme);

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
            this.viewportScroller.scrollToPosition([0, 0]);
        });

        this.pingService.ping().subscribe({
            next: (res) => {
                this.statusMsg = 'READY';
                this.statusImg = 'ready.gif';
                this.statusIcon = 'pi-check-circle';
            },
            error: (err) => {
                this.statusMsg = 'ERROR';
                this.statusImg = 'error.gif';
                this.statusIcon = 'pi-exclamation-circle';
                console.error(err);
            }
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

    toggleDarkMode(): void {
        this.darkTheme = !this.darkTheme;
        this.document.documentElement.classList.toggle('p-dark', this.darkTheme);
        localStorage.setItem('darkTheme', this.darkTheme.toString());
    }
}
