import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {DataView} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {FormsModule} from "@angular/forms";
import {InputGroup} from "primeng/inputgroup";
import {InputGroupAddon} from "primeng/inputgroupaddon";
import {InputText} from "primeng/inputtext";
import {NgForOf, NgIf} from "@angular/common";
import {Ripple} from "primeng/ripple";
import {Tag} from "primeng/tag";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss',
    standalone: true,
    imports: [Button, DataView, DropdownModule, FormsModule, InputGroup, InputGroupAddon, InputText, NgForOf, NgIf, Ripple, Tag]
})
export class CardsComponent implements OnInit {
    cards: any[] = [];
    layout: 'grid' | 'list' = 'grid';
    sortOptions: { label: string, value: string }[] = [
        {label: '📅', value: 'releaseDate'},
        {label: '🆎', value: 'name'}
    ];
    sortKey: string = 'releaseDate';
    sortOrder: number = -1;
    searchTerm: string = '';

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.url.subscribe(url => {
            const currentRoute = url[0].path;
            // TODO use route to get correct card list
            // if (currentRoute === 'ptcg-sets') {
            //     this.tcgdexService.fetchPtcgSets().subscribe(data => {
            //         this.sets = data;
            //         this.sortSets();
            //     });
            // } else if (currentRoute === 'tcgp-sets') {
            //     this.tcgdexService.fetchTcgpSets().subscribe(data => {
            //         this.sets = data;
            //         this.sortSets();
            //     });
            // }
        });
    }

    cardSortOrder(order: number) {
        this.sortOrder = order;
        this.sortCards();
    }

    sortCards() {
        this.cards.sort((a, b) => {
            let value1 = a[this.sortKey];
            let value2 = b[this.sortKey];
            if (this.sortKey === 'releaseDate') {
                value1 = new Date(value1).getTime();
                value2 = new Date(value2).getTime();
            }
            return (value1 < value2 ? -1 : (value1 > value2 ? 1 : 0)) * this.sortOrder;
        });
    }

    filteredCards() {
        return this.cards.filter(card => card.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    clearSearch() {
        this.searchTerm = '';
    }

    getLogoUrl(card: any): string {
        let logo = card.logo;
        let name = card.name;
        let url: string;
        if (logo) {
            url = logo + '.webp';
        } else if (name.toLowerCase().includes("black star promo")) {
            url = 'ptcg/blackstar.png';
        } else if (name.toLowerCase().includes("dragon majesty")) {
            url = 'ptcg/dragon-majesty.png';
        } else if (name.toLowerCase().includes("macdonald")) {
            url = 'ptcg/mcdonald.png';
        } else if (name.toLowerCase().includes("shining legends")) {
            url = 'ptcg/shining-legends.png';
        } else if (name.toLowerCase().includes("temporal forces")) {
            url = 'ptcg/temporal-forces.png';
        } else if (name.toLowerCase().includes("trainer kit")) {
            url = 'ptcg/trainer-kit.png';
        } else {
            url = 'ptcg/na.png';
        }
        return url;
    }

    getHighCardUrl(card: any): string {
        let logo = card.logo;
        let url = !logo ? 'na.png' : logo + '.high.webp';
        return url;
    }

    getLowCardUrl(card: any): string {
        let logo = card.logo;
        let url = !logo ? 'na.png' : logo + '.low.webp';
        return url;
    }
}
