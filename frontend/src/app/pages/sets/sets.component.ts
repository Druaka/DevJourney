import {Component, OnInit} from '@angular/core';
import {PokemonService} from '@app/services/pokemontcg.service';
import {CommonModule} from "@angular/common";
import {Panel} from "primeng/panel";
import {DataViewModule} from 'primeng/dataview';
import {SelectButtonModule} from 'primeng/selectbutton';
import {FormsModule} from '@angular/forms';
import {DividerModule} from 'primeng/divider';
import {TagModule} from "primeng/tag";

@Component({
    selector: 'app-sets',
    templateUrl: './sets.component.html',
    styleUrls: ['./sets.component.scss'],
    standalone: true,
    imports: [CommonModule, Panel, DataViewModule, SelectButtonModule, FormsModule, DividerModule, TagModule]
})
export class SetsComponent implements OnInit {
    sets: any[] = [];
    uniqueSeries: string[] = [];
    layout: 'grid' | 'list' = 'grid';
    options: { label: string, value: 'grid' | 'list' }[] = [
        {label: 'Grid', value: 'grid'},
        {label: 'List', value: 'list'}
    ];

    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit(): void {
        this.pokemonService.fetchSets().subscribe(data => {
            this.sets = data.data;
            this.sets.sort((a, b) => new Date(a.releaseDate).getTime() - new Date(b.releaseDate).getTime());
            this.uniqueSeries = [...new Set(this.sets.map(set => set.series))];
        });
    }

    setsData() {
        return this.sets;
    }
}
