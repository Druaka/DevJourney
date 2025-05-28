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
import {ActivatedRoute, Router} from "@angular/router";
import {TcgdexService} from "@app/services/tcgdex.service";

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrl: './cards.component.scss',
    standalone: true,
    imports: [Button, DataView, DropdownModule, FormsModule, InputGroup, InputGroupAddon, InputText, NgForOf, NgIf, Ripple]
})
export class CardsComponent implements OnInit {
    cards: any[] = [];
    layout: 'grid' | 'list' = 'grid';
    sortOptions: { label: string, value: string }[] = [
        {label: '🔢', value: 'localId'},
        {label: '🆎', value: 'name'}
    ];
    sortKey: string = 'localId';
    sortOrder: number = 1;
    searchTerm: string = '';

    constructor(private tcgdexService: TcgdexService, private route: ActivatedRoute, private router: Router) {
    }

    ngOnInit(): void {
        this.cards = this.tcgdexService.getCards();
        if (!this.cards || this.cards.length === 0) {
            this.router.navigate(['/']);
            return;
        }
        this.sortCards();
    }

    cardSortOrder(order: number) {
        this.sortOrder = order;
        this.sortCards();
    }

    sortCards() {
        this.cards.sort((a, b) => {
            let value1 = a[this.sortKey];
            let value2 = b[this.sortKey];
            return (value1 < value2 ? -1 : (value1 > value2 ? 1 : 0)) * this.sortOrder;
        });
    }

    filteredCards() {
        return this.cards.filter(card => card.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }

    clearSearch() {
        this.searchTerm = '';
    }

    getHighCardUrl(card: any): string {
        let image = card.image;
        let url = !image ? 'na.png' : image + '/high.webp';
        return url;
    }
}
