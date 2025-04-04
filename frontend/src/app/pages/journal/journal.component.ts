import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-journal',
  imports: [CommonModule],
  templateUrl: './journal.component.html',
  styleUrl: './journal.component.scss'
})
export class JournalComponent implements OnInit {
  entries = [
    { date: '2025-01-15', title: 'TODO Started GitHub Pages journey' },
    { date: '2025-03-08', title: 'TODO Learned BEM + SCSS styling' },
    { date: '2025-04-04', title: 'TODO Integrated PrimeNG with Angular 17' }
  ];

  constructor() {}

  ngOnInit(): void {}
}
