import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-spanish',
  imports: [MatGridListModule,
            MatIcon],
  templateUrl: './spanish.component.html',
  styleUrl: './spanish.component.css'
})
export default class SpanishComponent {

}
