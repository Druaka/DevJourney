import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-button-demo',
    standalone: true,
    template: `
    <div class="card flex justify-center">
      <p-button label="Check"></p-button>
    </div>
  `,
    imports: [ButtonModule]
})
export class ButtonDemoComponent {}
