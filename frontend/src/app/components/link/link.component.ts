import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-link',
    templateUrl: './link.component.html',
    styleUrls: ['./link.component.scss']
})
export class LinkComponent {
    @Input() url: string = '';
    @Input() hexColor: string = '#f97316'; // default: Tailwind orange-500

    get style(): string {
        return `text-decoration-line: underline; text-decoration-color: ${this.hexColor};`;
    }
}
