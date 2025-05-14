import {Component, OnInit} from '@angular/core';
import {TcgdexService} from '@app/services/tcgdex.service';
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

    constructor(private tcgdexService: TcgdexService) {
    }

    ngOnInit(): void {
        this.tcgdexService.fetchCards().subscribe(data => {
            this.cards = data.data;
        });
    }
}
