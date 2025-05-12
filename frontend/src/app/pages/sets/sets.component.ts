import {Component, OnInit} from '@angular/core';
import {PokemonService} from '@app/services/pokemontcg.service';
import {CommonModule} from "@angular/common";
import {Panel} from "primeng/panel";
import {DataViewModule} from 'primeng/dataview';
import {SelectButtonModule} from 'primeng/selectbutton';
import {FormsModule} from '@angular/forms';
import {DividerModule} from 'primeng/divider';
import {TagModule} from "primeng/tag";
import {DropdownModule} from 'primeng/dropdown';
import {RippleModule} from 'primeng/ripple';
import {Button} from "primeng/button";

@Component({
    selector: 'app-sets',
    templateUrl: './sets.component.html',
    styleUrls: ['./sets.component.scss'],
    standalone: true,
    imports: [CommonModule, Panel, DataViewModule, SelectButtonModule, FormsModule, DividerModule, TagModule, DropdownModule, RippleModule, Button]
})
export class SetsComponent implements OnInit {
    sets: any[] = [];
    layout: 'grid' | 'list' = 'grid';
    options: { label: string, value: 'grid' | 'list' }[] = [
        //{label: 'Grid', value: 'grid'},
        //{label: 'List', value: 'list'}
    ];
    sortOptions: { label: string, value: string }[] = [
        {label: 'Date', value: 'releaseDate'},
        {label: 'Name', value: 'name'}
    ];
    sortKey: string = 'releaseDate';
    sortOrder: number = -1;

    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit(): void {
        this.pokemonService.fetchSets().subscribe(data => {
            this.sets = data.data;
            this.sortSets();
        });
    }

    setSortOrder(order: number) {
        this.sortOrder = order;
        this.sortSets();
    }

    sortSets() {
        this.sets.sort((a, b) => {
            let value1 = a[this.sortKey];
            let value2 = b[this.sortKey];
            if (this.sortKey === 'releaseDate') {
                value1 = new Date(value1).getTime();
                value2 = new Date(value2).getTime();
            }
            return (value1 < value2 ? -1 : (value1 > value2 ? 1 : 0)) * this.sortOrder;
        });
    }

    setsData() {
        return this.sets;
    }
}
