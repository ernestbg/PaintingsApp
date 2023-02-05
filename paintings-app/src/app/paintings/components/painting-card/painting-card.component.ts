import { style } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { Painting } from '../../interfaces/painting.interface';

@Component({
  selector: 'app-painting-card',
  templateUrl: './painting-card.component.html',
  styles: [
    `     
      mat-card {
        margin-top: 20px;
      }
    `,
  ],
})
export class PaintingCardComponent {
  @Input() painting!: Painting;
}
