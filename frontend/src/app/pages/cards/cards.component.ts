import {Component, OnInit} from '@angular/core';
import {PokemonService} from '@app/services/pokemontcg.service';
import {CommonModule} from "@angular/common";
import {Card} from "primeng/card";

@Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.scss'],
    standalone: true,
    imports: [CommonModule, Card]
})
export class CardsComponent implements OnInit {
    cards: any[] = [];

    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit(): void {
        this.pokemonService.fetchCards().subscribe(data => {
            this.cards = data.data;
        });
    }
}
